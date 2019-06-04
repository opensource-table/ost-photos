// `id`  //1 to end
//  `restaurant` // name of restaurant
//  `url` // Facker url
//  `timestamp` // YYYY-MM-DD
//  `unrelated_report` // ??
//  `inappropriate_report` // ???
//  `dislike` // 0 or 1

//  1, 'Rempel Group', 'https://resizer.otstatic.com/v2/photos/large/24947294.jpg', '1977-02-12', 6, 3, 0

const faker = require('faker');
const casual = require('casual');

console.log(faker.date.past(10));

const createOneData = function( id ) {
  let oneImage = { id, };
  res.restaurant = faker.company.companyName();
  res.url = faker.image.food();
  res.timestamp = casual.date(format = 'YYYY-MM-DD');
  res.unrelated_report = faker.random.number(10);
  res.inappropriate_report = faker.random.number(10);
  res.dislike = faker.random.number(1);
  return oneImage;
};

//at least 10 images per room