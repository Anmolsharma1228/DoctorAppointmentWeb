const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConnection = require("./config/db");
const patientRoutes = require("./routes/patientRoutes");
const AuthRouter = require("./routes/AuthRouter");

dotenv.config();
const app = express();
dbConnection();

// // Ensure uploads directory exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// app.use("/uploads", express.static(uploadDir));

// Routes
app.use("/patient", patientRoutes);
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
