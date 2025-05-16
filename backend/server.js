const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnection = require("./config/db");
const patientRoutes = require("./routes/patientRoutes");
const AuthRouter = require("./routes/AuthRouter");

dotenv.config();
const app = express();
dbConnection();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use("/patient", patientRoutes);
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
