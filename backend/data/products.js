import faker from 'faker';

const products = [
  {
    name: 'Emerald Illusion',
    image: '/images/emerald-illusion.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 0,
    rating: 5.0,
    numReviews: 4
  },
  {
    name: 'Fighting the Dark',
    image: '/images/fighting-the-dark.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    name: 'Galactic Heart',
    image: '/images/galactic-heart.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 4.0,
    numReviews: 4
  },
  {
    name: 'Inner Sanctum',
    image: '/images/inner-sanctum.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    name: 'Practitioner',
    image: '/images/practitioner.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 5.0,
    numReviews: 4
  },
  {
    name: 'Primordial',
    image: '/images/primordial.jpg',
    description: faker.lorem.paragraph(),
    category: 'Acrylic on canvas',
    price: 150.00,
    countInStock: 1,
    rating: 4.5,
    numReviews: 4
  }
]

export default products;