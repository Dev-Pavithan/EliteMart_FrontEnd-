import React, { useState, useRef } from 'react'; // Removed unused useEffect
import { Container, Row, Col, Form, Navbar, Nav, Button, NavDropdown, Offcanvas } from 'react-bootstrap';

const Header = () => {
  const [cartItems] = useState(5); // Removed setCartItems since it's not used
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setShowMobileDropdown(false);
  };
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  // Collection items array for cleaner code
  const collectionItems = [
    "Beauty & Health",
    "Jewels Accessories",
    "Babies & Kids",
    "Toys & Games",
    "Home Appliances",
    "Tools & Industrials",
    "Cloths",
    "Furnitures",
    "Home Improvements",
    "Herbals",
    "Consumer Electronics"
  ];

  return (
    <header className="custom-header">
      <Container>
        <Row>
          <Col xs={12} className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 py-md-4">
            <div className="logo mb-3 mb-md-0 text-center text-md-start">
              <h1 className="fs-2 fs-md-1">EliteMart</h1>
            </div>

            {/* Search Form - full width on mobile */}
            <Form className="d-flex search-form w-100 w-md-auto mb-3 mb-md-0 mx-md-3">
              <Form.Control
                type="text"
                placeholder="Search products..."
                className="search-input rounded-start-pill border-end-0"
                aria-label="Search"
              />
              <Button variant="primary" className="search-button rounded-end-pill px-3 px-md-4">
                <i className="bi bi-search d-md-none"></i>
                <span className="d-none d-md-inline">Search</span>
              </Button>
            </Form>

            {/* Account & Cart - hidden on mobile, visible on desktop */}
            <div className="right-side d-none d-md-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">
              {/* Account Section */}
              <div className="icon-container d-flex align-items-center">
                <i className="bi bi-person-circle fs-3 me-2"></i>
                <div>
                  <span className="d-block small">Your Account</span>
                  <a href="/login" className="text-decoration-none small fw-bold">
                    Login / Register
                  </a>
                </div>
              </div>

              <div className="icon-container d-flex align-items-center position-relative">
                <i className="bi bi-cart fs-3 me-2"></i>
                {cartItems > 0 && (
                  <span className="cart-badge position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary text-white">
                    {cartItems}
                  </span>
                )}
                <div>
                  {/* Fixed: Changed from href="#" to a proper link or span */}
                  <span className="fw-bold">Cart</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Rest of your component remains the same... */}
      {/* Desktop Navigation - Hidden on mobile */}
      <Navbar bg="primary" variant="dark" expand="lg" className="py-2 d-none d-lg-block">
        <Container>
          <Navbar className="mx-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="/" className="text-white px-2 px-lg-3 active">Home</Nav.Link>
              
              <NavDropdown 
                title="Collections" 
                id="collections-dropdown"
                className="text-white mx-0 mx-lg-2"
                menuVariant="light"
              >
                {collectionItems.map((item, index) => (
                  <NavDropdown.Item key={index} href="/collections">{item}</NavDropdown.Item>
                ))}
              </NavDropdown>
              
              <Nav.Link href="/features" className="text-white px-2 px-lg-3">Features</Nav.Link>
              <Nav.Link href="/shop" className="text-white px-2 px-lg-3">Shop</Nav.Link>
              <Nav.Link href="/about" className="text-white px-2 px-lg-3">About Us</Nav.Link>
              <Nav.Link href="/contact" className="text-white px-2 px-lg-3">Contact Us</Nav.Link>
            </Nav>
            
            <div className="d-flex flex-column flex-lg-row mt-2 mt-lg-0">
              <Nav.Link href="/offers" className="text-white px-2 px-lg-3 py-1">Special Offer</Nav.Link>
              <Nav.Link href="/purchase" className="text-white px-2 px-lg-3 py-1 ms-0 ms-lg-3">Purchase Theme</Nav.Link>
            </div>
          </Navbar>
        </Container>
      </Navbar>

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <div className="mobile-bottom-nav d-lg-none">
        <Container fluid>
          <Row className="g-0">
            <Col xs={4} className="text-center">
              <Button 
                variant="link" 
                className="mobile-bottom-nav-btn text-decoration-none d-flex flex-column align-items-center justify-content-center w-100"
                onClick={() => window.location.href = '/account'}
              >
                <i className="bi bi-person-circle fs-3"></i>
                <span className="small mt-1">Account</span>
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button 
                variant="link" 
                className="mobile-bottom-nav-btn text-decoration-none d-flex flex-column align-items-center justify-content-center w-100 position-relative"
                onClick={() => window.location.href = '/cart'}
              >
                <i className="bi bi-cart fs-3"></i>
                {cartItems > 0 && (
                  <span className="cart-badge-bottom position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary text-white">
                    {cartItems}
                  </span>
                )}
                <span className="small mt-1">Cart</span>
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button 
                variant="link" 
                className="mobile-bottom-nav-btn text-decoration-none d-flex flex-column align-items-center justify-content-center w-100"
                onClick={handleShowOffcanvas}
              >
                <i className="bi bi-list fs-3"></i>
                <span className="small mt-1">Menu</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Offcanvas 
        show={showOffcanvas} 
        onHide={handleCloseOffcanvas} 
        placement="end"
        className="mobile-offcanvas-menu theme-offcanvas full-width-offcanvas"
        backdropClassName="offcanvas-backdrop-custom"
      >
        <Offcanvas.Header closeButton className="offcanvas-header-custom border-bottom">
          <h1 className="logo fs-2 fs-md-1" style={{ color: '#ff5f15' }}>EliteMart</h1>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-custom p-0 d-flex flex-column">
          <Nav className="flex-column mobile-nav flex-grow-1">
            {/* Home Link */}
            <Nav.Link href="/" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-house-door me-3"></i>
              <span>Home</span>
            </Nav.Link>
            
            {/* Collections Dropdown */}
            <div className="mobile-dropdown-container" ref={dropdownRef}>
              <div 
                className="mobile-dropdown-toggle py-4 px-4 d-flex justify-content-between align-items-center w-100"
                onClick={toggleMobileDropdown}
                role="button"
                tabIndex={0}
                aria-expanded={showMobileDropdown}
              >
                <span className="d-flex align-items-center">
                  <i className="bi bi-grid me-3"></i>
                  <span>Collections</span>
                </span>
                <i className={`bi bi-chevron-${showMobileDropdown ? 'up' : 'down'} transition-rotate ms-2`}></i>
              </div>
              
              {/* Scrollable Dropdown Menu */}
              <div className={`mobile-dropdown-menu ${showMobileDropdown ? 'show' : ''}`}>
                <div className="dropdown-scrollable">
                  {collectionItems.map((item, index) => (
                    <Nav.Link 
                      key={index} 
                      href="/collections" 
                      className="mobile-dropdown-item py-3 px-4 d-flex align-items-center"
                      onClick={handleCloseOffcanvas}
                    >
                      <span className="ms-4">{item}</span>
                    </Nav.Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Features */}
            <Nav.Link href="/features" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-star me-3"></i>
              <span>Features</span>
            </Nav.Link>
            
            {/* Shop */}
            <Nav.Link href="/shop" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-bag me-3"></i>
              <span>Shop</span>
            </Nav.Link>
            
            {/* About Us */}
            <Nav.Link href="/about" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-info-circle me-3"></i>
              <span>About Us</span>
            </Nav.Link>
            
            {/* Contact Us */}
            <Nav.Link href="/contact" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-envelope me-3"></i>
              <span>Contact Us</span>
            </Nav.Link>
            
            {/* Special Offer */}
            <Nav.Link href="/offers" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-tag me-3"></i>
              <span>Special Offer</span>
            </Nav.Link>
            
            {/* Purchase Theme */}
            <Nav.Link href="/purchase" className="mobile-nav-link py-4 px-4 d-flex align-items-center justify-content-start" onClick={handleCloseOffcanvas}>
              <i className="bi bi-cart-check me-3"></i>
              <span>Purchase Theme</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;