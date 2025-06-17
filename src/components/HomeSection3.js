import React, {useState} from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import '../Apphs3.css';

const arrowIMG = '/img/img3.png';

export default function HomeSection3() {
    const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
        };
    return(
        <div className="home-section-3">
            <Container className="home-section-3-content">
                <div className="title-box-home-section-3">
                    <h1 className="home-section-3-part-1-text">
                        QUEM SOMOS
                    </h1>
                </div>

                <div className="home-section-3-text-description">
                    <p>Manter-se competitivo é uma necessidade no mercado<br/>
                        atual e sabemos o quão importante é estar na internet.<br/> 
                        Para garantir que sua empresa tenha a oportunidade de <br/>
                        divulgar seus produtos ou serviços de forma competitiva<br/>
                        nesse meio, a BATS está pronta para te ajudar.</p>
                </div>
                
                <div className="hero-carousel-container-3">
              
                    <Carousel controls={false} indicators={false}
                              activeIndex={index}
                              onSelect={handleSelect}  >
                        <Carousel.Item className="home-section-3-carousel-item">
                            <img
                                className="d-block w-100"
                                src={arrowIMG}
                                alt="arrowIMG"
                            />
                        </Carousel.Item>

                        <Carousel.Item className="home-section-3-carousel-item">
                            <img
                                className="d-block w-100"
                                src={arrowIMG}
                                alt="arrowIMG"
                            />
                        </Carousel.Item>

                        <Carousel.Item className="home-section-3-carousel-item">
                            <img
                                className="d-block w-100"
                                src={arrowIMG}
                                alt="arrowIMG"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="custom-indicators-3">
                        {[0, 1, 2].map((idx) => (
                            <button
                                key={idx}
                                className={index === idx ? 'active' : ''}
                                onClick={() => setIndex(idx)}
                            ></button>
                        ))}
                    </div>
                </div>
                
            </Container>
        </div>
    );
}