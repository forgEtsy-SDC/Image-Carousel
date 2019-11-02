const mongoose = require('mongoose');
const debug = require('debug')('debugger');
const fs = require('fs');

// Import product files
const makeProduct = require('./products/jewelry.js');
// const housewares = require('./products/housewares.js');
// const accessories = require('./products/accessories.js');
// const toys = require('./products/toys.js');

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
// const productsSave = products => {
//   Products.insertMany(products)
//     .then((data) => {
//       // TODO: Replace console logs
//       console.log('...Saved products to database...')
//     })
//     .catch((err) => {
//       console.log('...product saving err... :(', err);
//     })
// }

// Seed database with product items if empty
const makeDatabaseSeederFile = () => {
  const writeStream = fs.createWriteStream('carouselProducts.json');
  let insertCount = 0;
  let itemCount = 100000000;
  let createProducts = () => {
    for (let i = 1; i <= 100000; i++) {
      itemCount++;
      writeStream.write(JSON.stringify(makeProduct(itemCount)));
      insertCount++;
    }
    debug(`Wrote ${insertCount} items`);
  }
  while(insertCount < 10000000) {
    createProducts();
  }
  debug('done')
  writeStream.end();
}



  // const stream = fs.createWriteStream('products.json');
  // let insertCount = 0;
  // let itemCount = 0;
  // let createItem = () => {
  //     for (let i = 0; i < 100000; i++) {
  //         itemCount++;
  //         let item = {};
  //         item._id = itemCount;
  //         item.title = faker.commerce.productName();
  //         item.price = faker.commerce.price();
  //         item.description = faker.lorem.lines();
  //         item.shopName = faker.company.companyName();
  //         item.shopId = faker.random.number();
  //         item.shopStars = faker.random.number({ min: 1, max: 5 });
  //         item.productOptions = [
  //             {
  //                 title: 'color',
  //                 description_1: faker.commerce.color()
  //             }]
  //         stream.write(JSON.stringify(item));
  //     }
  //     debug(`wrote ${itemCount} items`);
  //     if (itemCount < 10000000) {
  //         createItem();
  //     }
  // }
  // createItem();
  // debug('done')
  // stream.end();

  //   Products.countDocuments((err, count) => {
  //     if(err){
  //       console.log('error counting')
  //     }else{
  //       if(count === 0){
  //         productsSave(jewelry.results);
  //         productsSave(housewares.results);
  //         productsSave(accessories.results);
  //         productsSave(toys.results);
  //     }
  //   }
  // })
// }

module.exports.makeDatabaseSeederFile = makeDatabaseSeederFile;
module.exports.Products = Products;
