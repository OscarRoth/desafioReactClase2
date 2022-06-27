import React from "react";
import "./styles.css";

import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve("https://fakestoreapi.com/products");
      }, 2000);
    });

    const misProductos = async () => {
      try {
        const url = await promesa;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    misProductos();
  }, []);

  return (
    <div className="container">
      <Container className="mensaje">
        <p>{greeting}</p>
      </Container>
      <div className="container container-card">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
