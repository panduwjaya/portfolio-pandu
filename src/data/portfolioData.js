// ============================================================
// src/data/portfolioData.js
// Semua data & link yang bisa diubah dengan mudah di sini
// ============================================================
import fotoProfil from "../assets/foto-profil.jpg";
import temanJalan from "../assets/teman-jalan.png";
import plantScan from "../assets/plant-scan.png";
import storyApp from "../assets/story-app.png";
import myRestaurant from "../assets/my-restaurant.png";
import cropOptima from "../assets/crop-optima.png";

export const links = {
  cv: "https://drive.google.com/file/d/1yF67vULpzJTit5lYtEzjAAiNINf9OSCy/view?usp=sharing",
  whatsapp: "https://wa.me/6287898902254",
  github: "https://github.com/panduwjaya",
  linkedin: "https://www.linkedin.com/in/panduwijya/",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=nama@email.com",
};

export const icons = {
  portfolio: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
  cv: "https://cdn-icons-png.flaticon.com/512/1150/1150635.png",
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  linkedin:
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  github: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  email: "https://cdn-icons-png.flaticon.com/512/15047/15047587.png",
};

export const profile = {
  name: "Pandu Wijaya",
  title: "Mobile Developer | System Implementor",
  photo: fotoProfil,
  about: `Let me introduce myself, I am a graduate of Informatics Engineering from the 
    University of Lampung. I am interested in learning something new, especially in 
    a project team. I have experience working as a System Implementor at Dr. H. Abdul 
    Moeloek Hospital. Also, I have experience with Android development in a team, and 
    I have experience in team projects as a Project Leader.`,
};

export const skills = [
  "Java",
  "Kotlin",
  "Dart",
  "Jetpack Compose",
  "Flutter",
  "UI/UX Design",
  "Express JS",
];

export const projects = [
  {
    title: "Teman Jalan",
    desc: "Aplikasi Monitoring Tongkat Pintar Berbasis Jetpack Compose",
    image: temanJalan,
    githubLink: "https://github.com/panduwjaya/teman-jalan.git",
  },
  {
    title: "Plant Scan",
    desc: "Aplikasi Pendeteksi Jenis Tanaman Hutan Menggunakan Model H5",
    image: plantScan,
    githubLink: "https://github.com/panduwjaya/Sistem-Cerdas-Rekomendasi-Tanaman.git",
  },
  {
    title: "Crop Optima",
    desc: "Aplikasi Prediksi Jenis Tumbuhan Berdasarkan Lokasi Berbasis Machine Learning",
    image: cropOptima,
    githubLink: "https://github.com/panduwjaya/CropOptima-Fullteam",
  },
  {
    title: "My Restaurant",
    desc: "Aplikasi Pemesanan Makanan Berbasis Android dengan Express JS",
    image: myRestaurant,
    githubLink: "https://github.com/panduwjaya/MyRestaurant",
  },
  {
    title: "Story App",
    desc: "Aplikasi Menyimpan Cerita Berbasis Android dengan Manual Dependency Injection",
    image: storyApp,
    githubLink:
      "https://github.com/panduwjaya/StoryApp-Dicoding-Intermediate-Submision-2",
  },
];
