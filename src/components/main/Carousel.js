import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';

function CarouselComponent() {
    return(
        <section id="IdCarousel">
            <p>Vi elsker at lave brød</p>

            <Carousel className="col-md-12 col-sm-12 bg-dark-gray center">
                <Carousel.Item>
                    <img src={slide1} alt="placeholder" className="mx-auto d-block img-fluid"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={slide2} alt="placeholder" className="mx-auto d-block img-fluid"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={slide3} alt="placeholder" className="mx-auto d-block img-fluid"/>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default CarouselComponent;