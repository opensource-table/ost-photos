import { check } from "k6";
import http from "k6/http";
// import faker from '../ost_photos/node_modules/faker/locale/'
// console.log(faker.random.boolean);

const PORT = 3006;

export let options = {
  vus: 300,
  rps: 300,
  duration: "5m"
}

export default function () {
  // let res = http.get(`http://localhost:${PORT}/photos`);
  let res = http.get(`http://52.15.114.103:3006/`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};