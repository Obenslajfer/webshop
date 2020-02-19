// härifrån startar vi upp vår webshop
const {app, port} = require("./src/server")


const server = app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})