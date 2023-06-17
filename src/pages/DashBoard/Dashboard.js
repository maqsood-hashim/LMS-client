import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import Grade from "@material-ui/icons/Grade";
import MessageIcon from "@material-ui/icons/Message";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./Dashboard.css";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
// import  from '@mui/icons-material/Quiz';
import { Col, Container, Row } from "react-bootstrap";
import {
 
  Button,
  Card,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import Body4Card from "./Body4Card/Body4Card";
import NotificationsIcon from '@material-ui/icons/Notifications';

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import CourseCard from "./CourseCard/CourseCard";


import SideCalender from "../../components/Calender/SideCalender";
import RightSidebar from "./RightSidebar/RightSidebar";

import { useDispatch, useSelector } from "react-redux";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import { fetchCourseInfo } from "../../Redux/course/courseAction";

const Dashboard = () => {
  const [pageValue, setPageValue] = useState(5);
  const { user } = useSelector((state) => state.auth);
  const { courseInfo } = useSelector((state) => state.course);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    if (pageValue === "All") {
      dispatch(fetchCourseInfo());
      setPageValue(courseInfo.length);
    } else {
      dispatch(fetchCourseInfo());
    }
  }, [pageValue]);

  return (
    <div className={styles.dashboard}>
    
      <div className= {styles.left__sidebar__dashboard}>
        <Sidebar  Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        <Sidebar Icon={Grade} title="Grades" link="/grades" />
        
        <Sidebar Icon={TouchAppIcon} title="Course" link="/all-courses" />
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
   
      </div>
      <div className="main__body__dashboard">
        <Container>
          <div className={styles.dashboard__header__name}>
            <h2 className={styles.dashboard__name}>Welcome {user && user.userName}</h2>
            <Link to="/">Dashboard</Link>
          </div>
        </Container>

        <div className="d-flex flex-wrap ">
          <Body4Card
            link="/profile"
            shortTitle="Your Profile"
            title="Profile"
            Icon={AccountCircleOutlinedIcon}
          />
          <Body4Card
            shortTitle="Performance"
            title="Grades"
            link="/grades"
            Icon={TouchAppIcon}
          />


        </div>

        <Container fluid className="my-5">
          <Row>
            <Col md={9} xs={12} sm={12}>
             
             

                

              <Container className="mt-5">
              
  <Paper className="d-flex justify-content-between align-items-center p-4" style={{ background: 'linear-gradient(135deg, #2c3e50, #3498db)', color: '#fff' }}>
    <Typography variant="h6">Courses</Typography>
  </Paper>
  <Divider />


                <Divider />

                {courseInfo.length > 0 &&
                  courseInfo.slice(0, pageValue).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}

              
              </Container>
            </Col>

            {/* TODO:Right Sidebar */}

            <Col className=" right__sidebar__dashboard " md={3} xs={12} sm={12}>
              {/* <RightSidebar /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
