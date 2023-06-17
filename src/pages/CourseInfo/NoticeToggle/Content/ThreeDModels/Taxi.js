import React from 'react';

const Taxi = () => (
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
     <h2 style={{ marginBottom: '10px' }}>AirLine structure 3D Model</h2>
     <iframe  style={{
            width: '100%',
            height: '100%',
        }} title="Airport (Bigger)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/705f23e00a4140a29007b7c0269856cc/embed"> </iframe>
  </div>
);

export default Taxi;
