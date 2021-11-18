const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [ true, "First Name is a required."]
    },
    lastName: {
      type: String,
      required: [ true, "Last Name is a required."]
    },
    email: {
      type: String,
      required: [ true, "Email is a required."]
    },
    age: {
      type: Number,
      required: [ true, "Age is required"]
    },
    gender: {
      type: String,
      required: [ true, "Gender is required."]
    },
    speciality: {
      type: String,
      required: [ true, "Field Speciality is required."]
    }
}, {timestamps: true});

module.exports = mongoose.model('Doctor', DoctorSchema);