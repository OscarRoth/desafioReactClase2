import React from "react";
import "./styles.css";

import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve("https://fakestoreapi.com/products");
      }, 1000);
    });

    const misProductos = async () => {
      try {
        const url = await promesa;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setProducts(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log(error);
      }
    };

    misProductos();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = products.filter(
        (productito) => productito.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(products);
    }
  }, [params, products]);

  return (
    <div className="container">
      <Container className="mensaje">
        <p>{greeting}</p>
      </Container>
      <div className="container container-card">
        <ItemList products={productosFiltrados} />
      </div>
    </div>
  );
};

export default ItemListContainer;
