import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseInfo } from "../../../Redux/course/courseAction";
import { Col, Container, Row } from "react-bootstrap";
import Spinner_comp from "../../../components/Spinner/Spinner_comp";
import { Link,useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const CardOfAllCourse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [enroll,setEnroll]=useState(false)

  const { courseInfo } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseInfo());
  }, []);
  const openHandler = (id) => {
    setIsLoading(true);

    // Simulating a delay of 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      const coursePath = `/course/${id}`;
      history.push(coursePath);
    }, 5000);
    

  };

  return (
    <Container>
      <Row className="g-4">
        {courseInfo.length > 0 ? (
          courseInfo.map((val) => {
            return (
              <Col key={val._id} className="g-4" md={4}>
                <Card className="m-3">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={val.courseThumbnail}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      Airport Fundamentals 
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                       Airport Fundamentals course imparts knowledge on the airport, business, airlines, and every aspect of the aviation industry
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className='p-2'>
                  <Button  onClick={()=>{openHandler(val._id)}} variant='contained' color="primary" >
            
                  {isLoading ?  <CircularProgress size={25} color="secondary" />: 'Open'}</Button>
                  
                    
                   

                  </CardActionArea>
                </Card>
              </Col>
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <Spinner_comp />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CardOfAllCourse;
