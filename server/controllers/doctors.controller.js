const Doctor = require('../models/doctor.model');

module.exports = {
  getDoctors: async (req, res) => {
    try {
      const doctors = await Doctor.find().sort([['createdAt', 'descending']]);
      return res.json(doctors);
    } catch(e) {
      return res.status(400).json(e);
    }
  },
  getOneDoctor: async (req, res) => {
    try {
      const doctor = await Doctor.findOne({_id: req.params.id});
      return res.json(doctor);
    } catch(e) {
      return res.status(400).json(e);
    }
  },
  createDoctor: async (req, res) => {
    try {
      const doctor = await Doctor.create(req.body)
      return res.json({ message: "Doctor has successfully been added.", doctor })
    } catch(e) {
      return res.status(400).json(e)
    }
    return
  }
}