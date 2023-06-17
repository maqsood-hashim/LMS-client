import week9_1_1 from '../../../../assets/images/week9_1_1.jpg'
import week9_1_2 from '../../../../assets/images/week9_1_2.jpg'
import week9_2_1 from '../../../../assets/images/week9_2_1.jpg'
import week9_2_2 from '../../../../assets/images/week9_2_2.png'
import week9_2_3 from '../../../../assets/images/week9_2_3.jpg'
import "./Weekcss.css"
import week9_2_4 from '../../../../assets/images/week9_3_1.jpg'
import week9_4_1 from '../../../../assets/images/week9_4_1.jpg'
import week9_4_2 from '../../../../assets/images/week9_4_2.jpg'
import week9_4_3 from '../../../../assets/images/week9_4_3.jpg'
import week9_5_1 from '../../../../assets/images/week9_5_1.jpg'
import week9_6_1 from '../../../../assets/images/week9_6_1.jpg'
import week9_7_1 from '../../../../assets/images/week9_7_1.png'
import week9_8_1 from '../../../../assets/images/week9_8_1.jpg'

import week9_9_1 from '../../../../assets/images/week9_9_1.jpg'
import week9_10_1 from '../../../../assets/images/week9_10_1.jpg'
import week9_10_2 from '../../../../assets/images/week9_10_2.jpg'
import week9_11_1 from '../../../../assets/images/week9_11_1.jpg'
import week9_12_1 from '../../../../assets/images/week9_12_1.jpg'
import week9_13_1 from '../../../../assets/images/week9_13_1.jpg'
import week9_14_1 from '../../../../assets/images/week9_14_1.jpg'
import week9_15_1 from '../../../../assets/images/week9_15_1.jpg'
import week9_16_1 from '../../../../assets/images/week9_16_1.jpg'
import week9_16_2 from '../../../../assets/images/week9_16_2.jpg'
import week9_17_1 from '../../../../assets/images/week9_17_1.jpg'
import week9_17_2 from '../../../../assets/images/week9_17_2.jpg'
import week9_18_1 from '../../../../assets/images/week9_18_1.jpg'
import week9_19_1 from '../../../../assets/images/week9_19_1.jpg'
import week9_20_1 from '../../../../assets/images/week9_20_1.jpg'
import week9_20_2 from '../../../../assets/images/week9_20_2.jpg'


import React from 'react';
import Slideshow from '../ImageSlider'

