const iconPaths = {
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 12v6"/><path d="M9 15h6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  template: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h3v3H8z"/><path d="M13 8h3"/><path d="M13 12h3"/><path d="M8 15h8"/>',
  settings: '<path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.04.04a2.1 2.1 0 0 1-2.97 2.97l-.04-.04a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.1 1.65V21a2.1 2.1 0 0 1-4.2 0v-.06a1.8 1.8 0 0 0-1.1-1.65 1.8 1.8 0 0 0-1.98.36l-.04.04a2.1 2.1 0 0 1-2.97-2.97l.04-.04A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-1.65-1.1H3a2.1 2.1 0 0 1 0-4.2h.06A1.8 1.8 0 0 0 4.7 8.6a1.8 1.8 0 0 0-.36-1.98l-.04-.04a2.1 2.1 0 0 1 2.97-2.97l.04.04A1.8 1.8 0 0 0 9.3 4.6a1.8 1.8 0 0 0 1.1-1.65V3a2.1 2.1 0 0 1 4.2 0v.06a1.8 1.8 0 0 0 1.1 1.65 1.8 1.8 0 0 0 1.98-.36l.04-.04a2.1 2.1 0 0 1 2.97 2.97l-.04.04a1.8 1.8 0 0 0-.36 1.98 1.8 1.8 0 0 0 1.65 1.1H21a2.1 2.1 0 0 1 0 4.2h-.06A1.8 1.8 0 0 0 19.4 15Z"/>',
  moon: '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M10 21h4"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 0 1 5.1 1.3c0 1.8-2.6 2-2.6 3.7"/><path d="M12 17h.01"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><rect x="3" y="3" width="12" height="12" rx="2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
  network: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="3" y="16" width="6" height="6" rx="1"/><rect x="15" y="16" width="6" height="6" rx="1"/><path d="M12 8v4"/><path d="M6 16v-2h12v2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
  "calendar-days": '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M7 14h5"/><path d="M7 18h9"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m18 6 3-3"/><path d="M18 6h3v3"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
  more: '<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',
  sparkles: '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/><path d="m5 14 .8 1.7L7.5 16.5l-1.7.8L5 19l-.8-1.7-1.7-.8 1.7-.8L5 14Z"/>'
};

const form = document.querySelector("#documentForm");
const preview = document.querySelector("#documentPreview");
const toast = document.querySelector("#toast");
const steps = [...document.querySelectorAll(".step")];
const panels = [...document.querySelectorAll(".step-panel")];
const stepsTrack = document.querySelector("#steps");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const generateButton = document.querySelector("#generateButton");
const resultStatus = document.querySelector("#resultStatus");
const historyList = document.querySelector("#historyList");
const navItems = [...document.querySelectorAll("[data-view-target]")];
const appViews = [...document.querySelectorAll("[data-view]")];
const pageTitle = document.querySelector("#pageTitle");
const pageSubtitle = document.querySelector("#pageSubtitle");
const loginName = document.querySelector("#loginName");
const loginCode = document.querySelector("#loginCode");
const loginButton = document.querySelector("#loginButton");
const loginState = document.querySelector("#loginState");
const adminTeacherName = document.querySelector("#adminTeacherName");
const adminRole = document.querySelector("#adminRole");
const generateTokenButton = document.querySelector("#generateTokenButton");
const tokenBox = document.querySelector("#tokenBox");
const accessList = document.querySelector("#accessList");
const themeToggle = document.querySelector("#themeToggle");
const notificationButton = document.querySelector("#notificationButton");
const notificationPopover = document.querySelector("#notificationPopover");
const notificationBadge = document.querySelector("#notificationBadge");
const quotaText = document.querySelector("#quotaText");
const logoutButton = document.querySelector("#logoutButton");
const adminSide = document.querySelector("#adminSide");
const usageTable = document.querySelector("#usageTable");
const adminNoticeList = document.querySelector("#adminNoticeList");
const apiTokenRemaining = document.querySelector("#apiTokenRemaining");
const apiTokenLimit = document.querySelector("#apiTokenLimit");
const saveApiTokenLimit = document.querySelector("#saveApiTokenLimit");
const adminMenus = [...document.querySelectorAll("[data-admin-section]")];
const adminPanels = [...document.querySelectorAll("[data-admin-panel]")];
const aiStatus = document.querySelector("#aiStatus");
const serverStatus = document.querySelector("#serverStatus");
let currentStep = 0;

const docTitles = {
  LKPD: "LEMBAR KERJA PESERTA DIDIK (LKPD)",
  "Modul Ajar": "MODUL AJAR",
  ATP: "ALUR TUJUAN PEMBELAJARAN",
  Prota: "PROGRAM TAHUNAN",
  Promes: "PROGRAM SEMESTER",
  KKTP: "KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN",
  "Kisi-kisi Soal": "KISI-KISI SOAL"
};

const months = ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let lastGenerated = null;
const dailyLimit = 5;
const viewCopy = {
  home: ["Home", "Masuk menggunakan kode akses dari admin"],
  create: ["Buat Dokumen Baru", "Buat berbagai dokumen pembelajaran dengan bantuan AI"],
  history: ["Riwayat Dokumen", "Buka kembali dokumen yang pernah disimpan"],
  admin: ["Admin GuruGen", "Daftarkan akun guru dan buat kode akses"]
};
const memoryStore = {};
const isServerApp = window.location.protocol !== "file:";
let adminPin = "";

async function apiRequest(url, options = {}) {
  if (!isServerApp) throw new Error("Server API tidak tersedia pada mode file.");
  const response = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Request server gagal.");
  return payload;
}

function adminHeaders() {
  return adminPin ? { "X-Admin-Pin": adminPin } : {};
}

function applyServerState(state = {}) {
  if (Array.isArray(state.users)) storeSet("gurugenAccessCodes", JSON.stringify(state.users));
  if (state.usage) storeSet("gurugenDailyUsage", JSON.stringify(state.usage));
  if (Array.isArray(state.notices)) storeSet("gurugenAdminNotices", JSON.stringify(state.notices));
  if (state.tokenState) storeSet("gurugenApiTokens", JSON.stringify(state.tokenState));
  renderAccessCodes();
  renderUsageTable();
  renderAdminNotices();
  renderApiTokenState();
  updateQuotaText();
}

async function loadServerState() {
  if (!isServerApp) return;
  try {
    const state = await apiRequest("/api/state");
    applyServerState(state);
  } catch {
    showToast("Data server belum bisa dimuat. Pastikan server aktif.");
  }
}

