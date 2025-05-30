const joi = require("joi");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const signupValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    contact_number: joi.string().min(10).max(15).required(),
    password: joi.string().min(6).max(20).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad request",
      error,
    });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Bad request",
      error,
    });
  }
  next();
};


const authenticateUpload = (req, res, next) => {
  // Dummy check: you can replace this with real auth logic (JWT, session, etc.)
  const authHeader = req.headers.authorization;

 
};



module.exports = {
  signupValidation,
  loginValidation,
  authenticateUpload
};
