const express = require('express')
const db = require('../database/db')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

let port = 3003;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})


module.exports.port = port;
