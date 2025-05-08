const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/signup");

const JWT_SECRET = process.env.JWT_SECRET;


exports.signupUser = async (req, res) => {

  try {
    const { Name, Email, Contact_Number, Password } = req.body;
    const userExists = await User.findOne({ Email });
    if (userExists)
      return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(Password, 6);
    const newUser = await User.create({
      Name,
      Email,
      Contact_Number,
      Password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("JWT_SECRET:", JWT_SECRET)

    res.status(201).json({ token, user: { id: newUser._id, Email } });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
