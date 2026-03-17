import React from 'react';
import DomeGallery from './DomeGallery';

// App sekarang menerima "props" bernama images dari main.jsx
export default function App({ images }) {
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