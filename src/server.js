// här ska vi definera vår server
const express = require("express");
const app = express();
const port = 8080;



app.use("/css", express.static("css"))
app.get("/", (req, res)=>{
    const engrej = "hallå"
    res.status(200).render("gallery", {engrej});
})


module.exports = {app, port}
