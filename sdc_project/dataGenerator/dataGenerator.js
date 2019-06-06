/* eslint-disable func-style */

const faker = require('faker');
const casual = require('casual');
const fs = require('fs');

//persantagebar
const cliProgress = require('cli-progress');
const bar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);

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
  bar.start(end, start);

  wstream = fs.createWriteStream('data.csv', {flags: 'a'});
  let startTime = Date.now();
  //writing csv
  let i = start;
  handler();
  function handler() {
    let ok = true;
    do {

      bar.update(i + 1);

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
      bar.stop();
      let period = Number((Date.now() - startTime) / 1000).toFixed(2);
      console.log(period + ' seconds');
    }

    if ( i < end ) {
      wstream.once('drain', handler);
    }
  }
};

//generate 100M
createMassive(0, 10000000);

