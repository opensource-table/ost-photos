
import { check } from "k6";
import http from "k6/http";
// import faker from '../ost_photos/node_modules/faker/locale/'
// console.log(faker.random.boolean);

const PORT = 3006;

export let options = {
  vus: 2000,
  rps: 2000,
  duration: "5m"
}

export default function () {
  let res = http.get(`http://localhost:${PORT}/photos`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};


////////////////////////////RESULT/////////////////////////////

done [==========================================================] 5m0s / 5m0s

✗ is status 200
 ↳  99% — ✓ 200687 / ✗ 597

checks.....................: 99.70% ✓ 200669 ✗ 597   
data_received..............: 323 MB 1.1 MB/s
data_sent..................: 17 MB  58 kB/s
http_req_blocked...........: avg=23.29ms  min=0s      med=4µs   max=8.85s    p(90)=12µs  p(95)=18µs 
http_req_connecting........: avg=19.15ms  min=0s      med=0s    max=8.85s    p(90)=0s    p(95)=0s   
http_req_duration..........: avg=2.84s    min=0s      med=2.13s max=21.58s   p(90)=3.98s p(95)=6.27s
http_req_receiving.........: avg=158.22µs min=0s      med=31µs  max=957.48ms p(90)=76µs  p(95)=106µs
http_req_sending...........: avg=4.39ms   min=0s      med=20µs  max=1.21s    p(90)=55µs  p(95)=80µs 
http_req_tls_handshaking...: avg=0s       min=0s      med=0s    max=0s       p(90)=0s    p(95)=0s   
http_req_waiting...........: avg=2.84s    min=0s      med=2.13s max=21.58s   p(90)=3.98s p(95)=6.27s
http_reqs..................: 201267 670.889124/s
iteration_duration.........: avg=2.88s    min=10.49ms med=2.13s max=21.59s   p(90)=4.01s p(95)=6.42s
iterations.................: 201266 670.885791/s
vus........................: 2000   min=2000 max=2000
vus_max....................: 2000   min=2000 max=2000

