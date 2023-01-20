import React from 'react'
import './testimonials.css'

import { Container, Row, Col} from 'reactstrap'

import testimonialImg from '../../assets/images/review1.png'

import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000

    }


  return <section>
    <Container>
        <Row>
            <Col lg='8' sm='12' md='12' className='m-auto'>
            <div className='slider__wrapper d-flex align-items-center gap-5'>
                <div className='slider__content w-50'>
                <h2 className='mb-4'>What our Customers Say:</h2>
                <Slider {...settings}>
                <div>
                    <div className='single__testimonial'>
                        <p className='review__content'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                         laboris nisi ut aliquip ex ea commodo consequat!"
                        </p>

                        <h6>John Doe</h6>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div>
                    <div className='single__testimonial'>
                        <p className='review__content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                         laboris nisi ut aliquip ex ea commodo consequat
                        </p>

                        <h6>Kris timsi</h6>
                        <p>Web Developer</p>
                    </div>
                </div>
                </Slider>
                </div>

                <div className='slider__img w-50'>
                <img src= {testimonialImg} alt="" className='w-100'></img>
                </div>
            </div>    
            </Col>
        </Row>
    </Container>
  </section>
}

export default Testimonials