const express = require("express");
const Patient = require("../models/patient");
const routes = express.Router();


routes.post("/post", async (req, res) =>{
  try{
    const newUser = new Patient(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  }catch(error){
    res.status(400).json({ error: error.message });
  }
})


//get user data
routes.get("/get", async (req, res) =>{
  try{
    const user = await Patient.find();
    return res.status(200).json({ 
    success: true,  
    message: "Data fetched successfully",
    patients: user 
    });
  }catch(error){
    res.status(404).json({ 
    success: false, 
    message: "Error fetching data", 
    error: error.message 
    });
  }
})


module.exports = routes;