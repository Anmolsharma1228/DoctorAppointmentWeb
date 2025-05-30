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

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/patient", patientRoutes);
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
