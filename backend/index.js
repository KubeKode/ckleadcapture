const express= require("express");
const app= express();
const bodyParser= require("body-parser");
const cors= require("cors");
const dotenv = require("dotenv")

const dbConfig = require('./util/dbconfig')
dotenv.config();

const port = 3001 || process.env.PORT;

const Urlpth= require("./router");


app.use(bodyParser.json());
app.use(cors());
// app.use("/", Urlpth);
// app.use("/api/country", Urlpth);
// app.use("/api/adduser",Urlpth );
// app.use("/api/edituser/:id", Urlpth);
// app.use("/api/updateuser/:id",Urlpth);

dbConfig();
app.listen(port, ()=>console.log("Server running on port 5000"));