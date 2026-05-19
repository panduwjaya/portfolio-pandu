# 🚀 Portfolio Pandu Wijaya

Portfolio website pribadi dibangun dengan **React** + **Tailwind CSS**, siap deploy ke **Vercel**.

---

## 📁 Struktur Folder

```
portfolio-pandu/
├── public/
│   └── index.html          # HTML utama
├── src/
│   ├── components/         # Komponen UI per section
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # ⚡ Semua data & link diubah di sini
│   ├── App.jsx             # Root component
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind CSS
├── .gitignore
├── package.json
├── tailwind.config.js
├── vercel.json             # Konfigurasi Vercel
└── README.md
```

---

## ✏️ Cara Mengubah Konten

Semua data (nama, link, proyek, skill) ada di satu file:

```
src/data/portfolioData.js
```

Ubah file tersebut, dan perubahan akan otomatis muncul di semua section.

---

## 🛠️ Menjalankan Secara Lokal

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm start
```

Buka browser di `http://localhost:3000`

### 3. Build untuk production
```bash
npm run build
```

---

## 🌐 Deploy ke Vercel

### Cara 1: Via GitHub (Direkomendasikan)

**Langkah 1 – Upload ke GitHub**
```bash
# Inisialisasi Git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: portfolio website"

# Buat repo baru di github.com lalu hubungkan:
git remote add origin https://github.com/USERNAME/portfolio-pandu.git

# Push ke GitHub
git push -u origin main
```

**Langkah 2 – Import ke Vercel**
1. Buka [vercel.com](https://vercel.com) → Login dengan akun GitHub
2. Klik **"Add New Project"**
3. Pilih repository `portfolio-pandu` dari daftar
4. Vercel otomatis mendeteksi **Create React App**
5. Klik **"Deploy"** → Tunggu 1–2 menit
6. Website kamu live! Vercel memberi URL seperti: `https://portfolio-pandu.vercel.app`

---

### Cara 2: Via Vercel CLI

**Langkah 1 – Install Vercel CLI**
```bash
npm install -g vercel
```

**Langkah 2 – Login**
```bash
vercel login
```

**Langkah 3 – Deploy**
```bash
# Di dalam folder proyek
vercel

# Ikuti pertanyaan:
# ? Set up and deploy? → Y
# ? Which scope? → pilih akun kamu
# ? Link to existing project? → N
# ? Project name → portfolio-pandu (atau nama lain)
# ? Directory? → ./
# ? Override settings? → N
```

**Langkah 4 – Deploy ke production**
```bash
vercel --prod
```

---

## 🔄 Update Website Setelah Deploy

Setiap kali kamu push ke GitHub:
```bash
git add .
git commit -m "Update konten portfolio"
git push
```

Vercel otomatis **re-deploy** dalam beberapa detik (jika menggunakan Cara 1).

---

## 🌍 Custom Domain (Opsional)

1. Di dashboard Vercel → pilih project → **Settings → Domains**
2. Masukkan domain kamu, misal: `panduwjaya.com`
3. Ikuti instruksi untuk update DNS di registrar domain kamu

---

## 📦 Tech Stack

| Teknologi | Versi |
|-----------|-------|
| React | 18.x |
| Tailwind CSS | 3.x |
| Create React App | 5.x |
| Vercel | Latest |
