
import React from 'react';
import Slideshow from '../ImageSlider'
import TableComponent from './Table';
import "./Weekcss.css"

import commercial from '../../../../assets/images/week5/commercial.gif'
import conponents from '../../../../assets/images/week5/components.gif'

import classification from '../../../../assets/images/week5/classification.png'
import Decenter from '../../../../assets/images/week5/Decenter.jpg'
import Center from '../../../../assets/images/week5/Center.png'
import general from '../../../../assets/images/week5/general.png'
import regional from '../../../../assets/images/week5/regional.jpg'
import gateway from '../../../../assets/images/week5/gatway.jpg'
import gateway2 from '../../../../assets/images/week5/gateway2.png'
import cargo from '../../../../assets/images/week5/cargo.jpg'
import VideoPlayer from './VideoPlayer';

 




const Week5 = () => {
  
const data = 
        {
          "title": "Components of an air transport system ",
         "description": `• The airport, including its commercial and operational concessionaires, tenants, and partners, plus, for these discussion purposes, the airways control system
• The airline
• The user`,
"images": [conponents],
          "imageLabels": []
        }
        
       
        
        const data2 = 
        {
          "title": "Commercial Service Airports",
         "description": `Commercial Service Airports are publicly owned airports that serve aircraft that provide scheduled passenger service. They have at least 2,500 passenger boardings each year. There are two types of commercial service airports:
         o	Nonprimary (having no more than 10,000 passenger boardings each year)
         o	Primary (having more than 10,000 passenger boardings each year)`,
        "images": [commercial],
          "imageLabels": []
        }
        const data3 = 
        {
          "title": "Reliever Airports ",
         "description": `General Aviation Airports are public-use airports that do not have scheduled service or have less than 2,500 annual passenger boardings (49 USC 47102(8)). Approximately 88 percent of airports included in the NPIAS are general aviation.`,
        "images": [],
          "imageLabels": []
        }

        const data4 = 
        {
          "title": "General Aviation Airports ",
         "description": `Reliever Airports are airports designated by the FAA to relieve congestion at Commercial Service Airports and to provide improved general aviation access to the overall community. These may be publicly or privately-owned.`,
        "images": [],
          "imageLabels": []
        }


        const data5 = 
        {
          "title": "Cargo service airports",
         "description": `Cargo service airports, in simple terms, are airports that focus on the transportation and handling of goods and products by air. They are specialized airports where cargo is shipped, received, and processed.`,
        "images": [cargo],
          "imageLabels": []
        }
const ved = <VideoPlayer videoUrl="https://www.youtube.com/watch?v=JL6I84y0qAg"></VideoPlayer>
     const data6=    [
            {
              "title": "Gateway International Airports",
              "description": "Gateway international airports, in simple words, are airports that serve as major entry points or hubs for international travel. These airports act as primary gateways connecting different countries and regions, handling a significant amount of international passenger traffic.",
              "images": [gateway,gateway2],
              "imageLabels": []
            },
            {
              "title": "Regional Airports",
              "description": "Regional airports, in simple words, are smaller airports that primarily serve a specific geographic region or local area. They are typically located outside major metropolitan areas and cater to the needs of nearby communities and smaller airlines.",
              "images": [regional],
              "imageLabels": []
            },
            {
              "title": "Local Airports",
              "description": "Local airports, in simple terms, are airports that primarily serve a specific region or community. These airports are typically smaller in size and have fewer commercial flights compared to major international airports.",
              "images": [],
              "imageLabels": []
            },
            {
              "title": "General Aviation Airports",
              "description": "General Aviation Airports are concerned primarily with the provision of general aviation facilities.",
              "images": [general],
              "imageLabels": []
            },
            {
              "title": "Centralized Passenger Terminal System",
              "description": "In this system, everything passengers need, like check-in counters, security checkpoints, and gates, is in one big terminal building. It's like a one-stop shop for all passenger services.",
              "images": [Center],
              "imageLabels": []
            },
            {
              "title": "Decentralized Passenger Terminal System",
              "description": "In this system, passenger services are spread out across different terminal buildings. Each building serves specific airlines or flights, so passengers may need to move between them using shuttles or other transportation.",
              "images": [Decenter],
              "imageLabels": [],
              "video":ved
            },
            {
                "title": "Classification of airports in Europe",
                "description": `Classification of airports in Europe 
                •	Low density
                •	Medium density
                •	High density
                •	Very high density`,
                "images": [classification],
                "imageLabels": []
              }


          ]

          


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
   
   
        <div style={{ marginBottom: '20px' }}>
          <Slideshow data={data} />
          <TableComponent style={{ marginTop: '20px' }}> </TableComponent>
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

{data6.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Slideshow data={step} />
        </div>
      ))}

  </div>
  
  );
};

export default Week5;