async function loadAdminState() {
  if (!isServerApp || !adminPin) return;
  try {
    const state = await apiRequest("/api/admin/state", { headers: adminHeaders() });
    applyServerState(state);
  } catch (error) {
    showToast(error.message || "Data admin belum bisa dimuat.");
  }
}

function storeGet(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return Object.prototype.hasOwnProperty.call(memoryStore, key) ? memoryStore[key] : fallback;
  }
}

function storeSet(key, value) {
  memoryStore[key] = value;
  try {
    localStorage.setItem(key, value);
  } catch {
    // file:// in some embedded browsers can block localStorage; memoryStore keeps the app usable.
  }
}

function storeRemove(key) {
  delete memoryStore[key];
  try {
    localStorage.removeItem(key);
  } catch {
    // ignored
  }
}

document.querySelectorAll("[data-icon]").forEach((node) => {
  const name = node.dataset.icon;
  node.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFormData() {
  return Object.fromEntries(new FormData(form).entries());
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function currentUserKey() {
  const session = getSession();
  return normalizeAccessCode(session?.accessCode || "guest");
}

function getUsage() {
  try {
    const allUsage = JSON.parse(storeGet("gurugenDailyUsage", "{}"));
    const usage = allUsage[currentUserKey()] || { date: todayKey(), count: 0 };
    if (usage.date !== todayKey()) return { date: todayKey(), count: 0 };
    return usage;
  } catch {
    return { date: todayKey(), count: 0 };
  }
}

function setUsage(usage) {
  let allUsage = {};
  try {
    allUsage = JSON.parse(storeGet("gurugenDailyUsage", "{}"));
  } catch {
    allUsage = {};
  }
  allUsage[currentUserKey()] = usage;
  storeSet("gurugenDailyUsage", JSON.stringify(allUsage));
  updateQuotaText();
}

function getAllUsage() {
  try {
    return JSON.parse(storeGet("gurugenDailyUsage", "{}"));
  } catch {
    return {};
  }
}

function getApiTokenState() {
  try {
    return JSON.parse(storeGet("gurugenApiTokens", '{"limit":100000,"used":0}'));
  } catch {
    return { limit: 100000, used: 0 };
  }
}

function setApiTokenState(state) {
  storeSet("gurugenApiTokens", JSON.stringify(state));
  renderApiTokenState();
}

function renderApiTokenState() {
  const state = getApiTokenState();
  const remaining = Math.max(0, Number(state.limit || 0) - Number(state.used || 0));
  apiTokenRemaining.textContent = remaining.toLocaleString("id-ID");
  apiTokenLimit.value = state.limit || 0;
}

async function checkAiStatus() {
  if (window.location.protocol === "file:") {
    const message = "AI online nonaktif. Jalankan lewat http://127.0.0.1:4173 agar OpenAI API bisa dipakai.";
    aiStatus.textContent = message;
    aiStatus.className = "ai-status offline";
    serverStatus.textContent = message;
    serverStatus.className = "server-status offline";
    return { aiEnabled: false };
  }

  try {
    const response = await fetch("/api/status");
    const status = await response.json();
    if (status.state) applyServerState(status.state);
    const message = status.aiEnabled
      ? `AI online aktif (${status.model}).`
      : "Server aktif, tetapi OPENAI_API_KEY belum diatur.";
    aiStatus.textContent = message;
    aiStatus.className = `ai-status ${status.aiEnabled ? "online" : "offline"}`;
    serverStatus.textContent = message;
    serverStatus.className = `server-status ${status.aiEnabled ? "online" : "offline"}`;
    return status;
  } catch {
    const message = "Server AI belum aktif. Gunakan node serve.js lalu buka http://127.0.0.1:4173.";
    aiStatus.textContent = message;
    aiStatus.className = "ai-status offline";
    serverStatus.textContent = message;
    serverStatus.className = "server-status offline";
    return { aiEnabled: false };
  }
}

function consumeApiTokens(amount) {
  const state = getApiTokenState();
  state.used = Number(state.used || 0) + Number(amount || 0);
  setApiTokenState(state);
}

function remainingQuota() {
  return Math.max(0, dailyLimit - getUsage().count);
}

function updateQuotaText() {
  if (!quotaText) return;
  quotaText.textContent = `Sisa generate hari ini: ${remainingQuota()}/${dailyLimit}`;
}

function incrementUsage() {
  const usage = getUsage();
  usage.count += 1;
  usage.date = todayKey();
  setUsage(usage);
}

function getSession() {
  try {
    return JSON.parse(storeGet("gurugenSession", "null"));
  } catch {
    return null;
  }
}

function setSession(session) {
  storeSet("gurugenSession", JSON.stringify(session));
  updateLoginState();
}

function getAccessCodes() {
  try {
    const codes = JSON.parse(storeGet("gurugenAccessCodes", "[]"));
    if (codes.length) return codes;
  } catch {
    // fall through to seed code
  }
  const seed = [];
  storeSet("gurugenAccessCodes", JSON.stringify(seed));
  return seed;
}

function normalizeAccessCode(value) {
  const text = String(value || "").trim().toUpperCase();
  const match = text.match(/GGAI-[A-Z0-9]+/);
  return match ? match[0] : text.replace(/\s+/g, "");
}

function isUserCode(value) {
  return /^GGAI-[A-Z0-9]{4,}$/.test(normalizeAccessCode(value));
}

function setAccessCodes(codes) {
  storeSet("gurugenAccessCodes", JSON.stringify(codes));
  renderAccessCodes();
}

function updateLoginState() {
  const session = getSession();
  if (session) {
    loginState.textContent = `Login sebagai ${session.name} (${session.role}) dengan ID ${session.accessCode || "-"}.`;
    document.querySelector(".avatar").textContent = session.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    document.querySelector(".profile-card strong").textContent = session.name;
    document.querySelector(".profile-card small").textContent = session.role;
    updateAuthNavigation(true);
    return;
  }
  loginState.textContent = "Belum login. Gunakan kode dari admin.";
  document.querySelector(".avatar").textContent = "SA";
  document.querySelector(".profile-card strong").textContent = "Belum login";
  document.querySelector(".profile-card small").textContent = "Klik untuk keluar";
  updateAuthNavigation(false);
}

function updateAuthNavigation(isLoggedIn) {
  navItems.forEach((item) => {
    const protectedView = item.dataset.viewTarget === "create" || item.dataset.viewTarget === "history";
    item.classList.toggle("locked", protectedView && !isLoggedIn);
    item.setAttribute("aria-disabled", protectedView && !isLoggedIn ? "true" : "false");
  });
}

function renderAccessCodes() {
  const codes = getAccessCodes();
  accessList.innerHTML = codes
    .slice(0, 6)
    .map((item) => `
      <div class="access-row">
        <span>
          <strong>${escapeHtml(item.teacher)}</strong>
          <small><code>${escapeHtml(item.code)}</code> - ID permanen - ${item.loginCount || 0}x login</small>
        </span>
        <span class="access-actions">
          <button class="mini-button" type="button" data-copy-code="${escapeHtml(item.code)}">Copy</button>
          <button class="mini-button danger" type="button" data-delete-code="${escapeHtml(item.code)}">Hapus</button>
        </span>
      </div>
    `)
    .join("");
}

function renderUsageTable() {
  const usage = getAllUsage();
  const codes = getAccessCodes();
  const rows = Object.entries(usage).map(([code, item]) => {
    const user = codes.find((entry) => normalizeAccessCode(entry.code) === normalizeAccessCode(code));
    return {
      code,
      teacher: user?.teacher || "Pengguna tidak terdaftar",
      date: item.date || "-",
      used: item.count || 0,
      remaining: Math.max(0, dailyLimit - (item.count || 0))
    };
  });

  if (!rows.length) {
    usageTable.innerHTML = '<div class="history-empty">Belum ada penggunaan generate.</div>';
    return;
  }

  usageTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Nama Guru</th>
          <th>ID Pengguna</th>
          <th>Tanggal</th>
          <th>Terpakai</th>
          <th>Sisa</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td>${escapeHtml(row.teacher)}</td>
            <td><code>${escapeHtml(row.code)}</code></td>
            <td>${escapeHtml(row.date)}</td>
            <td>${row.used}/${dailyLimit}</td>
            <td>${row.remaining}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function getAdminNotices() {
  try {
    return JSON.parse(storeGet("gurugenAdminNotices", "[]"));
  } catch {
    return [];
  }
}

function setAdminNotices(items) {
  storeSet("gurugenAdminNotices", JSON.stringify(items.slice(0, 20)));
  renderAdminNotices();
}

function addAdminNotice(item) {
  setAdminNotices([{ id: Date.now(), createdAt: new Date().toISOString(), ...item }, ...getAdminNotices()]);
  notificationBadge.classList.remove("hidden");
}

function renderAdminNotices() {
  const notices = getAdminNotices();
  if (!notices.length) {
    adminNoticeList.innerHTML = '<div class="history-empty">Belum ada notifikasi generate.</div>';
    return;
  }

  adminNoticeList.innerHTML = notices
    .map((item) => `
      <div class="admin-notice">
        <strong>${escapeHtml(item.teacher)} berhasil generate ${escapeHtml(item.docType)}</strong>
        <small>${escapeHtml(item.code)} - ${new Date(item.createdAt).toLocaleString("id-ID")} - ${item.source === "openai" ? "AI online" : "Generator lokal"} - token ${Number(item.tokens || 0).toLocaleString("id-ID")}</small>
      </div>
    `)
    .join("");
}

function showAdminSection(section) {
  adminMenus.forEach((item) => item.classList.toggle("active", item.dataset.adminSection === section));
  adminPanels.forEach((item) => item.classList.toggle("active", item.dataset.adminPanel === section));
  if (section === "records") {
    renderUsageTable();
    renderAdminNotices();
  }
  if (section === "tokens") renderApiTokenState();
  if (section === "members") renderAccessCodes();
}

function renderNotificationPopover() {
  const view = appViews.find((item) => item.classList.contains("active"))?.dataset.view;
  if (view === "admin") {
    const notices = getAdminNotices().slice(0, 5);
    const token = getApiTokenState();
    const remaining = Math.max(0, Number(token.limit || 0) - Number(token.used || 0));
    notificationPopover.innerHTML = `
      <strong>Pemberitahuan Admin</strong>
      <p>Sisa token API: <strong>${remaining.toLocaleString("id-ID")}</strong></p>
      <p>Generate tercatat: <strong>${notices.length}</strong> update terbaru</p>
      ${notices.length ? notices.map((item) => `<p>${escapeHtml(item.teacher)} generate ${escapeHtml(item.docType)} (${new Date(item.createdAt).toLocaleString("id-ID")})</p>`).join("") : "<p>Belum ada notifikasi generate.</p>"}
    `;
    notificationBadge.textContent = getAdminNotices().length ? String(Math.min(getAdminNotices().length, 9)) : "0";
    return;
  }

  notificationPopover.innerHTML = `
    <strong>Pemberitahuan</strong>
    <p>Batas generate gratis: 5 dokumen per hari.</p>
    <p>Sisa generate hari ini: <strong>${remainingQuota()}/${dailyLimit}</strong></p>
    <p>${isServerApp ? "Riwayat tersimpan di server aplikasi." : "Riwayat tersimpan di browser perangkat ini."}</p>
  `;
  notificationBadge.textContent = remainingQuota() === 0 ? "!" : "2";
}

function showView(view) {
  const session = getSession();
  if (view === "admin") {
    const entered = window.prompt("Masukkan kode admin:");
    if (!entered) {
      showToast("Kode admin wajib diisi.");
      view = "home";
    } else {
      adminPin = entered;
    }
  }

  if ((view === "create" || view === "history") && !session) {
    showToast("Silakan login dengan kode akses admin terlebih dahulu.");
    view = "home";
  }

  appViews.forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.viewTarget === view));
  document.querySelector(".sidebar").classList.toggle("admin-mode", view === "admin");
  adminSide.classList.toggle("hidden", view !== "admin");
  pageTitle.textContent = viewCopy[view][0];
  pageSubtitle.textContent = viewCopy[view][1];
  if (view === "history") {
    renderHistory();
    loadServerHistory();
  }
  if (view === "admin") {
    loadAdminState();
    renderAccessCodes();
    renderUsageTable();
    renderAdminNotices();
    renderApiTokenState();
    checkAiStatus();
    showAdminSection("members");
  }
  renderNotificationPopover();
  notificationPopover.classList.add("hidden");
}

function openInitialView() {
  if (window.location.hash === "#admin") {
    showView("admin");
    return;
  }
  showView("home");
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#admin") {
    showView("admin");
    return;
  }
  if (appViews.find((item) => item.classList.contains("active"))?.dataset.view === "admin") {
    showView("home");
  }
});

