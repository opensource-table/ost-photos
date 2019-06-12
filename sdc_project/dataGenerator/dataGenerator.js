/* eslint-disable func-style */

const faker = require('faker');
const casual = require('casual');
const fs = require('fs');

//persantagebar
const cliProgress = require('cli-progress');
const bar = new cliProgress.Bar({}, cliProgress.Presets.shades_classic);

//uuid generator for cassandra, v1:timestamp
// const uuidv1 = require('uuid/v1');

const STARTPOINT = 0;
const ENDPOINT = 100; //times 10 -> data
const DATANAME = 'data2.csv'

let wstream = fs.createWriteStream(DATANAME);
let counter = 0;

const resUrl = ['http://wang-guan.com/o/01.jpg',
  'http://wang-guan.com/o/02.jpg',
  'http://wang-guan.com/o/03.jpg',
  'http://wang-guan.com/o/04.jpg',
  'http://wang-guan.com/o/05.jpg',
  'http://wang-guan.com/o/06.jpg',
  'http://wang-guan.com/o/07.jpg',
  'http://wang-guan.com/o/08.jpg',
  'http://wang-guan.com/o/09.jpg',
  'http://wang-guan.com/o/10.jpg',
  'http://wang-guan.com/o/11.jpg',
  'http://wang-guan.com/o/12.jpg',
  'http://wang-guan.com/o/13.jpg',
  'http://wang-guan.com/o/14.jpg',
  'http://wang-guan.com/o/15.jpg',
  'http://wang-guan.com/o/16.jpg',
  'http://wang-guan.com/o/17.jpg',
  'http://wang-guan.com/o/18.jpg',
  'http://wang-guan.com/o/19.jpg',
  'http://wang-guan.com/o/20.jpg'];


//String type data
const createStringData = function(id, room_id, pic_id, resName, url) {
  return `${id},\
${room_id},\
${resName},\
${pic_id},\
${casual.date(format = 'YYYY-MM-DD')},\
${url}
`
}

wstream.write("id,id_r,resName,pic_id,timestamp,url\n");
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
      let tempName = casual.word;
      for (let j = 0; j < randomNum; j++) {
        stringData += createStringData(counter, i, j, tempName, resUrl[j]);
        counter += 1;
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


