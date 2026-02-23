import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../Assets/Images/logo.png';
import ButtonGlobal from '../Button/Button';

const Footer = () => {
    // Get current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-5 pb-3 bg-primary text-white">
            <Container>
                <Row className="g-4 g-md-5">
                    {/* Contact Us Section */}
                    <Col xs={12} md={6} lg={3} className="text-center text-md-start">
                        <img 
                            src={Logo} 
                            alt="Elite Mart Logo" 
                            className="mb-3 img-fluid" 
                            style={{ maxWidth: '120px' }}
                        />
                        <h4 className="fw-bold mb-3" style={{ fontFamily: "Lora" }}>
                            Contact Us
                        </h4>
                        <p className="mb-3">
                            <i className="bi bi-envelope me-2"></i>
                            elitemart@gmail.com
                        </p>
                        <p className="mb-3">
                            <i className="bi bi-telephone me-2"></i>
                            +1 (555) 123-4567
                        </p>
                        <p className="mb-3">
                            <i className="bi bi-geo-alt me-2"></i>
                            123 Business Ave, Suite 100
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="social-icons-container d-flex justify-content-center justify-content-md-start">
                            <a 
                                href="https://www.facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icons me-2"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a 
                                href="https://www.twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icons me-2"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a 
                                href="https://www.instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icons me-2"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href="https://www.linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icons"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </Col>

                    {/* Our Services Section */}
                    <Col xs={6} md={3} lg={2} className="text-center text-md-start">
                        <h5 className="fw-bold mb-3" style={{ fontFamily: "Lora" }}>
                            Our Services
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Knowledge Base
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Hire An Expert
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    FAQ
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Quick Links Section */}
                    <Col xs={6} md={3} lg={2} className="text-center text-md-start">
                        <h5 className="fw-bold mb-3" style={{ fontFamily: "Lora" }}>
                            Quick Links
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Products
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Contact Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none hover-opacity">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Subscribe Section */}
                    <Col xs={12} lg={5} className="mt-4 mt-lg-0">
                        <div className="text-center text-lg-start">
                            <h2 className="mt-5 fw-bold" style={{ fontFamily: "Lora", fontSize: 'clamp(1.5rem, 4vw, 1.8rem)' }}>
                                Subscribe Our Newsletter
                            </h2>
                            <p className="mb-4" style={{ textAlign: 'justify', textAlignLast: 'center' }}>
                                Subscribe to Elite Mart's newsletter for the latest updates on products,
                                and exclusive offers. Stay tuned and ahead in the fast world!
                            </p>
                            
                            <div className="subscribe-wrapper mx-auto mx-lg-0" style={{ maxWidth: '450px' }}>
                                <InputGroup className="subscribe-container bg-white rounded-pill p-1">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email address"
                                        aria-label="Email address"
                                        className="subscribe-input border-0 bg-transparent px-3 py-2"
                                    />
                                    <ButtonGlobal 
                                        text='Subscribe' 
                                        className="rounded-pill px-3 px-md-4"
                                    />
                                </InputGroup>
                                <p className="small text-white-50 mt-2 mb-0">
                                    We'll never share your email with anyone else.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <hr className="my-4" style={{ 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    height: '2px', 
                    opacity: '0.5' 
                }} />
                
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 small">
                            © {currentYear} Elite Mart. All rights reserved.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-end">
                        <div className="payment-methods">
                            <span className="small me-2">We Accept:</span>
                            <i className="bi bi-credit-card fs-5 me-2"></i>
                            <i className="bi bi-paypal fs-5 me-2"></i>
                            <i className="bi bi-bank fs-5"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;