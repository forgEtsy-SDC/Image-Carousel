const express = require('express')
const { getImageUrls } = require('../database/db.js')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

let port = 3003;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.get('/urls', (req, res) => {
  getImageUrls(req.query.productId, (err, urls) => {
    if(err){
      console.log(err)
      res.sendStatus(404)
    }else{
      res.send(urls);
    }
  })
})

module.exports.port = port;
