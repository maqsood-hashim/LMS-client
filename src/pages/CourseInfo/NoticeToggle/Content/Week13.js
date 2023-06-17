
import React from 'react';
import Slideshow from '../ImageSlider'
import  sec from '../../../../assets/images/week7/profile.jpg'
import  profile from '../../../../assets/images/week7/security.jpg'
import Screening from './ThreeDModels/Screening';
import Baggage from './ThreeDModels/Baggage';
import Collaboration from './ThreeDModels/Collaboration';
import VideoPlayer from './VideoPlayer';
import "./Weekcss.css"
const Week13 = () => {
  
const data = [
    {
        "title": "Airport Security",
        "description": "Airport security is a critical aspect of airport operations. It encompasses various measures and procedures implemented to ensure the safety and security of passengers, employees, and the aircraft themselves. The primary goal of airport security is to prevent any unlawful activities, such as terrorism, smuggling, or other criminal acts, from occurring within the airport premises.\n\nTo maintain airport security, airports typically employ a combination of physical and technological security measures. Here are some key components of airport security:",
        "images": [
        "https://i0.wp.com/wheelchairtravel.org/wp-content/uploads/2020/01/faq-air-tsa-security-v2020-header-scaled.jpg?resize=1920%2C1024&ssl=1",
        "https://www.securitymagazine.com/ext/resources/Miami-Inter-Airport.jpg?1598020762",
        "https://www.azcentral.com/gcdn/presto/2021/06/03/PPHX/a3d719d4-1449-4c45-99e0-7e0accb8ca06-DW1_5117.JPG"
        ],
        "imageLabels": []
        },
        {
            "title": "1 .Access control",
            "description": "Access to restricted areas, such as the tarmac, aircraft boarding gates, and baggage handling areas, is tightly controlled. Only authorized personnel with appropriate identification and security clearances are allowed entry.",
            "images": [
            "https://www.encountertravel.com.au/media/2975/blog_airport-gate2-1.jpg?anchor=center&mode=crop&width=1140&height=550&rnd=132322566370000000",
            "https://www.airport-technology.com/wp-content/uploads/sites/14/2018/01/beumer-helsinki-baggage-handling-system-pr.jpg"
            ],
            "imageLabels": []
            }
        ,
           
   {
    "title": "2 .Screening procedures",
    "description": "Passengers and their carry-on luggage go through security screening checkpoints before boarding their flights. This includes the use of metal detectors, X-ray scanners, and explosive detection systems to identify prohibited items and potential threats.",
    "images": [],
    "imageLabels": []
    },
           
{
    "title": "3. Baggage screening",
    "description": "Checked baggage is subjected to screening using advanced technologies like explosive detection systems to identify any dangerous or prohibited items. This is crucial for preventing the transportation of weapons, explosives, or other harmful materials onto aircraft.",
    "images": [],
    "imageLabels": []
    }

    ,{
        "title": "4. Passenger profiling",
        "description": "Airlines and security agencies may use profiling techniques to identify individuals who may pose a potential security risk. This involves analyzing passenger data, travel patterns, and behavior to identify suspicious activities or individuals.",
        "images": [profile,sec],
        "imageLabels": []
        }
        ,
        {
        "title": "5. Security personnel",
        "description": "Trained security personnel, including uniformed officers and plainclothes agents, patrol the airport premises to monitor activities, deter criminal acts, and respond to security incidents swiftly.",
        "images": [],
        "imageLabels": []
        }
        ,
        {
        "title": "6. Surveillance systems",
        "description": "Airports utilize a comprehensive network of surveillance cameras, both visible and hidden, to monitor various areas such as terminals, parking lots, and perimeter fences. These cameras assist in detecting and investigating security breaches or suspicious behavior.",
        "images": [],
        "imageLabels": []
        }
    ,
    
{
    "title": "7. Emergency preparedness",
    "description": "Airports have contingency plans in place to handle various emergency situations, including terrorist threats, natural disasters, or medical emergencies. Regular drills and exercises are conducted to ensure an effective response to any potential crisis.",
    "images": [
    "https://airwaysmag.com/wp-content/uploads/2022/06/MG_0012-scaled.jpg",
    "https://www.usatoday.com/gcdn/-mm-/ab71d37c3194c3e7e944dfc8869d722b1f46cdd2/c=0-184-1792-1196/local/-/media/2015/01/30/USATODAY/USATODAY/635582065108761622-GTY-460890554.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
    "https://img.resized.co/breaking-news/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5icmVha2luZ25ld3MuaWVcXFwvcHJvZFxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMDdcXFwvMTIxNTEyNTBcXFwvRGVsdGEtMTIzLVNoYW5ub24tMTIwNzIyLTEtZTE2NTc2MzUxOTYyNTIuanBnXCIsXCJ3aWR0aFwiOjEyMDAsXCJoZWlnaHRcIjo2MjcsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5icmVha2luZ25ld3MuaWVcXFwvaW1hZ2VzXFxcL25vLWltYWdlLnBuZ1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI5NWNmNzQ1NjRlNWU4YWI1ZWU5NzcwZDdiZWE2NjhiZmE4YTgyNWY5In0=/emergency-operation-at-shannon-airport-for-passenger-jet-with-hydraulic-issues.jpg"
    ],
    "imageLabels": []
    }
    ,
    {
    "title": "8. Collaboration with law enforcement",
    "description": "Airports work closely with local law enforcement agencies, intelligence services, and other security organizations to share information, coordinate security efforts, and respond to any threats effectively.",
    "images": [
 
    ],
    "imageLabels": []
    },
    
    {
    "title": "9 .Technology advancements",
    "description": "Airports continuously explore and adopt new technologies to enhance security. These may include biometric identification systems, advanced passenger screening methods, artificial intelligence-based threat detection systems, and improved surveillance technologies.",
    "images": [
    "https://www.futuretravelexperience.com/wp-content/uploads/2018/05/Munich-Airport-Josie-Pepper-robot-web.jpg",
    "https://www.techopedia.com/wp-content/uploads/2023/02/automated-threat-recognition-airport-security-1.jpg",
    "https://etechnologytrends.com/wp-content/uploads/2020/04/Technology-Trends-that-all-airlines-and-airports-should-be-prepared-1.jpg"
    ],
    "imageLabels": []
    },
    
    {
    "title": "10. International security standards",
    "description": "Airports adhere to internationally recognized security standards set by organizations like the International Civil Aviation Organization (ICAO) and national regulatory bodies to ensure consistent security measures across the industry.",
    "images": [
    "https://media.istockphoto.com/id/468621764/vector/isometric-security-checkpoint-machine.jpg?s=612x612&w=0&k=20&c=uwgi1A7t0tc5wMmvVOdKdAuQCLOQeP5CXN9E_sBqKaU="
    ],
    "imageLabels": []
    }
    ]
    

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <VideoPlayer videoUrl="https://www.youtube.com/watch?v=jiBHZ_rqHB8"/>
        
    <h2>Airport security </h2>
       <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[0]} />
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[1]} />
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[2]} />
          <Screening></Screening>
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[3]} />
          <Baggage></Baggage>
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[4]} />
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[5]} />
        </div>

        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[6]} />
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[7]} />
        </div>
        <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[8]} />
          <Collaboration></Collaboration>
          <div  style={{ marginBottom: '20px' }}>
          <Slideshow data={data[9]} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Slideshow data={data[10]} />
        </div>
        </div>
        

{/* <h3>Aircraft Ramp Servicing </h3>
{data2.map((step, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Slideshow data={step} />
        </div>
      ))} */}

  </div>
  
  );
};

export default Week13;
