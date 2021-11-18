const AppointmentsControllers = require('../controllers/appointments.controller');

module.exports = (app) => {
  app.get('/api/appointment/:id', AppointmentsControllers.getAppointments)
  // app.get('/api/appointment/:id', AppointmentsControllers.getOneAppointment)
  app.post('/api/appointment', AppointmentsControllers.createAppointments)
}