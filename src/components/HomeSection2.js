import React, { useState } from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import '../Apphs2.css';

const combinedHeroImagePath = '/img/img2.png';

export default function HomeSection2() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="home-section-2">
            <Container className="home-section-2-content">
                <div className="title-box-home-section-2">
                    <h1 className="home-section-part-1-text">QUEM SOMOS</h1>
                </div>

                <div className="hero-carousel-container">
                    <Carousel
                        controls={false}
                        indicators={false}
                        activeIndex={index}
                        onSelect={handleSelect}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={combinedHeroImagePath}
                                alt="Slide 1"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={combinedHeroImagePath}
                                alt="Slide 2"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={combinedHeroImagePath}
                                alt="Slide 3"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                    <div className="custom-indicators-2">
                        {[0, 1, 2].map((idx) => (
                            <button
                                key={idx}
                                className={index === idx ? 'active' : ''}
                                onClick={() => setIndex(idx)}
                            ></button>
                        ))}
                    </div>

                <div className="home-section-2-description-area">
                    <h3 className="home-section-2-moto">
                        NEM TODO HERÓI USA CAPA, MAS TODO HERÓI TEM SEU QG.
                    </h3>
                    <p className="home-section-2-text">
                        Nossa base secreta A BATS collab possui um conjunto<br />
                        de profissionais para elaborar o melhor para sua empresa<br />
                        ou negócio, desde planejamento e aplicação da sua<br />
                        Identidade Visual, Site, E-commerce, Vídeos,<br />
                        Administração de Redes Sociais e muito mais.
                    </p>
                    <p className="home-section-2-text">
                        Basta mandar um sinal que teremos o prazer<br />
                        em atendê-lo!
                    </p>
                    <Button variant="dark" className="btn-send-signal">
                        <strong>MANDAR SINAL</strong>
                    </Button>
                </div>
            </Container>
        </div>
    );
}
