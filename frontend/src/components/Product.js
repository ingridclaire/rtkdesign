import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
    <Card className="my-3 p-3 rounded">
      
      <Card.Img src={product.image} variant="top" />

      <Card.Body>
        
        <Card.Title as='h6'>
          <strong>{product.name}</strong>
        </Card.Title>
       
      </Card.Body>

      <Card.Text as='div'>
       <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as="h3">${product.price}</Card.Text>

    </Card>
    </Link>
  )
}

export default Product
