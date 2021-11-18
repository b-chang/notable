const Patient = require('../models/patient.model');

module.exports = {
  getPatients: async (req, res) => {
    try {
      const patients = await Patient.find().sort([['createdAt', 'descending']]);
      return res.json(patients);
    } catch(e) {
      return res.status(400).json(e);
    }
  },
  getOnePatient: async (req, res) => {
    try {
      const patient = await Patient.findOne(req.params);
      return res.json(patient);
    } catch(e) {
      return res.status(400).json(e);
    }
  },
  createPatient: async (req, res) => {
    try {
      const patient = await Patient.create(req.body)
      return res.json({ message: "Patient has successfully been added.", patient })
    } catch(e) {
      return res.status(400).json(e)
    }
    return
  }
}