var app = require("express").Router()
const req = require("express/lib/request")
const res = require("express/lib/response")
var db = require("../models/workout")

app.get("/api/workout" , (req,res) => {
    db.find({}).then(fitnessData => {
        console.log("getroute" , fitnessData)
        res.json(fitnessData)
    })
})

app.put("/api/workouts/:id" , (req , res) => {
    db.findByIdAndUpdate(req.params.id, {
        $push: {exercises:req.query}
    },{new: true}).then(fitnessData => {
        console.log("putroute" , fitnessData)
        res.json(fitnessData)
    })
})