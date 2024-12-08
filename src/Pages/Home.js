import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InnerBanner from '../Components/InnerBanner/InnerBanner';
import '../Assets/Styles/Style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Category1 from '../Assets/Images/category1.jpg';
import Category2 from '../Assets/Images/category2.jpg';
import Category3 from '../Assets/Images/category3.jpg';
import Category4 from '../Assets/Images/category4.jpg';
import Category5 from '../Assets/Images/category5.jpg';
import Category6 from '../Assets/Images/category6.jpg';
import Category7 from '../Assets/Images/category7.jpg';
import Category8 from '../Assets/Images/category8.jpg';
import Category9 from '../Assets/Images/category9.jpg';
import Category10 from '../Assets/Images/category10.jpg';
import Category11 from '../Assets/Images/category11.jpg';
import Ad2 from '../Assets/Images/ad2.jpg';
import Ad3 from '../Assets/Images/ad3.jpg';
import Ad4 from '../Assets/Images/ad4.jpg';
import Ad5 from '../Assets/Images/ad5.jpg';
import Ad6 from '../Assets/Images/ad6.jpg';
import Ad7 from '../Assets/Images/ad7.jpg';
import Deal1 from '../Assets/Images/deal1.jpg';
import Deal2 from '../Assets/Images/deal2.jpg';

