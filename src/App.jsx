import React from 'react';
import DomeGallery from './DomeGallery';

// App sekarang menerima "props" bernama images dari main.jsx
export default function App() {
  const images = [
    "https://stage-bact.s3.ap-southeast-1.amazonaws.com/s3fs-public/2026-03/dji_fly_20260312_152626_0068_1773305174258_photo.jpg",
    "https://stage-bact.s3.ap-southeast-1.amazonaws.com/s3fs-public/2026-03/DJI_0223.JPG",
    "https://stage-bact.s3.ap-southeast-1.amazonaws.com/s3fs-public/2026-03/image_1.png",
    "https://stage-bact.s3.ap-southeast-1.amazonaws.com/s3fs-public/2026-03/DJI_0828_1.JPG",
    "https://stage-bact.s3.ap-southeast-1.amazonaws.com/s3fs-public/2026-03/DJI_0826_0.JPG"
  ];
  return (
    <div style={{ width: '100%', height: '650px' }}>
      <DomeGallery 
        images={images} 
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}

  grayscale={false}
      />
    </div>
  );
}