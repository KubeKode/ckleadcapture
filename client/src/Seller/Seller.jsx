import React,{useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const columns = [
  { id: 'Id', sortable: true,Date, label: 'S.No', minWidth: 30 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'phone', label: 'MobileNumber', minWidth: 30 },
  {
    id: 'email',
    label: 'Email Address',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'pincode',
    label: 'PinCode',
    minWidth: 10,
    align: 'right',
   
  },
  {
    id: 'pan',
    label: 'Pan Number',
    minWidth: 70,
    align: 'right',
   
  },
  {
    id: 'query',
    label: 'Query',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];





export default function Seller() {
  setTimeout(() => {
    document.location.reload();
  },20000);
    const [userData,setuserData]=useState([])
    useEffect(()=>{
        const getUserdata=async()=>{
            const reqData=await fetch("http://localhost:5000/api/user")
           const resData=await reqData.json();
           setuserData(resData)
           console.log(resData);      
        }
  getUserdata()
    },[])
 
 
 
 
 
 
 
 
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 

  return (

    <>
  
    <Paper  sx={{ width: '100%' }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format 
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
      
        rowsPerPageOptions={[10, 25, 100,1000]}
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />


    </Paper>

   
    </>
  );
}