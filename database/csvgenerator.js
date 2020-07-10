const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

var videos = ['https://v.kickstarter.com/1594376054_afd46485a3ddb0869314d1520241efc77851d264/projects/1657474/video-506369-h264_high.mp4','https://v.kickstarter.com/1594371059_1ce5b12342193a8b8074f7f9ba08dbdd4cc1624f/projects/730019/video-414581-h264_high.mp4','https://v.kickstarter.com/1594374245_8072fb6794f3fd75465b9622e63105ef25ca04ce/projects/2713333/video-728034-h264_high.mp4', 'https://v.kickstarter.com/1594378146_51bed9a762483052ba1372093378cb28df83a8fc/projects/2477202/video-674352-h264_high.mp4','https://v.kickstarter.com/1594377932_693e2b803a0772b4bb8cf1ea5c74faa068da58f0/projects/111694/video-108947-h264_high.mp4','https://v.kickstarter.com/1594352879_f7d93b50c84bd7105e310abc46696ac34433c636/projects/1895274/video-559261-h264_high.mp4', 'https://v.kickstarter.com/1594376951_434d7ef635658ef57ea7476e55690de44e32c556/projects/1542071/video-483934-h264_high.mp4', 'https://v.kickstarter.com/1594372981_65e0d573d15778e4bc66f529bdc4de877027be9e/projects/183979/video-155496-h264_high.mp4', 'https://v.kickstarter.com/1594347941_d0e0aac6892c6c800c2215aeef326e96ca497b95/projects/3095084/video-819625-h264_high.mp4', 'https://v.kickstarter.com/1594380892_616ec000824742e84272dbc16eeaa4df5749fc16/projects/2543879/video-697175-h264_high.mp4','https://v.kickstarter.com/1594374128_7144e86b45b7d93a55ec5b17a0ff6bac8676c8d5/projects/2589968/video-700472-h264_high.mp4','https://v.kickstarter.com/1594378903_bb447501be0903f6d611cd4f000dcd9d936be9f7/projects/1895493/video-550606-h264_high.mp4', 'https://v.kickstarter.com/1594386168_3bfa1ec2c9dfd8c2541f381f552d911f4c99acde/projects/884493/video-373726-h264_high.mp4']

//10000000

console.log(videos.length)
//createWrite stream

const writer = fs.createWriteStream('finaldata.csv',{flags: 'w'})
.on('finish', ()=> {
  console.log('Finished Writing')
})
.on('error', (err)=> {
  console.log(err)
})
writer.write('campaign_id,title,description,category,location,product_we_love,video_url,amount_pledged,pledge_goal,backers,end_date\n')
var start = Date.now();
var startCount = 0;
var endCount = 10000000;
for( var i = startCount; i < endCount; i++) {
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
  entry+=`${moment(faker.date.future()).format("MM/DD/YYYY")}\n`;

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