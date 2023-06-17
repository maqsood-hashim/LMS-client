import React from 'react';
import Slideshow from '../ImageSlider'
import "./Weekcss.css"
 import ParkingModel from '../Content/ThreeDModels/Parking'
import week1_1_1 from '../../../../assets/images/week1_1_1.jpg'
import week1_1_2 from '../../../../assets/images/week1_1_2.jpg'
import week1_1_3 from '../../../../assets/images/week1_1_3.jpg'

import week1_2_1 from '../../../../assets/images/week1_2_1.jpg'
import week1_3_1 from '../../../../assets/images/week1_3_1.jpg'
import week1_4_1 from '../../../../assets/images/week1_4_1.png'

import week1_6_1 from '../../../../assets/images/week1_6_1.jpg'
import week1_7_1 from '../../../../assets/images/week1_7_1.jpg'
import week1_8_1 from '../../../../assets/images/week1_8_1.png'
import week1_9_1 from '../../../../assets/images/week1_9_1.jpg'
import week1_9_2 from '../../../../assets/images/week1_9_2.jpg'

import week1_10_1 from '../../../../assets/images/week1_10_1.jpg'

import week1_18_1 from '../../../../assets/images/week1_18_1.jpg'

import week1_19_1 from '../../../../assets/images/week1_19_1.jpg'
import week1_20_1 from '../../../../assets/images/week1_20_1.jpg'
import week1_21_1 from '../../../../assets/images/week1_21_1.jpg'
import week1_22_1 from '../../../../assets/images/week1_22_1.jpg'
import week1_24_1 from '../../../../assets/images/week1_24_1.png'
import week1_24_2 from '../../../../assets/images/week1_24_2.jpg'
import week1_26_1 from '../../../../assets/images/week1_26_1.jpg'
import week1_27_1 from '../../../../assets/images/week1_27_1.jpg'
import week1_28_1 from '../../../../assets/images/week1_28_1.jpg'
import week1_33_1 from '../../../../assets/images/week1_33_1.jpg'
import week1_34_1 from '../../../../assets/images/week1_34_1.jpg'
import week1_35_1 from '../../../../assets/images/week1_35_1.jpg'
import week1_37_1 from '../../../../assets/images/week1_37_1.jpg'
import week1_38_1 from '../../../../assets/images/week1_38_1.jpg'
import week1_39_1 from '../../../../assets/images/week1_39_1.png'
import week1_40_1 from '../../../../assets/images/week1_40_1.jpg'
import week1_41_2 from '../../../../assets/images/week1_41_2.jpg'
import week1_41_3 from '../../../../assets/images/week1_41_3.jpg'
import week1_42_1 from '../../../../assets/images/week1_42_1.jpg'
import week1_45_1 from '../../../../assets/images/week1_45_1.jpg'
import week1_47_1 from '../../../../assets/images/week1_47_1.jpg'
import week1_50_1 from '../../../../assets/images/week1_50_1.jpg'
import week1_55_1 from '../../../../assets/images/week1_55_1.jpg'
import week1_56_1 from '../../../../assets/images/week1_56_1.jpg'
import week1_57_1 from '../../../../assets/images/week1_57_1.jpg'
import week1_59_1 from '../../../../assets/images/week1_59_1.jpg'
import week1_60_1 from '../../../../assets/images/week1_60_1.jpg'
import week1_62_2 from '../../../../assets/images/pave.gif'

// import week1_41_1 from '../../../../assets/images/week1_41_1.jpg'


