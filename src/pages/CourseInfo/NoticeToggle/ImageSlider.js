import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ data }) => {
  const { images, imageLabels, title, description,video } = data;

  return (
    <div style={{ backgroundColor: '#333', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h6 style={{ marginBottom: '1rem', color: '#fff', fontSize: '24px' }}>{title}</h6>
        <p style={{ marginBottom: '2rem', color: '#ccc', fontSize: '16px' }}>{description}</p>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          {images.map((image, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#444', padding: '10px', borderRadius: '5px' }}>
              <img
                src={image}
                alt={imageLabels[index]}
                style={{ maxWidth: '70%', maxHeight: '400px' }}
              />
              <p style={{ marginTop: '0.5rem', color: '#fff', fontSize: '15px', backgroundColor: '#222', padding: '5px 10px', borderRadius: '5px' }}>{imageLabels[index]}</p>
            </div>
          ))}
        </Carousel>
        {video?  video: null}
      </div>
    </div>
  );
};

export default ImageSlider;
