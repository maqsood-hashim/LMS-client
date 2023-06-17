import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoUrl }) => {
  const videoId = videoUrl.split('v=')[1]; // Extract the YouTube video ID from the URL

  const opts = {
    width: '700', // Set the desired width in pixels
    height: '600', // Set the desired height in pixels
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '1000px', // Set the desired height for the outer div
        width: '100%', // Set the desired width for the outer div
        background: '#222', // Set the desired background color for the outer div
      }}
    >
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
