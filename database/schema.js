const mongoose = require('mongoose');

// Import product files
const jewelry = require('./products/jewelry.js');
const housewares = require('./products/housewares.js');
const accessories = require('./products/accessories.js');
const toys = require('./products/toys.js');

// Set up schemas for database 'products'
const imagesSchema = new mongoose.Schema({
  listing_image_id: Number,
  listing_id: Number,
  url_75x75: String,
  url_170x135: String,
  url_570xN: String,
  url_fullxfull: String,
  full_height: Number,
  full_width: Number,
})

const optionsSchema = new mongoose.Schema({
  title: String,
  description_1: String,
  description_2: String,
  description_3: String,
  description_4: String,
})

const productSchema = new mongoose.Schema({
  listing_id: { // <-- product id
    type: Number,
    unique: true,
  },
  title: String,
  description: String,
  price: Number,
  category_path: [String],
  product_options: [optionsSchema],
  Images: [imagesSchema],
  Shop: {
    shop_id: Number,
    shop_name: String,
    title: String,
    icon_url_fullxfull: String,
  },
  favorite: Boolean,
});

const Products = mongoose.model('Products', productSchema);

// Saves array of products to database
const productsSave = products => {
  Products.insertMany(products)
    .then((data) => {
      console.log('...Saved products to database...')
    })
    .catch((err) => {
      console.log('...product saving err... :(', err);
    })
}

// Seed database with product items if empty
const seedDatabase = () => {
    Products.countDocuments((err, count) => {
      if(err){
        console.log('error counting')
      }else{
        if(count === 0){
          setFavoritesAndSave(jewelry.results);
          setFavoritesAndSave(housewares.results);
          setFavoritesAndSave(accessories.results);
          setFavoritesAndSave(toys.results);
      }
    }
  })
}

// Default all products to unfavorited
const setFavoritesAndSave = (products) => {
  for(let i = 0; i < products.length; i++){
    products[i].favorite = false;
  }
  productsSave(products);
}

module.exports.seedDatabase = seedDatabase;
module.exports.Products = Products;
