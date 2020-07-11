const {Sequelize, Model, Datatypes} = require('sequelize');
const faker = require('faker');
const dbCredentials = require('./dbconfig.json')

var sequelize = new Sequelize(dbCredentials.development.database, dbCredentials.development.username, dbCredentials.development.password, {
  host: dbCredentials.development.host,
  dialect: dbCredentials.development.dialect
});

//new Banner Model

class Banner extends Model {}

Banner.init ({
  campaign_id: { type: Sequelize.INTEGER, unique: true},
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  category: Sequelize.STRING,
  location: Sequelize.STRING,
  product_we_love: Sequelize.BOOLEAN,
  video_url: Sequelize.STRING,
  amount_pledged: Sequelize.FLOAT,
  pledge_goal: Sequelize.FLOAT,
  backers: Sequelize.INTEGER,
  end_date: Sequelize.DATEONLY
}, {sequelize, modelName: 'banner'});

module.exports.sequelize = sequelize;
module.exports.Banner = Banner;
