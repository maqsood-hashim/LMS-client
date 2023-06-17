
import React from 'react';
import Slideshow from '../ImageSlider'
import  baggage from '../../../../assets/images/week7/baggage.png'
import  slide1 from '../../../../assets/images/week7/slide1.jpg'
import  slide2 from '../../../../assets/images/week7/slide2.jpg'
import  slide3 from '../../../../assets/images/week7/slide3.jpg'
import  slide4 from '../../../../assets/images/week7/slide4.jpg'
import chech_in from '../../../../assets/images/week7/check-in_bag_drop.gif'
import sorting from '../../../../assets/images/week7/sorting_factor.gif'
import "./Weekcss.css"
const Week7 = () => {
  
const data = [
        {
          "title": "",
          "description": `Baggage handling is an essential element of airport operations, but as with other utility functions, it is often remarked on only when it goes wrong.
          The baggage handling process can vary from facility to facility. e all commercial airports will have check-in, reclaim, and flight build facilities (also called makeup), only hub airports will have any significant transfer-baggage facilities.
          `,
          "images": [baggage,slide1,slide2,slide3,slide4],
          "imageLabels": ['',"Off airport check-in","Curb Side Check-in","staffed bag drop","self-service check in",]
        }
        ,
        {
              "title": "Hold Baggage Screening",
              "description": "Hold baggage screening is the process of inspecting checked luggage to ensure the safety of aircraft and passengers. It involves using X-ray machines and scanning technologies to detect prohibited items like weapons or explosives. The goal is to prevent potential risks and ensure a secure journey for everyone on board.",
              "images": [
                "https://www.samsic.aero/sites/aero/files/styles/content_750x610/public/2021-08/hold_baggage_screening_2.jpg?itok=3dMwNewn"
        ],
              "imageLabels": [
                "Hold Baggage Screening"
              ]
            },
            {
              "title": "Bag Storage",
              "description": "Bag storage in airports is a service that allows passengers to temporarily store their luggage in a secure area while at the airport. It provides convenience and freedom for travelers who don't want to carry their bags throughout the airport or during layovers.",
              "images": [
                "https://static.euronews.com/articles/stories/06/61/18/44/1440x810_cmsv2_b798d89b-f450-5c85-a669-280b34d7677f-6611844.jpg"
              ],
              "imageLabels": [
                "Bag Storage"
              ]
            },
           
        {
                  "title": "Flight Build and Aircraft Loading",
                  "description": "Flight build and aircraft loading in airports refer to the process of preparing an aircraft for departure. It involves loading the necessary cargo, baggage, and fuel onto the aircraft according to specific weight and balance requirements. This ensures the safe and efficient operation of the flight.",
                  "images": [
                    "https://easbcn.com/wp-content/uploads/2020/05/maximum-plane-load-724x423.jpg",
                    "https://media.istockphoto.com/photos/airport-service-crew-loading-luggage-to-the-airplane-picture-id1202300247?s=612x612",
                    "https://media.defense.gov/2021/Oct/05/2002868361/-1/-1/0/170324-F-BF216-1072.JPG"
                  ],
                  "imageLabels": [
                    "Aircraft Loading 1",
                    "Aircraft Loading 2",
                    "Aircraft Loading 3"
                  ]
        }     
           
                      
                ,
        {
                      "title": "Chutes",
                      "description": "Chutes are a type of manual makeup device used in airports for baggage handling. They provide a means to transfer baggage from one location to another.",
                      "images": [
                        "https://www.jbtc.com/aerotech/wp-content/uploads/sites/5/2021/08/Cargo-Chute-767x421-1.jpg"
                      ],
                      "imageLabels": [
                        "Chutes"
                      ]
                    },
        {
                      "title": "Carousels",
                      "description": "Carousels are another type of manual makeup device used in airports for baggage handling. They are circular conveyor systems that rotate baggage, allowing passengers to retrieve their luggage.",
                      "images": [
                        "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/a/30/a30b98b8-25d9-11eb-b9c1-4f9b81da2f05/5faec8efd33e3.image.jpg?resize=750%2C500"
                      ],
                      "imageLabels": [
                        "Carousels"
                      ]
                    },
                    {
                      "title": "Laterals",
                      "description": "Laterals are manual makeup devices used in airports for baggage handling. They are conveyor systems that move baggage laterally, allowing for the transfer of bags from one point to another.",
                      "images": [
                        "https://i0.wp.com/transportgeography.org/wp-content/uploads/vertical_lateral_passenger_airport.png?resize=900%2C414&ssl=1"
                      ],
                      "imageLabels": [
                        "Laterals"
                      ]
                    },
                    {
                      "title": "Reclaim",
                      "description": "The function of reclaim is to reunite passengers and their baggage. The reclaim hall serves as a buffer space where passengers wait for their bags and bags wait for passengers to claim them.",
                      "images": [
                        "https://www.beumergroup.com/app/uploads/dynamic/2021/09/Beumer-Group_CrisBag-reclaim-1280x0-c-default.jpg"
                      ],
                      "imageLabels": [
                        "Reclaim"
                      ]
                    },
                    {
                      "title": "Transfer Input",
                      "description": "Transfer input is the stage in airports where bags from arriving flights are collected and sorted for transfer to connecting flights. It involves transferring the bags from one aircraft to another within the airport's handling system to ensure they reach the correct destination for the next leg of the journey.",
                      "images": [
                        "https://media.istockphoto.com/id/1256153521/vector/people-in-airport-security-check-vector-illustration-cartoon-flat-passengers-put-luggage.jpg?s=612x612&w=0&k=20&c=YiG4bDFELftK8fCD7VlViOO5KK5cupDRxS9n6jwg9L8=",
                      ],
                      "imageLabels": [
                        "Transfer Input",
                        
                      ]
                    },
                    {
                      "title": "Interterminal Transfers",
                      "description": "Interterminal transfers in airports refer to the movement of passengers or cargo between different terminals within the airport. It is facilitated by various means of transportation such as shuttle buses, trains, or automated people movers.",
                      "images": [
                        "https://www.fukuoka-airport.jp/assets/access/img/en/access_img005.png"
                      ],
                      "imageLabels": [
                        "Interterminal Transfers"
                      ]
        }     
                     
                       , {
                          "title": "Check-in and Bag Drop",
                          "description": "Traditional check-in and bag-drop desks can be arranged in a number of ways:\n• Linear\n• Island\n• Flow-through\n"
,
            "images": [
                           chech_in
            ],
                          "imageLabels": [
                           
                          ]
                        },
                        {
                            "title": "Sorting",
                            "description": "Sorting includes multiple factors\n• Space\n• Cost\n• Required capacity",
                            "images": [
                             sorting
                            ],
                            "imageLabels": [
                              
                            ]
                          },
                        
                        {
                          "title": "Appearance Profiles in Baggage",
                          "description": "Appearance profiles in baggage refer to the physical characteristics and features of checked-in bags used for identification and security screening at airports. These profiles help assess the bag's size, shape, weight, and potential security risks, aiding airport security in ensuring passenger and aircraft safety.",
                          "images": [
                           
                          ],
                          "imageLabels": [
                            
                          ]
            }      
          
    
    
    

   
    ]


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Baggage Handling </h3>
    {data.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Slideshow data={step} />
        </div>
      ))}

{/* <h3>Aircraft Ramp Servicing </h3>
{data2.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Slideshow data={step} />
        </div>
      ))} */}

  </div>
  
  );
};

export default Week7;
