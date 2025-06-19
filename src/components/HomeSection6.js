import React, {useState} from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../Apphs6.css';

const LampIMG = '/img/img5.png'

export default function HomeSection6(){
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
        };
    return(
        <div className="home-section-6">
            <Container className="container-carousel-6">
                <div className='container-carousel-6-img'>
                    <Carousel 
                        controls={false}
                        indicators={false}
                        activeIndex={index}
                        onSelect={handleSelect}
                         >
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
            </div>
                    <div className="indicator-bar-6">
                        <div className="custom-indicators-6">
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