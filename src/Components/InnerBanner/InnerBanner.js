import React from "react";
import { Carousel, Container } from 'react-bootstrap';
import './InnerBanner.css';
import Image1 from '../../Assets/Images/1.png';
import Image2 from '../../Assets/Images/2.png';
import Image3 from '../../Assets/Images/3.png';

const InnerBanner = () => {
  return (
    <Container>
      <Carousel
        className="my-4"
        style={{
          boxShadow: '0 0 15px #a9a9a9'
        }}
        indicators={false} 
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Second Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Third Slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default InnerBanner;
