const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/signup");

const JWT_SECRET = process.env.JWT_SECRET;

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ success: true, token, user: { id: user._id, email } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getData = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json({ Data: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
