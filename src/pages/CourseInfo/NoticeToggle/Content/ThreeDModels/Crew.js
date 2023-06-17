import React from 'react';

const Crew = () => (
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

<h2 style={{ marginBottom: '10px' }}>Crew 3D Model</h2>
        <iframe
         style={{
            width: '100%',
            height: '100%',
        }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        
        title="Airport Ground Crew Men" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/767a9f56df744fecbe9966f7e0cf2318/embed"> </iframe>
    </div>
);

export default Crew;
