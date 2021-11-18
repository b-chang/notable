const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [ true, "First Name is a required."]
    },
    lastName: {
      type: String,
      required: [ true, "Last Name is a required."]
    },
    age: {
      type: Number,
      required: [ true, "Age is required"]
    },
    gender: {
      type: String,
      required: [ true, "Gender is required."]
    },
    primary: {
      // type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true
      type: String
    },
    description: {
      type: String,
      required: [ true, "Patient description is required."],
      minLength: 8
    }
}, {timestamps: true});

module.exports = mongoose.model('Patient', PatientSchema);