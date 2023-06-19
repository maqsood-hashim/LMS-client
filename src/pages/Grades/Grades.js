import { Paper, Typography } from "@material-ui/core";
import React, { useState ,useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import QuestionTable from "./GradesTable";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import "./GradeInfo.css"
const Grades = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [dataClone, setDataClone] = useState([]);
  const [qlevel , setQlevel] = useState(0);

  const Button = ({ text, onClick, color, style }) => {
    const buttonStyle = {
      backgroundColor: color,
      ...style,
    };
  
    return (
      <button onClick={onClick} className="button" style={buttonStyle}>
        {text}
      </button>
    );
  };
///Button Clicked track
const [selectedButton, setSelectedButton] = useState();


  const handleClick = (level) => {
    setSelectedButton(level);
    // Handle button click event here
    setQlevel(level)
    const filteredData = dataClone.filter((item) => item.level === level);
    setData(filteredData)
    //  console.log("filtesd"+ filteredData)
    // console.log(`Selected level: ${qlevel}`);
  }
    
    const getData = ()=>{
      console.log(qlevel)
      fetch('https://kind-blue-coral-hose.cyclic.app/get-questions')
        .then(res => res.json())
        .then((data) => { 
          // console.log(data)
          // console.log("Filtere the data on"+qlevel)
          setDataClone(data)
          // const filteredData = dataClone.filter((item) => item.level === 0);
          setData(data)

          
         
       
          })
        .catch(error => console.error('Error fetching questions:', error));
    
     }
      
  
    
 
 
    
  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch(`https://kind-blue-coral-hose.cyclic.app/getStudentGrades/${user._id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setData(data);
        } else {
          console.error('Failed to fetch grades:', response.status);
        }
      } catch (error) {
        console.error('Error in fetching grades:', error);
      }
    };

    fetchGrades();
  }, []);
   
    // getData();
    
 

  const headingStyle = {
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent black background
    padding: '20px',
    borderRadius: '8px',
    marginBottom:'10px'
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block leftSideBar`}>
          
        <Sidebar  Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        <Sidebar Icon={TouchAppIcon} title="Grades" link="/grades" />
      
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
   
      
          </Col>
          <Col md={10}>
            <Container className="mb-5">
              <Paper>
              <Typography
                 Typography variant="h4" style={headingStyle}
                >
                  Grades
                </Typography>
</Paper>
              {/* <div className="button-row">
                <Button
        text="Beginner"
        onClick={() => handleClick(0)}
        color={selectedButton === 0 ? '#4caf50' : '#777'}
        style={{ marginRight: '10px' }}
      />
      <Button
        text="Intermediate"
        onClick={() => handleClick(1)}
        color={selectedButton === 1 ? '#ff9800' : '#777'}
        style={{ marginRight: '10px' }}
      />
      <Button
        text="Expert"
        onClick={() => handleClick(2)}
        color={selectedButton === 2 ? '#f44336' : '#777'}
        style={{ marginRight: '10px' }}
      />
    </div> */}
              <QuestionTable Questiondata = {data}/>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Grades;
