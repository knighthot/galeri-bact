import React from 'react';
import { createRoot } from 'react-dom/client';
import DomeGallery from './DomeGallery';

// 1. Cari container slider bawaan CMS
const container = document.querySelector('.paragraph--type---image-slider');

if (container) {
  // 2. Ambil semua URL gambar dari HTML CMS
  const images = Array.from(container.querySelectorAll('img')).map(img => img.src);

  // 3. Hapus isi HTML bawaan CMS agar tidak dobel
  container.innerHTML = '';

  // 4. Render Dome Gallery dengan gambar hasil tarikan dan settinganmu
  const root = createRoot(container);
  
  root.render(
    <div style={{ width: '100%', height: '650px' }}>
      <DomeGallery 
        images={images} /* <-- Memasukkan gambar hasil querySelector */
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale={true}
      />
    </div>
  );
}

export default App
