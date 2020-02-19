// test för server.js
const supertest = require("supertest")
const {app, port} = require("../src/server")



describe("simpe test, doesnt work", ()=>{
    let server;

    beforeEach(() => {
         server = app.listen(port,() => console.log("testing server up"))
     })

    it("should respond to /",(done)=>{
       supertest(server).get("/").expect(200, done);

    })
    afterEach((done)=>{
        server.close(done);
    })
})