function splitIdeas(value, fallback) {
  const items = String(value || "")
    .split(/\n|,|;/)
    .map((item) => item.trim())
    .filter(Boolean);
  return items.length ? items : fallback;
}

function getDocKey(docType) {
  return Object.keys(docTitles).find((key) => docType.includes(key)) || "LKPD";
}

const detailFieldMap = {
  LKPD: ["questionCount", "questionType", "learningModel", "assessment", "tone", "length"],
  "Modul Ajar": ["learningModel", "assessment", "tone", "length"],
  ATP: ["assessment", "tone", "length"],
  Prota: ["tone", "length"],
  Promes: ["assessment", "tone", "length"],
  KKTP: ["assessment", "tone", "length"],
  "Kisi-kisi Soal": ["questionCount", "questionType", "assessment", "tone", "length"]
};

function updateDetailFields() {
  const docKey = getDocKey(form.elements.docType.value);
  const visible = new Set(detailFieldMap[docKey] || detailFieldMap.LKPD);
  document.querySelectorAll("[data-detail-field]").forEach((field) => {
    field.classList.toggle("hidden", !visible.has(field.dataset.detailField));
  });
}

function sentence(text) {
  const value = escapeHtml(text).trim();
  return /[.!?]$/.test(value) ? value : `${value}.`;
}

