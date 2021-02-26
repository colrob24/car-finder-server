// ./routes/index.js
const makes = require('./makes')

module.exports = app => {
  app.use('/makes', makes)
}