const Home = () => {
  const categories = [
    { id: 1, title: 'Beauty & Health', image: Category2 },
    { id: 2, title: 'Jewels Accessories', image: Category4 },
    { id: 3, title: 'Babies & Kids', image: Category5 },
    { id: 4, title: 'Toys & Games', image: Category6 },
    { id: 5, title: 'Home Appliances', image: Category1 },
    { id: 6, title: 'Tools & Industrials', image: Category7 },
    { id: 7, title: 'Cloths', image: Category8 },
    { id: 8, title: 'Furnitures', image: Category9 },
    { id: 9, title: 'Home Improvements', image: Category10 },
    { id: 10, title: 'Herbals', image: Category11 },
    { id: 11, title: 'Consumer Electronics', image: Category3 },
  ];

  return (
    <>
      {/* Inner Banner Section */}
      <InnerBanner />

      {/* Features Section */}
      <Container className="py-5">
        <div className="row w-100 m-0 align-items-center justify-content-center" style={{boxShadow:' 0 0 10px #a9a9a9'}}>
          <div className="col-12 col-md-3 border py-3">
            <div className="content d-flex align-items-center">
              <i className="bi bi-cash-coin mx-4" style={{ fontSize: '2.5rem', color: '#ff5500' }}></i>
              <div>
                <h5>Money Guarantee</h5>
                <p className="mb-0">30 days refunding</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 border py-3">
            <div className="content d-flex align-items-center">
              <i className="bi bi-credit-card-2-front mx-4" style={{ fontSize: '2.5rem', color: '#ff5500' }}></i>
              <div>
                <h5>Payment Method</h5>
                <p className="mb-0">Secure payment</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 border py-3">
            <div className="content d-flex align-items-center">
              <i className="bi bi-headset mx-4" style={{ fontSize: '2.5rem', color: '#ff5500' }}></i>
              <div>
                <h5>Online Support</h5>
                <p className="mb-0">24 hours</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 border py-3">
            <div className="content d-flex align-items-center">
              <i className="bi bi-shield-lock mx-4" style={{ fontSize: '2.5rem', color: '#ff5500' }}></i>
              <div>
                <h5>100% Safe</h5>
                <p className="mb-0">Secure shopping</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Categories Carousel Section */}
      <div className="container my-3 py-5 categories">
        <h3 className="text-center mb-5 ">Categories</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
          slidesPerView={6} 
          spaceBetween={10}
          navigation
          loop 
          autoplay={{ delay: 4000 }} 
          breakpoints={{
            320: { slidesPerView: 1, spaceBetweenFigtree: 10 }, 
            640: { slidesPerView: 2, spaceBetween: 10 }, 
            768: { slidesPerView: 4, spaceBetween: 10 }, 
            1024: { slidesPerView: 6, spaceBetween: 10 },
          }}
          style={{height: '250px'}}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  boxShadow: '0 0 5px #a9a9a9',
                }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    width: '100%',
                    height: '150px',
                    borderRadius: '8px',
                    border: '1px solid #c0c0c0',
                  }}
                />
                <p className="mt-3">{category.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Coupon Section */}
        <div
          className="row w-100 mt-5 mx-0 py-3 align-items-center justify-content-center"
          style={{
            background: '#ff7518',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <p style={{color: '#fff', textAlign: 'center'}} className='m-0 fw-bold'>Welcome to Elite Mart! Wrap new offers/gifts everyday on weekends - New coupon code: EliteMart2024</p>
        </div>
      </div>

      <Container className='py-5 deals'>
        <h3 className='text-center pb-3'>Deals Of The Day</h3>
      <Row>
        <Col xs={12} md={6}>
          <Row className='p-4'          
             style={{
                boxShadow: '0 0 5px #a9a9a9',
              }}>
            <Col xs={12} md={6}
            >
            <span className="position-absolute top-150px translate-middle badge rounded-pill">
              New
            </span>
              <img
                src={Deal1}
                alt="Placeholder"
                className="img-fluid"
                style={{height: '250px'}}
              />
            </Col>
            
            <Col xs={12} md={6}>
              <div className="column-content">
                <h4>LED chandelier</h4>
                <p>Ball lamp LED chandelier dining room bedroom duplex floor living room large chandelier staircase loft stainless steel chandelier</p>
                <h6>LKR 15,753.92 <br/>
                <span><s>LKR65,638.94</s></span>  76% off</h6>
                <div className="rating-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className='p-4'
            style={{
              boxShadow: '0 0 5px #a9a9a9',
            }}>
            <Col xs={12} md={6}>
            <span className="fw-bold position-absolute top-150px translate-middle badge rounded-pill">
              New
            </span>
              <img
                src={Deal2}
                alt="Placeholder"
                className="img-fluid"
                style={{height: '250px'}}
              />
            </Col>
            
            <Col xs={12} md={6}>
              <div className="column-content">
                <h4>iPhone 12 </h4>
                <p>iPhone 12 mini 64GB/128GB/256GB IOS A14 5.4'' Dual 12MP iphone 12mini Cellphone</p>
                <h6>LKR 65,726.00 <br/>
                <span><s>LKR109,543.33</s></span>  40% off</h6>
                <div className="rating-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

      {/* Coupon Section */}
      <Container>
        <div
          className="row w-100 mx-0 py-3 align-items-center justify-content-center"
          style={{
            background: '#ff7518',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <p style={{color: '#fff', textAlign: 'center'}} className='m-0 fw-bold'>Elite Mart Business! Wrap new offers, Tax exemption, Express payments</p>
      </div>
      </Container>

      {/* Advertisement Section */}
      <Container className='py-5'>
      <div className="custom-grid-container">
        <div className="grid-item">
          <img src={Ad3} alt="Ad 1" className="img-fluid" />
        </div>
        <div className="grid-item">
          <img src={Ad5} alt="Ad 2" className="img-fluid" />
        </div>
        <div className="grid-item">
          <img src={Ad2} alt="Ad 3" className="img-fluid" />
        </div>
        <div className="grid-item">
          <img src={Ad6} alt="Ad 4" className="img-fluid" />
        </div>
        <div className="grid-item">
          <img src={Ad4} alt="Ad 7" className="img-fluid" />
        </div>
        <div className="grid-item">
          <img src={Ad7} alt="Ad 8" className="img-fluid" />
        </div>
      </div>
      </Container>

    </>
  );
};

export default Home;
