
const faker = require('faker');
const casual = require('casual');
const fs = require('fs');

let wstream = fs.createWriteStream('out.csv')

// const csvWriter = require('csv-write-stream');
// let writer = csvWriter({sendHeaders: false});

//Object type data
const createOneData = function (room_id, pic_id) {
  let oneImage = { id: room_id, pic_id };
  oneImage.restaurant = faker.company.companyName();
  oneImage.url = faker.image.food();
  oneImage.timestamp = casual.date(format = 'YYYY-MM-DD');
  oneImage.unrelated_report = faker.random.number(10);
  oneImage.inappropriate_report = faker.random.number(10);
  oneImage.dislike = faker.random.number(1);
  return oneImage;
};

//String type data
const createStringData = function(room_id, pic_id) {
  return `${room_id},\
${pic_id},\
"${faker.company.companyName()}",\
${faker.image.food()},\
${casual.date(format = 'YYYY-MM-DD')},\
${faker.random.number(10)},\
${faker.random.number(10)},\
${faker.random.number(1)}
`
}


const createMassive = function (number) {
  //timer start
  let start = Date.now();

  console.log('start creating csv...');

  //writing csv
  wstream.write("id,pic_id,restaurant,url,timestamp,unrelated_report,inappropriate_report,dislike\n");
  for (let i = 0; i < number; i++) {
    // let data = createOneData(Math.floor(i / 10), i % 10);
    // wstream.write(data);
    let stringData = createStringData(Math.floor(i / 10), i % 10);
    wstream.write(stringData);
  }

  //timer stop
  wstream.end();
  let period = Number((Date.now() - start)/1000).toFixed(2);
  console.log(period + ' seconds');
};


createMassive(100);