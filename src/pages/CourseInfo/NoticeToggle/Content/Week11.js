
import fweek11_1_1 from '../../../../assets/images/week11_1_1.png'
import fweek11_2_1 from '../../../../assets/images/week11_2_1.jpg'
import fweek11_2_2 from '../../../../assets/images/week11_2_2.png'
import fweek11_3_1 from '../../../../assets/images/week11.jpg'
import fweek11_3_2 from '../../../../assets/images/week11_3_2.png'
import fweek11_5_1 from '../../../../assets/images/week11_5_1.jpg'
import React from 'react';
import Slideshow from '../ImageSlider'
import "./Weekcss.css"

const Week11 = () => {
  
    const data1 = {
        images: [fweek11_1_1],
        imageLabels: [],
        title: '1. Transportation Role',
        description: 'Air travel has a huge impact on trade and business between cities and countries. It allows large numbers of people and goods to move quickly over long distances. Having airports in different places means that people from all over can connect to the global aviation network. They contribute to the economic prosperity of the surrounding areas by facilitating trade and creating opportunities for growth.'
      };
      const data2 = {
        images: [fweek11_2_1,fweek11_2_2],
        imageLabels: [],
        title: '2. Stimulating Economic Growth',
        description: 'Airports provide vital air access for businesses, create employment opportunities, stimulate local economies through direct and indirect spending, and generate tax revenues that support community projects and services. The income earned by airport employees circulates within the community, boosting local businesses and generating tax revenues. Additionally, airports stimulate the economy by using local services and generating additional income through fuel, supplies, and equipment purchases.'
      };
          
      
      const data3 = {
        images: [],
        imageLabels: [],
        title: 'Airport-Airline Operations',
        description: 'Airport-airline relations refer to the relationship between airports and the airlines that provide air transportation services. In simple terms, it’s about how airports and airlines work together. The airport provides the infrastructure, facilities, and services needed for airlines to operate their flights. This includes runways for takeoffs and landings, terminals for passenger processing, and various support services like fueling and maintenance.'
      };
      const data4 = {
        images: [fweek11_3_1],
        imageLabels: [],
        title: 'Airport-Concessionaire Relations',
        description: 'Airport-concessionaire relations refer to the relationship between airports and the businesses operating within them, such as shops, restaurants, and service providers. In simple terms, it’s about how the airport and these businesses work together. The airport allows these businesses to operate within its premises, and in return, the businesses pay fees or rent to the airport.'
      };
      const data5 = {
        images: [],
        imageLabels: [fweek11_5_1,fweek11_3_2],
        title: 'Airport-General Aviation Relations',
        description: 'Airport-general aviation relations refer to the relationship between airports and general aviation, which includes private and recreational flying, flight training, and smaller aircraft operations. In simple terms, it’s about how airports interact with non-commercial aviation activities. Airports provide facilities and services for general aviation, such as hangars, fueling stations, and runways suitable for smaller aircraft.'
      };
                  
 



  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

       <h3>The Economic Role of Airports</h3>
      <p>
        Airports play a crucial economic role by facilitating travel and transportation of goods. They serve as gateways connecting different regions and countries. Airports are vital economic engines that create jobs, facilitate tourism and business travel, support global trade, attract investment, and provide a range of services that contribute to local, regional, and national economies.
      </p>
    
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data1} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data2} />
    </div>
   

    <h3>Political roles</h3>
      <p>
      Airports play a significant role in connecting people and goods, and their management. While the airport is usually managed by a public entity, like a city government department or an aviation authority, it also has a private side. Many businesses operate within the airport premises, such as shops and fueling stations. Balancing the needs of the public, airlines, and businesses creates a unique political role for airport management. They need to balance the interests of the public, the airlines, and the businesses operating on the airport property </p>
  
      <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data3} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data4} />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Slideshow data={data5} />
    </div>
  
  
  </div>


  
  );
};

export default Week11;
