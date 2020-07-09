const fs = require('fs');
const faker = require('faker');

var videos = ['https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-108947-h264_high.mp4', 'https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-155496-h264_high.mp4', 'https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-373726-h264_high.mp4', 'https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-414581-h264_high.mp4','https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-483934-h264_high.mp4','https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-506369-h264_high.mp4','https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-550606-h264_high.mp4','https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-559261-h264_high.mp4','https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-674352-h264_high.mp4','https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-697175-h264_high.mp4', 'https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-700472-h264_high.mp4', 'https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-728034-h264_high.mp4', 'https://hrr46-sdc.s3-us-west-1.amazonaws.com/videos/video-819625-h264_high.mp4']

//10000000

console.log(videos.length)
//createWrite stream

const writer = fs.createWriteStream('finaldata.json',{flags: 'w'})
.on('finish', ()=> {
  console.log('Finished Writing')
})
.on('error', (err)=> {
  console.log(err)
})

var start = Date.now();
var startCount = 0;
var endCount = 10000000
for( var i = startCount; i < endCount; i++) {
  //console.log('# ',i)
  let entry = {
    title: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
    category: faker.commerce.department(),
    location: `${faker.address.city()}, ${faker.address.state()}`,
    product_we_love: faker.random.boolean(),
    video_url: videos[Math.floor(Math.random() * videos.length)],
    amount_pledged: faker.finance.amount(),
    pledge_goal: faker.finance.amount(),
    backers: faker.random.number(),
    end_date: faker.date.future()
  }
  if (i === startCount) {
    entry = "[" + JSON.stringify(entry) + ",";
  } else if (i === endCount - 1) {
    entry = JSON.stringify(entry) + "]";
  } else {
    entry = JSON.stringify(entry) + ",";
  }
  writer.write(entry)
}
writer.end()
console.log('Done')

var end = Date.now();
var diff = end - start;
console.log('Start - ', start)
console.log('End - ', end)

console.log('Diff (ms) - ', diff)
console.log('Diff (sec) - ', diff/1000)