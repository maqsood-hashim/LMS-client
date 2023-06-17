import Slideshow from '../ImageSlider'
import React from 'react'
import im1 from '../../../../assets/images/week10/week10_1_1.png'
import im2 from '../../../../assets/images/week10/week10_1_2.jpg'
import im3 from '../../../../assets/images/week10/week10_3_1.jpg'
import im4 from '../../../../assets/images/week10/week10-4_1.jpg'
import im5 from '../../../../assets/images/week10/week10_4_2.png'
import im6 from '../../../../assets/images/week10/week10_5_1.png'
import im7 from '../../../../assets/images/week10/week10_6_1.jpg'
import im8 from '../../../../assets/images/week10/week10_7_1.jpg'
// import im9 from '../../../../assets/images/week10/week10_8_1.png'
import prohibited from '../../../../assets/images/week6/prohibited.jpg'
import "./Weekcss.css"
import im10 from '../../../../assets/images/week10/im10.jpg'
import im11 from '../../../../assets/images/week10/im11.jpg'
import im12 from '../../../../assets/images/week10/im12.jpg'
import im13 from '../../../../assets/images/week10/im13.jpg'
import im14 from '../../../../assets/images/week10/im14.jpg'
// import im15 from '../../../../assets/images/week10/im15.jpg'
import im16 from '../../../../assets/images/week10/im16.jpg'
import im17 from '../../../../assets/images/week10/im17.jpg'
import im18 from '../../../../assets/images/week10/im18.jpg'


import atc from '../../../../assets/images/week10/atc.jpg' 
import airSide from '../../../../assets/images/week10/airside.png'
import Cargo from '../../../../assets/images/week10/Cargo.jpg' 

import Emergency from '../../../../assets/images/week10/Emergency.jpg' 
import environment from '../../../../assets/images/week10/environmental.jpg' 
import processing from '../../../../assets/images/week10/processing.jpg' 

import futureflex from '../../../../assets/images/week10/futureflex.jpg' 
import futureflex2 from '../../../../assets/images/week10/futureflex2.jpg'
import Passenger1 from '../../../../assets/images/week10/PassengerInfo.png' 
import Passenger2 from '../../../../assets/images/week10/PassengerInfo2.jpg' 
import Passenger3 from '../../../../assets/images/week10/PassengerInfo3.jpg' 



