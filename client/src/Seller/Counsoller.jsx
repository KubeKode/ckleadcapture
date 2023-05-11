import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import{ useParams} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"




const columns = [
  { id: "Id", label: "Sr.No", minWidth: 10 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "Phone", label: "MobileNumber", minWidth: 50 },
  {id: "email",label: "Email Address",minWidth: 70,align: "left",format: (value) => value.toLocaleString("en-US")},
  {id: "pincode",label: "PinCode",minWidth: 10,align: "left",},
  {id: "pan",label: "Pan Number",minWidth: 120,align: "left",},
  {id: "query",label: "Query",minWidth: 200,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "CreditScore",label: "Credit Score",minWidth: 120,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "OutstandingAmount",label: "Outstanding Amount",minWidth: 120,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "ActiveAccount",label: "ActiveAccount",minWidth: 20,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "remarks",label: "Remarks",minWidth: 150,align: "left",format: (value) => value.toLocaleString("en-US"),},
  // {id: "Suit",label: "Suit",minWidth: 120,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "BankName",label: "Bank Names",minWidth: 20,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "SuitFile",label: "SuitFile",minWidth: 150,align: "left",format: (value) => value.toLocaleString("en-US"),},
  {id: "Status",label: "Status",minWidth: 120,align: "left",format: (value) => value.toLocaleString("en-US"),},
 
  {id: "Action",label: "Action",minWidth: 120,align: "left",format: (value) => value.toLocaleString("en-US"),},
 
];


function MyVerticallyCenteredModal(props) {

  const [validated, setValidated] = useState(false);
  const[pannumber,setPan]=useState('');
  const[creditScore,setCreditScore]=useState('');
  const[ActiveAccount,setActiveAccount]=useState('');
  const[LoanAmount,setLoanAmount]=useState('');
  const[remarks,setRemarks]=useState('');


const {pan}=useParams()



  useEffect(()=>{
    axios.get('http://localhost:5000/edit-field/'+pan)
    .then(res=>
      {
setPan(res.data[0].pan)
setCreditScore(res.data[0].CreditScore)
setActiveAccount(res.data[0].ActiveAccount)
setLoanAmount(res.data[0].LoanAmount)
setRemarks(res.data[0].remarks)
      })
    .catch(err=>console.log(err))
  },[])

 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:5000/update-field/'+pan,{pan ,creditScore,LoanAmount,ActiveAccount,remarks})
   .then(res=>{if(res.data.updated){
res.json()

   }
   else{
    alert('not updated')
   }
  })
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update user Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Pan Number</Form.Label>
          <Form.Control
            required
            type="text"
            name="pan"
       value={pan}
       onChange={(e)=>setPan(e.target.value)}
            placeholder="pannumber"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Credit Score</Form.Label>
          <Form.Control
            required
            type="number"
name="CreditScore"
            placeholder="Credit Score"
            defaultValue="Otto"
            value={creditScore}
            onChange={(e)=>setCreditScore(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Outstanding Amount</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">₹	</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Outstanding Amount"
name="OutstandingAmount"
              aria-describedby="inputGroupPrepend"
              value={LoanAmount}
              onChange={(e)=>setLoanAmount(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
            Mark Correct value.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Active Account</Form.Label>
          <Form.Control type="number"  value={ActiveAccount}
       onChange={(e)=>setActiveAccount(e.target.value)} placeholder="Active Account" required />
          <Form.Control.Feedback type="invalid">
           mark correct number
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Remarks</Form.Label>
          <Form.Control type="text"  value={remarks}
       onChange={(e)=>setRemarks(e.target.value)} placeholder="Enter Client Status" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Suit File</Form.Label>
          <Form.Control type="text"   placeholder="Suit file" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control type="text"   placeholder="Suit bank names" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

     
      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text"  
    placeholder="Open/Close" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>payment Status</Form.Label>
          <Form.Control type="text"  
    placeholder="SucessFull/pending" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group> 
        {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Suit File</Form.Label>
          <Form.Control type="text"   placeholder="Suit file" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group> */}

        {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control type="text"   placeholder="Suit file" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group> */}

     
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default function Seller() {



  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
 
  const [userData, setuserData] = useState([]);




  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch("http://localhost:5000/api/user");
      const resData = await reqData.json();
      setuserData(resData);
      console.log(resData);
    };
    getUserdata();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function handleClick(id) {
    setOpen(true)
    // Define the logic for handling the button click here
    console.log(`Button clicked for row with id ${id}`);
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Paper sx={{ width: "100%" }}>
         <TableContainer>
          
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody >
              {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover key={row}>
                    <TableCell>{row.Id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.pincode}</TableCell>
                    <TableCell>{row.pan}</TableCell>
                    <TableCell>{row.query}</TableCell>
                    <TableCell>{row.CreditScore}</TableCell>
                    <TableCell>{row.OutstandingAmount}</TableCell>
                    <TableCell>{row.ActiveAmount}</TableCell>
                    <TableCell>{row.SuitFile}</TableCell>
                    <TableCell>{row.BankName}</TableCell>
                    <TableCell>{row.remarks}</TableCell>
                    {/* <TableCell>{row.remarks}</TableCell> */}

                    <TableCell>{row.Status}</TableCell>
                    <TableCell>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
       Info
      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100, 1000]}
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
