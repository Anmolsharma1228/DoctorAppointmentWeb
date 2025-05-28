const router = require("express").Router();
const {
  signupValidation,
  loginValidation,
  upload,
} = require("../Middleware/authMiddleware");
const { signup, login, handleUpload } = require("../Controllers/AuthController");

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);
router.post("/upload", upload.single("attachment"), handleUpload);

module.exports = router;
