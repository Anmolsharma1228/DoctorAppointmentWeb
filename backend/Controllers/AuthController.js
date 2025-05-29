const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
const appointmentModel = require("../models/appointment");
const path = require('path');

  const signup = async (req, res) =>{
  try{
   const {name, email, contact_number, password} = req.body;
   const user = await UserModel.findOne({email});
   if(user){
    return res.status(409).json({
      message: "User already exists",
      success: false  
    })
   }
   const usermodel = new UserModel({name, email, contact_number, password});
   usermodel.password = await bcrypt.hash(password, 10);
  await usermodel.save();
  res.status(201).json({
    message: "User created successfully",
    success: true
  })
  }catch(error){
  res.status(500).json({
    message: "Internal server error",
    success: false
  })
  }
}


 const login = async (req, res) =>{
  try{
   const {email, password} = req.body;
   const user = await UserModel.findOne({email});
   if(!user){
    return res.status(403).json({
      message: "Authentication failed Email or Password is incorrect",
      success: false  
    })
   }
  
 const isPassEqual = await bcrypt.compare(password, user.password);
 if(!isPassEqual){
  return res.status(403).json({
    message: "Authentication failed Email or Password is incorrect",
    success: false  
  })
 }

 const jwtToken = jwt.sign(
  {email: user.email, _id: user._id},
  process.env.JWT_SECRET,
  {expiresIn: "24h"}
 )

  res.status(200).json({
    message: "Login successfully",
    success: true,
    jwtToken,
    email,
    name: user.name,
  })
  }catch(error){
  res.status(500).json({
    message: "Internal server error",
    success: false
  })
  }
}


const handleUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Extract other form fields (make sure frontend sends them correctly)
    const { appointmentDate, department, comments } = req.body;

    if (!appointmentDate || !department || !comments) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const fileUrl = `/uploads/${req.file.filename}`;

    // Save appointment record in DB
    const newAppointment = new appointmentModel({
      date: appointmentDate,
      department: department,
      comments: comments,
      file: fileUrl,
    });

    await newAppointment.save();

    res.status(201).json({
      message: "Appointment booked and file uploaded successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signup,
  login, 
  handleUpload
}