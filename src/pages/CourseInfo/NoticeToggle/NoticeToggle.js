import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoticeToggleRow from './NoticeToggleRow/NoticeToggleRow';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { toggleTitle } from '../ToggleData/ToggleData';
import { Divider, Button, IconButton } from '@material-ui/core';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ExtensionIcon from '@material-ui/icons/Extension';
import ppt from '../../../assets/powerPoint.pptx'
import { useHistory } from 'react-router-dom';
import Week1 from './Content/week1_1';
import ImageSlider from './ImageSlider';
import "./NoticeToggle.css"
// import im1 from '../../../assets/images/BaggageHandling.jpg'
// import im2 from '../../../assets/images/ControllingTower.png'
// import im3 from '../../../assets/images/fueling.jpg'
// import im4 from '../../../assets/images/Runaway.jpg'
// import im5 from '../../../assets/images/Runaway2.jpg'


import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Week3 from './Content/Week3';
import Week2 from './Content/week2';
import Week6 from './Content/Week6';
import Week11 from './Content/Week11';
import Week12 from './Content/Week12';
import Week9 from './Content/Week9';
import Week10 from './Content/Week10'
import Week14 from './Content/Week14';
import Week5 from './Content/Week5';
import Week7 from './Content/Week7';
import Week13 from './Content/Week13';
import Week4 from './Content/Week4';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: "10px 0px",


  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

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

  downloadButton: {
    
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: 4,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
    }
  }
}));





const NoticeToggle = ({ catogory }) => {

  
  
  
  const history = useHistory();
  const classes = useStyles();
  var cat= ['week1','week2','week3','week4','week5']

  const handleButtonClick = (id) => {
    console.log('id'+cat[id] +catogory)
    const queryParams = new URLSearchParams();
    queryParams.append('level',catogory );
    queryParams.append('category', cat[id]);
    const queryString = queryParams.toString();
    history.push(`/TestInfo?${queryString}`);
  };

  console.log(catogory)
  const filteredCourses = toggleTitle.filter((course) => course.catogory === catogory );
  return (
    <div>
      {
        filteredCourses.map(({ id, title,topics,catogory }) => {
          return (
            <div key={id} className={classes.root}>


              
              <Accordion style={{ backgroundColor: "#EDEFF7" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                   <Typography className={classes.heading}>{title}</Typography>
                   {/* <Typography className='mx-3 my-2' variant="h6">{title}</Typography> */}
             
                </AccordionSummary>
                <Typography className='mx-5 my-2' variant="h6">Lesson Materials</Typography>
                {id === 2 && catogory === 0 ? <Week3 /> 
                : (id === 0 && catogory === 0 ? <Week1 /> 
                : (id === 1 && catogory === 0 ? <Week2 />
                :(id === 0 && catogory === 2 ? <Week11/>
                :(id === 1 && catogory === 2 ? <Week12/>
                :(id === 3 && catogory === 1 ? <Week9/>
                :(id === 4 && catogory === 1 ? <Week10/>
                 
                :(id === 3 && catogory === 2 ? <Week14/>
                :(id === 4 && catogory === 0 ? <Week5/>
                :(id === 1 && catogory === 1 ? <Week7/>
                 :(id === 2 && catogory === 2 ? <Week13/>
                 :(id === 3 && catogory === 0 ? <Week4/>
                 :(id === 0 && catogory === 1 ? <Week6/>
                 :null
                 
                 
                 )
                 )
                 )
                 )
                 )
                 )
                 )
                 )
                 
                 ))))}

                 
                 
               
                <AccordionDetails>


                  {/* <NoticeToggleRow

                    Icon={NoteAddIcon}
                    title="Course Announcement"
                    description="General news and announcements from the teachers for the students of the course. Teachers will use this activity to post course updates and students are automatically subscribed to this announcement for quick updates."
                  /> */}
                
                  <Divider />
                </AccordionDetails>
                <AccordionDetails>
                  {/* <NoticeToggleRow

                    Icon={MovieFilterIcon}
                    download={ppt}
                    
                    description="This is the main material from the teacher on the lesson. This can be a Word Document, PDF, or PowerPoint document. Simply edit this activity and attach the document file in the files section. Teachers may use the description field to provide additional guidelines to students on how to go through the document."
                  /> */}
                    <Typography className='mx-3 my-2' variant="h6">

  {/* <button className={classes.downloadButton} >Download the file</button> */}
</Typography>

<Divider />

 
                   <Divider />
                {/* </AccordionDetails>
                <AccordionDetails>
                <NoticeToggleRow
  link="https://www.youtube.com/watch?v=P8NQ2GsPRvw"
  Icon={ExtensionIcon}
  
  description="Click on Edit and  Title and external URL to add external resources relevant to the lesson."
>
 
</NoticeToggleRow> */}

                  <Divider />
                </AccordionDetails>
                <AccordionDetails>
                  <Typography variant="h6">
                    Lesson Activities
                  </Typography>
                  <AccordionDetails>
                    <Divider />
                  </AccordionDetails>
                </AccordionDetails>
                <AccordionDetails>
                 
                  <Divider />
                </AccordionDetails>

                <AccordionDetails>
                  <NoticeToggleRow
                    Icon={InsertCommentIcon}
                    title="Quiz of the week"
                    description="Please attempt the quiz of this week."
                  />
                  <Divider />
                  <div className={classes.buttonContainer}>
                  <Button  onClick= {()=>{handleButtonClick(id)}} className={classes.button} variant="contained" link="/TestInfo">
                    Attempt Quiz
                  </Button>
                  </div>
                </AccordionDetails>

              </Accordion>



            </div>

          )
        })
      }


    </div>
  );
};

export default NoticeToggle;