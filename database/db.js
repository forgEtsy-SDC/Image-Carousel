const mongoose = require('mongoose');
const { makeDatabaseSeederFile, Products } = require('./schema.js');

// Connect database
let port = '27017'
// let port = 'mongo'
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb://localhost:${port}/forgEtsyImageCarouselDB`)

// Multiple db connections
const db = mongoose.connection;
// const db2 = mongoose.connection;
// const db3 = mongoose.connection;
// const db4 = mongoose.connection;
// Multiple db connections
db.on('error', console.error.bind(console, 'db1 connection error:'));
db.once('open', function() {
  console.log(`db1 connected!`)
  makeDatabaseSeederFile();
})
// db2.on('error', console.error.bind(console, 'db2 connection error:'));
// db2.once('open', function() {
//   console.log(`db2 connected!`)
// })
// db3.on('error', console.error.bind(console, 'db3 connection error:'));
// db3.once('open', function() {
//   console.log(`db3 connected!`)
// })
// db4.on('error', console.error.bind(console, 'db4 connection error:'));
// db4.once('open', function() {
//   console.log(`db4 connected!`)
// })

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



