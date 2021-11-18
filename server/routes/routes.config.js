module.exports = (app) => {
  require('./appointments.routes')(app)
  require('./doctor.routes')(app)
  require('./patient.routes')(app)
}