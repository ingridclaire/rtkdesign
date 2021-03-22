import faker from 'faker';

const products = [
  {
    name: 'Emerald Illusion',
    image: '/images/emerald-illusion.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 299.00,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Fighting the Dark',
    image: '/images/fighting-the-dark.jpg',
    description: faker.lorem.paragraph(),
    category: 'Print Only',
    price: 100.00,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },

  {
    name: 'Inner Sanctum',
    image: '/images/inner-sanctum.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 299.00,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  },

  {
    name: 'Primordial',
    image: '/images/primordial.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 299.00,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  }
]

export default products;