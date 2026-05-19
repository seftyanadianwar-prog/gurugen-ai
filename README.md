# GuruGen AI

Prototipe aplikasi generator dokumen pembelajaran untuk guru. Aplikasi ini sekarang punya dua mode:

- Mode `file://` untuk uji coba tampilan lokal.
- Mode server lokal `http://127.0.0.1:4173` untuk AI online, login terpusat, kuota, riwayat, notifikasi admin, dan data akun guru.

## Cara memakai

1. Jalankan `start-gurugen-ai.bat` atau `node serve.js`.
2. Buka `http://127.0.0.1:4173`.
3. Admin membuka `http://127.0.0.1:4173#admin`, lalu membuat kode guru.
4. Guru login memakai kode permanen dari admin.
5. Isi langkah `Identitas`.
6. Isi langkah `Detail`.
7. Buka langkah `Generate`, lalu klik `Generate Dokumen`.
8. Gunakan tombol `Download Word` atau `Download PDF`.

## Halaman admin

UI admin tidak muncul di halaman pengguna. Untuk membuka admin, tambahkan `#admin` pada URL:

```text
index.html#admin
```

Kode admin bawaan:

```text
ADMIN-2026
```

Di halaman admin, admin dapat membuat kode pengguna permanen. Kode itu menjadi identitas login guru dan bisa dipakai berulang, bukan token sekali pakai.

Untuk penggunaan publik, ubah PIN admin di `.env`:

```text
ADMIN_PIN=pin-rahasia-anda
```

Saat aplikasi dibuka lewat server, data admin tersimpan di:

```text
data/gurugen-db.json
```

File ini berisi daftar pengguna, rekap kuota harian, riwayat dokumen, notifikasi generate, dan estimasi token API.

## Menjalankan lewat server lokal

Jika browser membatasi beberapa fitur saat membuka file langsung, jalankan:

```powershell
node serve.js
```

Lalu buka:

```text
http://127.0.0.1:4173
```

## Mengaktifkan AI online

Secara default aplikasi tetap bisa generate dokumen secara lokal. Untuk memakai OpenAI API, jalankan server dengan API key:

```powershell
$env:OPENAI_API_KEY="isi_api_key_anda"
node serve.js
```

Cara lain: salin `.env.example` menjadi `.env`, isi `OPENAI_API_KEY`, lalu jalankan:

```powershell
node serve.js
```

Atau klik `start-gurugen-ai.bat`.

Opsional, pilih model di `.env`:

```powershell
$env:OPENAI_MODEL="gpt-4.1"
node serve.js
```

Untuk hosting publik, biasanya gunakan:

```text
HOST=0.0.0.0
PORT=4173
```

Saat dibuka melalui `http://127.0.0.1:4173`, tombol `Generate Dokumen` akan memakai endpoint `/api/generate`. Jika API key belum tersedia atau request gagal, aplikasi akan menampilkan pesan error agar admin bisa memperbaiki API key, billing, atau koneksi server.

## Menuju versi publik

Fondasi server lokal sudah dibuat. Agar bisa dibagikan ke guru lain lewat link publik, tahap berikutnya adalah memindahkan `data/gurugen-db.json` ke database online seperti Supabase/PostgreSQL, lalu deploy `serve.js` ke hosting seperti Render, Railway, VPS, atau layanan Node.js lain.

Project sudah punya `package.json`, jadi di hosting Node.js perintah start-nya:

```text
npm start
```

Panduan deploy ada di:

```text
DEPLOY.md
```

Konfigurasi Render tersedia di:

```text
render.yaml
```

Skema awal Supabase tersedia di:

```text
supabase-schema.sql
```

## Catatan

Mode AI online memakai OpenAI Responses API jika `OPENAI_API_KEY` tersedia. Untuk penggunaan banyak guru, jangan membuka `index.html` langsung melalui `file://`; gunakan alamat server.
