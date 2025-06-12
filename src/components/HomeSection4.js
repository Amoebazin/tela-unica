import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../Apphs4.css'

export default function HomeSection4(){
    return(
    <div className="home-section-4">
            <Container className="home-section-4-content">
                <div className="title-box-home-section-4">
                    <h3 className="home-section-4-part-1-text">
                        CLIQUE NO BOTÃO PARA ADQUIRIR<br/>
                        OS NOSSOS SERVIÇOS:
                    </h3>
                </div>

                <Button variant="dark" className="btn-send-signal-4">
                    <strong>MANDAR SINAL</strong>
                </Button>

                <div className="home-section-4-void">
                    
                </div>
            </Container>    
    </div>
    );
}