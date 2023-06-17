import React from 'react';

const ParkingModel = () => (
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
     <h2 style={{ marginBottom: '10px' }}>Parking 3D Model</h2>
    <iframe style={{
        width: '100%',
        height: '100%',
      }} title="AIRCRAFT PARKING SIMULATION" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/944eff4671ef4616ac57f9abb3d94850/embed"> </iframe>
       
    
  
  </div>
);

export default ParkingModel;