const Week9 = () => {
 const data8_1 = [

    {
        "title": "",
        "description": `Picture shows the terminal where passenger arrives and departs, as well as gather information related to any flight. Passenger terminal is the busiest place at airport where everything is happening related to flight information, lounge, waiting and sitting area, passenger arriving and leaving, security etc.
        `,
        "images": [week9_1_1,week9_1_2],
        "imageLabels": []
      },
    {
      "title": "Immersive Exhibits",
      "description": "The terminal is designed with interactive exhibits representing the cultural aspects of the local region and the destinations served by the airport. These exhibits can include displays of traditional arts, crafts, music, dance, and historical artifacts. Passengers can explore these exhibits as they move through the terminal, creating an engaging and educational environment.",
      "images": [,week9_2_4,week9_2_1,week9_2_2,week9_2_3],
      "imageLabels": []
    },
    {
      "title": "Cultural Workshops",
      "description": "The terminal hosts workshops where passengers can actively participate and learn about various cultural activities. These workshops may include pottery making, traditional cooking classes, calligraphy, or even short language lessons. Passengers can experience the destination’s culture firsthand, fostering a deeper connection and appreciation.",
      "images": [week9_4_1,week9_4_2,week9_4_3],
      "imageLabels": []
    },
    {
      "title": "Performance Spaces",
      "description": "The terminal features dedicated performance spaces where local artists, musicians, and dancers can showcase their talents. Passengers can enjoy live performances, ranging from traditional music and dance to contemporary artistic expressions. This not only entertains travelers but also promotes local talent and cultural exchange.",
      "images": [week9_5_1],
      "imageLabels": []
    },
    {
      "title": "Virtual Reality Exploration",
      "description": "To provide a broader perspective, the terminal incorporates virtual reality (VR) technology. Passengers can wear VR headsets and embark on virtual tours of famous landmarks, historical sites, or immersive experiences related to the destination’s culture. It allows travelers to explore beyond the terminal’s physical boundaries and creates anticipation for their upcoming journey.",
      "images": [week9_6_1],
      "imageLabels": []
    },
    {
      "title": "Culinary Delights",
      "description": "The terminal includes a dedicated area featuring authentic local cuisine. Passengers can savor traditional dishes and beverages, offering a tantalizing preview of the destination’s culinary delights. It also provides an opportunity for local chefs and food vendors to showcase their expertise, boosting the region’s gastronomic identity.",
      "images": [week9_7_1],
      "imageLabels": []
    },
    {
      "title": "Artisan Market",
      "description": "Within the terminal, there is an artisan market where local craftsmen and artisans can sell their handmade products. This allows passengers to purchase unique souvenirs and support the local economy. The market’s vibrant atmosphere further immerses travelers in the destination’s cultural tapestry.",
      "images": [week9_8_1],
      "imageLabels": []
    }
  ]
  
var data8_2  = [
    {
      "title": "Check-in",
      "description": "This is where passengers go to register for their flight and check in their luggage.",
      "images": [week9_9_1],
      "imageLabels": []
    },
    {
      "title": "Security screening",
      "description": "After check-in, passengers must go through a security screening process to ensure that they are not carrying any prohibited items.",
      "images": [week9_10_1,week9_10_2],
      "imageLabels": []
    },
    {
      "title": "Boarding",
      "description": "Once the aircraft is ready, passengers will be called to board the plane and take their seats.",
      "images": [week9_11_1],
      "imageLabels": []
    },
    {
      "title": "Departure lounge",
      "description": "Passengers who have already checked in can wait in the departure lounge until their flight is called.",
      "images": [week9_12_1],
      "imageLabels": []
    },
    {
      "title": "Gate",
      "description": "This is where passengers board the aircraft and get onto the plane.",
      "images": [week9_13_1],
      "imageLabels": []
    },
    {
      "title": "Arrivals hall",
      "description": "Once passengers arrive at their destination, they will go to the arrivals hall to collect their luggage and clear immigration and customs.",
      "images": [week9_14_1],
      "imageLabels": []
    },
    {
      "title": "Baggage claim",
      "description": "This is where passengers collect their luggage after arriving at their destination.",
      "images": [week9_15_1],
      "imageLabels": []
    },
    {
      "title": "Information desk",
      "description": "The information desk is where passengers can ask for help and information about their flight or the airport.",
      "images": [week9_16_1,week9_16_2],
      "imageLabels": []
    },
    {
      "title": "Restaurants and shops",
      "description": "Passengers can also find restaurants and shops in the terminal, where they can eat, drink, or buy souvenirs.",
      "images": [week9_17_1,week9_17_2],
      "imageLabels": []
    },
    {
      "title": "Parking lot",
      "description": "Passengers who drive to the airport can park their car in the parking lot, which is usually located near the terminal building.",
      "images": [week9_18_1,week9_19_1],
      "imageLabels": []
    }
  ]
  
 const data8_3 =  
  [
    {
      "title": "Customized Design",
      "description": "Uniqueness implies that terminal designs should be customized to suit the specific requirements and constraints of a given location. Factors such as space, infrastructure, environmental considerations, and regulatory frameworks should be taken into account to optimize the terminal layout and ensure efficient operations.",
      "images": [week9_20_1,week9_20_2],
      "imageLabels": []
    },
    {
      "title": "Tailored Operations",
      "description": "Terminal management philosophy based on uniqueness recognizes that the operations within each terminal are distinct, with unique challenges and priorities. This approach involves developing operational procedures, workflows, and strategies that are tailored to the terminal’s characteristics, such as the types of cargo or passengers being handled, peak traffic patterns, and safety protocols.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Adaptability and Flexibility",
      "description": "Uniqueness also highlights the importance of adaptability and flexibility in terminal management. Terminals are dynamic environments, influenced by changing market conditions, technological advancements, and evolving customer expectations. Terminal managers must be open to adapting strategies and processes to address emerging trends and optimize operations.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Collaboration and Integration",
      "description": "While uniqueness emphasizes the distinctiveness of each terminal, it does not negate the importance of collaboration and integration within the larger transportation system. Terminals are interconnected nodes within a broader network, and effective terminal management requires coordination with other terminals, transportation modes, and stakeholders to ensure smooth and efficient movement of goods and people.",
      "images": [],
      "imageLabels": []
    }
  ]
  
const data8_4 = [
    {
      "title": "Nonstop Travel",
      "description": "Direct passenger services provide nonstop travel from the origin to the destination without any layovers or transfers. This means that passengers can reach their destination faster and with fewer disruptions compared to connecting flights or other modes of transportation.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Time Efficiency",
      "description": "By eliminating the need for layovers or transfers, direct passenger services save passengers valuable time. Passengers don’t have to go through the hassle of navigating busy airports, waiting for connecting flights, or dealing with potential delays or cancellations. This time efficiency is particularly beneficial for short-haul journeys where the time spent on transfers can be a significant portion of the total travel time.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Convenience",
      "description": "Direct passenger services offer a high level of convenience to travelers. Passengers can board the flight at their origin and disembark at their destination without the need to change planes or undergo security checks multiple times. This simplicity and ease of travel contribute to a more seamless and enjoyable experience.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Improved Connectivity",
      "description": "Direct passenger services improve connectivity between different cities and regions. They enable travelers to reach their desired destinations that may not be well-served by connecting flights or other transportation modes. Direct services can also stimulate travel demand by making previously inconvenient routes more accessible.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Enhanced Comfort",
      "description": "Direct passenger services often operate on larger aircraft, providing more spacious cabins, comfortable seating, and additional amenities compared to regional or connecting flights. Passengers can enjoy a more relaxed and comfortable journey, especially on long-haul routes.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Reduced Stress",
      "description": "The simplicity and predictability of direct passenger services reduce travel-related stress. Passengers don’t have to worry about missing connecting flights, handling luggage transfers, or dealing with complex itineraries. This can lead to a more relaxed and enjoyable travel experience.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Customization",
      "description": "Direct passenger services can be tailored to specific needs and preferences. Airlines have the flexibility to design routes based on customer demand, allowing them to serve popular destinations or niche markets efficiently. This customization enhances the overall travel experience by providing more options for passengers.",
      "images": [],
      "imageLabels": []
    },
    {
      "title": "Advantages of Direct Passenger Services",
      "description": "While direct passenger services may not be available for all destinations, they offer significant advantages when they are offered. They provide a streamlined, efficient, and hassle-free way to travel, making them a preferred choice for many passengers seeking convenience and time savings.",
      "images": [],
      "imageLabels": []
    }
  ]
  


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>8.1:FUNCTION OF PASSENGER TERMINAL</h2>
      <p>A passenger terminal is a building where passengers arrive and depart from flights. Passengers check-in at the terminal before their flight. This involves presenting their passport or ID, receiving their boarding pass and checking in their luggage. After security, passengers wait in the departure lounge for their flight to be called. The lounge usually has seating, restrooms, and food and beverage options. The terminal is a busy and complex environment, so it's important for passengers to stay alert and aware of their surroundings at all time</p>
{data8_1.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}


<h2>8.2	TERMINAL FUNCTIONS</h2>
     {data8_2.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}


<h2>8.3	PHILOSOPHIES OF TERMINAL MANAGEMENT</h2>
     {data8_3.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}

<h2>8.4	PHILOSOPHIES OF TERMINAL MANAGEMENT</h2>
     {data8_4.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}

    
  </div>
  
  );
};

export default Week9;
