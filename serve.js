const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const dailyLimit = 5;
const dataDir = path.join(root, "data");
const dbPath = path.join(dataDir, "gurugen-db.json");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml"
};

function loadEnvFile() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

function defaultDb() {
  return {
    users: [],
    usage: {},
    history: {},
    notices: [],
    tokenState: { limit: 100000, used: 0 }
  };
}

function readDb() {
  try {
    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(dbPath, JSON.stringify(defaultDb(), null, 2));
    }
    return { ...defaultDb(), ...JSON.parse(fs.readFileSync(dbPath, "utf8")) };
  } catch {
    return defaultDb();
  }
}

function writeDb(db) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

function normalizeAccessCode(value) {
  const text = String(value || "").trim().toUpperCase();
  const match = text.match(/GGAI-[A-Z0-9]+/);
  return match ? match[0] : text.replace(/\s+/g, "");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function generateAccessCode(users) {
  let code = "";
  do {
    code = `GGAI-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  } while (users.some((user) => normalizeAccessCode(user.code) === code));
  return code;
}

function findUser(db, code) {
  const normalized = normalizeAccessCode(code);
  return db.users.find((user) => normalizeAccessCode(user.code) === normalized);
}

function publicState(db) {
  return {
    dailyLimit,
    tokenState: db.tokenState
  };
}

function adminState(db) {
  return {
    users: db.users,
    usage: db.usage,
    notices: db.notices.slice(0, 20),
    tokenState: db.tokenState,
    dailyLimit
  };
}

function userState(db, code) {
  const normalized = normalizeAccessCode(code);
  return {
    usage: { [normalized]: currentUsage(db, normalized) },
    dailyLimit
  };
}

function requireAdmin(request, response) {
  const pin = request.headers["x-admin-pin"];
  const expected = process.env.ADMIN_PIN || "ADMIN-2026";
  if (pin !== expected) {
    sendJson(response, 403, { error: "Akses admin ditolak. PIN admin tidak valid." });
    return false;
  }
  return true;
}

function currentUsage(db, code) {
  const key = normalizeAccessCode(code);
  const usage = db.usage[key] || { date: todayKey(), count: 0 };
  if (usage.date !== todayKey()) return { date: todayKey(), count: 0 };
  return usage;
}

function recordGenerate(db, user, data, html, source, tokens) {
  const code = normalizeAccessCode(user.code);
  const usage = currentUsage(db, code);
  usage.count += 1;
  usage.date = todayKey();
  db.usage[code] = usage;

  db.tokenState.used = Number(db.tokenState.used || 0) + Number(tokens || 0);

  const docKey = Object.keys({
    LKPD: true,
    "Modul Ajar": true,
    ATP: true,
    Prota: true,
    Promes: true,
    KKTP: true,
    "Kisi-kisi Soal": true
  }).find((key) => String(data.docType || "").includes(key)) || "LKPD";

  const titleMap = {
    LKPD: "LEMBAR KERJA PESERTA DIDIK (LKPD)",
    "Modul Ajar": "MODUL AJAR",
    ATP: "ALUR TUJUAN PEMBELAJARAN",
    Prota: "PROGRAM TAHUNAN",
    Promes: "PROGRAM SEMESTER",
    KKTP: "KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN",
    "Kisi-kisi Soal": "KISI-KISI SOAL"
  };

  const historyItem = {
    id: Date.now(),
    title: `${titleMap[docKey]} - ${data.subject || ""}`,
    subtitle: `${data.className || ""} | ${data.topic || ""}`,
    createdAt: new Date().toISOString(),
    source,
    html
  };
  db.history[code] = [historyItem, ...(db.history[code] || [])].slice(0, 8);
  db.notices = [{
    id: Date.now(),
    createdAt: new Date().toISOString(),
    teacher: user.teacher,
    code,
    docType: docKey,
    source,
    tokens
  }, ...db.notices].slice(0, 50);

  return { usage, historyItem };
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function buildPrompt(data) {
  const payload = {
    jenis_dokumen: data.docType,
    identitas: {
      sekolah: data.school,
      guru: data.teacher,
      jenjang: data.level,
      kelas: data.className,
      semester: data.semester,
      tahun_pelajaran: data.year,
      kurikulum: data.curriculum,
      mata_pelajaran: data.subject,
      alokasi_waktu: data.duration
    },
    materi: {
      materi_utama: data.topic,
      submateri: data.subtopic
    },
    rancangan: {
      tujuan_pembelajaran: data.learningObjectives,
      aktivitas_pembelajaran: data.activities,
      soal_latihan: {
        jumlah_soal: data.questionCount,
        jenis_soal: data.questionType
      },
      model_pembelajaran: data.learningModel,
      asesmen: data.assessment,
      gaya_bahasa: data.tone,
      panjang_hasil: data.length,
      instruksi_tambahan: data.extraInstruction
    }
  };

  return `
Anda adalah AI penyusun administrasi pembelajaran untuk guru Indonesia.

TUGAS UTAMA:
Buat DOKUMEN FINAL siap pakai berdasarkan data pengguna di bawah ini. Data dari step identitas, detail kompetensi, dan instruksi generate adalah BAHAN PROMPT yang harus Anda olah menjadi isi dokumen, bukan sekadar diringkas atau disalin ulang.

ATURAN PENTING:
1. Jangan hanya membuat "Ringkasan Draft", "Data yang Akan Digenerate", atau kompilasi field input.
2. Gunakan data sebagai konteks untuk menyusun dokumen pembelajaran lengkap, operasional, dan siap dicetak.
3. Wajib ada isi pedagogis yang dikembangkan: tujuan, langkah kegiatan, materi/aktivitas, asesmen/rubrik, refleksi/tindak lanjut sesuai jenis dokumen.
4. Sesuaikan struktur dengan jenis dokumen:
   - LKPD: identitas, tujuan, petunjuk, aktivitas peserta didik, lembar kerja/tugas, refleksi, rubrik.
   - Modul Ajar: informasi umum, kompetensi awal, tujuan, pemahaman bermakna, pertanyaan pemantik, langkah pembelajaran, asesmen, pengayaan/remedial.
   - ATP: capaian/tujuan, alur tujuan, urutan materi, estimasi waktu, asesmen.
   - Prota/Promes: tabel program waktu, materi, tujuan, kegiatan, asesmen.
   - KKTP: tujuan, indikator/kriteria, interval/level ketercapaian, tindak lanjut.
   - Kisi-kisi Soal: tujuan penilaian, indikator soal, bentuk soal, level kognitif, skor, pedoman penskoran.
5. Jika jumlah soal latihan lebih dari 0, buat bagian "Soal Latihan" sebanyak jumlah tersebut dan sesuai jenis soal yang dipilih: uraian, isian singkat, pilihan ganda, tabel, studi kasus, atau campuran.
6. Untuk pilihan ganda, sertakan opsi A-D dan kunci jawaban di bagian akhir dokumen.
7. Untuk studi kasus, buat kasus kontekstual sesuai materi dan pertanyaan turunannya.
8. Pakai bahasa Indonesia formal, jelas, dan praktis untuk guru.
9. Jangan menyebut bahwa dokumen dibuat dari prompt.
10. Jangan membuat markdown.
11. Kembalikan hanya fragmen HTML aman untuk dimasukkan ke <article>. Gunakan tag h1, h2, section, h3, h4, p, ol, ul, li, dl, dt, dd, table, thead, tbody, tr, th, td. Jangan gunakan script, style, iframe, atau atribut event.

DATA PENGGUNA:
${JSON.stringify(payload, null, 2)}
  `.trim();
}

async function handleGenerate(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 501, { error: "OPENAI_API_KEY belum diatur. Generator lokal akan digunakan." });
    return;
  }

  try {
    const payload = await readJson(request);
    const data = payload.form || payload;
    const db = readDb();
    const user = findUser(db, payload.session?.accessCode || payload.accessCode);
    if (!user) {
      sendJson(response, 401, { error: "Login tidak valid. Silakan masuk ulang memakai kode dari admin." });
      return;
    }

    const usage = currentUsage(db, user.code);
    if (usage.count >= dailyLimit) {
      sendJson(response, 429, { error: "Batas generate 5 dokumen per hari sudah tercapai." });
      return;
    }

    const apiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1",
        instructions: "Anda adalah asisten ahli kurikulum dan perangkat ajar untuk guru Indonesia. Selalu hasilkan dokumen final yang kaya isi, bukan ringkasan input.",
        input: buildPrompt(data),
        max_output_tokens: 4500
      })
    });

    const result = await apiResponse.json();
    if (!apiResponse.ok) {
      sendJson(response, apiResponse.status, { error: result.error?.message || "Gagal memanggil OpenAI API." });
      return;
    }

    const html = result.output_text || result.output?.flatMap((item) => item.content || []).map((item) => item.text || "").join("") || "";
    const tokens = result.usage?.total_tokens || (result.usage?.input_tokens || 0) + (result.usage?.output_tokens || 0);
    const recorded = recordGenerate(db, user, data, html, "openai", tokens);
    writeDb(db);
    sendJson(response, 200, {
      html,
      usage: result.usage || null,
      historyItem: recorded.historyItem,
      state: userState(db, user.code)
    });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Terjadi kesalahan server." });
  }
}

async function handleLogin(request, response) {
  const payload = await readJson(request);
  const db = readDb();
  const user = findUser(db, payload.code);
  if (!user) {
    sendJson(response, 401, { error: "Kode pengguna tidak terdaftar. Minta admin membuat kode akses." });
    return;
  }
  user.loginCount = (user.loginCount || 0) + 1;
  user.lastLoginBy = payload.name || user.teacher;
  user.lastLoginAt = new Date().toISOString();
  writeDb(db);
  sendJson(response, 200, {
    session: { name: user.teacher, role: user.role || "Guru", accessCode: user.code, loginAt: new Date().toISOString() },
    state: userState(db, user.code)
  });
}

async function handleCreateUser(request, response) {
  const payload = await readJson(request);
  const db = readDb();
  const user = {
    code: generateAccessCode(db.users),
    teacher: String(payload.teacher || "Guru Baru").trim() || "Guru Baru",
    role: payload.role || "Guru",
    createdAt: new Date().toISOString(),
    loginCount: 0
  };
  db.users.unshift(user);
  writeDb(db);
  sendJson(response, 200, { user, state: adminState(db) });
}

async function handleDeleteUser(request, response) {
  const payload = await readJson(request);
  const code = normalizeAccessCode(payload.code);
  const db = readDb();
  db.users = db.users.filter((user) => normalizeAccessCode(user.code) !== code);
  delete db.usage[code];
  delete db.history[code];
  writeDb(db);
  sendJson(response, 200, { state: adminState(db) });
}

async function handleTokenUpdate(request, response) {
  const payload = await readJson(request);
  const db = readDb();
  db.tokenState.limit = Math.max(0, Number(payload.limit || 0));
  writeDb(db);
  sendJson(response, 200, { state: adminState(db) });
}

async function handleHistoryDelete(request, response) {
  const payload = await readJson(request);
  const code = normalizeAccessCode(payload.code);
  const db = readDb();
  db.history[code] = (db.history[code] || []).filter((item) => String(item.id) !== String(payload.id));
  writeDb(db);
  sendJson(response, 200, { history: db.history[code] || [] });
}

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/api/status") {
    const db = readDb();
    sendJson(response, 200, {
      ok: true,
      aiEnabled: Boolean(process.env.OPENAI_API_KEY),
      model: process.env.OPENAI_MODEL || "gpt-4.1",
      state: publicState(db)
    });
    return;
  }

  if (request.method === "GET" && request.url === "/api/health") {
    sendJson(response, 200, { ok: true, service: "gurugen-ai" });
    return;
  }

  if (request.method === "GET" && request.url === "/api/state") {
    sendJson(response, 200, publicState(readDb()));
    return;
  }

  if (request.method === "GET" && request.url === "/api/admin/state") {
    if (!requireAdmin(request, response)) return;
    sendJson(response, 200, adminState(readDb()));
    return;
  }

  if (request.method === "POST" && request.url === "/api/generate") {
    handleGenerate(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/auth/login") {
    handleLogin(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/admin/users") {
    if (!requireAdmin(request, response)) return;
    handleCreateUser(request, response);
    return;
  }

  if (request.method === "DELETE" && request.url === "/api/admin/users") {
    if (!requireAdmin(request, response)) return;
    handleDeleteUser(request, response);
    return;
  }

  if (request.method === "PATCH" && request.url === "/api/admin/tokens") {
    if (!requireAdmin(request, response)) return;
    handleTokenUpdate(request, response);
    return;
  }

  if (request.method === "GET" && request.url.startsWith("/api/history")) {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const code = normalizeAccessCode(url.searchParams.get("code"));
    const db = readDb();
    sendJson(response, 200, { history: db.history[code] || [] });
    return;
  }

  if (request.method === "DELETE" && request.url === "/api/history") {
    handleHistoryDelete(request, response);
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.join(root, path.normalize(pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "text/plain" });
    response.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`GuruGen AI running at http://${host}:${port}`);
});
