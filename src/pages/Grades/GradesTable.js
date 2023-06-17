import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import AddCourseModal from '../AddCourseModal/AddCourseModal'
import {
  
  Container,
  IconButton,
  TableFooter,

} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    paddingTop: "30px",
  },
});

const QuestionTable = ({level , Questiondata}) => {


  const [questionLevel, setQuestionLevel] = useState(false);
  const [data, setData] = useState([]);
   const classes = useStyles();

 

  

   
 

  useEffect(() => {
    setQuestionLevel(level)
    setData(Questiondata)
    console.log(Questiondata)
    //  getData();
    
  }, [level, Questiondata]);





  
    
  
    
  
    
     

     
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
      
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-dark ">
             
              <TableCell align="center" className="text-light">
                Sr# 
              </TableCell>
              <TableCell align="center" className="text-light">
               Category
              </TableCell>
              
              <TableCell align="center" className="text-light">
                Week 1
              </TableCell>
              <TableCell align="center" className="text-light">
                Week 2
              </TableCell>
              <TableCell align="center" className="text-light">
                Week 3
              </TableCell>
              <TableCell align="center" className="text-light">
                Week 4
              </TableCell>
              <TableCell align="center" className="text-light">
                Week 5
              </TableCell>
              <TableCell align="center" className="text-light">
                Mega
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data
        
            .map((row,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {index}
                </TableCell>

               
                <TableCell align="center">
                {row.level === "0" ? "Beginner" : row.level === "1" ? "Intermediate" : "Expert"}
                </TableCell>
               
                <TableCell align="center">
                {row.week1}
                </TableCell>
                <TableCell align="center">
                {row.week2}
                </TableCell>
                <TableCell align="center">
                {row.week3}
                </TableCell>

                <TableCell align="center">
                {row.week4}
                </TableCell>
                <TableCell align="center">
                {row.week5}
                </TableCell>
                <TableCell align="center">
                {row.mega}
                </TableCell>




     
                 
                  
               
              </TableRow>
            ))}

          
          </TableBody>
          <TableFooter>
      
          </TableFooter>
        </Table>
      </TableContainer>
    

    </Container>

  );
};

export default QuestionTable;
