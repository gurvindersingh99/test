require('dotenv').config()
const express = require("express");

const app = express();
const port = 6000;

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/g",(req,res)=>{
    res.send("hello world gurvinder")
})
app.listen(process.env.PORT,()=>{
    console.log("server started",port,process.env.PORT)
})