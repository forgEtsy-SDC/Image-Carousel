const faker = require('faker');

const makeFakeSQLImage = (listing_id) => {
  let height = faker.random.number({min:700, max:1700});
  let width = faker.random.number({min:700, max:1700});
  // "listing_image_id,listing_id,url_75x75,url_170x135,url_570xN,url_fullxfull,full_height,full_width"
  return (
    `${faker.random.number(500000000, 599000000)},${listing_id},\
    ${faker.image.imageUrl(75, 75)},${faker.image.imageUrl(170, 135)},\
    ${faker.image.imageUrl(570, height)},${faker.image.imageUrl(height, width)},\
    ${height},${width}\n`
  )
}


const makeFakeSQLProduct = (i) => {
  return (
    `${i},${faker.commerce.productName()},${faker.company.catchPhrase()},\
    ${faker.commerce.price()},${faker.random.boolean()},\
    ${faker.random.number({min:100000, max:5000000})},${faker.company.companyName()},\
    ${faker.company.companyName()},${faker.image.avatar()}\n`
    )
  }
  
  module.exports = { makeFakeSQLProduct, makeFakeSQLImage };
  
// const categoryPathHelper = () => {
  //   let categoryPaths = [];
  //   for(let i = 0; i < faker.random.number({min:1, max:3}); i++) {
    //     categoryPaths.push(
      //       faker.commerce.department()
      //     );
      //   }
      //   return categoryPaths;
      // }

// const optionsHelper = () => {
//   let options = [];
//   const makeOption = () => {
//     let option = { title: faker.commerce.productMaterial() };
//     for(let i = 1; i <= faker.random.number({min:1, max:4}); i++) {
//       option[`description_${i}`] = faker.commerce.productAdjective();
//     }
//     return option;
//   }

//   for(let i = 0; i <= faker.random.number(3); i++) {
//     options.push(makeOption());
//   }

//   return options;
// }