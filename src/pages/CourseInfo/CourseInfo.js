import { Container, Paper,  } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState, useEffect } from 'react';
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./CourseInfo.module.css";
import NoticeToggle from "./NoticeToggle/NoticeToggle";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PlanModel from "./NoticeToggle/Content/ThreeDModels/PlanModel";
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({


  button: {

    backgroundColor: '#f44336', // Custom color
    color: '#fff', // Custom text color
    fontSize: '1rem', // Custom font size
    fontFamily: 'Arial', // Custom font family
    padding: '4px', // Custom padding
    borderRadius: '20px', // Custom border radius
    '&:hover': {
      backgroundColor: '#d32f2f', // Custom hover color
    },
  },


  buttonContainer: {
   
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(2), // Adjust the margin as needed
  },
}));
const CourseInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category,setcatogory] = useState(0);
  useEffect(() => {
    console.log(category);
  }, [category]);

  const handleBegin= ()=>{
    setcatogory(0);
    setIsLoading(true);

    // Simulating a delay of 2 seconds
    setTimeout(() => {
     
      
    setIsLoading(false);
    }, 2000);
    
   
    
  }
  const handleInter= ()=>{
    setcatogory(1);
    setIsLoading(true);

    // Simulating a delay of 2 seconds
    setTimeout(() => {
     
      
    setIsLoading(false);
    }, 2000);
   
    
  }
  const handleExpert= ()=>{
    setcatogory(2);
    setIsLoading(true);

    // Simulating a delay of 2 seconds
    setTimeout(() => {
     
      
    setIsLoading(false);
    }, 2000);
  }


  const history = useHistory();

  const handleButtonClick = () => {

    setIsLoading(true);

    // Simulating a delay of 2 seconds
    setTimeout(() => {
     
      const queryParams = new URLSearchParams();
    queryParams.append('level', category);
    queryParams.append('category', "mega");
    const queryString = queryParams.toString();
    history.push(`/TestInfo?${queryString}`);
    setIsLoading(false);
    }, 5000);
    
  };


  
  const classes = useStyles();

  return (
    <div>
      <CommonHeader title="Airport Fundamentals-AM124" />
      <Container className="my-5">
        <Paper className="px-5 py-3">
          <div className="">
            <div className="d-flex justify-content-between align-items-center my-4">

         
              <Typography variant="h6">Course Content</Typography>
              <Button color="primary" variant="contained" onClick={handleBegin}>
              {isLoading && category == 0 ?  <CircularProgress size={25} color="secondary" />: 'Beginner'}
            </Button>
            <Button color="primary" variant="contained" onClick={handleInter}>
            {isLoading && category == 1?  <CircularProgress size={25} color="secondary" />: 'Intermediate'}
            </Button>
            <Button color="primary" variant="contained" onClick={handleExpert}>
            {isLoading && category == 2?  <CircularProgress size={25} color="secondary" />: 'Expert'}
            </Button>
              <Typography style={{ color: "GrayText" }} variant="subtitle2">
                Course start date: 19/05/2023
              </Typography>
            </div>
            <PlanModel></PlanModel>
            <NoticeToggle  catogory = {category}/>
            <div className={classes.buttonContainer}>
            <Button  onClick= {handleButtonClick} className={classes.button} variant="contained" link="/TestInfo">
                    Attempt Mega Quiz
                  </Button>

                  </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default CourseInfo;
