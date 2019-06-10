const express = require('express');
const app = express();
// const faker = require('faker');
// const casual = require('casual');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3006;

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'opentable'
});



app.use(bodyParser.json());
app.use(cors());

app.get('/photos/:id_r', (req, res) => {
  let id_r = req.params.id_r; 
  pool.connect((err, client, release) => {
    if(err) {
      res.status(500).send(err);
      return;
    }
  });
  pool.query(`SELECT * FROM photos WHERE id_r = ${id_r}`)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  
});

app.listen(PORT, () => console.log('Start to listen on port ' + PORT));