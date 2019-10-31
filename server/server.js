// Dependencies
const express = require('express')
const path = require('path');
const cors = require('cors');
const { getImageUrls, getRandomProduct, toggleFavorite } = require('../database/db.js')

// Instantation
const app = express();
let port = 3003;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(cors());

// Routes
app.get('/urls', (req, res) => {
  getImageUrls(req.query.productId, (err, urls) => {
    if(err){
      console.log(err)
      res.sendStatus(404)
    }else if(urls[0].type === 'Error'){
      console.log('Listing Id not found');
      res.sendStatus(422)
    }else{
      res.send(saveUrls(urls));
    }
  })
})

app.get('/urls/random', (req, res) => {
  getRandomProduct((err, urls) => {
    if(err){
      console.log(err)
      res.sendStatus(404)
    }else{
      res.send(saveUrls([urls]));
    }
  })
})

app.post('/urls/update', (req, res) => {
  toggleFavorite(req.body.params.productId, req.body.params.favorite, (err, results) => {
    if(err){
      console.log('error toggling favorite')
    }else{
      res.send(results)
    }
  })
})

const saveUrls = (urls) => {
  let images = urls[0].Images;
  const state = {}
  state.seventyFives = [];
  state.oneSeventies = [];
  state.fiveSeventies = [];
  state.fulls = [];
  for(let i = 0; i < images.length; i++){
    state.seventyFives.push(images[i].url_75x75);
    state.oneSeventies.push(images[i].url_170x135);
    state.fiveSeventies.push(images[i].url_570xN);
    state.fulls.push(images[i].url_fullxfull);
  }
  state.productId = urls[0].listing_id;
  state.favorite = urls[0].favorite;
  state.shop = urls[0].Shop.shop_name;
  state.shopId = urls[0].Shop.shop_id;
  return state;
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../dist/index.html"))
})

// Exports
module.exports.port = port;

// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
