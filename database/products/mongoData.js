const faker = require('faker');

const optionsHelper = () => {
  let options = [];
  const makeOption = () => {
    let option = { title: faker.commerce.productMaterial() };
    for(let i = 1; i <= faker.random.number({min:1, max:4}); i++) {
      option[`description_${i}`] = faker.commerce.productAdjective();
    }
    return option;
  }

  for(let i = 0; i <= faker.random.number(3); i++) {
    options.push(makeOption());
  }

  return options;
}

const imagesHelper = (listing_id) => {
  let images = [];
  for(let i = 0; i < faker.random.number(5); i++) {
    let height = faker.random.number({min:700, max:1700});
    let width = faker.random.number({min:700, max:1700});
    images.push({
      listing_image_id: faker.random.number(500000000, 599000000),
      listing_id: listing_id,
      url_75x75: faker.image.imageUrl(75, 75),
      url_170x135: faker.image.imageUrl(170, 135),
      url_570xN: faker.image.imageUrl(570, height),
      url_fullxfull: faker.image.imageUrl(height, width),
      full_height: height,
      full_width: width
    });
  }
  return images;
}

const categoryPathHelper = () => {
  let categoryPaths = [];
  for(let i = 0; i < faker.random.number({min:1, max:3}); i++) {
    categoryPaths.push(
      faker.commerce.department()
    );
  }
  return categoryPaths;
}

const makeFakeProduct = (i) => {
  return {
    listing_id: i,
    title: faker.commerce.productName(),
    description: faker.company.catchPhrase(),
    price: faker.commerce.price(),
    favorite: faker.random.boolean(),
    category_path: categoryPathHelper(),
    product_options: optionsHelper(),
    Images: imagesHelper(i),
    Shop: {
      shop_id: faker.random.number({min:100000, max:5000000}),
      shop_name: faker.company.companyName(),
      title: faker.company.companyName(),
      icon_url_fullxfull: faker.image.avatar()
    }
  }
}

module.exports = { makeFakeProduct }
