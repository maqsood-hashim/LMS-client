import im1 from '../../../../assets/images/BaggageHandling.jpg'
import "./Weekcss.css"
import AtcModel from './ThreeDModels/ATC'
import im2 from '../../../../assets/images/ControllingTower.png'
import im3 from '../../../../assets/images/fueling.jpg'
import im4 from '../../../../assets/images/Runaway.jpg'
import im5 from '../../../../assets/images/Runaway2.jpg'

import week3_2_1 from '../../../../assets/images/week3_2_1.jpg'
import week3_3_1 from '../../../../assets/images/week3_3_1.jpg'
import week3_3_2 from '../../../../assets/images/week3_3_2.jpg'
import week3_3_3 from '../../../../assets/images/week3_3_3.jpg'

import  week4_1 from '../../../../assets/images/public_private_airport.gif'
import faaModel from '../../../../assets/images/FaaRole.gif'
import React from 'react';
import Slideshow from '../ImageSlider'

import  week3_6_1 from '../../../../assets/images/week3_6_1.jpg'
import  week3_6_2 from '../../../../assets/images/week3_6_2.jpg'
import  week3_6_3 from '../../../../assets/images/week3_6_3.jpg'

import  week3_7_1 from '../../../../assets/images/week3_7_1.jpg'
import  week3_7_2 from '../../../../assets/images/week3_7_2.jpg'

import  week3_8_1 from '../../../../assets/images/week3_8_1.jpg'
import  week3_8_2 from '../../../../assets/images/week3_8_2.jpg'

import week3_12_1 from "../../../../assets/images/week3_12_1.png"

import week3_9_1 from "../../../../assets/images/FaaRegional.gif"

import week3_10_1 from "../../../../assets/images/ICAO.gif"

import week3_11_1 from "../../../../assets/images/NPIAS.gif"
const Week3 = () => {
  const data1 = {
    images: [im1, im2, im3,im4,im5],
    imageLabels: ['Baggage Handling', 'Controlling Tower', 'fueling','Terminal', 'Runaway'],
    title: '1. Airports are complex systems: ',
    description: 'Airports are intricate infrastructures that encompass a wide range of facilities, catering to diverse users, employing numerous workers, aoperatingate under various regulations. They are not just transportation hubs but also include services such as terminals, runways, control towers, baggage handling, fueling, and maintenance facilities. ',
  };
  const data2 = {
    images: [week3_2_1],
    imageLabels: [],
    title: '2. The United States has the highest number of airports',
    description: "The US boasts the largest number of airports globally, with over half of the world's airports located within its borders. Moreover, it is home to approximately two-thirds of the busiest airports worldwide, showcasing the country's significant air traffic and connectivity",
  };
  const data3 = {
    images: [week3_3_1, week3_3_2, week3_3_3],
    imageLabels: ['Conventional Airports', 'Heliports', 'Seaplane'],
    title: "3. Different types of civil landing areas",
    description: 'Civil aviation includes various types of landing areas. In addition to fixed-wing landing facilities for conventional airplanes, there are heliports designated for helicopter operations and seaplane bases where seaplanes can take off and land on bodies of water.',
  };
  const data4 = {
    images: [week4_1],
    imageLabels: ['Public and private Owned Airports'],
    title: '4. Public and privately owned airports',
    description: 'While most airports in the US are privately owned and intended for private use, more than 5,200 airports are open to the general public. These public airports serve commercial airlines, private aircraft, and other aviation activities, facilitating both domestic and international travel',
  };
  const data5 = {
    images: [faaModel],
    imageLabels: [],
    title: '4. Public and privately owned airports',
    description: ' The FAA is the governing body responsible for overseeing civil aviation in the United States. It plays a crucial role in ensuring safety, certification, air traffic control, and regulatory compliance within the aviation industry. The FAA sets standards and guidelines for aircraft operations, airport infrastructure, and aviation personnel',
  };
  const data6 = {
    images: [week3_6_1,week3_6_2,week3_6_3],
    imageLabels: [],
    title: '6. Measuring airport activity',
    description: 'Airport activity is assessed through various metrics, including the number of passengers, cargo volume, aircraft operations (takeoffs and landings), and based aircraft (aircraft stored or maintained at the airport). These measurements provide insights into the overall usage and demand at an airport.',
  };
  const data7 = {
    images: [week3_7_1,week3_7_2],
    imageLabels: [],
    title: '7. Passenger activity',
    description: 'Passenger activity at airports is measured through two key metrics. Enplanements represent the number of passengers boarding flights, while deplanements reflect the number of passengers disembarking from flights. These metrics help gauge passenger traffic and demand at airports',
  };
  const data8 = {
    images: [week3_8_1,week3_8_2],
    imageLabels: [],
    title: '8. Cargo activity',
    description: 'Cargo activity is vital for airports that handle freight and mail. The movement of goods and mail through airports is essential for trade, e-commerce, and logistical operations. Airports play a crucial role in facilitating efficient cargo operations and ensuring the timely transportation of goods.',
  };


  const data9 = {
    images: [week3_9_1],
    imageLabels: [],
    title: '9. FAA regional offices',
    description: 'Passenger activity at airports is measured through two key metrics. Enplanements represent the number of passengers boarding flights, while deplanements reflect the number of passengers disembarking from flights. These metrics help gauge passenger traffic and demand at airports',
  };
  const data10 = {
    images: [week3_10_1],
    imageLabels: [],
    title: '10. Role of the International Civil Aviation Organization (ICAO)',
    description: 'The ICAO sets international standards and regulations for airport management, operations, safety, security, and environmental protection. It provides guidelines and best practices that promote harmonization and consistency in global aviation practices',
  };
  const data11 = {
    images: [week3_11_1],
    imageLabels: [],
    title: '11. National Plan of Integrated Airport Systems (NPIAS)',
    description: 'The NPIAS categorizes airports in the US based on their service and enplanement numbers. It serves as a comprehensive plan that identifies the role and significance of each airport in the national air transportation system. This plan helps prioritize airport development projects and determines federal funding eligibility.',
  };
  const data12 = {
    images: [week3_12_1],
    imageLabels: [],
    title: '12. Commercial service airports',
    description: 'Commercial service airports are those that accommodate scheduled air carrier service. They are regulated by both the FAA and the Transportation Security Administration (TSA). The FAA ensures compliance with aviation regulations and safety standards, while the TSA focuses on implementing security measures and screening procedures to safeguard air travel',
  };
 



  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AtcModel></AtcModel>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data1} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data2} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data3} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data4} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data5} />
    </div>
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
  </div>
  
  );
};

export default Week3;
