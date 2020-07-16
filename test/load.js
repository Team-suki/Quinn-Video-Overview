import http from 'k6/http';
import {sleep} from 'k6';
//Request Rate: measured by the number of requests per second (RPS)
//VU: Number of virtual users
//R: the number of requests per VU iteration
//T: A value larger than the time needed to complete a VU iteration

//T = (R * http_req_duration) + 1s
//Request Rate = (VU * R)/T
//VU = (Request Rate * T)/R
export let options = {
  vus: 300,
  duration: '10s'
}
export default function() {
  const before = new Date().getTime();
  const T = 6; // time needed to complete a VU iteration

  //var res = http.get('http://localhost:3002/9900000');
  http.get('http://localhost:3002/9900000');

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder)
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`)
  }
  //console.log('Response time was ' + String(res.timings.duration) + ' ms')
}
//k6 run --vus 10000 --iterations 100000 load.js