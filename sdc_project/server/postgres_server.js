require('newrelic');
const express = require('express');
const app = express();
// const faker = require('faker');
// const casual = require('casual');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = 3006;

const casual = require('casual');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../client/public')));

//Database connection
const { Pool } = require('pg');

const pool = new Pool({
  host: '3.18.106.7',
  database: 'opentable',
  user: 'postgres',
  password: '1234',
  port: 5432
});

//Connect to PostgreSQL
pool.connect((err, client, release) => {
  if(err) {
    console.log(err);
    return;
  }
});


//GET REQUEST
app.get('/photos', (req, res) => {
  let from = 1;
  let to = 1000000;
  let randId = casual.integer(from, to).toString();
  pool.query(`SELECT * FROM photos WHERE id_r = ${randId}`)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//POST REQUEST
// app.post('/photos/:id_r', (req, res) => {
//   let id_r = req.params.id_r;
//   let newPhoto = req.body;
//   // res.status(200).send(newPhoto);
//   pool.query(`INSERT INTO photos(id, id_r, pic_id, resName, timestamp, url, dislike) VALUES (${newPhoto.id}, ${id_r}, ${newPhoto.pic_id}, ${newPhoto.resName, newPhoto.timestamp}, ${newPhoto.url}, ${newPhoto.dislike});`)
//     .then(() => {
//       res.status(201).send('success');
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

app.listen(PORT, () => console.log('Start to listen on port ' + PORT));