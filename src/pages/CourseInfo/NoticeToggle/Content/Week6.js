import "./Weekcss.css"
import React from 'react';
import Slideshow from '../ImageSlider'
import  assistance  from '../../../../assets/images/week6/assistance.jpg'
import  week6_1_1 from '../../../../assets/images/week6_1_1.jpg'
import  week6_2_1 from '../../../../assets/images/week6_2_1.jpg'
import  week6_3_1 from '../../../../assets/images/week6_3_1.jpg'
import week6_4_1 from '../../../../assets/images/week6_4_1.jpg'
import week6_5_1 from '../../../../assets/images/week6_5_1.jpg'
import week6_6_1 from '../../../../assets/images/week6_6_1.jpg'
import week6_6_2 from '../../../../assets/images/week6_6_2.jpg'
import week6_7_1 from '../../../../assets/images/week6_7_1.jpg'
import week6_8_1 from '../../../../assets/images/week6_8_1.jpg'
import week6_8_2 from '../../../../assets/images/week6_8_2.jpg'

import week62_1_1 from '../../../../assets/images/week62_1_1.jpg'
import week62_2_1 from '../../../../assets/images/week62_2_1.jpg'
import week62_3_1 from '../../../../assets/images/week62_3_1.jpg'
import week62_4_1 from '../../../../assets/images/week62_4_1.jpg'
import week62_5_1 from '../../../../assets/images/week62_5_1.png'
import week62_6_1 from '../../../../assets/images/week62_6_1.jpg'
import week62_6_2 from '../../../../assets/images/week62_6_2.jpg'
import week62_9_1 from '../../../../assets/images/week62_9_1.jpg'
import week62_10_1 from '../../../../assets/images/week62_10_1.jpg'
import week62_11_1 from '../../../../assets/images/week62_11_1.png'
import week62_12_1 from '../../../../assets/images/week62_12_1.jpg'
import week62_13_1 from '../../../../assets/images/week62_13_1.jpg'




const Week6 = () => {
  
const data = [
        {
          "title": "Check-in",
          "description": "Passengers start by checking in at the airline counter or using self-service kiosks. They provide their identification documents, receive boarding passes, and drop off their luggage if needed.",
          "images": [week6_1_1],
          "imageLabels": []
        },
        {
          "title": "Security screening",
          "description": "Passengers go through security checkpoints where their belongings and they are screened to ensure safety. They need to follow rules regarding liquids, electronics, and other prohibited items.",
          "images": [week6_2_1],
          "imageLabels": []
        },
        {
          "title": "Boarding",
          "description": "Once through security, passengers proceed to their designated boarding gate. They present their boarding pass and identification before boarding the aircraft. Boarding is usually organized by zones or groups.",
          "images": [week6_3_1],
          "imageLabels": []
        },
        {
          "title": "Assistance",
          "description": "Airlines and airport staff are available to provide assistance to passengers with special needs, such as those with disabilities or children traveling alone. They ensure these passengers receive the necessary support throughout the journey.",
          "images": [assistance],
          "imageLabels": []
        },
        {
          "title": "Departure",
          "description": "Passengers aboard the aircraft and find their seats. The cabin crew provides safety instructions and assists with any immediate needs. Once everyone is settled, the plane takes off.",
          "images": [week6_5_1],
          "imageLabels": []
        },
        {
          "title": "In-flight services",
          "description": "During the flight, passengers may receive food and beverages, entertainment, and other amenities depending on the airline and flight duration.",
          "images": [week6_6_1,week6_6_2],
          "imageLabels": []
        },
        {
          "title": "Arrival",
          "description": "Upon landing, passengers disembark and follow signs to the baggage claim area. They collect their checked luggage and proceed through customs and immigration processes, if applicable.",
          "images": [week6_7_1],
          "imageLabels": []
        },
        {
          "title": "Ground transportation",
          "description": "Passengers exit the airport and have various options for ground transportation, such as taxis, buses, rental cars, or pre-arranged rides. Airport staff may provide guidance and information about these options.",
          "images": [week6_8_1],
          "imageLabels": []
        }
      ]
      
    const  data2 = [
        {
            "title": "Aircraft Marshaling",
            "description": "Ground handling staff use hand signals and paddles to guide the pilot while taxiing, parking, and positioning the aircraft on the ramp.",
            "images": [week62_1_1],
            "imageLabels": []
        },
        {
            "title": "Aircraft Parking",
            "description": "The ground handling staff assists in parking the aircraft at the designated spot on the ramp, ensuring proper alignment and adherence to safety regulations.",
            "images": [week62_2_1],
            "imageLabels": []
        },
        {
            "title": "Aircraft Chocking",
            "description": "Wheel chocks are placed in front of and behind the aircraft's wheels to prevent any unintended movement during ground operations.",
            "images": [week62_3_1],
            "imageLabels": []
        },
        {
            "title": "Aircraft Ground Power",
            "description": "External power units are connected to the aircraft to provide electrical power while it is on the ground, allowing the engines to be shut down and reducing fuel consumption.",
            "images": [week62_4_1],
            "imageLabels": []
        },
        {
            "title": "Aircraft Ground Air Conditioning",
            "description": "Ground air conditioning units may be connected to the aircraft to provide cooling or heating while the engines are not running.",
            "images": [week62_5_1],
            "imageLabels": []
        },
        {
            "title": "Aircraft Fueling",
            "description": "Fuel trucks or hydrant systems are used to refuel the aircraft on the ramp. This process is supervised by a fueling technician to ensure correct fueling procedures are followed.",
            "images": [week62_6_1,week62_6_2],
            "imageLabels": []
        },
        {
            "title": "Aircraft Lavatory and Water Servicing",
            "description": "Lavatory waste tanks are emptied, and potable water tanks are filled as necessary.",
            "images": [],
            "imageLabels": []
        },
        {
            "title": "Aircraft Catering",
            "description": "Catering trucks deliver meals, snacks, and beverages to the aircraft to replenish the onboard supplies.",
            "images": [],
            "imageLabels": []
        },
        {
            "title": "Aircraft Baggage and Cargo Handling",
            "description": "Baggage and cargo are loaded onto or unloaded from the aircraft using conveyor belts, dollies, or other handling equipment.",
            "images": [week62_9_1],
            "imageLabels": []
        },
        {
            "title": "Aircraft Pre-Flight Checks",
            "description": "The ground crew performs visual inspections and checks the aircraft's external components, such as lights, antennas, and sensors, to ensure they are functioning properly.",
            "images": [week62_10_1],
            "imageLabels": []
        },
        {
          "title": "Aircraft De-Icing/Anti-Icing",
          "description": "In cold weather conditions, de-icing or anti-icing fluids may be applied to the aircraft's surfaces to remove or prevent the formation of ice.",
          "images": [week62_11_1],
          "imageLabels": []
      },
      {
        "title": "Aircraft Pushback and Towing",
        "description": "Tow tractors or pushback tugs are used to move the aircraft away from the parking spot and position it for taxiing.",
        "images": [week62_12_1],
        "imageLabels": []
    },
    {
      "title": "Aircraft Engine Start-up",
      "description": "The ground crew assists in starting the aircraft engines, following the specific procedures and protocols.",
      "images": [week62_13_1],
      "imageLabels": []
  }
    ]
    

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3 style={{textAlign: "center", margin: "20px"}}>Passenger Handling </h3>
    {data.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Slideshow data={step} />
        </div>
      ))}

<h3 style={{textAlign: "center", margin: "20px"}}>Aircraft Ramp Servicing </h3>
{data2.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Slideshow data={step} />
        </div>
      ))}

  </div>
  
  );
};

export default Week6;
