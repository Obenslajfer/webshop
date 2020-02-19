// här ska vi definera vår server
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");


app.get("/", (req, res)=>{
    res.send("hello world")
})


module.exports = {app, port}
