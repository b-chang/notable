const PatientControllers = require('../controllers/patients.controller');

module.exports = (app) => {
  app.get('/api/patient', PatientControllers.getPatients)
  app.get('/api/patient/:id', PatientControllers.getOnePatient)
  app.post('/api/patient', PatientControllers.createPatient)
}