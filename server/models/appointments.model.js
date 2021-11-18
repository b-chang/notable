const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Patient', autopopulate: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true
  },
  time: {
    type: String
  },
  kind: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  // medications: [
  //   { type: String }
  // ],
  // completed: {
  //   type: Boolean,
  //   required: true,
  //   default: false
  // },
}, {timestamps: true});

AppointmentSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Appointment', AppointmentSchema)