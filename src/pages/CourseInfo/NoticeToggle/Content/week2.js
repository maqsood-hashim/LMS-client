import React from 'react';
import Slideshow from '../ImageSlider'
import SecurityModel from '../Content/ThreeDModels/Security'
import "./Weekcss.css"
import week2_1_1 from '../../../../assets/images/week2_1_1.png'
import marking from '../../../../assets/images/marking.png'
import landing from '../../../../assets/images/landing.jpg'
import Touchdown from '../../../../assets/images/touchDown.png'
import underShoot from '../../../../assets/images/underShoot.jpg'
import visualFlight from '../../../../assets/images/visualFlight.jpg'
import long  from '../../../../assets/images/long.jpg'
import week2_1_2 from '../../../../assets/images/week2_1_2.jpg'
import week2_4_1 from '../../../../assets/images/week2_4_1.jpg'
import week2_13_1 from '../../../../assets/images/week2_13_1.jpg'
import week2_17_1 from '../../../../assets/images/week2_1_2.jpg'
import week2_25_1 from '../../../../assets/images/week2_25_1.jpg'
import week2_38_1 from '../../../../assets/images/week2_38_1.jpg'
import week2_41_1 from '../../../../assets/images/week2_41_1.jpg'
import week2_42_1 from '../../../../assets/images/week2_42_1.jpg'
import week2_44_1 from '../../../../assets/images/week2_44_1.jpg'
import week2_45_1 from '../../../../assets/images/week2_45_1.jpg'
import week2_48_1 from '../../../../assets/images/week2_48_1.jpg'

import week2_49_1 from '../../../../assets/images/week2_49_1.jpg'
import week2_50_1 from '../../../../assets/images/week2_49_2.jpg'
import week2_51_1 from '../../../../assets/images/week2_51_1.png'
import week2_53_1 from '../../../../assets/images/week2_53_1.jpg'
import week2_54_1 from '../../../../assets/images/week2_54_1.jpg'
import week2_55_1 from '../../../../assets/images/week2_55_1.jpg'
import week2_56_1 from '../../../../assets/images/week2_56_1.jpg'



