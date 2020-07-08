const db = require('./index.js');
const faker = require('faker');
const dbCredentials = require('./dbconfig.json')

//Moved from index
db.Video.sync();
db.Banner.sync();

const generateVideos = function() {
  for (var i = 0; i < 100; i ++) {
    db.Video.create ({
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      video_url: "https://www.youtube.com/embed/zlvAcRFnYSQ"
    });
  }
}

const generateBanners = function() {
  for (var i = 0; i < 100; i ++) {
    db.Banner.create ({
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      amount_pledged: `$${faker.finance.amount()}`,
      goal: `pledged of $${faker.finance.amount()} goal`,
      backers: 1 + Math.floor(Math.random() * 499),
      backers_text: "backers",
      days: 1 + Math.floor(Math.random() * 59),
      days_text: "days to go",
      all_or_nothing: faker.random.boolean(),
      location: faker.address.country(),
      project_we_love: faker.random.boolean()
    });
  }
}

//Added
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).then(()=> {
    generateVideos()
    generateBanners()
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports.generateVideos = generateVideos;
module.exports.generateBanners = generateBanners;