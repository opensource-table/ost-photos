/* eslint-disable func-style */

const faker = require('faker');
const casual = require('casual');
const fs = require('fs');

let wstream = fs.createWriteStream('out.csv', {flags: 'a'});

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


const createMassive = function (from, to) {
  //timer start
  wstream = fs.createWriteStream('out.csv', {flags: 'a'});
  let start = Date.now();
  console.log('creating csv...');
  //writing csv
  let i = from;
  handler();
  function handler() {
    let ok = true;
    do {
      

      //counting.....
      if (i % 100000 === 0) {
        let temp = i / 1000000;
        console.log('hits ' + temp + ' million');
      }

      //writing.......
      let randomNum = casual.integer(from = 10, to = 13);
      for (let j = 0; j < randomNum; j++) {
        let stringData = createStringData(i, j);
        ok = wstream.write(stringData);
      }

      i ++;
    } while ( i < to && ok);

    if( i < to ) {
      wstream.once('drain', handler);
    }
  }
  
  //timer stop
  let period = Number((Date.now() - start)/1000).toFixed(2);
  console.log(period + ' seconds');
};

//test
createMassive(0, 1000);

