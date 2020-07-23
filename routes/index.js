const banners = require('./banner');
const redis = require('./redis');
const ssr = require('./ssr');

module.exports = app => {
  app.use('/banners', banners)
  app.use('/redis', redis)
  app.use('/ssr', ssr)
}