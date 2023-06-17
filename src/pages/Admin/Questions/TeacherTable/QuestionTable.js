import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditModal from './Modal';
// import AddCourseModal from '../AddCourseModal/AddCourseModal'
import {
  Box,
  Card,
  Container,
  IconButton,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import Axios from "axios";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Tab } from "react-bootstrap";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionLevel, setQuestionLevel] = useState(false);
  const [data, setData] = useState([]);
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const [categoryFilter, setCategoryFilter] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
        setIsModalOpen(false);
   
        document.body.style.overflow = 'auto';
   
        // getData()
    
        
    
  };

 const getData = ()=>{
  console.log(questionLevel)
  fetch('http://localhost:5000/get-questions')
    .then(res => res.json())
    .then((data) => { 
      // console.log(data)
      const filteredData = Questiondata.filter((item) => item.level);
      // console.log(filteredData)
      setData(filteredData)
   
      })
    .catch(error => console.error('Error fetching questions:', error));

 }
  
 

  useEffect(() => {
    setQuestionLevel(level)
    setData(Questiondata)
    console.log(Questiondata)
    //  getData();
    
  }, [level, Questiondata]);



  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };



  const [rowData, setRowData] = useState(null);

  const handleEdit = (row) => {
    console.log(row)
    setRowData(row);
    openModal();
  };

  
    
    const handleCategoryFilterChange = (event) => {
      setCategoryFilter(event.target.value);
    };
  
    
     

   const handleDataUpdate = (updatedRow) => {
    console.log("updated Row")
    console.log(updatedRow)
    const updatedTableData =data.map((row) => {
      if (row._id === updatedRow._id) {
       console.log("Id Matched in handleupdate method")
        return updatedRow; // Replace the row with the updated data
      }
      return row; // Keep other rows unchanged
    });
    setTableData(updatedTableData);
    setData(updatedTableData)
    console.log("table Data")
    console.log(updatedTableData)
};

      const filteredData = categoryFilter
      ? data.filter((row) => row.category === categoryFilter)
      : data;
      const [tableData, setTableData] = useState(filteredData)
     
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
      
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-dark ">
              <TableCell align="center" className="text-light">
              <div>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" value={categoryFilter} onChange={handleCategoryFilterChange}>
        <option value="">All</option>
          <option value="mega">Mega</option>
          <option value="week1">Week 1</option>
          <option value="week2">Week 2</option>
          <option value="week3">Week 3</option>
          <option value="week4">Week 4</option>
          <option value="week5">Week 5</option>
          
        </select>
      </div>
                
              </TableCell>
              <TableCell align="center" className="text-light">
                Question 
              </TableCell>
              <TableCell align="center" className="text-light">
               Answer
              </TableCell>
              
              <TableCell align="center" className="text-light">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
          ? filteredData
          : filteredData
        )
            .map((row,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {index}
                </TableCell>

                <TableCell align="center">{row.question}</TableCell>
                <TableCell align="center">
                {row.answer}
                </TableCell>
                <TableCell className="" align="center">
                <IconButton onClick={() => handleEdit(row)}>
  <EditIcon color="primary" />
</IconButton>

     
                 
                  
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
      
          </TableFooter>
        </Table>
      </TableContainer>
      <EditModal
  isOpen={isModalOpen}
  onClose={closeModal}
  rowData={rowData}
  onUpdate={handleDataUpdate}
  
/>

    </Container>

  );
};

export default QuestionTable;
