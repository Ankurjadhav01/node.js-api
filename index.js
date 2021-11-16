const express = require('express')
const application = express();
const studentRouter = require('./student')
const courseRouter = require('./course')

application.use(express.json())


application.listen(3000 , ()=>{
    console.log("Listining On port 3000");
})



application.get("/", (Request,Response)=>{
    Response.json("Api is working")
})

const apiRoter = express.Router()
application.use("/api", apiRoter)




apiRoter.use('/courses', courseRouter)

