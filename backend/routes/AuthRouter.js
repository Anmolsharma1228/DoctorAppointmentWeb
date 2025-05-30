const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  signupValidation,
  loginValidation,
  authenticateUpload
} = require("../Middleware/authMiddleware");

const { signup, login, uploadFile } = require("../Controllers/AuthController");

// ✅ Define storage BEFORE using it
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);
router.post("/upload", authenticateUpload, upload.single("attachment"), uploadFile);

module.exports = router;
