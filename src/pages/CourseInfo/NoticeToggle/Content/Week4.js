
import chart from '../../../../assets/images/week10/AviationChart.jpg'
import mintain from '../../../../assets/images/week10/maintaince.jpg'
import React from 'react';
import Slideshow from '../ImageSlider'
import "./Weekcss.css"
import VideoPlayer from './VideoPlayer';


const Week4 = () => {
  const data1 = [
    {
    "title": "1 .Airport Size and Organizational Structure",
    "description": "Airports can vary in size and organizational structure. The number of employees in airports can range from a few to tens of thousands.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "2. Ownership and Operation of Public Airports in the United States",
    "description": "Public airports in the United States are owned and operated under various arrangements. Ownership can be held by a city, county, state, or airport authority.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "3. Independence of Multipurpose and Single-Purpose Airport Authorities",
    "description": "Multipurpose port authorities and single-purpose airport authorities have extensive independence in managing airports. They also have the authority to issue their debt.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "4. Management of Airports by Private Companies",
    "description": "Some airports in the United States are managed by private companies. This is done through fixed-fee contracts with local governments. Other airports outsource certain functions to private contractors.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "5. Privatization of Airports",
    "description": "Privatization of airports involves leasing airport property to private companies for operation and management. However, complete sale to private entities is rare.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "6. Private Financing for Airport Development",
    "description": "Airports are increasingly seeking private financing for capital development. This is done to decrease reliance on airlines and increase non-airline revenue.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "7. Involvement of Private Sector in Airport Operations and Development",
    "description": "Other countries like Canada, Australia, and India are involving the private sector more extensively in airport operations and development.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "8. Reasons for Airport Privatization",
    "description": "The reasons for airport privatization include: Additional capital for development, improved operational efficiency, reduced reliance on public funds.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "9. Career Paths and Responsibilities of Airport Managers",
    "description": "Airport managers have diverse career paths and job responsibilities. They can range from overseeing large metropolitan airports to managing small private fields.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "10. Responsibilities of Airport Managers",
    "description": "Airport managers are responsible for safe operations, maintenance, public relations, financial planning, coordination of airline and concession services, ensuring overall efficiency.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "11. Duties of Airport Managers",
    "description": "The specific duties of an airport manager depend on the size of the airport and the services it offers.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Skills and Education for Airport Managers",
    "description": "Airport managers need a combination of business and administrative skills. Relevant education and training in aviation management can be beneficial.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "12. Internship Programs and Career Advancement",
    "description": "Many airports offer internship programs. Career advancement in airport management often involves starting at smaller airports and gradually moving to larger ones.",
    "images": [],
    "imageLabels": []
    }
    ]

const data2 = 
[
{
"title": "1. Airport Director",
"description": "Responsible for the overall day-to-day operation of the airport, including aircraft operations, maintenance, construction plans, community relations, and financial and personnel matters.",
"images": [],
"imageLabels": []
},
{
"title": "2. Assistant Director-Finance and Administration",
"description": "Handles finance, personnel, purchasing, facilities management, and office management, including fiscal planning, budget administration, purchasing, and personnel functions.",
"images": [],
"imageLabels": []
},
{
"title": "3. Human Resources Manager",
"description": "Administers the airport personnel program, including dealing with personnel problems, equal rights and equal opportunity matters, worker's compensation cases, and personnel documents.",
"images": [],
"imageLabels": []
},
{
"title": "4. Chief Accountant",
"description": "Manages financial planning, budgeting, accounting, payroll, and auditing functions, including coordinating financial plans, administering accounts, and conducting internal audits.",
"images": [],
"imageLabels": []
},
{
"title": "5. Facilities Manager",
"description": "Establishes criteria and procedures for the administration of airport property, including inventory control, property utilization, tenant and concessionaire leases, and rate structure.",
"images": [],
"imageLabels": []
},
{
"title": "6. Purchasing Manager",
"description": "Directs the procurement of materials and services, prepares contracts with vendors, establishes bidding policies and procedures, and works closely with the facilities' chief and legal staff.",
"images": [],
"imageLabels": []
},
{
"title": "7. Manager of Public Relations",
"description": "Acts as the chief liaison officer between the airport and the surrounding community, responsible for public relations activities, advertising, publicity, and handling noise and environmental matters.",
"images": [],
"imageLabels": []
},
{
"title": "8. Assistant Director-Planning and Engineering",
"description": "Provides technical assistance, ensures engineering integrity of construction programs, develops industrial safety standards, and participates in construction contract negotiation.",
"images": [],
"imageLabels": []
},
{
"title": "9. Assistant Director-Operations",
"description": "Oversees airside and landside operations, including security, crash, fire, and rescue operations, and participates in operational rule-making, noise monitoring, and special programs.",
"images": [],
"imageLabels": []
},
{
"title": "11. Airside Operations Manager",
"description": "Enforces operating and security rules, inspects airfield conditions, coordinates activities, investigates complaints, assigns gate and parking spaces, and assists in noise level studies.",
"images": [],
"imageLabels": []
},
{
"title": "12. Landside Operations Manager",
"description": "Enforces operating and security rules for buildings, access roads, and parking facilities, coordinates activities, answers inquiries, prepares reports, and ensures compliance with safety regulations.",
"images": [],
"imageLabels": []
},
{
"title": "13. Security Manager",
"description": "Enforces interior security, traffic, and safety rules and regulations, patrols facilities, prevents unauthorized entry, issues citations and warnings, and responds to emergencies.",
"images": [],
"imageLabels": []
},
{
"title": "14. Maintenance Manager",
"description": "Plans, coordinates, and reviews the maintenance of buildings, facilities, vehicles, and utilities, inspects work, oversees maintenance contracts, and ensures compliance with standards.",
"images": [chart,mintain],
"imageLabels": []
}
]


const data3 = [
    {
    "title": "The birth of aviation",
    "description": `Orville and Wilbur Wright's successful flight in 1903 marked the "birth of aviation" and the establishment of the first airport in Kitty Hawk, North Carolina.`,
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Slow development of aviation infrastructure",
    "description": "In the following decade, aviation advancements focused on aircraft technology rather than creating facilities for takeoff and landing. By 1912, there were only 20 recognized landing facilities in the country, privately owned and operated.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "World War I impact",
    "description": "The outbreak of World War I led to the production of thousands of aircraft and the construction of 67 military airports. After the war, some military airfields remained operational, while others were decommissioned.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Early airmail service",
    "description": "After World War I, aviation began to be used for civil purposes, including airmail service. The first regular airmail route was established in 1918, and municipalities started constructing and operating local airports.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "The Contract Air Mail Act of 1925",
    "description": "Authorized the postmaster general to enter into contracts with private individuals or companies for airmail transportation. It paved the way for the growth of airmail service and discussions on government or private operations.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "The Air Commerce Act of 1926",
    "description": "President Calvin Coolidge signed this act to promote the development and stability of commercial aviation. It established the Department of Commerce's role in encouraging local and municipal airport development and regulating aviation activities.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Bureau of Air Commerce",
    "description": "In 1934, the Bureau of Air Commerce was established with divisions responsible for air navigation and air regulation. It aimed to manage and regulate aviation as a comprehensive system.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Airport development during the Great Depression",
    "description": "In response to the economic crisis, government programs like the Civil Works Administration and the Works Progress Administration funded airport development projects, establishing numerous new airports across the country.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "The Civil Aeronautics Act of 1938",
    "description": "This act consolidated the regulation of civil aviation and created the Civil Aeronautics Authority (later known as the Civil Aeronautics Board) and the Civil Aeronautics Administration. It marked the transfer of responsibilities from the Department of Commerce to the newly established entities.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Airport growth during World War II",
    "description": "The federal government authorized the construction of airports for national defense. The Development of Landing Areas for National Defense (DLAND) program led to the construction of hundreds of airports, including those intended for civil aviation use after the war.",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1955: Request for a review of aviation facilities problems",
    "description": "Appointment of William B. Harding as a consultant",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "Harding's recommendations",
    "description": "Appointment of an individual responsible for improving air traffic management",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1956: Midair collision between two aircraft",
    "description": "Public outcry for a safer air traffic management system",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1957: Curtis submits a report",
    "description": "Warns of growing airspace congestion and recommends the establishment of an independent Federal Aviation Agency",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1957: Airways Modernization Act passed",
    "description": "Calls for the development and modernization of national navigation and traffic control facilities",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1958: Federal Aviation Act signed",
    "description": "Creates the Federal Aviation Agency (FAA) and consolidates various aviation functions. Elwood R. Quesada becomes the first administrator of the FAA",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1967: Department of Transportation created",
    "description": "Coordinates the national transportation system, including the FAA",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "1970: Airport and Airway Development Act",
    "description": "Establishes the Airport and Airway Trust Fund, funded by taxes on domestic passenger fares, international flight tickets, aviation fuel, airfreight, and aircraft registration fees. Introduces grant programs for airport planning and development",
    "images": [],
    "imageLabels": []
    },
    {
    "title": "National Airport System Plan (NASP) established",
    "description": "A 10-year program to improve airports, considering factors such as transportation systems and the natural environment",
    "images": [],
    "imageLabels": []
    }
    ]


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
       
      <h2 style={{textAlign: "center", margin: "20px"}}>Chapter: 2  Airports and airport system</h2>
      <h3 style={{textAlign: "center", margin: "20px"}}>Organization and administration</h3>
      {data1.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}
  
  <h3 style={{textAlign: "center", margin: "20px"}}>A Historical and Legislative Perspective</h3>
<p style={{fontStyle: "italic",margin: "20px"}}>
  Job Description: Airport management offers a diverse range of career opportunities across various functional areas. Here are some of the job titles and their descriptions within an airport organization:
</p>


    {data2.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}

<VideoPlayer videoUrl="https://youtu.be/43hqeXjbWgQ "></VideoPlayer>

<h2 style={{textAlign: "center", margin: "20px"}} >A Historical and Legislative Perspective</h2>
<p style={{fontStyle: "italic",}}>Airports and airport systems have evolved significantly over time, influenced by historical events and legislative frameworks. Understanding the historical and legislative perspective helps us comprehend the development and functioning of airports as critical transportation hubs. the key aspects of this perspective are:</p>
<h3 style={{ margin: "20px"}}>Historical Perspective</h3>
 <p style={{fontStyle: "italic",}}>Early Origins, World Wars, Civil Aviation Growth, and Technological Advances.</p> 
<h3 style={{ margin: "20px"}}>Legislative Perspective</h3> <p style={{fontStyle: "italic",margin: "20px"}} >Airport Regulation, International Agreements, Airline Deregulation, Environmental Considerations, and Security Measures.
The historical and legislative perspectives on airports and airport systems vary across countries and regions, as each nation may have unique historical developments and legislative frameworks specific to its aviation industry.
</p >

{data3.map((item, index) => (
  <div style={{ marginBottom: '20px' }} key={index}>
    <Slideshow data={item} />
  </div>
))}


  </div>
  
  );
};

export default Week4;
