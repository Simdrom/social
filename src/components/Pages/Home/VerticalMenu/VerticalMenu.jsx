import React from 'react';
import { Nav, Button, Container } from 'react-bootstrap';

import './VerticalMenu.css'

const VerticalMenu = () => {
  return (

    // <Container fluid>
      <Nav className="flex-column" id='verticalMenu'>
        <Nav.Item>
          <Button href="#" variant="outline-light">Inicio</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Explorar</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Comunidades</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Notificaciones</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Mensajes</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Guardado</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Perfil</Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="#" variant="outline-light">Más opciones</Button>
        </Nav.Item>
      </Nav>
    // </Container>
  );
};

export default VerticalMenu;