const Week2 = () => {

   
    const data1 = {
        title: 'Global Positioning System (GPS)',
        description: 'A satellite-based navigation system that will enhance user-preferred routing, reduce separation standards, and increase access to airports under instrument meteorological conditions (IMC) through more precision approaches.',
        images: [week2_1_1,week2_1_2],
        imageLabels: [],
      };
      
      const data2 = {
        title: 'General aviation',
        description: 'That portion of civil aviation that encompasses all facets of aviation except air carriers holding a Certificate of Convenience and Necessity from the Civil Aeronautics Board, and large aircraft commercial operators.',
        images: [],
        imageLabels: [],
      };
      
      const data3 = {
        title: 'General aviation (GA) airports',
        description: 'Those airports with fewer than 2,500 annual enplaned passengers and those used exclusively by private and business aircraft not providing common carrier passenger service.',
        images: [],
        imageLabels: [],
      };
      
      const data4 = {
        title: 'Holding areas',
        description: 'Areas located at or very near the ends of runways for pilots to make final checks and await final clearance for takeoff.',
        images: [week2_4_1],
        imageLabels: [],
      };
      
      const data5 = {
        title: 'Instrument approach',
        description: 'An approach to an airport, with intent to land, by an aircraft flying in accordance with an IFR flight plan. instrument approach runway: A runway served by electronic aid providing at least directional guidance adequate for a straight-in approach.',
        images: [],
        imageLabels: [],
      };
      
      const data6 = {
        title: 'Instrument flight rules (IFR)',
        description: 'FAR rules that govern the procedures for conducting instrument flight. (FAR Part 91) Instrument Landing System (II.S): A system that provides, in the aircraft, the lateral, longitudinal, and vertical guidance necessary for a landing.',
        images: [],
        imageLabels: [],
      };
      
      const data7 = {
        title: 'Instrument runway',
        description: 'A runway equipped with electronic and visual navigation aids for which a straight-in (precision or non-precision) approach procedure has been approved.',
        images: [],
        imageLabels: [],
      };
      
      const data8 = {
        title: 'International Civil Aviation Organization (ICAO)',
        description: 'A membership-based organization comprised of 188 contracting states that span the world, which publishes a series of recommended policies and regulations to be applied by individual states in the management of their airports and civil aviation systems.',
        images: [],
        imageLabels: [],
      };
      
      const data9 = {
        title: 'International airport',
        description: 'An airport of entry that has been designated by the secretary of treasury or commissioner of customs as an international airport for customs service.',
        images: [],
        imageLabels: [],
      };
      
      const data10 = {
        title: 'Intersecting runways',
        description: 'Two or more runways that cross or meet within their lengths.',
        images: [],
        imageLabels: [],
      };
      
      const data11 = {
        title: 'Joint-use airport',
        description: 'An airport owned by the military, a public body, or both, where an agreement exists for joint civil-military, fixed-based aviation operations.',
        images: [],
        imageLabels: [],
      };
      
      const data12 = {
        title: 'Jet noise',
        description: 'The noise generated externally to a jet engine in the turbulent jet exhaust.',
        images: [],
        imageLabels: [],
      };
      
      const data13 = {
        title: 'Landing area',
        description: 'Any locality, either on land or water, including airports, heliports, and STOLports, that is used or intended to be used for the landing and takeoff or surface maneuvering of aircraft, whether or not facilities are provided for the shelter, servicing, or repair of aircraft, or for receiving or discharging of passengers or cargo.',
        images: [week2_13_1],
        imageLabels: [],
      };
      
      const data14 = {
        title: 'Leisure travel',
        description: 'A type of trip purpose that describes a passenger traveling primarily for leisure purposes.',
        images: [],
        imageLabels: [],
      };
      
      const data15 = {
        title: 'Large hubs',
        description: 'Those airports that account for at least 1 percent of the total annual U.S. passenger enplanements.',
        images: [],
        imageLabels: [],
      };
      
      const data16 = {
        title: 'Location map',
        description: 'Shown on the airport layout plan drawing, it depicts the airport, cities, railroads, major highways, and roads within 20 to 50 miles of the airport.',
        images: [],
        imageLabels: [],
      };
      
      const data17 = {
        title: 'Long-term parking',
        description: 'Designed for travelers who leave their vehicles at the airport while they travel.',
        images: [long],
        imageLabels: [],
      };
      
      const data18 = {
        title: 'Marking',
        description: 'On airports, a pattern of contrasting colors placed on the pavement, turf, or other usable surface by paint or other means to provide specific information to aircraft pilots, and sometimes to operators of ground vehicles, on the movement areas.',
        images: [marking],
        imageLabels: [],
      };
      
      
     
      
      const data19 = {
        title: 'Medium hubs',
        description: 'Those airports that account for between 0.25 and 1 percent of the total passenger enplanements.',
        images: [],
        imageLabels: [],
      };
      
      const data20 = {
        title: 'National Transportation Safety Board (NTSB)',
        description: 'Created by the act that established the Department of Transportation to determine the cause of transportation accidents and review on appeal the suspension or revocation of any certificates or licenses issued by the secretary of transportation.',
        images: [],
        imageLabels: [],
      };
      
      const data21 = {
        title: 'National Airport Plan (NAP)',
        description: 'The first organized airport system planning effort in the United States, established in 1944, which called attention to the private airport deficiencies of inadequate distribution and inadequate facilities, and formed the basis for airport system planning and federal funding programs for airports in the United States.',
        images: [],
        imageLabels: [],
      };
      
      const data22 = {
        title: 'Non-instrument runway',
        description: 'A runway intended for the operation of aircraft using visual approach procedures. See visual runway.',
        images: [],
        imageLabels: [],
      };
      
      const data23 = {
        title: 'Navigable airspace',
        description: 'Airspace at and above the minimum flight altitudes prescribed in the FARs, including airspace needed for safe takeoff and landing. (FAR Part 1)',
        images: [],
        imageLabels: [],
      };
      
      const data24 = {
        title: 'Notices to airmen (NOTAM)',
        description: 'Notices containing information (not known sufficiently in advance to publicize by other means) concerning the establishment, condition, or change in any component (facility, service, or procedure) of, or hazard in, the National Airspace System, the timely knowledge of which is essential to personnel concerned with flight operations.',
        images: [],
        imageLabels: [],
      };
      
      const data25 = {
        title: 'Obstruction light',
        description: 'A light, or one of a group of lights, usually red, mounted on a surface structure or natural terrain to warn pilots of the presence of a flight hazard; either an incandescent lamp with a red globe or a strobe light.',
        images: [week2_25_1],
        imageLabels: [],
      };
      
      const data26 = {
        title: 'Open-V runways',
        description: 'Two intersecting runways whose extended centerlines intersect beyond their respective thresholds.',
        images: [],
        imageLabels: [],
      };
      
      const data27 = {
        title: 'Organization chart',
        description: 'Shows the formal authority relationships between superiors and subordinates at various levels, as well as the formal channels of communication within the organization.',
        images: [],
        imageLabels: [],
      };
      
      const data28 = {
        title: 'Parallel runways',
        description: 'Two or more runways at the same airport whose centerlines are parallel.',
        images: [],
        imageLabels: [],
      };
      
      const data29 = {
        title: 'Parallel taxiways',
        description: 'Taxiways that are parallel to an adjacent runway.',
        images: [],
        imageLabels: [],
      };
      
      const data30 = {
        title: 'Parking apron',
        description: 'An apron intended to accommodate parked aircraft.',
        images: [],
        imageLabels: [],
      };
      
      const data31 = {
        title: 'Passenger handling system',
        description: 'A series of links or processes that a passenger goes through in transferring from one mode of transportation to another.',
        images: [],
        imageLabels: [],
      };
      
      const data32 = {
        title: 'Pier finger terminal',
        description: 'A type of terminal layout evolving in the 1950s when gate concourses (fingers) were added to simple terminal buildings.',
        images: [],
        imageLabels: [],
      };
      
      
   
      const data33 = {
        title: 'Pier satellite terminal',
        description: 'Terminals with concourses extending as piers ending in a round atrium or satellite area.',
        images: [],
        imageLabels: [],
      };
      
      const data34 = {
        title: 'Precision approach',
        description: 'A standard instrument approach using a precision approach procedure. See precision approach procedure.',
        images: [],
        imageLabels: [],
      };
      
      const data35 = {
        title: 'Primary airports',
        description: 'Public-use commercial airports enplaning at least 10,000 annual enplanements.',
        images: [],
        imageLabels: [],
      };
      
      const data36 = {
        title: 'Prohibited areas',
        description: 'Areas of airspace over security-sensitive ground facilities. All aircraft are prohibited from flight operations within a prohibited area unless specific prior approval is obtained.',
        images: [],
        imageLabels: [],
      };
      
      const data37 = {
        title: 'Public airport',
        description: 'An airport for public use, publicly owned and under control of a public agency.',
        images: [],
        imageLabels: [],
      };
      
      const data38 = {
        title: 'Ramp',
        description: 'A defined area, on a land airport, intended to accommodate aircraft for purposes of loading or unloading passengers or cargo, refueling, parking, or maintenance.',
        images: [week2_38_1],
        imageLabels: [],
      };
      
  
      const data40 = {
        title: 'Restricted areas',
        description: 'Areas of airspace where ongoing or intermittent activities that create unusual hazards to aircraft.',
        images: [],
        imageLabels: [],
      };
      
      const data41 = {
        title: 'Runway',
        description: 'A defined rectangular area on a land airport prepared for the landing and takeoff run of aircraft along its length.',
        images: [week2_41_1],
        imageLabels: [],
      };
  

      const data42 = {
        title: 'Runway centerline',
        description: 'A series of uniformly spaced stripes and gaps that run along the longitudinal center of the runway.',
        images: [week2_42_1],
        imageLabels: [],
      };
      
      const data43 = {
        title: 'Runway capacity',
        description: 'The maximum number of aircraft operations that can be accommodated by a runway over a given period of time.',
        images: [],
        imageLabels: [],
      };
      
      const data44 = {
        title: 'Runway lights',
        description: 'Lights having a prescribed angle of emission used to define the lateral limits of a runway. Runway light intensity may be controllable or preset. Lights are uniformly spaced at intervals of approximately 200 feet.',
        images: [week2_44_1],
        imageLabels: [],
      };
      
      const data45 = {
        title: 'Satellite terminals',
        description: 'A type of terminal layout in which all passenger processing is done in a single terminal that is connected by concourses to one or more satellite structures. The satellite generally has a common waiting room that serves a number of gate positions.',
        images: [week2_45_1],
        imageLabels: [],
      };
      
      const data46 = {
        title: 'Secondary runway',
        description: 'A runway that provides additional wind coverage or capacity to expedite traffic handling.',
        images: [],
        imageLabels: [],
      };
      
      const data47 = {
        title: 'Single runway',
        description: 'An airport having one runway.',
        images: [],
        imageLabels: [],
      };
      
      const data48 = {
        title: 'Sterile area',
        description: 'The part of the airport to which passenger access must be gained through TSA passenger screening checkpoints.',
        images: [week2_48_1],
        imageLabels: [],
      };
      
      const data49 = {
        title: 'Taxiway',
        description: 'A defined path, usually paved, over which aircraft can taxi from one part of an airport to another.',
        images: [week2_49_1],
        imageLabels: [],
      };
      
      const data50 = {
        title: 'Terminal area',
        description: 'The area used or intended to be used for such facilities as terminal and cargo buildings, gates, hangars, shops, and other service buildings; automobile parking, airport motels and restaurants, and garages and vehicle service facilities used in connection with the airport; and entrance and service roads used by the public within the boundaries of the airport.',
        images: [week2_50_1],
        imageLabels: [],
      };
      
            
      const data51 = {
        title: 'Touchdown zone',
        description: 'The area of a runway near the approach end where airplanes normally alight.',
        images: [Touchdown],
        imageLabels: [],
      };
      
      const data52 = {
        title: 'Transfer passengers',
        description: 'Passengers at an airport transferring from one aircraft to another as part of their itineraries.',
        images: [],
        imageLabels: [],
      };
      
      const data53 = {
        title: 'Undershoot',
        description: 'To touch down short of the point of intended landing.',
        images: [underShoot],
        imageLabels: [],
      };
      
      const data54 = {
        title: 'Visual flight rules (VFR)',
        description: 'Rules that govern the procedures for conducting flight under visual conditions.',
        images: [visualFlight],
        imageLabels: [],
      };
      
      const data55 = {
        title: 'Wind tee',
        description: 'A T-shaped free-rotating device to indicate wind direction. Sometimes capable of being secured for use as a landing direction indicator.',
        images: [week2_55_1],
        imageLabels: [],
      };
      
      const data56 = {
        title: 'Wind cone',
        description: 'A free-rotating fabric truncated cone that, when subjected to air movement, indicates wind direction and wind force.',
        images: [week2_56_1],
        imageLabels: [],
      };
      
      const data57 = {
        title: 'Zulu time (Z)',
        description: 'Time at the prime meridian in Greenwich, England.',
        images: [],
        imageLabels: [],
      };
      const data39 = {
        title: 'Reliever airports',
        description: 'A subset of general aviation airports that has the function of relieving congestion at primary commercial airports and providing more access for general aviation to the overall community.',
        images: [],
        imageLabels: [],
      };
      

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
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
  </div>
  );
};

export default Week2;
