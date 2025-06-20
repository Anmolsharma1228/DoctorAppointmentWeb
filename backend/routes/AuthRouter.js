const express = require("express");
const router = express.Router();

const {
  signupValidation,
  loginValidation,
} = require("../Middleware/authMiddleware");
const upload = require("../Middleware/upload")
const { signup, login, appointment } = require("../Controllers/AuthController");

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);
router.post("/BookAppointment", upload.single("file"), appointment);

module.exports = router;
