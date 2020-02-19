// härifrån startar vi upp vår webshop
const mongoose = require("mongoose")
const {app, port} = require("./src/server")
const config = require("./config/config")
const sassMiddleware = require("node-sass-middleware")


//adding scss middelware 
const path = require("path")
app.use(sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "css")
}))

//using the ejs tool
app.set("view engine", "ejs")


//adding an option so the mongoDB can work.
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


//adding mongoDB atlas URL
mongoose.connect(config.databaseURL, options).then(()=>{
app.listen(port, ()=> console.log(`server is running on port ${port}`))
    
})
