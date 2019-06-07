/* eslint-disable func-style */

const faker = require('faker');
const casual = require('casual');
const fs = require('fs');

//persantagebar
const cliProgress = require('cli-progress');
const bar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);

//uuid generator for cassandra, v1:timestamp
const uuidv1 = require('uuid/v1');

const STARTPOINT = 0;
const ENDPOINT = 10000000; //times 10 -> data
const DATANAME = 'data1.csv'

let wstream = fs.createWriteStream(DATANAME);

//String type data
const createStringData = function(room_id, pic_id) {
  return `${uuidv1()},\
${room_id},\
${pic_id},\
${faker.lorem.word()},\
${casual.date(format = 'YYYY-MM-DD')},\
${faker.image.food()},\
${faker.random.number(1)}
`
}

wstream.write("id,id_r,pic_id,restaurant,timestamp,url,dislike\n");
wstream.end();

const createMassive = function (start, end) {
  //timer start
  bar.start(end, start);
  console.log('\033c');
  
  wstream = fs.createWriteStream(DATANAME, {flags: 'a'});
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
      console.log('\nTotal time: ' + period + ' seconds');
    }

    if ( i < end ) {
      wstream.once('drain', handler);
    }
  }
};

//generate 100M
createMassive(STARTPOINT, ENDPOINT);


