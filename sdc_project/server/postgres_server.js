const express = require('express');
const app = express();
// const faker = require('faker');
// const casual = require('casual');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3006;

app.use(bodyParser.json());
app.use(cors());



app.listen(PORT, () => console.log('Start to listen on port ' + PORT));
