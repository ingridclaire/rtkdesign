import faker from 'faker';

const products = [
  {
    name: 'Emerald Illusion',
    image: 'https://rtkdesign.s3.us-east-2.amazonaws.com/emerald-illusion.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 299.00,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Fighting the Dark',
    image: 'https://rtkdesign.s3.us-east-2.amazonaws.com/fighting-the-dark.jpg',
    description: faker.lorem.paragraph(),
    category: 'Print Only',
    price: 100.00,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },

  {
    name: 'Inner Sanctum',
    image: 'https://rtkdesign.s3.us-east-2.amazonaws.com/inner-sanctum.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 299.00,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  },

  {
    name: 'Primordial',
    image: 'https://rtkdesign.s3.us-east-2.amazonaws.com/primordial.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 299.00,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  }
]

export default products;