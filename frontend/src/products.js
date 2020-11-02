import faker from 'faker';

const products = [
  {
    _id: '1',
    name: 'Emerald Illusion',
    image: '/images/emerald-illusion.jpg',
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
    image: '/images/fighting-the-dark.jpg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '3',
    name: 'Galactic Heart',
    image: '/images/galactic-heart.jpg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 4.0,
    numReviews: 4
  },
  {
    _id: '4',
    name: 'Inner Sanctum',
    image: '/images/inner-sanctum.jpg',
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
    image: '/images/practitioner.jpg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    _id: '6',
    name: 'Primordial',
    image: '/images/primordial.jpg',
    description: faker.commerce.productDescription,
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 4.5,
    numReviews: 4
  }
]

export default products;