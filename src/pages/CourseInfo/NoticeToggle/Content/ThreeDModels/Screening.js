import React from 'react';

const Screening = () => (
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

<h2 style={{ marginBottom: '10px' }}>ATC 3D Model</h2>
        <iframe
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        
        style={{
            width: '100%',
            height: '100%',
        }} 
        title="3D X-Ray Transition" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/83319ce4a2f946f09127476e7283ddae/embed"> </iframe>
    </div>
);

export default Screening;
