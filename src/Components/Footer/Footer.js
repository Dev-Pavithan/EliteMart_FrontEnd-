import React from 'react';
import './Footer.css';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../Assets/Images/logo.png';
import ButtonGlobal from '../Button/Button';

const Footer = () => {
    return (
        <footer className="pt-5">
            <Container>
                <Row>
                    {/* Contact Us Section */}
                    <Col md={3}>
                        <img src={Logo} alt="logo" />
                        <h4 className='fw-bold' style={{ fontFamily: "Lora" }}>Contact Us</h4>
                        <p>elitemart@gmail.com</p>
                        {/* Social Media Icons */}
                        <a href="www.facebook.com" className="social-icons me-2">
                            <FaFacebookF />
                        </a>
                        <a href="www.twitter.com" className="social-icons me-2">
                            <FaTwitter />
                        </a>
                        <a href="www.intagram.com" className="social-icons me-2">
                            <FaInstagram />
                        </a>
                        <a href="www.linkedin.com" className="social-icons">
                            <FaLinkedin />
                        </a>
                    </Col>

                    {/* Our Services Section */}
                    <Col md={2}>
                        <h5 className='fw-bold' style={{ fontFamily: "Lora" }}>Our Services</h5>
                        <ul className="list-unstyled">
                            <li>Knowledge Base</li>
                            <li>Hire An Expert</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </Col>

                    {/* Quick Links Section */}
                    <Col md={2}>
                        <h5 className='fw-bold' style={{ fontFamily: "Lora" }}>Quick Links</h5>
                        <ul className="list-unstyled">

                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>

                    {/* Subscribe Section */}
                    <Col md={5}>
                        <h2 className='mb-3 fw-bold' style={{ fontFamily: "Lora" }}>Subscribe Our Newsletter</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Subscribe to Elite Mart's newsletter for the latest updates on products,
                            and exclusive offers. Stay tuned and ahead in the fast world!
                        </p>
                        <div className="subscribe-container d-flex justify-content-center align-items-center my-4">
                            <InputGroup className="subscribe-box">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email address"
                                    aria-label="Email address"
                                    className="subscribe-input"
                                />
                                <ButtonGlobal text='Subscribe' />
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                <hr style={{ backgroundColor: '#ff7518' }} />
                <Row className="text-center py-3">
                    <Col>
                        <p>©2024 Elite Mart. All rights reserved.</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
