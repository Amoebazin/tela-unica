import React, { useState } from 'react';
import { Navbar, Container, Nav, Collapse } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    
    <Navbar expand={false} className="py-3 shadow-sm custom-header-navbar">
      <Container>
  
        <Navbar.Brand href="#">
          <img src="/img/logo.png" alt="Logo" className="header-logo"/>
        </Navbar.Brand>

        <button className="btn btn-dark" onClick={() => setShow(!show)}>
          <List size={24} />
        </button>
      </Container>

      <Collapse in={show}>
        <div className="bg-light w-100">
          <Nav className="flex-column p-3">
            <Nav.Link href="#quem-somos">Quem Somos</Nav.Link>
            <Nav.Link href="#servicos">Serviços</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </div>
      </Collapse>
    </Navbar>
  );
}