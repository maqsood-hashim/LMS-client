import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DownloadIcon from '@material-ui/icons/CloudDownloadSharp';
import "./GradeTable.css"
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useSelector } from "react-redux";

// import AddCourseModal from '../AddCourseModal/AddCourseModal'
import {

  Container,

  TableFooter,

} from "@material-ui/core";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    paddingTop: "30px",
  },
});


const QuestionTable = ({ level, Questiondata, category }) => {


  const [data, setData] = useState([]);
  const [Usersdata, setUsersData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();
  const [dataTodownload ,setDownloadData]= useState([])
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const { user } = useSelector((state) => state.auth);

  const HandleDownload = () => {
    const downloadData = [];
    data.forEach((row, index) => {
      const userData = Usersdata.find((user) => user._id === row.student_id);
      const { userName, email } = userData || {};
  
      const rowData = {
       
        Name: userName || '',
        Email: email ,
        week1: row.week1 ,
        week2: row.week2 ,
        week3: row.week3 ,
        week4: row.week4 ,
        week5: row.week5 ,
        mega: row.mega ,
      };
  
      downloadData.push(rowData);
    });
  
    setDownloadData(downloadData);

    console.log(downloadData)



   
    const filteredData = downloadData.map(({ _v, ...rest }) => rest);
  
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
  
    // Convert the filtered data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
    // Generate an array buffer from the workbook
    const arrayBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    // Convert the array buffer to a Blob
    const blob = new Blob([arrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
    // Trigger the download
    saveAs(blob, 'Grades Information.xlsx');
  };
  

  const getUserInfo = async () => {

    try {
      const response = await fetch(`http://localhost:5000/auth/users`); // Replace '123' with the actual user ID
      const data = await response.json();
      // console.log(data.users)
      setUsersData(data.users)
    } catch (error) {
      console.log(error);
    }

  }



  useEffect(() => {

    getUserInfo();
    console.log(Questiondata)


    setData(Questiondata)


  }, [level, Questiondata]);













  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>

        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-dark ">
              <TableCell align="center" className="text-light header-cell">
                <a onClick={HandleDownload} download className="download-link">
                <DownloadIcon className="icon-download"/>

                  Export Results</a>
              </TableCell>
              <TableCell align="center" className="text-light">
                Student Name
              </TableCell>
              <TableCell align="center" className="text-light">
                Student Email
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
            {(rowsPerPage > 0
              ? data
              : data
            )
              .map((row, index) => (
                <TableRow key={index+1}>
                  <TableCell component="th" scope="row" align="center">
                    {index+1}
                  </TableCell>

                  <TableCell align="center">
                    {Usersdata.find((user) => user._id === row.student_id)?.userName}
                  </TableCell>
                  <TableCell align="center">
                    {Usersdata.find((user) => user._id === row.student_id)?.email}
                  </TableCell>
                  <TableCell align="center">{row.week1}</TableCell>
                  <TableCell align="center">{row.week2}</TableCell>
                  <TableCell align="center">{row.week3}</TableCell>
                  <TableCell align="center">{row.week4}</TableCell>
                  <TableCell align="center">{row.week5}</TableCell>
                  <TableCell align="center">{row.mega}</TableCell>
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


    </Container>

  );
};

export default QuestionTable;
