const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
const Appointment = require('../models/appointment')
const AppointmentData = require('../models/appointment')

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

const appointment = async (req, res) => {
  try {
    console.log("Form body:", req.body);
    console.log("Uploaded file:", req.file);

    const { date, department, comments } = req.body;

    const filePath = req.file ? req.file.path : null;
    const convertDate = new Date(date)
    const appointmentModel = new Appointment({
      date: convertDate,
      department,
      comments,
      file: filePath, 
    });

    await appointmentModel.save();

    res.status(201).json({
      message: "Appointment created successfully",
      success: true,
      data: appointmentModel
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};


const appointmentData = async(req, res)=>{
 try{
    const user = await AppointmentData.find();
    return res.status(200).json({ 
    success: true,  
    message: "Data fetched successfully",
    appointments: user 
    });
  }catch(error){
    res.status(404).json({ 
    success: false, 
    message: "Error fetching data", 
    error: error.message 
    });
  }
}


module.exports = {
  signup,
  login, 
  appointment,
  appointmentData
}