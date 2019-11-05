const mongoose = require('mongoose');
const debug = require('debug')('debugger');
// const fs = require('fs');

// Import product files
// const makeProduct = require('./products/mongoData.js');
// const makeSQLProduct = require('./products/postgreData.js');

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

// const makeDatabaseSeederFile1 = () => {
//   const writeStream = fs.createWriteStream('carouselProducts1.json');
//   let insertCount = 0;
//   let itemCount = 100000000;
//   let createProducts = () => {
//     for (let i = 1; i <= 100000; i++) {
//       itemCount++;
//       writeStream.write(JSON.stringify(makeProduct.makeFakeProduct(itemCount)));
//       insertCount++;
//     }
//     debug(`Wrote ${insertCount} items to 1`);

//   }
//   while(insertCount < 5000000) {
//     createProducts();
//   }
//   debug('done with 1')
//   writeStream.end();
// }

// makeDatabaseSeederFile1();

// const makeDatabaseSeederFile2 = () => {
//   const writeStream = fs.createWriteStream('carouselProducts2.json');
//   let insertCount = 0;
//   let itemCount = 105000001;
//   let createProducts = () => {
//     for (let i = 1; i <= 100000; i++) {
//       itemCount++;
//       writeStream.write(JSON.stringify(makeProduct.makeFakeProduct(itemCount)));
//       insertCount++;
//     }
//     debug(`Wrote ${insertCount} items to 2`);

//   }
//   while(insertCount < 5000000) {
//     createProducts();
//   }
//   debug('done with 2')
//   writeStream.end();
// }

// makeDatabaseSeederFile2();

// const makeSQLProductDatabaseSeederFile = () => {
//   const writeStream = fs.createWriteStream('carouselProducts4.csv');
//   const headerProduct = "listing_id,title,description,price,favorited,shop_id,shop_name,shop_title,shop_icon\n";
//   writeStream.write(headerProduct);
//   let insertCount = 0;
//   let itemCount = 105000000;
//   let createSQLProducts = () => {
//     for (let i = 1; i <= 100000; i++) {
//       itemCount++;
//       writeStream.write(makeSQLProduct.makeFakeSQLProduct(itemCount));
//       insertCount++;
//     }
//     debug(`Wrote ${insertCount} product items`);
//   }
//   while(insertCount < 5000000) {
//     createSQLProducts();
//   }
//   debug('done with products')
//   writeStream.end();
// }

// makeSQLProductDatabaseSeederFile();

// const makeSQLImageDatabaseSeederFile = () => {
//   const writeStream = fs.createWriteStream('carouselImages2.csv');
//   const headerImage = "listing_image_id,listing_id,url_75x75,url_170x135,url_570xN,url_fullxfull,full_height,full_width\n";
//   writeStream.write(headerImage);
//   let insertCount = 0;
//   let itemCount = 105000000;
//   let createSQLImages = () => {
//     for (let i = 1; i <= 100000; i++) {
//       itemCount++;
//       writeStream.write(makeSQLProduct.makeFakeSQLImage(itemCount));
//       insertCount++;
//     }
//     debug(`Wrote ${insertCount} image items`);
//   }
//   while(insertCount < 5000000) {
//     createSQLImages();
//   }
//   debug('done with images')
//   writeStream.end();
// }

// makeSQLImageDatabaseSeederFile();

module.exports = { Products };
