const express = require("express");
const {signupUser} = require('../Controllers/signupController')
const {loginUser, getData} = require('../Controllers/loginController')

const routes = express.Router();


//post request to signup
routes.post("/signup", signupUser)
routes.post("/login", loginUser)
routes.get("/data", getData)


module.exports = routes;