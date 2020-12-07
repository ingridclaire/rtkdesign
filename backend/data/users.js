import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Luke Skywalker',
    email: 'skywalker@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Darth Vader',
    email: 'vader@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users;