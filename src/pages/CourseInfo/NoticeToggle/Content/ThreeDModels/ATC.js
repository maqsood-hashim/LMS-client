import React from 'react';

const AtcModel = () => (
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
        }} title="Airport Tower"
         frameborder="0" 
         allowfullscreen mozallowfullscreen="true" 
         webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c5fa752238a54a2dbe8ac6f768a785e5/embed"> </iframe>

    </div>
);

export default AtcModel;
