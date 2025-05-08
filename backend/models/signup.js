//mongodb schema

const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  Contact_Number: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const signup = mongoose.model("signup", signupSchema);
module.exports = signup;
