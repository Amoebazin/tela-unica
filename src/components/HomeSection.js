
import React from 'react';
import { Container } from 'react-bootstrap';
import '../Apphs2.css';

export default function HomeSection() {
  return (
    <div className="home-section d-flex flex-column align-items-center justify-content-center"> {/* flex-column para empilhar */}

      <div className="home-section-part part-1">
        <Container className="text-center">
          <div className="title-box">
            <h1 style={{ fontFamily: 'Fonte1' }} className="display-5 text-dark fw-bold">
              <strong>DESTAQUE-SE <br />
              NO MERCADO COM A <br />
              AJUDA DA BATS COLLAB!</strong>
            </h1>
          </div>
        </Container>
      </div>

      <div className="home-section-part part-2">
        <Container className="text-center">
          <p className="lead text-dark fs-5">
            A BATS collab tem as ferramentas necessárias para te<br/>
            ajudar a chegar onde você precisa. Afinal de contas nem<br/>
            todo herói usa capa, <strong>mas todo herói divulga o seu<br/>
            trabalho aqui com a gente!</strong><br/>
          </p>
        </Container>
      </div>

      <div className="home-section-part part-3 d-flex flex-column align-items-center justify-content-center">
        
        <div className="image-overlay-wrapper">
         
          <img src="/img/fundo.png" alt="fundo" className="img-fluid home-section-fundo-img" />
         
          <img src="/img/img1.png" alt="img1" className="img-fluid home-section-img1-img" />
        </div>
      </div>
    </div>
  );

}