import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Shop } from "../../context/ShopContext";
import CardWidget from "../CartWidget/Index";
//import { Link } from "react-router-dom";

const NavBar = () => {
  const value = useContext(Shop);

  console.log(value);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Escuela de Cerámica</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/electronics">Electronics</Nav.Link>
            <Nav.Link href="/category/jewelery">Jewelery</Nav.Link>
            <Nav.Link href="/category/men's clothing">Men's</Nav.Link>
            <Nav.Link href="/category/women's clothing">Woman's</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <CardWidget />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
