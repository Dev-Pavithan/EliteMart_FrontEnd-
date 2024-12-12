import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [cartItems, setCartItems] = useState(5);

  return (
    <header className="custom-header">
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-between align-items-center py-4 mt-0">
            <div className="logo">
              <h1>EliteMart</h1>
            </div>

            <Form className="d-flex search-form">
              <FormControl
                type="text"
                placeholder="Search..."
                className="mr-2 search-input"
              />
              <Button variant="primary" className="search-button">Search</Button>
            </Form>

            <div className="right-side d-flex align-items-center gap-4">
              <div className="icon-container d-flex align-items-center">
                <i className="bi bi-person fs-4 me-2"></i>
                <div>
                  <span className="d-block">Your Account</span>
                    <a href="/login" className="text-decoration-none">
                      Login / Register
                    </a>
                </div>
              </div>

            {/* Cart Section */}
            <div className="icon-container d-flex align-items-center position-relative ms-3">
              <i className="bi bi-cart fs-4 me-2"></i>
              {cartItems > 0 && (
                <span className="cart-badge position-absolute top-0 start-50 translate-middle badge bg-white text-dark rounded-circle">
                  {cartItems}
                </span>
              )}
                <div>
                  <a href="#" className="text-decoration-none">
                    Cart
                  </a>
                </div>
            </div>
          </div>

          </Col>
        </Row>
      </Container>

      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown text-white mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collections
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Beauty & Health
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Jewels Accessories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Babies & Kids
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Toys & Games
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Home Appliances
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Tools & Industrials
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Cloths
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Furnitures
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Home Improvements
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Herbals
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Consumer Electronics
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item text-white mx-3">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item text-white mx-3">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item text-white mx-3">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item text-white mx-3">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex ms-0">
            <a className="nav-link text-white" href="#">
              Special Offer
            </a>
            <a className="nav-link text-white  ms-5" href="#">
              Purchase Theme
            </a>
          </div>
        </div>
      </div>
    </nav>

    </header>
  
  );
};

export default Header;
