import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PlaceholderImg from '../../images/avatar-1577909_640.png';

function CarouselComponent() {
    return(
        <Carousel className="col-md-12 col-sm-12 bg-dark-gray center">
            <Carousel.Item>
                <img src={PlaceholderImg} alt="placeholder" className="mx-auto d-block img-fluid"/>
                <Carousel.Caption>
                    <p>Slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={PlaceholderImg} alt="placeholder" className="mx-auto d-block img-fluid"/>
                <Carousel.Caption>
                    <p>Slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={PlaceholderImg} alt="placeholder" className="mx-auto d-block img-fluid"/>
                <Carousel.Caption>
                    <p>Slide 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;