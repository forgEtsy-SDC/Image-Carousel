const mongoose = require('mongoose');
const { seedDatabase, Products } = require('./schema.js');

// Connect database
// let port = 'localhost'
let port = 'mongo'
mongoose.connect(`mongodb://${port}/products`, {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`database connected!`)
  seedDatabase();
})

const getImageUrls = (productId, callback) => {
  Products.find({listing_id: productId}, (err, results) => {
    if(results.length === 0){
      results[0] = {
        type: 'Error',
        message: 'No listing_id found'
      }
    }
    if(err){
      callback(err, null);
    }else{
      callback(null, results);
    }
  })
}

const getRandomProduct = (callback) => {
  Products.count((err, count) => {
    // Get a random entry
    var random = Math.floor(Math.random() * count)
    Products.find({}, (err, results) => {
      if(err){
        callback(err, null)
      }else{
        callback(null, results[random])
      }
    })
  })
}

const toggleFavorite = (productId, favorite, callback) => {
  Products.findOneAndUpdate({listing_id: productId}, {favorite: favorite}, (err, results) => {
    if(results.length === 0){
      results[0] = {
        type: 'Error',
        message: 'No listing_id found'
      }
    }
    if(err){
      callback(err, null);
    }else{
      callback(null, results);
    }
  })
}

module.exports.getImageUrls = getImageUrls;
module.exports.getRandomProduct = getRandomProduct;
module.exports.toggleFavorite = toggleFavorite;



