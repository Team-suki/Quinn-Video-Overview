const db = require('./index.js');
const faker = require('faker');
const moment = require('moment');
const dbCredentials = require('./dbconfig.json')

// //Moved from index
// db.Banner.sync({force:true});

var videos =[
  'https://www.youtube.com/embed/9o0qCm41tx4',
  'https://www.youtube.com/embed/yddkQmyjUVQ',
  'https://www.youtube.com/embed/P4h2YDgACqE',
  'https://www.youtube.com/embed/2uajAEByMYw',
  'https://www.youtube.com/embed/OtREUajBwIQ',
  'https://www.youtube.com/embed/U39L4mEyIRc',
  'https://www.youtube.com/embed/ZJgkyGoIDk4',
  'https://www.youtube.com/embed/GruSnziMV4U',
  'https://www.youtube.com/embed/zgUY4-uH5sU',
  'https://www.youtube.com/embed/tqAuu1WWIM8',
  'https://www.youtube.com/embed/-9S42a1EkeY',
  'https://www.youtube.com/embed/CAHHK90J1_g'
]

const generateBanners = function() {
  for (var i = 0; i < 100; i ++) {
    db.Banner.create ({
      campaign_id: i,
      title: faker.company.catchPhrase(),
      description: faker.lorem.paragraph(),
      category: faker.commerce.department(),
      location: `${faker.address.city()}, ${faker.address.state()}`,
      product_we_love: faker.random.boolean(),
      video_url: videos[Math.floor(Math.random() * videos.length)],
      amount_pledged: faker.finance.amount(),
      pledge_goal: faker.finance.amount(),
      backers: faker.random.number(),
      end_date: moment(faker.date.future()).format('MM/DD/YYYY')
    }).catch(err => console.log(err));
  }
}

//Added
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).then(()=> {
    console.log('seeding DB')
    generateBanners()
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//module.exports.generateBanners = generateBanners;