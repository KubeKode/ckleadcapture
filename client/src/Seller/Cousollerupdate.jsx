// import React, { useReducer } from "react";
// import { Button,  TextField, Paper, Typography } from "@mui/material";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// export function Cousollerupdate(props) {
 

//   const [formInput, setFormInput] = useReducer(
//     (state, newState) => ({ ...state, ...newState }),
//     {
//       name: "",
//       email: ""
//     }
//   );

//   const handleSubmit = evt => {
//     evt.preventDefault();

//     let data = { formInput };

//     fetch("https://pointy-gauge.glitch.me/api/form", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(response => console.log("Success:", JSON.stringify(response)))
//       .catch(error => console.error("Error:", error));
//   };

//   const handleInput = evt => {
//     const name = evt.target.name;
//     const newValue = evt.target.value;
//     setFormInput({ [name]: newValue });
//   };

 

//   console.log(props);

//   return (



// <>
// <BrowserRouter>
//   <Routes>
//   <Route  path="/updatefield" exact element={<Cousollerupdate/>}/>
//   </Routes>
//   </BrowserRouter>





    
//     <div>
//       <Paper className={classes.root}>
//         <Typography variant="h5" component="h3">
//           {props.formName}
//         </Typography>
//         <Typography component="p">{props.formDescription}</Typography>

      
//       </Paper>
//     </div>

//     </>
//   );
// }
