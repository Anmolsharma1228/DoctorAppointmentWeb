const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  Date: {
    type: Date,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  Comments: {
    type: String,
    required: true
  },
  File: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

const appointmentModel = mongoose.model("appointments", appointmentSchema);
module.exports = appointmentModel;
