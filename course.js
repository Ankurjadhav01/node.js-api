const express = require('express')

const courseRouter = express.Router()
const courses = [
{name: 'angular', id:1},
{name: 'node js', id:2},
{name: 'express', id:3},
{name: 'java', id:4},
{name: 'servelt', id:5},
]

courseRouter.get("/", (Request,Response)=>{
Response.json(courses)
})

courseRouter.post("/", (Request,Response)=>{
    let name = Request.body.name;
    let id = courses.length + 1;
    let course = {
        name,
        id
    }
    courses.push(course)
    Response.json(course)
    })


    courseRouter.put("/:id", (Request,Response)=>{
        let name = Request.body.name;
        let id = Request.params.id
       let index = courses.findIndex(e=>{
            if(e.id == Number.parseInt(id)) return true
        })
        if(index >= 0){
            let course = courses[index]
            course.name = name
            Response.json(course)
        
        }else{
            Response.status(404).json({error: 'Course Not found' })

        }

        courses.push(course)
        Response.json(course)
        })

        courseRouter.delete("/:id" , (Request,Response)=>{
            let id = Request.params.id
            let index = courses.findIndex(e=>{
                if(e.id == Number.parseInt(id)) return true
        })

        if(index >= 0){
            let course = courses[index]
            courses.splice(index , 1)
            Response.json(course)
        
        }else{
            Response.status(404).json({error: 'Course Not found' })
        }
    })
module.exports = courseRouter