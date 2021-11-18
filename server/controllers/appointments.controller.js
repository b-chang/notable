const Appointment = require('../models/appointments.model');

module.exports = {
  getAppointments: async (req, res) => {
    try {
      const appointments = await Appointment.find({doctor: req.params.id}).sort([['createdAt', 'descending']]);
      res.json(appointments);
    } catch(e) {
      res.status(400).json(e);
    }
  },

  createAppointments: async (req, res) => {
    const patientId = '619555121fc749a75927fee8'
    const doctorId = '619555d0365d8189eb67b0e1'
    const appointmentDetails = {
      ...req.body,
      patient: patientId,
      doctor: doctorId
    }
    try {
      const appointment = await Appointment.create(appointmentDetails)
      return res.json({ message: "Appointment has successfully been made.", appointment })
    } catch(e) {
      return res.status(400).json(e)
    }
  }
}