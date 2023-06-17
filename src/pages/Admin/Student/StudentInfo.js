import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../AdminDashboard/MainSidebar/MainSidebar";
import StudentTable from "./StudentTable/StudentTable";

const StudentInfo = () => {

    const headingStyle = {
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent black background
      padding: '20px',
      borderRadius: '8px',
    };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block`}>
            <MainSidebar />
          </Col>
          <Col md={10}>
            <Container className="mb-5">
              <Paper>
              <Typography
                 Typography variant="h4" style={headingStyle}
                >
                  Student-Info
                </Typography>
              </Paper>
              <StudentTable/>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentInfo;