function list(items) {
  return `<ol>${items.map((item) => `<li>${sentence(item)}</li>`).join("")}</ol>`;
}

function table(headers, rows) {
  return `
    <table>
      <thead><tr>${headers.map((item) => `<th>${escapeHtml(item)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function normalizeData(raw) {
  const safe = Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, escapeHtml(value)]));
  const subtopics = splitIdeas(raw.subtopic, [raw.topic]);
  const objectives = splitIdeas(raw.learningObjectives, [
    `Peserta didik mampu menjelaskan konsep dasar ${raw.topic}`,
    `Peserta didik mampu menerapkan ${raw.topic} pada situasi sederhana`,
    `Peserta didik mampu menyajikan hasil kerja secara runtut`
  ]);
  const activities = splitIdeas(raw.activities, [
    "Diskusi pemantik dan apersepsi",
    "Eksplorasi contoh masalah",
    "Praktik mandiri atau kelompok",
    "Presentasi dan refleksi"
  ]);
  return { ...safe, raw, subtopics, objectives, activities, docKey: getDocKey(raw.docType) };
}

function buildPracticeQuestions(data) {
  const count = Math.max(0, Math.min(100, Number(data.raw.questionCount || 0)));
  if (!count) return "";
  const type = data.questionType || "Uraian";
  const rows = Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    if (type === "Pilihan Ganda" || type === "Campuran") {
      return `<li>${number}. Pilih jawaban yang paling tepat terkait ${data.topic.toLowerCase()}.<br>A. Pernyataan benar<br>B. Pernyataan kurang tepat<br>C. Pernyataan tidak sesuai<br>D. Semua salah</li>`;
    }
    if (type === "Isian Singkat") return `<li>${number}. Isilah jawaban singkat tentang konsep ${data.topic.toLowerCase()}.</li>`;
    if (type === "Tabel") return `<li>${number}. Lengkapi tabel sederhana yang berkaitan dengan ${data.topic.toLowerCase()}.</li>`;
    if (type === "Studi Kasus") return `<li>${number}. Bacalah kasus singkat tentang ${data.topic.toLowerCase()}, lalu jelaskan solusi yang tepat.</li>`;
    return `<li>${number}. Jelaskan pemahamanmu tentang ${data.topic.toLowerCase()} sesuai materi yang dipelajari.</li>`;
  }).join("");

  return `
    <section>
      <h3>Soal Latihan</h3>
      <p>Jumlah soal: ${count}. Jenis soal: ${type}.</p>
      <ol>${rows}</ol>
    </section>
  `;
}

function identityRows(data) {
  return `
    <dl>
      <div><dt>Nama Sekolah</dt><dd>${data.school}</dd></div>
      <div><dt>Nama Guru</dt><dd>${data.teacher}</dd></div>
      <div><dt>Jenjang/Kelas</dt><dd>${data.level} / ${data.className}</dd></div>
      <div><dt>Mata Pelajaran</dt><dd>${data.subject}</dd></div>
      <div><dt>Kelas/Semester</dt><dd>${data.className} / ${data.semester}</dd></div>
      <div><dt>Kurikulum</dt><dd>${data.curriculum}</dd></div>
      <div><dt>Materi</dt><dd>${data.topic}</dd></div>
      <div><dt>Alokasi Waktu</dt><dd>${data.duration}</dd></div>
      <div><dt>Tahun Pelajaran</dt><dd>${data.year}</dd></div>
    </dl>
  `;
}

function commonHeader(data) {
  return `
    <h1>${docTitles[data.docKey]}</h1>
    <h2>${data.subject.toUpperCase()}</h2>
    <section>
      <h3>A. Identitas Dokumen</h3>
      ${identityRows(data)}
    </section>
  `;
}

function buildLkpd(data) {
  return `
    ${commonHeader(data)}
    <section>
      <h3>B. Tujuan Pembelajaran</h3>
      ${list(data.objectives)}
    </section>
    <section>
      <h3>C. Petunjuk Pengerjaan</h3>
      ${list([
        "Bacalah setiap instruksi sebelum mengerjakan",
        "Kerjakan aktivitas secara runtut sesuai arahan guru",
        "Gunakan sumber belajar yang relevan dan tuliskan jawaban dengan jelas",
        "Diskusikan temuan dengan kelompok sebelum membuat kesimpulan"
      ])}
    </section>
    <section>
      <h3>D. Aktivitas Peserta Didik</h3>
      <h4>Aktivitas 1 - Mengamati Masalah</h4>
      <p>Amati contoh kasus yang berkaitan dengan <strong>${data.topic}</strong>. Tuliskan informasi penting yang kamu temukan.</p>
      <h4>Aktivitas 2 - Mengolah Informasi</h4>
      ${list(data.subtopics.map((item) => `Jelaskan hubungan ${item} dengan materi ${data.topic}`))}
      <h4>Aktivitas 3 - Menyajikan Hasil</h4>
      <p>Buat ringkasan hasil kerja dalam bentuk tabel, bagan, atau uraian singkat sesuai kebutuhan materi.</p>
    </section>
    <section>
      <h3>E. Refleksi</h3>
      ${list(["Apa hal baru yang kamu pahami hari ini", "Bagian mana yang masih perlu kamu pelajari kembali", "Bagaimana materi ini dapat digunakan dalam kehidupan sehari-hari"])}
    </section>
    <section>
      <h3>F. Rubrik Penilaian</h3>
      ${rubricTable()}
    </section>
    ${buildPracticeQuestions(data)}
    ${closingNote(data)}
  `;
}

