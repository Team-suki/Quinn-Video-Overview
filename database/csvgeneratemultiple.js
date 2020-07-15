const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
const cliProgress = require('cli-progress');
//start progress bar
// create a new progress bar instance and use shades_classic theme

let header = 'campaign_id,title,description,category,location,product_we_love,video_url,amount_pledged,pledge_goal,backers,end_date\n';

const generateMultipleCSVS = function(numberOfCSVS, records, filename, dateFormat) {
  let csv = 0;
  let startingID = 0;
  let statusBars = {};
  //create the number of staus bars
  for (var barNumber = 1; barNumber <= numberOfCSVS; barNumber++) {
    let options = {format:`${filename}-${barNumber}.csv: progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Duration: {duration} seconds`}
    statusBars[barNumber] = new cliProgress.SingleBar(options, cliProgress.Presets.shades_classic);
    statusBars[barNumber].start(records, 1);
  }
  console.log('Number of CSVS: ', numberOfCSVS)
  while(csv < numberOfCSVS) {
    csv++;
    //do everything that was being done before
    //bar setup
    // let options = {format:`${filename}-${csv}.csv: progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | Duration: {duration} seconds`}
    // let bar = new cliProgress.SingleBar(options, cliProgress.Presets.shades_classic);
    let bar = statusBars[csv]
    //bar.start(records, 1);
    //write stream
    let writer = fs.createWriteStream(`${filename}-${csv}.csv`,{flags: 'w'})
    //if it's the first one, write the header
    if (startingID < records) {
      writer.write(header);
    }
    //write to csv
    //generate records
    let i = startingID;

    ///
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
        if (i === startingID+records) {
          writer.write(entry);
        } else {
          writer.write(entry);
          bar.increment();
        }
      } while (i < (startingID + records) && ok);
      if (i > 0) {
        writer.once('drain', writeToCSV)
        //writer.once('drain', ()=> console.log('draining'))
      }
    }
    writeToCSV();

    ///

    //write each one
    writer.end()
    //update the progress bar
    bar.stop();
    //end
    startingID += records + 1;
  }
}
generateMultipleCSVS(2, 50000000, '100Million', 'YYYY-MM-DD');