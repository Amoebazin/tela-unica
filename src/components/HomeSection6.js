import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../Apphs6.css';

const LampIMG = '/img/img5.png'

export default function HomeSection6(){
    return(
        <div className="home-section-6">
            <Container>
                    <Carousel fade controls indicators interval={null}>
                        <Carousel.Item className="LampIMG-item">
                            <img
                                className="d-block w-100"
                                src={LampIMG}
                                alt="LampIMG item"
                            />
                        </Carousel.Item>

                        <Carousel.Item className="LampIMG-item">
                            <img
                                className="d-block w-100"
                                src={LampIMG}
                                alt="LampIMG item"
                            />
                        </Carousel.Item>

                        <Carousel.Item className="LampIMG-item">
                            <img
                                className="d-block w-100"
                                src={LampIMG}
                                alt="LampIMG item"
                            />
                        </Carousel.Item>
                    </Carousel>


            </Container>
        </div>


    );
}