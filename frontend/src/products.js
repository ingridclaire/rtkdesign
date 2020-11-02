import faker from 'faker';

const products = [
  {
    _id: '1',
    name: 'Emerald Illusion',
    image: '/images/emerald-illusion.jpeg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '2',
    name: 'Fighting the Dark',
    image: '/images/fighting-the-dark.jpeg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '3',
    name: 'Galactic Art',
    image: '/images/galactic-art.jpeg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '4',
    name: 'Inner Sanctum',
    image: '/images/inner-sanctum.jpeg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '5',
    name: 'Practitioner',
    image: '/images/practitioner.jpeg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '5',
    name: 'Primordial',
    image: '/images/primordial.jpeg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  }
]

export default products;