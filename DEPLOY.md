# Deploy GuruGen AI

Panduan ini untuk menyiapkan GuruGen AI agar bisa diakses guru lain lewat link publik.

## 1. Siapkan akun

Anda membutuhkan:

- Akun OpenAI API dan API key.
- Akun hosting Node.js, contoh Render atau Railway.
- Domain opsional, misalnya `gurugenai.id`.
- Supabase opsional untuk database online.

## 2. Deploy ke Render

1. Upload project ini ke GitHub.
2. Buka Render, pilih **New Web Service**.
3. Hubungkan repository GuruGen AI.
4. Render akan membaca `render.yaml`.
5. Isi environment variable rahasia:

```text
OPENAI_API_KEY=isi_api_key_openai
ADMIN_PIN=pin_admin_rahasia
```

6. Deploy.
7. Buka URL dari Render, contoh:

```text
https://gurugen-ai.onrender.com
```

8. Admin dibuka lewat:

```text
https://gurugen-ai.onrender.com#admin
```

## 3. Catatan database

Versi saat ini menyimpan data ke file lokal:

```text
data/gurugen-db.json
```

Ini sudah cukup untuk uji coba lokal dan demo terbatas. Untuk penggunaan banyak guru, gunakan database online agar data tidak hilang ketika hosting restart.

## 4. Persiapan Supabase

1. Buat project Supabase.
2. Buka **SQL Editor**.
3. Jalankan isi file `supabase-schema.sql`.
4. Simpan `SUPABASE_URL` dan `SUPABASE_SERVICE_ROLE_KEY`.

Tahap berikutnya pada kode adalah menghubungkan `serve.js` ke Supabase sebagai pengganti `data/gurugen-db.json`.

## 5. Pengaturan keamanan wajib

Ubah PIN admin:

```text
ADMIN_PIN=pin_yang_panjang_dan_sulit_ditebak
```

Jangan pernah membagikan:

- `OPENAI_API_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- isi file `.env`

## 6. Cek setelah deploy

Buka:

```text
/api/health
```

Jika muncul:

```json
{ "ok": true, "service": "gurugen-ai" }
```

server sudah hidup.
