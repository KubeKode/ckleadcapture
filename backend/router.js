const express= require("express");
const Router= express.Router();
const dbconnected= require("./dbs");

// NOUSE
Router.get("/",(req, res)=>{
    const data=[{name:"David Test",email:"john007@gmail.com",pincode:123456,pan:"ASDFJKL",query:"none"}];
    res.send(data);
});
// _____

Router.get("/api/user",(req, res)=>{
    dbconnected.query("select * from leads", (err, rows, fields)=>{
        if(!err)
        {
        res.send(rows);
        } else {
            console.log(err);
        }
    })
});


// Router.get("/api/country", (req, res)=>{
//     dbconnected.query("select * from leads",(err, rows)=>{
//         if(!err){
//         res.send(rows);
//         } else{
//             console.log(err);
//         }
//     });

// });
// Router.get("/api/state/:id",(req, res)=>{
//     dbconnected.query("select * from tbl_state where countryid='"+req.params.id +"' ", (err, rows)=>{     
//         if(!err)
//         {
//         res.send(rows);
//         } else{
//             console.log(err);
//         }
//     });"${username}", "${email}","${phone}", "${address}", "${status}"
// });
// Router.post("/api/adduser/:id", (req, res)=>{
//     const username= req.body.name;
//     const email= req.body.email;
//     const phone= req.body.phone;
//     const address= req.body.pincode;
//     const status= req.body.query;
//     var sql= `INSERT INTO leads(username, email, phone, address, status) 
//     VALUES(?)`;
//     dbconnected.query(sql, (err, result)=>{
//         if(!err)
//         {
//         res.status(200).json({success:"User Record Inseted Successfully"});
//         } else{
//             console.log(err);
//         }
//     });
// });
Router.get("/api/edituser/:pan", (req, res)=>{
    dbconnected.query("select * from leads where pan = ? ",(err, rows)=>{
      if(!err)
      {
         res.send(rows[0]);
      } else{
        console.log(err);
      }
    });
});
// Router.get("/edit-field", (req, res)=>{
//     dbconnected.query("select * from leads where  ",(err, rows)=>{
//       if(!err)
//       {
//          res.send(rows[0]);
//       } else{
//         console.log(err);
//       }
//     });
// });
Router.put("/update-field", (req, res)=>{
    const userdata=[req.body.name, req.body.CreditScore, req.body.LoanAmount, req.body.ActiveAccount, req.body.remarks];
    var sql= "UPDATE leads SET name=?, CreditScore=?, LoanAmount=?, ActiveAccount=?, remarks=? where pan=?";
    const pan=req.params.pan
    dbconnected.query(sql, [pan],(err, result)=>{
        if(!err)
        {
        res.status(200).json({success:"User Record Updated successfully"});
        } else{
            console.log(err);
        }
    });
});


module.exports= Router;
