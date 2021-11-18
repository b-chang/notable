const DoctorControllers = require('../controllers/doctors.controller');

module.exports = (app) => {
  app.get('/api/doctor', DoctorControllers.getDoctors)
  app.get('/api/doctor/:id', DoctorControllers.getOneDoctor)
  app.post('/api/doctor', DoctorControllers.createDoctor)
}