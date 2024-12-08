import React, { useState } from 'react';
import { Card, Button, Col, Form } from 'react-bootstrap';
import Product1 from '../../Assets/Images/product1.jpg';
import Product2 from '../../Assets/Images/product2.jpg';
import Product3 from '../../Assets/Images/product3.jpg';
import Product4 from '../../Assets/Images/product4.jpg';
import Product5 from '../../Assets/Images/product5.jpg';
import Product6 from '../../Assets/Images/product6.jpg';


const ProductCart = ({ handleQuantityChange }) => {

    const product = [
      { id: 1, name: 'Product 1', price: 29.99, image: Product1, quantity: 1 },
      { id: 2, name: 'Product 2', price: 19.99, image: Product2, quantity: 1 },
      { id: 3, name: 'Product 3', price: 39.99, image: Product3, quantity: 1 },
      { id: 1, name: 'Product 1', price: 29.99, image: Product4, quantity: 1 },
      { id: 2, name: 'Product 2', price: 19.99, image: Product5, quantity: 1 },
      { id: 3, name: 'Product 3', price: 39.99, image: Product6, quantity: 1 },
    ];

  const [quantity, setQuantity] = useState(product.quantity);

  const handleChangeQuantity = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    handleQuantityChange(product.id, newQuantity);
  };

  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Form>
            <Form.Group controlId={`quantity-${product.id}`} className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control 
                type="number" 
                value={quantity} 
                onChange={handleChangeQuantity}
                min="1" 
              />
            </Form.Group>
          </Form>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCart;
