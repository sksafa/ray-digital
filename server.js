
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');;
const dotenv = require('dotenv')
const colors = require('colors');
const path = require("path");
const  connectDb  = require('./config/connectDb');
dotenv.config()

//database call

connectDb()

//rest obj
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/userInfo", require("./routes/userInfoRoute"));

//static files


//listen port 
const PORT = 8080 ||  process.env.PORT
app.listen(PORT, ()=>{
    console.log(`port is running at ${PORT}`)
})