function buildModulAjar(data) {
  return `
    ${commonHeader(data)}
    <section>
      <h3>B. Kompetensi Awal dan Profil Pelajar Pancasila</h3>
      <p>Peserta didik memiliki pengalaman awal terkait ${data.topic.toLowerCase()} melalui contoh di lingkungan sekitar.</p>
      ${list(["Bernalar kritis", "Mandiri", "Gotong royong", "Kreatif"])}
    </section>
    <section>
      <h3>C. Tujuan Pembelajaran</h3>
      ${list(data.objectives)}
    </section>
    <section>
      <h3>D. Langkah Pembelajaran</h3>
      ${table(["Tahap", "Aktivitas Guru", "Aktivitas Peserta Didik", "Waktu"], [
        ["Pendahuluan", "Menyapa, apersepsi, dan menyampaikan tujuan.", "Menjawab pertanyaan pemantik dan menyiapkan belajar.", "10 menit"],
        ["Inti", `Memandu eksplorasi ${data.topic} dengan model ${data.learningModel}.`, data.activities.join("<br>"), "60 menit"],
        ["Penutup", "Memfasilitasi refleksi, umpan balik, dan tindak lanjut.", "Menyampaikan kesimpulan dan refleksi.", "10 menit"]
      ])}
    </section>
    <section>
      <h3>E. Asesmen dan Tindak Lanjut</h3>
      <p>Asesmen menggunakan ${data.assessment.toLowerCase()}. Peserta didik yang belum mencapai tujuan mendapat bimbingan ulang, sedangkan yang sudah tuntas mendapat tugas pengayaan.</p>
    </section>
    ${buildPracticeQuestions(data)}
    ${closingNote(data)}
  `;
}

function buildPlanningTable(data) {
  const rows = months.map((month, index) => [
    month,
    `Minggu ${index + 1}`,
    data.subtopics[index % data.subtopics.length],
    data.activities[index % data.activities.length],
    data.assessment
  ]);
  return `
    ${commonHeader(data)}
    <section>
      <h3>B. Capaian dan Tujuan</h3>
      ${list(data.objectives)}
    </section>
    <section>
      <h3>C. Rencana Alur Pembelajaran</h3>
      ${table(["Bulan", "Minggu", "Materi/Submateri", "Aktivitas", "Asesmen"], rows)}
    </section>
    <section>
      <h3>D. Catatan Pelaksanaan</h3>
      <p>Rencana ini dapat disesuaikan dengan kalender pendidikan, capaian kelas, dan kebutuhan peserta didik.</p>
    </section>
    ${closingNote(data)}
  `;
}

function buildKktp(data) {
  return `
    ${commonHeader(data)}
    <section>
      <h3>B. Tujuan Pembelajaran</h3>
      ${list(data.objectives)}
    </section>
    <section>
      <h3>C. Kriteria Ketercapaian</h3>
      ${table(["Tujuan", "Belum Berkembang", "Cukup", "Baik", "Sangat Baik"], data.objectives.map((item) => [
        item,
        "Belum mampu menjelaskan konsep utama.",
        "Mampu menjelaskan sebagian konsep dengan bantuan.",
        "Mampu menjelaskan dan menerapkan konsep secara tepat.",
        "Mampu menerapkan konsep, memberi contoh, dan membantu teman."
      ]))}
    </section>
    <section>
      <h3>D. Tindak Lanjut</h3>
      <p>Remedial diberikan melalui latihan bertahap dan contoh tambahan. Pengayaan diberikan melalui tugas analisis atau proyek kecil terkait ${data.topic.toLowerCase()}.</p>
    </section>
    ${closingNote(data)}
  `;
}

function buildKisi(data) {
  return `
    ${commonHeader(data)}
    <section>
      <h3>B. Tujuan Penilaian</h3>
      ${list(data.objectives)}
    </section>
    <section>
      <h3>C. Kisi-kisi Soal</h3>
      ${table(["No", "Materi", "Indikator Soal", "Bentuk", "Level", "Skor"], [
        ["1", data.topic, "Menjelaskan konsep utama materi.", "Pilihan ganda", "C2", "10"],
        ["2", data.subtopics[0] || data.topic, "Mengidentifikasi contoh penerapan pada kasus sederhana.", "Uraian", "C3", "20"],
        ["3", data.subtopics[1] || data.topic, "Menganalisis informasi dan menyusun kesimpulan.", "Uraian", "C4", "30"],
        ["4", data.topic, "Membuat produk atau penyajian data sesuai instruksi.", "Praktik", "C5", "40"]
      ])}
    </section>
    <section>
      <h3>D. Pedoman Penskoran</h3>
      ${rubricTable()}
    </section>
    ${closingNote(data)}
  `;
}

function rubricTable() {
  return table(["Aspek", "Skor 1", "Skor 2", "Skor 3", "Skor 4"], [
    ["Pemahaman Konsep", "Jawaban belum tepat.", "Jawaban sebagian tepat.", "Jawaban tepat.", "Jawaban tepat dan disertai contoh."],
    ["Keterampilan Proses", "Belum mengikuti langkah.", "Mengikuti sebagian langkah.", "Mengikuti langkah dengan benar.", "Mandiri dan sistematis."],
    ["Komunikasi Hasil", "Penyajian belum jelas.", "Penyajian cukup jelas.", "Penyajian jelas.", "Penyajian jelas dan menarik."]
  ]);
}

function closingNote(data) {
  return `
    <section>
      <h3>Catatan Guru</h3>
      <p>${data.extraInstruction}</p>
      <p class="page-note">Dokumen ini dibuat oleh GuruGen AI lokal. Isi dapat diedit langsung pada area preview sebelum diunduh atau dicetak.</p>
    </section>
  `;
}

function buildDocument(data) {
  if (data.docKey === "Modul Ajar") return buildModulAjar(data);
  if (["ATP", "Prota", "Promes"].includes(data.docKey)) return buildPlanningTable(data);
  if (data.docKey === "KKTP") return buildKktp(data);
  if (data.docKey === "Kisi-kisi Soal") return buildKisi(data);
  return buildLkpd(data);
}

