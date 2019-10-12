const mongoose = require('mongoose');
const { seedDatabase, Products } = require('./schema.js');

// Connect database
mongoose.connect(`mongodb://mongo:27017/docker-server-mongo`, {useNewUrlParser: true})

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

module.exports.getImageUrls = getImageUrls;



