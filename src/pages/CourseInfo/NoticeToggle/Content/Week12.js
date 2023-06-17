
import fweek12_1_1 from '../../../../assets/images/week12_1_1.png'
import fweek12_6_1 from '../../../../assets/images/week12_6_1.png'
import fweek12_6_2 from '../../../../assets/images/week12_6_2.jpg'
import fweek12_7_1 from '../../../../assets/images/week12_7_1.png'
import fweek12_7_2 from '../../../../assets/images/week12_7_2.png'
import fweek12_8_1 from '../../../../assets/images/week12_8_1.png'
import React from 'react';
import Slideshow from '../ImageSlider'

import "./Weekcss.css"
const Week12 = () => {
  
  
                  
      const data6 = {
        images: [],
        imageLabels: [],
        title: '1. Airport Noise Impacts',
        description: 'Airport noise impacts are the effects of the loud sounds produced by airplanes and other activities at airports. These impacts can be bothersome and disruptive to nearby communities. The noise from aircraft taking off, landing, and taxiing can disturb people’s sleep, interrupt daily activities, and cause annoyance.'
      };
      
      const data7 = {
        images: [],
        imageLabels: [],
        title: '2. Measurement of Noise',
        description: 'To objectively measure the impact of airport noise, techniques such as the noise exposure forecast, community noise equivalent level, and day/night average sound level are used. The Ldn system is commonly employed, considering factors like aircraft loudness, flight paths, and the frequency of events during the day and night.'
      };
      
      const data8 = {
        images: [fweek12_1_1],
        imageLabels: [],
        title: '3. Air Quality',
        description: 'The environmental impact of airport operations is a significant concern that cannot be overlooked. Emissions from aircraft engines, ground vehicles, and various airport activities contribute to air pollution and reduce air quality. Federal regulations, such as the Clean Air Act, aim to regulate and control major pollutants emitted by airports.'
      };
      
      const data9 = {
        images: [],
        imageLabels: [],
        title: '4. Water Quality',
        description: 'There are several sources of water pollution at airports, including domestic sewage from airport facilities, industrial waste such as fuel spills, and the discharge of high-temperature water from power plants.'
      };
      
      const data10 = {
        images: [],
        imageLabels: [],
        title: '5. Hazardous Water Emissions',
        description: 'Airports can release hazardous substances into water if they are not properly managed. These substances can include pollutants from airport facilities, industrial waste like fuel spills, and runoff from deicing operations.'
      };
      
      const data11 = {
        images: [fweek12_6_1,fweek12_6_2],
        imageLabels: [],
        title: '6. Externalities',
        description: 'Externalities in the context of airports are the unintended consequences or side effects that go beyond the airport itself and affect the surrounding areas.'
      };
      
      const data12 = {
        images: [fweek12_7_1,fweek12_7_2],
        imageLabels: [],
        title: '7. Economic and Environmental Sustainability Practices',
        description: 'Economic and environmental sustainability practices at airports refer to actions taken to ensure long-term balance between economic growth and environmental protection. In simple terms, it means finding ways to make airports economically successful while minimizing their negative impact on the environment.'
      };
      
      const data13 = {
        images: [fweek12_8_1],
        imageLabels: [],
        title: 'Social Responsibilities ',
        description: " Social responsibilities of airports refer to the obligations and actions taken by airports to positively impact the communities they serve. In simple terms, it means airports taking care of the people and society around them. This can include initiatives such as creating job opportunities for local residents, supporting local businesses, providing accessible facilities for people with disabilities, promoting diversity and inclusion in hiring practices, and contributing to community development projects." 
        
      };
 

     

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

       <h3>T  Environmental effects of airport</h3>
      <p>
    

The environmental effects of airports refer to the impacts that airports have on the natural environment and surrounding ecosystems
 </p>
    
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data6} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data7} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data8} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data9} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data10} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data11} />
    </div>  
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data12} />
    </div>
   

   <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data13} />
    </div>
   
  
  
  </div>


  
  );
};

export default Week12;