function cleanGeneratedHtml(html) {
  return String(html || "")
    .trim()
    .replace(/^```html\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "");
}

function friendlyAiError(message = "") {
  const text = String(message);
  if (/exceeded your current quota|quota|billing/i.test(text)) {
    return "Kuota/billing OpenAI API habis atau belum aktif. Periksa saldo, billing, dan limit penggunaan di dashboard OpenAI.";
  }
  if (/invalid api key|incorrect api key|unauthorized|401/i.test(text)) {
    return "API key OpenAI tidak valid. Periksa kembali OPENAI_API_KEY di file .env.";
  }
  if (/rate limit|429/i.test(text)) {
    return "Terlalu banyak permintaan ke OpenAI API. Tunggu sebentar lalu coba lagi.";
  }
  if (/model/i.test(text)) {
    return "Model AI tidak tersedia untuk API key ini. Coba ganti OPENAI_MODEL di file .env.";
  }
  return text || "AI online gagal. Periksa API key, billing, koneksi, atau server.";
}

async function tryGenerateWithServer(rawData) {
  if (window.location.protocol === "file:") {
    return { ok: false, offline: true, error: "Halaman masih dibuka via file://, AI online tidak bisa dipakai." };
  }

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session: getSession(), form: rawData })
    });
    const result = await response.json();
    if (!response.ok) {
      return { ok: false, error: friendlyAiError(result.error || "AI online gagal membuat dokumen.") };
    }
    if (result.state) applyServerState(result.state);
    return { ok: true, html: cleanGeneratedHtml(result.html), usage: result.usage || null, historyItem: result.historyItem || null };
  } catch {
    return { ok: false, offline: true, error: friendlyAiError("Server AI tidak merespons. Jalankan node serve.js dan buka http://127.0.0.1:4173.") };
  }
}

function renderDraft() {
  const data = normalizeData(getFormData());
  preview.innerHTML = `
    <h1>${docTitles[data.docKey]}</h1>
    <h2>${data.subject.toUpperCase()}</h2>
    <section>
      <h3>Pratinjau Data Input</h3>
      ${identityRows(data)}
    </section>
    <section>
      <h3>Bahan Prompt untuk AI</h3>
      <p><strong>Tujuan:</strong></p>
      ${list(data.objectives)}
      <p><strong>Aktivitas:</strong></p>
      ${list(data.activities)}
      <p><strong>Soal latihan:</strong> Buat ${escapeHtml(getFormData().questionCount || "0")} soal sesuai materi. Jenis soal: ${escapeHtml(getFormData().questionType || "-")}.</p>
      <p class="page-note">Bagian ini hanya pratinjau bahan prompt. Dokumen final akan dibuat oleh AI setelah tombol Generate Dokumen ditekan.</p>
    </section>
  `;
  lastGenerated = null;
  preview.dataset.generated = "false";
}

function setGeneratedDocument(html, rawData, source) {
  const data = normalizeData(rawData);
  preview.innerHTML = html;
  preview.dataset.generated = "true";
  lastGenerated = {
    id: Date.now(),
    title: `${docTitles[data.docKey]} - ${data.subject}`,
    subtitle: `${data.className} | ${data.topic}`,
    createdAt: new Date().toISOString(),
    source,
    html: preview.innerHTML
  };
}

function updateWizard(step) {
  currentStep = Math.max(0, Math.min(step, panels.length - 1));
  panels.forEach((panel, index) => panel.classList.toggle("active", index === currentStep));
  steps.forEach((item, index) => {
    item.classList.toggle("active", index === currentStep);
    item.classList.toggle("done", index < currentStep);
  });
  stepsTrack.style.setProperty("--progress", `${31 + currentStep * 34}%`);
  prevButton.classList.toggle("hidden", currentStep === 0);
  nextButton.classList.toggle("hidden", currentStep === panels.length - 1);
  generateButton.classList.toggle("hidden", currentStep !== panels.length - 1);
  nextButton.firstChild.textContent = currentStep === 0 ? "Lanjut ke Detail " : "Lanjut Generate ";
}

function setStatus(text, busy = false) {
  resultStatus.innerHTML = `<span class="dot ${busy ? "pulse" : ""}"></span>${text}`;
}

function downloadFile(filename, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function normalizeForExport(content) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = content;

  wrapper.querySelectorAll("dl").forEach((dl) => {
    const tableEl = document.createElement("table");
    tableEl.className = "meta-table";
    const tbody = document.createElement("tbody");

    dl.querySelectorAll(":scope > div").forEach((row) => {
      const dt = row.querySelector("dt");
      const dd = row.querySelector("dd");
      if (!dt || !dd) return;
      const tr = document.createElement("tr");
      const key = document.createElement("td");
      const colon = document.createElement("td");
      const value = document.createElement("td");
      key.className = "meta-key";
      colon.className = "meta-colon";
      value.className = "meta-value";
      key.textContent = dt.textContent.trim();
      colon.textContent = ":";
      value.innerHTML = dd.innerHTML;
      tr.append(key, colon, value);
      tbody.appendChild(tr);
    });

    tableEl.appendChild(tbody);
    dl.replaceWith(tableEl);
  });

  wrapper.querySelectorAll(".page-note").forEach((note) => note.remove());
  return wrapper.innerHTML;
}

function documentShell(content) {
  const normalizedContent = normalizeForExport(content);
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>GuruGen Dokumen</title>
  <style>
    @page { margin: 2cm; }
    body { font-family: Arial, sans-serif; color: #111827; line-height: 1.45; }
    h1, h2 { text-align: center; }
    h1 { font-size: 18pt; }
    h2 { font-size: 14pt; margin-bottom: 24px; }
    h3 { font-size: 12pt; margin-top: 18px; }
    h4 { font-size: 11pt; margin: 12px 0 6px; }
    p, li, td, th { font-size: 10.5pt; }
    ol, ul { margin-top: 4px; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    th, td { border: 1px solid #777; padding: 6px; vertical-align: top; }
    th { background: #f1f5f9; }
    .meta-table { border-collapse: collapse; margin-top: 4px; width: 100%; }
    .meta-table td { border: 0; padding: 2px 4px; font-size: 10.5pt; }
    .meta-key { width: 150px; }
    .meta-colon { width: 12px; text-align: center; }
    .meta-value { width: auto; }
  </style>
</head>
<body>${normalizedContent}</body>
</html>`;
}

function printCleanDocument() {
  if (preview.dataset.generated !== "true") {
    showToast("Generate dokumen terlebih dahulu sebelum download PDF.");
    return;
  }
  const html = documentShell(preview.innerHTML);
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast("Popup print diblokir browser. Izinkan popup untuk mencetak PDF.");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.setTimeout(() => {
    printWindow.print();
  }, 250);
}

function getHistory() {
  try {
    const allHistory = JSON.parse(storeGet("gurugenHistory", "{}"));
    if (Array.isArray(allHistory)) return allHistory;
    return allHistory[currentUserKey()] || [];
  } catch {
    return [];
  }
}

function setHistory(items) {
  let allHistory = {};
  try {
    const parsed = JSON.parse(storeGet("gurugenHistory", "{}"));
    allHistory = Array.isArray(parsed) ? { [currentUserKey()]: parsed } : parsed;
  } catch {
    allHistory = {};
  }
  allHistory[currentUserKey()] = items.slice(0, 8);
  storeSet("gurugenHistory", JSON.stringify(allHistory));
  renderHistory();
}

async function loadServerHistory() {
  if (!isServerApp || !getSession()) return;
  try {
    const code = encodeURIComponent(getSession().accessCode || "");
    const result = await apiRequest(`/api/history?code=${code}`);
    let allHistory = {};
    try {
      const parsed = JSON.parse(storeGet("gurugenHistory", "{}"));
      allHistory = Array.isArray(parsed) ? { [currentUserKey()]: parsed } : parsed;
    } catch {
      allHistory = {};
    }
    allHistory[currentUserKey()] = result.history || [];
    storeSet("gurugenHistory", JSON.stringify(allHistory));
    renderHistory();
  } catch {
    showToast("Riwayat server belum bisa dimuat.");
  }
}

function saveCurrentDocument(auto = false) {
  const data = normalizeData(getFormData());
  const item = lastGenerated || {
    id: Date.now(),
    title: `${docTitles[data.docKey]} - ${data.subject}`,
    subtitle: `${data.className} | ${data.topic}`,
    createdAt: new Date().toISOString(),
    html: preview.innerHTML
  };
  item.html = preview.innerHTML;
  const history = getHistory().filter((entry) => entry.id !== item.id);
  setHistory([item, ...history]);
  lastGenerated = item;
  if (!auto) showToast("Dokumen tersimpan di riwayat lokal.");
}

function renderHistory() {
  const history = getHistory();
  if (!history.length) {
    historyList.innerHTML = '<div class="history-empty">Belum ada dokumen tersimpan.</div>';
    return;
  }
  historyList.innerHTML = history
    .map((item) => `
      <button class="history-item" type="button" data-id="${item.id}">
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.subtitle)} • ${new Date(item.createdAt).toLocaleString("id-ID")}</small>
        <span class="mini-button history-delete" data-delete-id="${item.id}">Hapus</span>
      </button>
    `)
    .join("");
}

form.addEventListener("input", () => {
  updateDetailFields();
  renderDraft();
  setStatus("Draft diperbarui");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!getSession()) {
    showView("home");
    showToast("Login terlebih dahulu sebelum generate dokumen.");
    return;
  }
  if (remainingQuota() <= 0) {
    setStatus("Batas harian tercapai");
    showToast("Batas generate 5 dokumen per hari sudah tercapai.");
    return;
  }

  const rawData = getFormData();
  setStatus("AI menyusun dokumen...", true);
  generateButton.disabled = true;
  generateButton.textContent = "Generating...";

  const serverResult = await tryGenerateWithServer(rawData);
  let source = "local";
  let tokensUsed = 850;
  if (serverResult.ok && serverResult.html) {
    source = "openai";
    tokensUsed = serverResult.usage?.total_tokens || serverResult.usage?.input_tokens + serverResult.usage?.output_tokens || 0;
    setGeneratedDocument(serverResult.html, rawData, "openai");
    if (serverResult.historyItem) lastGenerated = serverResult.historyItem;
    showToast("Dokumen berhasil digenerate dengan AI online.");
  } else {
    if (window.location.protocol !== "file:") {
      setStatus("AI online gagal");
      generateButton.disabled = false;
      generateButton.innerHTML = 'Generate Dokumen <span class="icon" data-icon="sparkles"></span>';
      generateButton.querySelector("[data-icon]").innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths.sparkles}</svg>`;
      showToast(serverResult.error || "AI online gagal. Periksa API key atau server.");
      return;
    }
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setGeneratedDocument(buildDocument(normalizeData(rawData)), rawData, "local");
    showToast("AI online tidak aktif di file://. Dokumen dibuat dengan generator lokal.");
  }

  if (isServerApp && source === "openai") {
    await loadServerHistory();
  } else {
    incrementUsage();
    consumeApiTokens(tokensUsed);
    saveCurrentDocument(true);
  }
  const data = normalizeData(rawData);
  const session = getSession();
  if (!isServerApp || source !== "openai") {
    addAdminNotice({
      teacher: session?.name || data.teacher,
      code: session?.accessCode || currentUserKey(),
      docType: data.docKey,
      source,
      tokens: tokensUsed
    });
  }
  renderUsageTable();
  renderNotificationPopover();
  setStatus("Selesai dan tersimpan");
  generateButton.disabled = false;
  generateButton.innerHTML = 'Generate Dokumen <span class="icon" data-icon="sparkles"></span>';
  generateButton.querySelector("[data-icon]").innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths.sparkles}</svg>`;
});

steps.forEach((step) => step.addEventListener("click", () => updateWizard(Number(step.dataset.step))));
prevButton.addEventListener("click", () => updateWizard(currentStep - 1));
nextButton.addEventListener("click", () => updateWizard(currentStep + 1));

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showView(item.dataset.viewTarget);
  });
});

