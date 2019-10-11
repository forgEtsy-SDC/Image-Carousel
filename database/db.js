const mongoose = require('mongoose');
const { port } = require('../server/server.js')
const { seedDatabase, Products } = require('./schema.js');

// Connect database
mongoose.connect(`mongodb://localhost:${port}/products`, {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`database connected!`)
  seedDatabase();
})

const getImageUrls = (productId, callback) => {
  Products.find({listing_id: productId}, (err, results) => {
    if(err){
      callback(err, null);
    }else{
      callback(null, results);
    }
  })
}

module.exports.getImageUrls = getImageUrls;



