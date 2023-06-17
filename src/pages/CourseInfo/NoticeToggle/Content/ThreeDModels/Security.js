import React from 'react';

const SketchfabEmbed = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '600px', // Adjust the height as needed
      width: '800px', // Adjust the width as needed
      margin: '0 auto',
    }}
  >
     <h2 style={{ marginBottom: '10px' }}>Security 3D Model</h2>
    <iframe
      title="Sci-Fi Security X-Ray"
      frameBorder="0"
      allowFullScreen
      mozAllowFullScreen="true"
      webkitAllowFullScreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      execution-while-out-of-viewport
      execution-while-not-rendered
      web-share
      src="https://sketchfab.com/models/eecb0813fb0743c7aa012f42fecbc645/embed"
      style={{
        width: '100%',
        height: '100%',
      }}
    ></iframe>
  
  </div>
);

export default SketchfabEmbed;