loginButton.addEventListener("click", async () => {
  const code = normalizeAccessCode(loginCode.value);

  if (!code) {
    showToast("Isi kode pengguna terlebih dahulu.");
    return;
  }

  if (isServerApp) {
    try {
      const result = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ code, name: loginName.value.trim() })
      });
      if (result.state) applyServerState(result.state);
      setSession(result.session);
      await loadServerHistory();
      showToast("Login berhasil. Selamat datang.");
      showView("create");
    } catch (error) {
      showToast(error.message || "Login gagal.");
    }
    return;
  }

  const codes = getAccessCodes();
  let record = codes.find((item) => normalizeAccessCode(item.code) === code);
  if (!record) {
    if (!isUserCode(code)) {
      showToast("Kode pengguna tidak valid. Gunakan format GGAI-XXXXXX dari admin.");
      return;
    }
    record = {
      code,
      teacher: loginName.value.trim() || "Guru Pengguna",
      role: "Guru",
      createdAt: new Date().toISOString(),
      loginCount: 0,
      recovered: true
    };
    codes.unshift(record);
  }

  const name = loginName.value.trim() || record.teacher;
  record.teacher = record.teacher || name;
  record.loginCount = (record.loginCount || 0) + 1;
  record.lastLoginBy = name;
  record.lastLoginAt = new Date().toISOString();
  setAccessCodes(codes);
  setSession({ name: record.teacher, role: record.role || "Guru", accessCode: record.code, loginAt: new Date().toISOString() });
  showToast("Login berhasil. Selamat datang.");
  showView("create");
});

