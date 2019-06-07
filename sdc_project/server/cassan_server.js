const express = require('express');
const app = express();
const faker = require('faker');
const casual = require('casual');
const bodyParser = require('body-parser');
const PORT = 3005;

const uuidv1 = require('uuid/v1');

//cassandra
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'test'
});

app.use(bodyParser.json());
// app.post('/', (req, res) => {

// });

app.get('/', (req, res) => {
  // let id = req.params.id;
  let query = "SELECT * FROM test.mytest WHERE id=80d22e70-889a-11e9-9a81-9b340a8da812";
  client.execute(query)
    .then((data) => {
      res.status(200).send(data);
    });
});

app.post('/', (req, res) => {
  // console.log(req.body);
  let data = req.body;
  // console.log([data.id, data.url, data.dislike]);
  let query = "INSERT INTO test.mytest (id) VALUES (?)";
  client.execute(query, [data.id])
    .then(() => {
      res.status(201).send('success');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete('/', (req, res) => {
  let data = req.body;
  let query = "DELETE restaurant FROM test.mytest WHERE id = ?";
  client.execute(query, [data.id])
    .then(() => {
      res.status(201).send('successfully deleted ' + data.id);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

app.put('/', (req, res) => {
  let data = req.body;
  let query = "UPDATE test.mytest SET restaurant=? WHERE id=3dc952a0-88ab-11e9-ade2-65e9db81cbe7";
  client.execute(query, [data.restaurant])
    .then(() => {
      res.status(201).send('successfully updated ' + data.restaurant);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

app.listen(PORT, () => console.log('Start to listen on port ' + PORT));

// const cassandra = require('cassandra-driver');
// const client = new cassandra.Client({ contactPoints: ['h1', 'h2'], localDataCenter: 'datacenter1', keyspace: 'ks1' });

// const query = 'SELECT name, email FROM users WHERE key = ?';
// client.execute(query, [ 'someone' ])
//   .then(result => console.log('User with email %s', result.rows[0].email));


// function createOneData(room_id, pic_id) {
//   return {
//     id: uuidv1(),
//     id_r: room_id,
//     pic_id,
//     restaurant: faker.lorem.word(),
//     timestamp: casual.date(format = 'YYYY-MM-DD'),
//     url: faker.image.food(),
//     dislike: faker.random.number(1)
//   }
// }
