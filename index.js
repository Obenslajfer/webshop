// härifrån startar vi upp vår webshop
const {app, port} = require("./src/server")
const config = require("./config/config")

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(config.databaseURL, options).then(()=>{
app.listen(port, ()=> console.log(`server is running on port ${port}`))
    
})
