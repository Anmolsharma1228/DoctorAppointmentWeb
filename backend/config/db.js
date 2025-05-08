const mongoose = require("mongoose");

const dbConnection = async () =>{
  try {
     await mongoose.connect(process.env.MONGODB_URL);
     console.log("connected to db");
   } catch (error) {
     console.log(error);
   }
}

module.exports = dbConnection;