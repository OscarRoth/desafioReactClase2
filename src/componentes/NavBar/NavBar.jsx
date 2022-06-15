import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CartWidget/Index';

const NavBar = () => {
    return (
        <>        
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Escuela de Cerámica</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Proceso de elaboración</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <CardWidget/>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
};

export default NavBar
