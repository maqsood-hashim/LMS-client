import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import Styles from "./AdminDashboard.module.css";
import { Paper, Typography } from "@material-ui/core";
import MainSidebar from "./MainSidebar/MainSidebar";
import SmallCard from '../AdminDashboard/CircularDataAnalyzer'
import { useState, useEffect } from 'react';
const AdminDashboard = () => {
  const [statistics, setStatistics] = useState(
    {
      totalQuestions:0,
      usersWithStatus1:0,
      usersWithStatus0:0
    }
  );

  useEffect(() => {
    fetchStatistics();
    
    
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch('/auth/stats'); // Update the endpoint URL if necessary
      const data = await response.json();
      console.log(data)
      setStatistics(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }; 
  
  const headingStyle = {
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent black background
    padding: '20px',
    borderRadius: '8px',
  };
  return (
    <div  className={Styles.dashboard}>
    <Container fluid >
      <Row>
        <Col
          md={2}
          sm={12}
          className={`d-none d-md-block `}
        >
          <MainSidebar/>
          
        </Col>
        <Col md={10} className={Styles.main__body}>
        <Container>
     
        <Typography variant="h4" style={headingStyle}>
          Welcome to Admin Dashboard
        </Typography>
      
      
    </Container>
          
        </Col>
       
        
      </Row>
     
     
      <div md={10} className="d-flex justify-content-center">
      <div className="d-flex align-items-center">
        <SmallCard title="Total students" value={statistics.usersWithStatus1} description="this is des" />
        <SmallCard title="Total Questions" value={statistics.totalQuestions}description="this is des" />
        <SmallCard title="Pending Students" value={statistics.usersWithStatus0} description="this is des" />
      </div>
    </div>
        
    </Container>
 
    </div>
  );
};

export default AdminDashboard;
