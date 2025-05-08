require("dotenv").config(); // should be at the top of your server entry file
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");
const patientRoutes = require("./routes/patientRoutes");
const signupRoutes = require("./routes/signupRoutes");

dotenv.config();
const app = express();
dbConnection();

app.use(cors());
app.use(express.json());

app.use("/patient", patientRoutes);
app.use("/users", signupRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
