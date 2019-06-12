require('newrelic')
const express = require('express');
const app = express();
// const faker = require('faker');
// const casual = require('casual');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3006;

app.use(bodyParser.json());
app.use(cors());

//Database connection
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'opentable'
});

//Connect to PostgreSQL
pool.connect((err, client, release) => {
  if(err) {
    res.status(500).send(err);
    return;
  }
});


//GET REQUEST
app.get('/photos/:id_r', (req, res) => {
  let id_r = req.params.id_r; 
  pool.query(`SELECT * FROM photos WHERE id_r = ${id_r}`)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//POST REQUEST
app.post('/photos/:id_r', (req, res) => {
  let id_r = req.params.id_r;
  let newPhoto = req.body;
  // res.status(200).send(newPhoto);
  pool.query(`INSERT INTO photos(id, id_r, pic_id, restaurant, timestamp, url, dislike) VALUES (${newPhoto.id}, ${id_r}, ${newPhoto.pic_id}, ${newPhoto.restaurant}, ${newPhoto.timestamp}, ${newPhoto.url}, ${newPhoto.dislike});`)
    .then(() => {
      res.status(201).send('success');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => console.log('Start to listen on port ' + PORT));