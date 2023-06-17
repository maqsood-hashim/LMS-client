import im1 from '../../../../assets/images/week14_1.jpeg'
import im2 from '../../../../assets/images/week14_2.jpeg'
import im3 from '../../../../assets/images/week14_3.jpeg'
import VideoPlayer from './VideoPlayer';
import Taxi from './ThreeDModels/Taxi';
import Apron from './ThreeDModels/Apron';
import Runway2 from './ThreeDModels/Runway2';
import React from 'react';
import Slideshow from '../ImageSlider'
import Crew from './ThreeDModels/Crew';
import "./Weekcss.css"
const Week14 = () => {
  const data = {
    "runways": {
    "title": "1.1 Runways",
    "description": "Runways serve as the primary surfaces for aircraft takeoffs and landings. They must adhere to strict safety standards, including appropriate lighting, markings, and runway condition monitoring systems. Regular inspections and maintenance are crucial to ensure their continuous availability.",
    "images": [],
    "imageLabels": []
    },
    "taxiways": {
    "title": "1.2 Taxiways",
    "description": "Taxiways are the pathways that connect runways with aprons and enable aircraft maneuvering on the ground. Proper markings, lighting, and signage are essential to guide pilots safely from one point to another. Effective taxiway planning and management help minimize congestion and optimize ground movement.",
    "images": [],
    "imageLabels": []
    },
    "aprons": {
    "title": "1.3 Aprons",
    "description": "Aprons are areas where aircraft park, load/unload passengers and cargo, undergo maintenance, and refuel. Apron management involves allocating parking stands, ensuring the availability of ground handling services, and maintaining a safe and organized environment for aircraft operations.",
    "images": [],
    "imageLabels": []
    }
    }
 const data14_2=
    {
        title: "2.1 Air Traffic Control (ATC):",
        description: "Air Traffic Control plays a vital role in ensuring the safe separation of aircraft in the air and on the ground. ATC provides clear instructions to pilots for takeoffs, landings, and taxiing, facilitating smooth and coordinated operations. Effective communication and collaboration between ATC, pilots, and ground personnel are essential for incident prevention",
        images: [],
        imageLabels: []
        }

      const data14_3=  [
           {
            "title": "2.2 Wildlife Management",
            "description": "Wildlife poses a significant hazard to aircraft operations. Airports implement wildlife management programs to minimize the presence of birds and other wildlife on the airfield. These programs include habitat management, bird control measures, and wildlife detection systems to reduce the risk of bird strikes.",
            "images": [im1],
            "imageLabels": []
            },
            {
            "title": "2.3 Airfield Perimeter Security",
            "description": "Airfield fencing and access control systems are implemented to prevent unauthorized entry onto the airfield. These measures ensure the security of critical infrastructure and mitigate potential threats.",
            "images": [im2],
            "imageLabels": []
            }
        ]

        const vid = <VideoPlayer videoUrl={"https://www.youtube.com/watch?v=wB3cDc4DYbs"}></VideoPlayer>
        const data14_4 = {
            "title": "Pavement Maintenance",
            "description": "Runways, taxiways, and aprons require regular inspections, repairs, and resurfacing to prevent deterioration and ensure a smooth surface for aircraft operations.",
            "images": [],
            "imageLabels": [],
            video:vid
          }

          const vid2 = <VideoPlayer videoUrl={"https://www.youtube.com/watch?v=gB7wC8wJH-M"}></VideoPlayer>
          const data14_5 = {
           
            "title": "Airfield Lighting",
            "description": "Maintenance of runway and taxiway lighting systems is essential for providing proper visibility to pilots during nighttime operations and adverse weather conditions.",
            "images": [],
            "imageLabels": [],
            video:vid2
          }
          const data14_6 = {
           
            "title": "Markings and Signage",
            "description": "Regular repainting of runway markings, taxiway signs, and other visual aids helps guide pilots safely and prevent confusion during aircraft movements",
            "images": [im3],
            "imageLabels": [],
            
          }
          

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
 <h2>Definition and Components of the Airfield</h2>

<p>The airfield refers to the designated area of an airport where aircraft operations take place. It encompasses several key components:
</p>
<div style={{ marginBottom: '20px' }}>
 
      <Slideshow data={data['runways']} />
    </div>
    <Runway2></Runway2>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data['taxiways']} />
    </div>
    <Taxi></Taxi>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data['aprons']} />
    </div>
    <Apron></Apron>

    <h2>Airfield Safety and Security</h2>

<p>Ensuring safety and security is of utmost importance in airfield operations. Several key measures are implemented to safeguard passengers, crew, and airport personnel
</p>
<div style={{ marginBottom: '20px' }}>
      <Slideshow data={data14_2} />
    </div>
<Crew></Crew>
 
  <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data14_3[0]} />
    </div>
    <div style={{ marginBottom: '20px' }}>
    <Slideshow data={data14_3[1]} />
  </div>
  <h2> Airfield Maintenance</h2>

<p>Regular maintenance is crucial to keep the airfield in optimal condition. Key maintenance activities include:
</p>
<div>
    <Slideshow data={data14_4} />
  </div>


  <div style={{ marginBottom: '20px' }}>
    <Slideshow data={data14_5} />
  </div>
  <div style={{ marginBottom: '20px' }}>
    <Slideshow data={data14_6} />
  </div>

  </div>
  
  );
};

export default Week14;