generateTokenButton.addEventListener("click", async () => {
  const teacher = adminTeacherName.value.trim() || "Guru Baru";
  if (isServerApp) {
    try {
      const result = await apiRequest("/api/admin/users", {
        method: "POST",
        headers: adminHeaders(),
        body: JSON.stringify({ teacher, role: adminRole.value })
      });
      if (result.state) applyServerState(result.state);
      tokenBox.textContent = `${result.user.teacher}: ${result.user.code}`;
      showToast("Kode pengguna permanen berhasil dibuat di server.");
    } catch (error) {
      showToast(error.message || "Gagal membuat kode pengguna.");
    }
    return;
  }
  const code = `GGAI-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const codes = getAccessCodes();
  codes.unshift({ code, teacher, role: adminRole.value, createdAt: new Date().toISOString(), loginCount: 0 });
  setAccessCodes(codes);
  tokenBox.textContent = `${teacher}: ${code}`;
  showToast("Kode pengguna permanen berhasil dibuat.");
});

accessList.addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-delete-code]");
  if (deleteButton) {
    const code = normalizeAccessCode(deleteButton.dataset.deleteCode);
    if (isServerApp) {
      try {
        const result = await apiRequest("/api/admin/users", {
          method: "DELETE",
          headers: adminHeaders(),
          body: JSON.stringify({ code })
        });
        if (result.state) applyServerState(result.state);
        showToast("Kode pengguna dihapus dari server.");
      } catch (error) {
        showToast(error.message || "Gagal menghapus kode pengguna.");
      }
      return;
    }
    const codes = getAccessCodes().filter((item) => normalizeAccessCode(item.code) !== code);
    setAccessCodes(codes);
    renderUsageTable();
    showToast("Kode pengguna dihapus.");
    return;
  }

  const button = event.target.closest("[data-copy-code]");
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.copyCode);
  } catch {
    const area = document.createElement("textarea");
    area.value = button.dataset.copyCode;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  showToast("Kode akses disalin.");
});

logoutButton.addEventListener("click", () => {
  if (!getSession()) {
    showView("home");
    return;
  }
  storeRemove("gurugenSession");
  updateLoginState();
  showView("home");
  showToast("Anda sudah keluar.");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  storeSet("gurugenTheme", document.body.classList.contains("dark") ? "dark" : "light");
});

notificationButton.addEventListener("click", () => {
  renderNotificationPopover();
  notificationPopover.classList.toggle("hidden");
  notificationBadge.classList.add("hidden");
});

saveApiTokenLimit.addEventListener("click", async () => {
  if (isServerApp) {
    try {
      const result = await apiRequest("/api/admin/tokens", {
        method: "PATCH",
        headers: adminHeaders(),
        body: JSON.stringify({ limit: Math.max(0, Number(apiTokenLimit.value || 0)) })
      });
      if (result.state) applyServerState(result.state);
      renderNotificationPopover();
      showToast("Limit token API disimpan di server.");
    } catch (error) {
      showToast(error.message || "Gagal menyimpan limit token.");
    }
    return;
  }
  const state = getApiTokenState();
  state.limit = Math.max(0, Number(apiTokenLimit.value || 0));
  setApiTokenState(state);
  renderNotificationPopover();
  showToast("Limit token API disimpan.");
});

adminMenus.forEach((item) => {
  item.addEventListener("click", () => showAdminSection(item.dataset.adminSection));
});

document.querySelector("#wordButton").addEventListener("click", () => {
  if (preview.dataset.generated !== "true") {
    showToast("Generate dokumen terlebih dahulu sebelum download Word.");
    return;
  }
  downloadFile("gurugen-dokumen.doc", "application/msword", documentShell(preview.innerHTML));
  showToast("File Word berhasil dibuat.");
});

document.querySelector("#pdfButton").addEventListener("click", () => printCleanDocument());

historyList.addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-delete-id]");
  if (deleteButton) {
    event.stopPropagation();
    if (isServerApp && getSession()) {
      try {
        const result = await apiRequest("/api/history", {
          method: "DELETE",
          body: JSON.stringify({ code: getSession().accessCode, id: deleteButton.dataset.deleteId })
        });
        let allHistory = {};
        try {
          const parsed = JSON.parse(storeGet("gurugenHistory", "{}"));
          allHistory = Array.isArray(parsed) ? { [currentUserKey()]: parsed } : parsed;
        } catch {
          allHistory = {};
        }
        allHistory[currentUserKey()] = result.history || [];
        storeSet("gurugenHistory", JSON.stringify(allHistory));
        renderHistory();
        showToast("Riwayat dokumen dihapus dari server.");
      } catch (error) {
        showToast(error.message || "Gagal menghapus riwayat.");
      }
      return;
    }
    const history = getHistory().filter((entry) => String(entry.id) !== deleteButton.dataset.deleteId);
    setHistory(history);
    showToast("Riwayat dokumen dihapus.");
    return;
  }

  const button = event.target.closest(".history-item");
  if (!button) return;
  const item = getHistory().find((entry) => String(entry.id) === button.dataset.id);
  if (!item) return;
  preview.innerHTML = item.html;
  lastGenerated = item;
  setStatus("Riwayat dimuat");
  showToast("Dokumen dari riwayat dimuat.");
});

updateWizard(0);
updateDetailFields();
renderDraft();
renderHistory();
updateLoginState();
updateQuotaText();
getAccessCodes();
renderAccessCodes();
renderAdminNotices();
renderApiTokenState();
checkAiStatus();
loadServerState();
if (storeGet("gurugenTheme") === "dark") {
  document.body.classList.add("dark");
}
openInitialView();
