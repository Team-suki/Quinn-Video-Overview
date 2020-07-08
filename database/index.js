const {Sequelize, Model, Datatypes} = require('sequelize');
const faker = require('faker');
const dbCredentials = require('./dbconfig.json')

var sequelize = new Sequelize(dbCredentials.development.database, dbCredentials.development.username, dbCredentials.development.password, {
  host: dbCredentials.development.host,
  dialect: dbCredentials.development.dialect
});

class Video extends Model {}

Video.init({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  video_url: Sequelize.STRING,
  bannerID: Sequelize.STRING
}, {sequelize, modelName: 'video'});

class Banner extends Model {}

Banner.init ({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  amount_pledged: Sequelize.STRING,
  goal: Sequelize.STRING,
  backers: Sequelize.INTEGER,
  backers_text: Sequelize.STRING,
  days: Sequelize.INTEGER,
  days_text: Sequelize.STRING,
  all_or_nothing: Sequelize.BOOLEAN,
  location: Sequelize.STRING,
  project_we_love: Sequelize.BOOLEAN
}, {sequelize, modelName: 'banner'});



module.exports.sequelize = sequelize;
module.exports.Video = Video;
module.exports.Banner = Banner;
