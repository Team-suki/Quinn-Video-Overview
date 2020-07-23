const banners = require('./banner')
const redis = require('./redis')

module.exports = app => {
  app.use('/banners', banners)
  app.use('/redis', redis)
}