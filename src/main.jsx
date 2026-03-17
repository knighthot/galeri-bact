import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Buat fungsi untuk menjalankan galeri
function jalankanGaleri() {
  // 1. Cari container slider bawaan CMS
  // Perhatikan ada 3 tanda strip (---) di kata image-slider
  const container = document.querySelector('.paragraph--type---image-slider');

  if (container) {
    // 2. Ambil semua URL gambar dari HTML
    const images = Array.from(container.querySelectorAll('img')).map(img => img.src);

    // 3. Kosongkan HTML bawaan agar tidak numpuk
    container.innerHTML = '';

    // 4. Render App React ke dalam container
    const root = createRoot(container);
    root.render(<App images={images} />);
    
    console.log("Sukses: Galeri berhasil dimuat!");
  } else {
    console.error("Gagal: Container CMS tidak ditemukan di HTML!");
  }
}

// PERINTAH TUNGGU: Pastikan HTML sudah dirender 100% sebelum menjalankan fungsi
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', jalankanGaleri);
} else {
  jalankanGaleri();
}