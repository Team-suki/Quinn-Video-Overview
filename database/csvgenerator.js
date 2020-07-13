const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
const cliProgress = require('cli-progress');

//start progress bar
// create a new progress bar instance and use shades_classic theme
const options = {format:'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Duration: {duration} seconds'}
const bar1 = new cliProgress.SingleBar(options, cliProgress.Presets.shades_classic);
var dateFormat = '';
//Changes date formate if you're generating for Cassandra vs Postgres
var cassandra = true;
cassandra ? dateFormat = 'YYYY-MM-DD': dateFormat = 'MM/DD/YYYY'
//name of file you want to generate
var filename = 'HUGE.csv'
//number of records to generate
var endCount = 70000000;

// start the progress bar with a total value of 200 and start value of 0
bar1.start(endCount, 1);
//createWrite stream
const writer = fs.createWriteStream(filename,{flags: 'w'})
.on('finish', ()=> {
  console.log('Finished Writing')
})
.on('error', (err)=> {
  console.log('Error -', err)
})
writer.write('campaign_id,title,description,category,location,product_we_love,video_url,amount_pledged,pledge_goal,backers,end_date\n')
var generateCSV = function () {
  let i = 0;
  let writeToCSV =  function() {
    let ok = true;
    do {
      let videos =[
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
      i++;
      let entry = '';
      entry+=`${i},`;
      entry+= `${faker.company.catchPhrase()},`;
      entry+=`${faker.lorem.paragraph()},`;
      entry+=`${faker.commerce.department()},`;
      entry+=`"${faker.address.city()}, ${faker.address.state()}",`;
      entry+=`${faker.random.boolean()},`;
      entry+=`${videos[Math.floor(Math.random() * videos.length)]},`;
      entry+=`${faker.finance.amount()},`;
      entry+=`${faker.finance.amount()},`;
      entry+=`${faker.random.number()},`;
      entry+=`${moment(faker.date.future()).format(dateFormat)}\n`;
      if (i === endCount) {
        writer.write(entry);
        //bar1.increment();
      } else {
        writer.write(entry);
        bar1.increment();
      }
    } while (i < endCount && ok);
    if (i > 0) {
      writer.once('drain', writeToCSV)
      //writer.once('drain', ()=> console.log('draining'))
    }
  }
  writeToCSV();
}
generateCSV();
writer.end()
// stop the progress bar
bar1.stop();