import ask from '../../../../assets/images/week10/ask.jpg' 
import check from '../../../../assets/images/week10/check.jpg' 
import keep from '../../../../assets/images/week10/keep.jpg' 
import brpre from '../../../../assets/images/week10/bepre.png' 
import sign from '../../../../assets/images/week10/sign.jpg' 
import remove from '../../../../assets/images/week10/remove.jpg' 
import wait from '../../../../assets/images/week10/wait.jpg' 
import use from '../../../../assets/images/week10/Use.jpg' 
import ancillary from '../../../../assets/images/week10/ancillary.gif' 
import volume from '../../../../assets/images/week10/volume.jpg' 
const Week10 = () => {
 
 const data10_1= [
    {
    "title": "In-flight Entertainment",
    "description": "Airlines differentiate themselves by offering diverse and innovative in-flight entertainment systems. Some airlines provide extensive movie and TV show libraries, while others offer live TV channels, interactive games, or virtual reality experiences.",
    "images": [im1],
    "imageLabels": []
    },
    {
    "title": "Onboard Wi-Fi",
    "description": "Airlines may have different approaches to onboard Wi-Fi connectivity. Some airlines provide complimentary Wi-Fi access for all passengers, while others offer tiered packages or charge a fee for usage.",
    "images": [im2],
    "imageLabels": []
    },
    {
    "title": "Seat Configurations",
    "description": "Airlines may have unique seat configurations in their cabins. For instance, some airlines offer premium economy or business class cabins with extra legroom, lie-flat seats, or private suites. These configurations can provide a more comfortable and personalized travel experience.",
    "images": [im3],
    "imageLabels": []
    },
    {
    "title": "Special Meals and Dietary Options",
    "description": "Airlines often cater to passengers’ dietary preferences or requirements. Some airlines specialize in providing a wide variety of meal options, including vegan, vegetarian, gluten-free, or kosher meals, ensuring that passengers’ specific dietary needs are met.",
    "images": [im4,im5],
    "imageLabels": []
    },
    {
    "title": "Loyalty Programs",
    "description": "Airlines develop loyalty programs to reward frequent flyers and cultivate customer loyalty. Each airline’s loyalty program may have its own unique perks, such as priority boarding, lounge access, free upgrades, or exclusive partnerships with other companies for additional benefits.",
    "images": [im6],
    "imageLabels": []
    },
    {
    "title": "Personalized Services",
    "description": "Airlines may offer personalized services to enhance the passenger experience. This can include pre-flight services like priority check-in, personalized greetings, or concierge services. In-flight, airlines may provide personalized amenities or services based on passenger preferences.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Destination-specific Services",
    "description": "Some airlines differentiate themselves by offering destination-specific services. For example, airlines that primarily operate in regions with popular tourist destinations may provide specialized services like guided tours, local cuisine options, or partnerships with local attractions.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Children and Family Services",
    "description": "Airlines often cater to families traveling with children. They may provide services such as priority boarding for families, dedicated family seating areas, in-flight entertainment tailored for children, or special meals suitable for younger passengers.",
    "images": [im7],
    "imageLabels": []
    },
    {
    "title": "Environmental Initiatives",
    "description": "As sustainability becomes increasingly important, some airlines distinguish themselves by implementing eco-friendly practices. These can include carbon offset programs, the use of biofuels, reducing single-use plastics, or investing in energy-efficient aircraft.",
    "images": [im8],
    "imageLabels": []
    }
    ]


const data10_2  = [
    {
    "title": "Flight Operations",
    "description": "This function is responsible for planning, scheduling, and executing flights. It involves activities such as route planning, flight crew management, fuel optimization, aircraft maintenance scheduling, and ensuring compliance with regulatory requirements. The complexity and scale of flight operations make it a distinct operational function within the airline industry.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Air Traffic Management",
    "description": "Air traffic management involves coordinating and managing the flow of aircraft in the airspace to ensure safe and efficient operations. It includes functions such as air traffic control, airspace design, navigation systems, communication protocols, and collaborative decision-making processes. The dynamic nature of air traffic management, with multiple airlines and aircraft interacting in real-time, adds to the uniqueness of this operational function.",
    "images": [im10],
    "imageLabels": []
    },
    {
    "title": "Ground Operations",
    "description": "Ground operations encompass a wide range of activities required to support aircraft on the ground. These include aircraft handling, passenger and baggage services, aircraft cleaning, catering, cargo handling, fueling, and ramp operations. The coordination and synchronization of these activities to minimize turnaround times and maintain operational efficiency make ground operations a distinct and crucial function in the airline industry.",
    "images": [im11],
    "imageLabels": []
    },
    {
    "title": "Maintenance, Repair, and Overhaul (MRO)",
    "description": "The MRO function involves the maintenance, repair, and overhaul of aircraft and their components. It includes scheduled maintenance checks, unscheduled repairs, component replacements, and inspections to ensure airworthiness and safety. The specialized knowledge, skilled workforce, and regulatory compliance requirements specific to aviation make MRO a unique operational function within the airline industry.",
    "images": [im12],
    "imageLabels": []
    },
    {
    "title": "Revenue Management",
    "description": "Revenue management is the strategic function of optimizing seat inventory and pricing to maximize revenue. It involves analyzing market demand, forecasting, setting fares, managing seat allocations, and implementing yield management techniques. The unique challenges of optimizing revenue in a perishable inventory model, with fluctuating demand and intense competition, make revenue management a crucial and distinctive operational function.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Safety and Security",
    "description": "Ensuring the safety and security of passengers, crew, and aircraft is a paramount concern for airlines. This function involves implementing robust safety management systems, adhering to regulatory standards, conducting safety audits, managing emergency response procedures, and implementing security measures to mitigate risks. The unique focus on safety and security in the aviation industry sets it apart from many other sectors.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Customer Service",
    "description": "Providing a high level of customer service is essential for airlines to maintain customer satisfaction and loyalty. This function includes various aspects such as reservations and ticketing, check-in processes, boarding procedures, in-flight services, complaint handling, and frequent flyer programs. The airline industry’s customer service function often involves managing customer expectations and addressing unique challenges associated with air travel.",
    "images": [im13],
    "imageLabels": []
    }
    ]



    const data10_3 = [
        {
        "title": "Identification and Travel Documents",
        "description": "Passengers are required to present valid identification and travel documents before boarding a flight. This typically includes a passport for international travel or a government-issued identification document for domestic flights.",
        "images": [im14],
        "imageLabels": []
        },
        {
        "title": "Security Screening",
        "description": "Governments mandate strict security screening procedures to detect prohibited items and ensure passenger safety. This includes screening passengers and their baggage using X-ray machines, metal detectors, explosive trace detection, and body scanners.",
        "images": [im16],
        "imageLabels": []
        },
        {
        "title": "Immigration and Customs Control",
        "description": "Immigration control is carried out at airports to monitor and regulate the entry and exit of individuals from a country. Passports, visas, and other relevant travel documents are checked, and individuals may be subject to interviews or additional scrutiny. Customs control is responsible for inspecting and regulating the movement of goods to prevent smuggling or illegal imports/exports.",
        "images": [],
        "imageLabels": []
        },
        {
        "title": "Airline Security Measures",
        "description": "Airlines are required to comply with specific security measures set by government authorities. This includes procedures related to passenger check-in, baggage handling, cargo security, and aircraft security checks.",
        "images": [],
        "imageLabels": []
        },
        {
        "title": "Restricted Items",
        "description": "Governments provide guidelines on items that are prohibited or restricted on flights. These can include weapons, explosives, sharp objects, flammable materials, and liquids in containers exceeding a certain volume. Such items may not be carried in hand luggage or checked baggage.",
        "images": [prohibited],
        "imageLabels": []
        },
        {
        "title": "Passenger Data Collection",
        "description": "Governments often require airlines to collect and provide passenger data, such as full name, passport information, and contact details, prior to departure. This information is used for security purposes, immigration control, and tracking passenger movements.",
        "images": [],
        "imageLabels": []
        },
        {
        "title": "Security Personnel and Training",
        "description": "Governments mandate the presence of security personnel at airports. These individuals are responsible for monitoring security systems, conducting passenger checks, and responding to security incidents. They undergo rigorous training to ensure compliance with security protocols.",
        "images": [im18],
        "imageLabels": []
        },
        {
        "title": "Emergency Preparedness",
        "description": "Airports are required to have emergency response plans in place to address various scenarios, including natural disasters, terrorist threats, and medical emergencies. These plans involve coordination with local law enforcement agencies, fire departments, and medical services.",
        "images": [],
        "imageLabels": []
        }
        ]




      const data10_4 = [
            {
            "title": "Air Traffic Control (ATC)",
            "description": "Airport authorities are responsible for managing and overseeing the air traffic control services at the airport. ATC personnel ensure the safe and efficient movement of aircraft within the airport’s airspace.",
            "images": [atc],
            "imageLabels": []
            },
            {
            "title": "Airport Security",
            "description": "Airport authorities are responsible for maintaining security within the airport premises. They collaborate with law enforcement agencies, implement security protocols, conduct screenings, and monitor surveillance systems to ensure the safety of the airport and its surroundings.",
            "images": [],
            "imageLabels": []
            },
            {
            "title": "Infrastructure Development and Maintenance",
            "description": "Airport authorities are involved in the planning, development, and maintenance of airport infrastructure. This includes runways, taxiways, aprons, terminals, parking facilities, and other support structures. They work to ensure that the airport’s infrastructure meets safety regulations and capacity requirements.",
            "images": [],
            "imageLabels": []
            },
            {
            "title": "Airside Operations",
            "description": "Airport authorities oversee the smooth functioning of airside operations, which involve activities directly related to aircraft and movement on the airport grounds. This includes aircraft parking, fueling, ground handling, and maintenance services.",
            "images": [airSide],
            "imageLabels": []
            },
            {
            "title": "Cargo and Freight Operations",
            "description": "Many airports handle significant volumes of cargo and freight. Airport authorities manage and regulate these operations, including the facilities, systems, and procedures required for efficient cargo handling, customs clearance, and storage.",
            "images": [Cargo],
            "imageLabels": []
            },
            {
            "title": "Emergency Services",
            "description": "Airport authorities are responsible for emergency planning and response. They coordinate with local emergency services, develop emergency plans, conduct drills, and provide necessary resources to respond to incidents such as aircraft accidents, fires, or natural disasters.",
            "images": [Emergency],
            "imageLabels": []
            },
            {
            "title": "Environmental Management",
            "description": "Airports have environmental impacts that need to be managed. Airport authorities work to minimize the environmental footprint of the airport through various initiatives such as noise reduction programs, waste management, energy efficiency measures, and sustainable development practices.",
            "images": [environment],
            "imageLabels": []
            },
            {
            "title": "Retail and Commercial Operations",
            "description": "Airport authorities often manage and lease commercial spaces within the airport, including retail shops, restaurants, and duty-free outlets. They oversee contracts, leasing agreements, and ensure compliance with regulations and standards.",
            "images": [],
            "imageLabels": []
            },
            {
            "title": "Stakeholder Management",
            "description": "Airport authorities engage with various stakeholders such as airlines, government agencies, local communities, and business partners. They collaborate and communicate with these stakeholders to address their needs, resolve conflicts, and maintain positive relationships. These functions collectively contribute to the efficient and safe operation of an airport beyond the scope of passenger-related activities.",
            "images": [],
            "imageLabels": []
            }
            ]


            const data10_5 ={

            "title": "",
            "description": "",
            "images": [processing],
            "imageLabels": []
            }


            const data10_6={

                "title": "",
                "description": "",
                "images": [Passenger1,Passenger2,Passenger3],
                "imageLabels": []
                }

            const data10_7 =[
                {
                "title": "Terminal Design",
                "description": "The architectural design of airport terminals can greatly influence the arrangement of space components and adjacencies. Airports may have different terminal designs such as linear, pier, satellite, or hybrid layouts, each with its own unique spatial characteristics.",
                "images": [],
                "imageLabels": []
                },
                {
                "title": "Passenger Flow",
                "description": "The flow of passengers is a crucial consideration in airport design. The arrangement of components and adjacencies should facilitate smooth passenger movement, taking into account factors like check-in counters, security screening, boarding gates, baggage claim areas, and immigration/customs checkpoints.",
                "images": [],
                "imageLabels": []
                },
                {
                "title": "Security Requirements",
                "description": "Security measures and regulations play a significant role in shaping the layout of airport components and adjacencies. The placement of security checkpoints, restricted areas, and screening equipment can vary based on security protocols, national regulations, and the airport’s risk assessment.",
                "images": [],
                "imageLabels": []
                },
                {
                "title": "Commercial Areas",
                "description": "Airports often have commercial spaces such as duty-free shops, retail stores, restaurants, and lounges. The positioning and integration of these commercial areas within the airport layout can contribute to the uniqueness of the space components and adjacencies.",
                "images": [],
                "imageLabels": []
                },
                {
                "title": "Operational Considerations",
                "description": "The specific operational requirements of an airport can influence the arrangement of space components. For example, airports serving as hubs for connecting flights may require efficient transfer facilities, while cargo-centric airports may have dedicated areas for cargo handling and logistics.",
                "images": [],
                "imageLabels": []
                },
                {
                "title": "Local Factors",
                "description": "The uniqueness of space components and adjacencies can also be influenced by local factors such as climate, topography, cultural norms, and regulatory requirements. For instance, airports in cold climates may require enclosed walkways or heated waiting areas.",
                "images": [],
                "imageLabels": []
                },
                {
                "title": "Future Expansion and Flexibility",
                "description": "Airport designs often take into account future growth and expansion. The flexibility to accommodate changes, additions, or modifications to space components and adjacencies is a crucial aspect that contributes to the uniqueness of each airport’s design.",
                "images": [futureflex,futureflex2],
                "imageLabels": []
                }
                ]

const data10_8 = [
    {
    "title": "Follow the signs",
    "description": "Look for signs that indicate the direction to gates, baggage claim, and other airport services.",
    "images": [sign],
    "imageLabels": []
    },
    {
    "title": "Check your flight information",
    "description": "Make sure to check the flight information screens for updates on your flight status, gate information, and departure time.",
    "images": [check],
    "imageLabels": []
    },
    {
    "title": "Use the moving walkways",
    "description": "Moving walkways are available in many airports to help passengers get to their gates more quickly. Be sure to walk on the left side and stand on the right to allow others to pass.",
    "images": [use],
    "imageLabels": []
    },
    {
    "title": "Keep your documents ready",
    "description": "Keep your passport, boarding pass, and other important documents ready before you approach security checkpoints.",
    "images": [keep],
    "imageLabels": []
    },
    {
    "title": "Remove your shoes and belt",
    "description": "When going through security, remove your shoes and belt and place them in the provided bins to be screened.",
    "images": [remove],
    "imageLabels": []
    },
    {
    "title": "Be prepared for security screening",
    "description": "Empty your pockets of all metal objects and remove your laptop from its case for separate screening.",
    "images": [brpre],
    "imageLabels": []
    },
    {
    "title": "Wait in line patiently",
    "description": "Follow the queues and wait in line patiently for security screening, boarding, and other airport services.",
    "images": [wait],
    "imageLabels": []
    },
    {
    "title": "Listen for announcements",
    "description": "Listen for announcements over the PA system or watch for updates on the flight information screens for any changes to your flight.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Respect other passengers",
    "description": "Be courteous to other passengers, and refrain from pushing or cutting in line.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Ask for assistance",
    "description": "If you need assistance or have any questions, don't hesitate to ask airport staff for help.",
    "images": [ask],
    "imageLabels": []
    }
    ]
const data10_9 = [
    {
    "title": "Geographic Location",
    "description": "The geographical location of an airport plays a crucial role in its potential as a hub. Airports situated at a strategic location that allows for convenient connections between different regions or continents can have a competitive advantage. For example, airports like Dubai International Airport and Singapore Changi Airport have established themselves as global hubs due to their favorable geographic locations.",
    "images": [],
    "imageLabels": []
    },
  {
    "title": "Airline Network",
    "description": "The strength and breadth of the airline network operating at an airport are important factors. A hub airport typically serves as a central connecting point for multiple airlines and their respective routes. The more airlines and destinations an airport can offer, the more attractive it becomes as a hub. Airports such as London Heathrow, Atlanta Hartsfield-Jackson, and Amsterdam Schiphol have extensive airline networks, making them prominent hubs.",
    "images": [],
    "imageLabels": []
    },
 {
    "title": "Passenger Traffic Volume",
    "description": "The volume of passenger traffic an airport handles is another significant consideration. Hubs typically thrive on high passenger volumes, as they create opportunities for efficient connections and economies of scale. Large airports with substantial domestic and international passenger flows, such as Beijing Capital International Airport and Los Angeles International Airport, have the potential to be successful hubs.",
    "images": [volume],
    "imageLabels": []
    },
    {
    "title": "Airport Infrastructure",
    "description": "The infrastructure and facilities available at an airport are crucial for smooth hub operations. This includes the number and capacity of runways, terminal buildings, gates, lounges, and ground transportation options. Well-designed and efficiently operated airports can enhance the hubbing experience for passengers and airlines alike. Airports like Munich Airport and Hong Kong International Airport are known for their state-of-the-art facilities and passenger-friendly designs.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Customs and Immigration Procedures",
    "description": "Streamlined customs and immigration procedures can significantly impact the attractiveness of an airport as a hub. Efficient processes, such as expedited security screenings, automated passport control, and hassle-free transfer facilities, contribute to a seamless travel experience for passengers connecting through the airport. Airports that prioritize efficiency in customs and immigration, like Seoul Incheon International Airport and Zurich Airport, are often preferred as hubs.",
    "images": [],
    "imageLabels": []
    },
   {
    "title": "Ancillary Services",
    "description": "The availability of ancillary services, such as hotels, shopping areas, dining options, and entertainment facilities, can add to the uniqueness of a hub airport. These amenities provide added convenience and comfort for passengers during their layovers or connections. Airports like Dubai International Airport and Incheon International Airport are renowned for their extensive duty-free shopping and diverse dining options.",
    "images": [ancillary],
    "imageLabels": []
    },
   {
    "title": "Airport Management and Investment",
    "description": "The management and investment strategies employed by the airport authorities also play a role in shaping the uniqueness of a hub. Proactive management that focuses on attracting airlines, expanding infrastructure, and enhancing the passenger experience can lead to the development of a successful hub. Examples of well-managed hub airports include Singapore Changi Airport and Hamad International Airport in Doha.",
    "images": [],
    "imageLabels": []
   }
    ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  
      <h2>10.1:FUNCTION OF PASSENGER TERMINAL</h2>
      <p>A passenger terminal is a building where passengers arrive and depart from flights. Passengers check-in at the terminal before their flight. This involves presenting their passport or ID, receiving their boarding pass and checking in their luggage. After security, passengers wait in the departure lounge for their flight to be called. The lounge usually has seating, restrooms, and food and beverage options. The terminal is a busy and complex environment, so it's important for passengers to stay alert and aware of their surroundings at all time</p>
{data10_1.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}




      <h2>10.2:FUNCTION OF PASSENGER TERMINAL</h2>
      <p>A passenger terminal is a building where passengers arrive and depart from flights. Passengers check-in at the terminal before their flight. This involves presenting their passport or ID, receiving their boarding pass and checking in their luggage. After security, passengers wait in the departure lounge for their flight to be called. The lounge usually has seating, restrooms, and food and beverage options. The terminal is a busy and complex environment, so it's important for passengers to stay alert and aware of their surroundings at all time</p>
{data10_2.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}



<h2>10.3:FUNCTION OF PASSENGER TERMINAL</h2>
      <p>A passenger terminal is a building where passengers arrive and depart from flights. Passengers check-in at the terminal before their flight. This involves presenting their passport or ID, receiving their boarding pass and checking in their luggage. After security, passengers wait in the departure lounge for their flight to be called. The lounge usually has seating, restrooms, and food and beverage options. The terminal is a busy and complex environment, so it's important for passengers to stay alert and aware of their surroundings at all time</p>
{data10_3.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}


<h2>10.4:FUNCTION OF PASSENGER TERMINAL</h2>
      <p>A passenger terminal is a building where passengers arrive and depart from flights. Passengers check-in at the terminal before their flight. This involves presenting their passport or ID, receiving their boarding pass and checking in their luggage. After security, passengers wait in the departure lounge for their flight to be called. The lounge usually has seating, restrooms, and food and beverage options. The terminal is a busy and complex environment, so it's important for passengers to stay alert and aware of their surroundings at all time</p>
{data10_4.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}


{/* <div style={{ marginBottom: '20px' }} key={index}> */}


    
  <h2>8.5	PROCESSING VERY IMPORTANT PERSONS:</h2>

<p>

•	Important persons (IPs) may include heads of state, government officials, and other VIPs who require special treatment at the airport.
 
•	When IPs arrives at the airport, they are usually met by airport staff who are trained to handle their needs.
•	VIPs are often processed in separate, designated areas of the airport to ensure their privacy and security.
•	Airport staff may provide VIPs with expedited check-in, security screening, and immigration procedures to minimize their wait times.
•	VIPs may also be escorted through the airport by airport staff or security personnel to ensure their safety and security.
•	Depending on their level of importance, VIPs may be provided with additional amenities such as private lounges, VIP parking, and other services.
•	It is important for airport staff to be respectful and courteous when processing VIPs, as they represent the airport and the country as a whole.
•	In some cases, VIPs may require special arrangements for their transportation to and from the airport, such as private vehicles or helicopters.
•	The processing of VIPs at the airport is an important part of ensuring their safety and security, while also maintaining the efficient operation of the airport for other passengers
</p>
    {/* <Slideshow data={item} /> */}
  {/* </div> */}

  <div style={{ marginBottom: '20px' }} >
    <Slideshow data={data10_5} />
  </div>
  <h2>10.6 Passenger Information System </h2>
  <p>
  •	A passenger information system is a set of tools and technologies that airports and airlines use to communicate with passengers.
•	These systems include things like flight information displays, announcements over loudspeakers, and digital signage.
•	Flight information displays are screens that show real-time information about flights, including departure and arrival times, gate numbers, and flight statuses (e.g. on time, delayed, cancelled).
•	Loudspeaker announcements are used to communicate important information to passengers, such as gate changes, boarding times, and security alerts.
•	Digital signage refers to displays that show visual information, such as maps of the airport or advertising.
•	Passenger information systems can also include mobile apps and websites that allow passengers to check their flight status, make changes to their reservation, and access other information.
•	These systems are designed to provide passengers with up-to-date information about their flights, so they can make informed decisions and plan their travel accordingly.
•	Good passenger information systems help to reduce stress and confusion for passengers, and they can also improve overall airport efficiency by reducing the number of inquiries to airport staff.
•	Airlines and airports use these systems to improve the overall passenger experience, increase customer satisfaction, and build loyalty.

  </p>
  <div style={{ marginBottom: '20px' }} >
    <Slideshow data={data10_6} />
  </div>

 <h2>10.7 SPACE COMPONENTS AND ADJACENCIES</h2>

{data10_7.map((item, index) => (
    <div style={{ marginBottom: '20px' }} key={index}>
      <Slideshow data={item} />
    </div>
  ))}



<h2>10.8 AIDS TO CIRCULATON</h2>

{data10_8.map((item, index) => (
    <div style={{ marginBottom: '20px' }} key={index}>
      <Slideshow data={item} />
    </div>
  ))}


<h2>10.9 HUBBING CONSIDERATIONS</h2>

{data10_9.map((item, index) => (
    <div style={{ marginBottom: '20px' }} key={index}>
      <Slideshow data={item} />
    </div>
  ))}

</div>
  
  );
};

export default Week10;
