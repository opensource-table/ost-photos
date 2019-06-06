/* eslint-disable func-style */

const faker = require('faker');
const casual = require('casual');
const fs = require('fs');

let wstream = fs.createWriteStream('data.csv', {flags: 'a'});

//String type data
const createStringData = function(room_id, pic_id) {
  return `${room_id},\
${pic_id},\
${faker.lorem.word()},\
${faker.image.food()},\
${casual.date(format = 'YYYY-MM-DD')},\
${faker.random.number(1)}
`
}

wstream.write("id_r,pic_id,restaurant,url,timestamp,dislike\n");
wstream.end();


const createMassive = function (start, end) {
  //timer start
  wstream = fs.createWriteStream('data.csv', {flags: 'a'});
  let startTime = Date.now();
  console.log('creating csv...');
  //writing csv
  let i = start;
  handler();
  function handler() {
    let ok = true;
    do {
      
      //counting.....
      if (i % 10000 === 0) {
        let temp = i / 100000;
        console.log('hits ' + temp + ' million');
      }
      let stringData = '';
      //writing.......
      let randomNum = casual.integer(from = 10, to = 12);
      for (let j = 0; j < randomNum; j++) {
        stringData += createStringData(i, j);
      }
      ok = wstream.write(stringData);
      i ++;
    } while ( i < end && ok);

    //timer stop
    if (i === end) {
      let period = Number((Date.now() - startTime) / 1000).toFixed(2);
      console.log(period + ' seconds');
    }

    if ( i < end ) {
      wstream.once('drain', handler);
    }
  }
};

//test
createMassive(0, 10000000);

