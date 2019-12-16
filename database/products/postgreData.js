const faker = require('faker');

const makeFakeSQLImage = (listing_id) => {
  let height = faker.random.number({min:700, max:1700});
  let width = faker.random.number({min:700, max:1700});
  let imagesOutput = '';

  for(let i = 0; i < faker.random.number({min:1, max:5}); i++) {
    imagesOutput = imagesOutput + `${listing_id},${faker.image.imageUrl(75, 75)},${faker.image.imageUrl(170, 135)},${faker.image.imageUrl(570, height)},${faker.image.imageUrl(height, width)},${height},${width}\n`;
  }
  return imagesOutput;
}

const makeFakeSQLProduct = (i) => {
  return `${i},"${faker.commerce.productName()}","${faker.company.catchPhrase()}",${faker.commerce.price()},${faker.random.boolean()},${faker.random.number({min:100000, max:5000000})},"${faker.company.companyName()}","${faker.company.companyName()}",${faker.image.avatar()}\n`
  }

module.exports = { makeFakeSQLProduct, makeFakeSQLImage };
