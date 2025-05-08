//mongodb schema

const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  FirstName:{
    type: String,
    required: true,
  },
  LastName:{
    type: String,
    required: true,
  },
  Phone:{
    type: Number,
    required: true,
  },
  Email:{
    type:String,
    required: true,
  },
  Address1:{
    type:String,
    required: true,
  },
  Address2:{
    type:String,
    required: true,
  },
  City:{
    type:String,
    required: true,
  },
  State:{
    type:String,
    required: true,
  },
  Zip:{
    type:Number,
    required: true,
  },
}, {timestamps: true});

const Patient = mongoose.model("patients", patientSchema);
module.exports = Patient;