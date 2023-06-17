import React from 'react';

const SketchfabEmbed = () => (
  <div className="sketchfab-embed-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '600px' }}>
     <h2 style={{ marginBottom: '10px' }}>Runway 3D Model</h2>
    <iframe
      title="Airport"
      frameBorder="0" 
      allowFullScreen
      mozAllowFullScreen="true"
      webkitAllowFullScreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      src="https://sketchfab.com/models/734cef12f0a045df93fc8aa41401a123/embed"
      style={{ width: '100%', height: '100%' }}
    ></iframe>
    <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
      <a
        href="https://sketchfab.com/3d-models/airport-734cef12f0a045df93fc8aa41401a123?utm_medium=embed&utm_campaign=share-popup&utm_content=734cef12f0a045df93fc8aa41401a123"
        target="_blank"
        rel="nofollow"
        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
      >
        Airport
      </a>{' '}
      {/* by{' '}
      <a
        href="https://sketchfab.com/nermin?utm_medium=embed&utm_campaign=share-popup&utm_content=734cef12f0a045df93fc8aa41401a123"
        target="_blank"
        rel="nofollow"
        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
      >
        nermin
      </a>{' '}
      on{' '}
      <a
        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=734cef12f0a045df93fc8aa41401a123"
        target="_blank"
        rel="nofollow"
        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
      >
        Sketchfab
      </a> */}
    </p>
  </div>
);

export default SketchfabEmbed;