const Week1 = () => {
    const data1 = {
        images: [week1_1_1, week1_1_2, week1_1_3],
        imageLabels: [],
        title: '1.	abandoned airport',
        description: `An airport permanently closed to aircraft operations,
    which may be marked in accordance with current FAA standards for marking and lighting of deceptive, closed, and hazardous areas on airports.
    `,

    };
    const data2 = {
        images: [week1_2_1],
        imageLabels: [],
        title: '2.	access taxiway',
        description: ` A taxiway that provides access to a particular location or area
    `,

    };
    const data3 = {
        images: [week1_3_1],
        imageLabels: [],
        title: '3.	Aiming point',
        description: `A distinctive mark placed on the runway to serve as a point
    for judging and establishing a glide angle for landing aircraft. It is usually
    1,000 feet from the landing threshold. Also known as a touchdown zone
    marking.
    
    `};
    const data4 = {
        images: [week1_4_1],
        imageLabels: [],
        title: '4.	Aircraft',
        description: `A device that is used or intended to be used for flight in the air. (FAR
            Part 1)
            
        
        `};

    const data5 = {
        images: [],
        imageLabels: [],
        title: '5.	Aircraft capacity',
        description: `The rate of aircraft movements on the runway/taxiway
            system that results in a given level of delay`};

    const data6 = {
        images: [week1_6_1],
        imageLabels: [],
        title: '6.	aircraft tiedowns',
        description: `Positions on the ground surface that are available for
                securing aircraft
                `};


    const data7 = {
        images: [week1_7_1],
        imageLabels: [],
        title: '6.	aircraft tiedowns',
        description: `The component of an airport that includes all the facilities located on the physical property of the airpo1t to facilitate aircraft operations, including runways and taxiways, navigational aids, lighting, signage, and marking`
    };

    const data8 = {
        images: [week1_8_1],
        imageLabels: [],
        title: '8.	air operations area (AOA)',
        description: `The area on the airport used or intended to be
                        used for landing, takeoff, or surface maneuvering of aircraft
                        `};


    const data9 = {
        images: [week1_9_1,week1_9_2],
        imageLabels: [],
        title: '9.	Airport',
        description: `An area of land or water that is used or intended to be used for the
                            landing and takeoff of aircraft, and includes its buildings and facilities, if
                            any
                            `};

    const data10 = {
        images: [week1_10_1],
        imageLabels: [],
        title: '10.	Airport configuration',
        description: `The relative layout of component pa1ts of an airport
                                such as the runway-taxiway-terminal arrangement.
                                `}

    const data11 = {
        images: [],
        imageLabels: [],
        title: '11.	Airport of entry',
        description: `11.	Airport of entry: See international airport.
                                    `}


    const data12 = {
        images: [],
        imageLabels: [],
        title: '12.	Airport open to the public',
        description: `An airport opens to the public without prior per- mission and without restrictions within the physical capacities of available facilities`
    }

    const data13 = {
        images: [],
        imageLabels: [],
        title: '13.	Airport premises liability policy',
        description: `Airport plans as part of a system that includes
national, regional, state, and local transportation planning
`}
    const data14 = {
        images: [],
        imageLabels: [],
        title: '14.	Airport system planning: ',
        description: `Airport plans as part of a system that includes
                                                national, regional, state, and local transportation planning
                                                `}

    const data15 = {
        images: [],
        imageLabels: [],
        title: '15.	Airport-to-airport distance',
        description: `The great-circle distance, measured in statute
                                                    miles, between airpo11s as listed in the Civil Aeronautics Board's official
                                                    airline route and mileage manual.
                                                    `}
    const data16 = {
        images: [],
        imageLabels: [],
        title: '16.	Airport traffic area: ',
        description: `Unless othetwise specifically designated in FAR Part
                                                        93, that airspace within a horizontal radius of 5 statute miles from the
                                                        geographical center of any airp011 at which a control tower is operating,
                                                        extending from the surface up to, but not including, an altitude of 3,000
                                                        feet above the elevation of the airport. (FAR Part 1)
                                                        `}

    const data17 = {
        images: [],
        imageLabels: [],
        title: '17.	Airport use agreement',
        description: `Legal contracts for the air carriers' use of the airport and leases for use of terminal facilities`}

    const data18 = {
        images: [week1_18_1],
        imageLabels: [],
        title: '18.	Air route ',
        description: `Navigable airspace between two points that is identifiable`}

    const data19 = {
        images: [week1_19_1],
        imageLabels: [],
        title: '19.	Air route surveillance radar (ARSR)',
        description: ` A radar facility remotely connected to an air route traffic control center used to detect and display the azimuth
        and range of en route aircraft operating between terminal areas, enabling
        an ATC controller to provide air traffic service in the air route traffic control
        system.
        `
    
    }

    const data20= {
        images: [week1_20_1],
        imageLabels: [],
        title: '20.	Air Route Traffic Control Center (ARTCC): ',
        description: `A facility established to provide air traffic control service to aircraft operating on an IFR flight plan within controlled airspace and principally during the en route phase of flight`
    
    }


    const data21= {
        images: [week1_21_1],
        imageLabels: [],
        title: '21.	Airside facilities',
        description: `The airfield on which aircraft operations are carried out,
        including runways and taxiways
        `
    
    }
    const data22= {
        images: [week1_22_1],
        imageLabels: [],
        title: '22.	Airside-landside concept',
        description: `Terminal concept that emphasizes a physical separation of facilities that handles passengers and ground vehicles and those that deal primarily with aircraft handling`
    
    }
    const data23= {
        images: [],
        imageLabels: [],
        title: '23.	Airspace',
        description: `Space in the air above the surface of the earth or a particular portion of such space, usually defined by the boundaries of an area on the surface projected upward.`
    
    }
    const data24= {
        images: [week1_24_1,week1_24_2],
        imageLabels: [],
        title: '24.	Air taxi aircraft',
        description: `Aircraft operated by the holder of an Air Taxi Operating
        Certificate, which authorizes the carriage of passengers, mail, or cargo for
        revenue in accordance with FAR Parts 135 and 121
        `
    
    }


    const data25= {
        images: [],
        imageLabels: [],
        title: '20.	Air Route Traffic Control Center (ARTCC): ',
        description: `A facility established to provide air traffic control service to aircraft operating on an IFR flight plan within controlled airspace and principally during the en route phase of flight`
    
    }
    const data26 = {
        images: [week1_26_1],
        imageLabels: [],
        title: '26. Air traffic:',
        description: 'Aircraft operating in the air or on an airport surface, exclusive of loading ramps and parking areas. (FAR Part 1)'
        };
        
        const data27 = {
        images: [week1_27_1],
        imageLabels: [],
        title: '27. Air traffic clearance:',
        description: 'An authorization by air traffic control, for the purpose of preventing collision between known aircraft, for an aircraft to proceed under specified traffic conditions within controlled airspace. (FAR Part 1)'
        };
        
        const data28 = {
        images: [week1_28_1],
        imageLabels: [],
        title: '28. Air traffic control (ATC):',
        description: 'A service operated by appropriate authority to promote the safe, orderly, and expeditious flow of air traffic. (FAR 1)'
        };
        
        const data29 = {
        images: [],
        imageLabels: [],
        title: '29. Approach and clear zone layout:',
        description: 'A graphic presentation to scale of the imaginary surfaces defined in FAR Part 77.'
        };
        
        const data30 = {
        images: [],
        imageLabels: [],
        title: '30. Approach area:',
        description: 'The defined area the dimensions of which are measured horizontally beyond the threshold over which the landing and takeoff operations are made.'
        };
        
        const data31 = {
        images: [],
        imageLabels: [],
        title: '31. Approach clearance:',
        description: 'Authorization issued by air traffic control to the pilot of an aircraft for an approach for landing under instrument flight rules.'
        };
        
        const data32 = {
        images: [],
        imageLabels: [],
        title: '32. Approach control facility:',
        description: 'A terminal air traffic control facility (TRACON, RAPCON, RATCF) providing approach control service.'
        };
        
        const data33 = {
        images: [week1_33_1],
        imageLabels: [],
        title: '33. Apron:',
        description: 'A defined area, on a land airport, intended to accommodate aircraft for purposes of loading or unloading passengers or cargo, refueling, parking, or maintenance.'
        };
        
        const data34 = {
        images: [week1_34_1],
        imageLabels: [],
        title: '34. Aqueous film-forming foam (AFFF):',
        description: 'Materials used as part of aircraft rescue and firefighting services.'
        };
        
        const data35 = {
        images: [week1_35_1],
        imageLabels: [],
        title: '35. Arriving passenger:',
        description: 'A passenger who has deplaned an aircraft and entered the terminal from the flight interface with the intention of leaving the airport terminal for his or her final destination through the access/processing interface.'
        };
        
        const data36 = {
        images: [],
        imageLabels: [],
        title: '36. Automated Radar Terminal System (ARTS):',
        description: 'Computer-aided radar display subsystems capable of associating alphanumeric data with radar returns. Systems of varying functional capability, determined by the type of automation equipment and software, are denoted by a number/letter suffix following the name abbreviation.'
        };
        
        const data37 = {
        images: [week1_37_1],
        imageLabels: [],
        title: '37. Automated Weather Observing System (AWOS):',
        description: 'Gathers weather data from unmanned sensors, automatically formulates weather reports, and distributes them to airport control towers.'
        };
        
        const data38 = {
        images: [week1_38_1],
        imageLabels: [],
        title: '38. Automatic Terminal Information Service (ATIS):',
        description: 'The continuous broadcast of recorded noncontrol information in selected high-activity terminal areas. Its purpose is to improve controller effectiveness and to relieve frequency congestion by automating the repetitive transmission of essential but routine information.'
        };
        
        const data39 = {
        images: [week1_39_1],
        imageLabels: [],
        title: '39. Baggage claim:',
        description: 'Facilities at which arriving passengers claim checked luggage.'
        };
        
        const data40 = {
        images: [week1_40_1],
        imageLabels: [],
        title: '40. Baggage claim carousels:',
        description: 'Equipment on which checked luggage is loaded for presentation to passengers at baggage claim.'
        };
        
        const data41 = {
        images: [week1_41_2,week1_41_3],
        imageLabels: [],
        title: '41. Baggage handling:',
        description: 'Services that include a number of activities involving the collection, sorting, and distribution of baggage.'
        };
        
        const data42 = {
        images: [week1_42_1],
        imageLabels: [],
        title: '42. Basic runway length:',
        description: 'Runway length resulting when actual length is corrected to mean sea level and standard atmospheric and no-gradient conditions.'
        };
        
        
        
        
        
        
  
const data43 = {
    images: [],
    imageLabels: [],
    title: '43. Basic transport airport (or runway):',
    description: 'An airport (or runway) that accommodates turbojet-powered aircraft up to 60,000 pounds gross weight.'
    };
    
    const data44 = {
    images: [],
    imageLabels: [],
    title: '44. Basic utility (BU) airport:',
    description: 'Accommodates most single-engine and many of the small twin-engine aircraft.'
    };
    
    const data45 = {
    images: [],
    imageLabels: [week1_45_1],
    title: '45. Biometrics:',
    description: 'Term used to describe technologies that measure and analyze human body characteristics for identification and authentication purposes.'
    };
    
    const data46 = {
    images: [],
    imageLabels: [],
    title: '46. Capacity:',
    description: 'The ability of an airport to handle a given volume of traffic (demand). It is a limit that cannot be exceeded without incurring an operational penalty.'
    };
    
    const data47 = {
    images: [week1_47_1],
    imageLabels: [],
    title: '47. Capital improvement expenses:',
    description: 'Very large, periodic expenses that contribute to significant airport infrastructure improvement or expansion.'
    };
    
    const data48 = {
    images: [],
    imageLabels: [],
    title: '48. Closed field marking:',
    description: 'Panels placed in the center of the segmented circle, origin the center of the field, in the form of a cross which will signify that the field is closed to all traffic.'
    };
    
    const data49 = {
    images: [],
    imageLabels: [],
    title: '49. Closed runway marking:',
    description: 'Panels placed on the ends of the runway and at regular intervals in the form of a cross, signifying that a runway is closed to all traffic.'
    };
    
    const data50 = {
    images: [week1_50_1],
    imageLabels: [],
    title: '50. Cockpit Information System (CIS):',
    description: 'Will process and display Flight Information Service (FIS) information and integrate it with navigation, surveillance, terrain, and other data available in the cockpit.'
    };
    
    const data51 = {
    images: [],
    imageLabels: [],
    title: '51. Code of Federal Regulations (CFR):',
    description: 'The published federal rules and regulations that are used to govern national policies.'
    };
    
    const data52 = {
    images: [],
    imageLabels: [],
    title: '52. Controlled access:',
    description: 'Measures used around airports to prevent or control the movement of persons and vehicles to and from security-sensitive areas of the airport property.'
    };
    
    const data53 = {
    images: [],
    imageLabels: [],
    title: '53. Controlled airspace:',
    description: 'Airspace within which some or all aircraft may be subject to air traffic control. (FAR Part 1)'
    };
    
    const data54 = {
    images: [],
    imageLabels: [],
    title: '54. Crosswind:',
    description: 'A wind blowing across the line of flight of an aircraft.'
    };
    
    const data55 = {
    images: [week1_55_1],
    imageLabels: [],
    title: '55. Crosswind component:',
    description: 'A wind component that is at a right angle to the longitudinal axis of the runway or the flight path of the aircraft.'
    };
    
    const data56 = {
    images: [week1_56_1],
    imageLabels: [],
    title: '56. Departing passenger:',
    description: 'A passenger entering the terminal from the ground access system through the access/processing interface.'
    };
    
    const data57 = {
    images: [week1_57_1],
    imageLabels: [],
    title: '57. Displaced threshold:',
    description: 'A runway marking that defines a threshold that is located at a point on the runway other than the beginning of the runway pavement, where aircraft are permitted to taxi and take off, but not land.'
    };
    
    const data58 = {
    images: [],
    imageLabels: [],
    title: '58. Display system replacement (DSR):',
    description: 'Part of a joint FAA and Department of Defense program to replace automated radar terminal systems and other older technology systems at air traffic control facilities.'
    };
    
    const data59 = {
    images: [week1_59_1],
    imageLabels: [],
    title: '59. Finger:',
    description: 'A roofed structure, with or without sidewalls, extending from the main terminal building or its concourse to the aircraft loading positions.'
    };
    
    const data60 = {
    images: [week1_60_1],
    imageLabels: [],
    title: '60. Flare out:',
    description: 'That portion of a landing maneuver in which the rate of descent is reduced to lessen the impact of landing.'
    };
    
    const data61 = {
    images: [],
    imageLabels: [],
    title: '61. Fleet mix:',
    description: 'The percentage of aircraft, by type, operating at an airport.'
    };
    
    const data62 = {
    images: [week1_62_2],
    imageLabels: [],
    title: '62. Flexible pavement:',
    description: 'A pavement structure consisting of a bituminous surface course, such as asphalt, a base course, and in most cases, a subbase course.'
    };





















    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              < div style={{ marginBottom: '20px', textAlign: 'center' }}>
      {/* <AtcModel></AtcModel> */}
      {/* <SecurityModel></SecurityModel> */}
      {/* <Runway /> */}
      <ParkingModel></ParkingModel>
      
    </div>
            </div>
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
            <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data13} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data14} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data15} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data16} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data17} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data18} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data19} />
                </div>
                {/* <div style={{ marginBottom: '20px' }}>
                <Slideshow data={data20} />
                </div> */}



                <div style={{ marginBottom: '20px' }}>
  <Slideshow data={data20} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data21} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data22} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data23} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data24} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data25} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data26} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data27} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data28} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data29} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data30} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data31} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data32} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data33} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data34} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data35} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data36} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data37} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data38} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data39} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data40} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data41} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data42} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data43} />
</div>

  <div style={{ marginBottom: '20px' }}>
  <Slideshow data={data44} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data45} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data46} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data47} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data48} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data49} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data50} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data51} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data52} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data53} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data54} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data55} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data56} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data57} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data58} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data59} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data60} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data61} />
</div>
<div style={{ marginBottom: '20px' }}>
  <Slideshow data={data62} />
</div>
</div>
                
      

    );
};

export default Week1;
