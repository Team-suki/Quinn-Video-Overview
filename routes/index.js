const banners = require('./banner')

module.exports = app => {
  app.use('/banners', banners)
}