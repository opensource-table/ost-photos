import { check } from "k6";
import http from "k6/http";

const PORT = 3006;

export let options = {
  vus: 200,
  rps: 1000,
  duration: "10m"
}

export default function () {
  let res = http.get(`http://localhost:${PORT}/photos`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};