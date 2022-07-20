import React from "react";
import "./styles.css";

import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../ItemCount/ItemCount";

//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const ItemListContainer = ({ greeting }) => {
  //clase 7 - el ItemListContainer puede recirbir parámetros, como no recibirlo, las dos cosas pueden suceder. Pero no recibe parámetros, si va a recibir parámetros cuando entremos o busquemos una category
  //clase 7 - cuando viene sin parámetros viene un object vacío
  //clase 7 -si no hay parámetros no hay nada que filtrar, si viene un objeto con keys significa que vienen parámetros
  const [products, setProducts] = useState([]);

  //clase 7 - se setean los dos estados, un estado de productos sin filtrar y otro con productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    //clase 7 - la promesa y el async await están dentro del hook
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
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    misProductos();
  }, []);

  //un segundo useEffect para hacer el filtrado, (ver de optimizarlo)
  useEffect(() => {
    //el optional changing/encadenamineto opcional "?". Si el params viene sin parámetros no hace lo que le pedimos, o sea el if
    if (params?.categoryId) {
      const productosFiltrados = products.filter(
        (productito) => productito.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      //devuelve los productos sin filtrar por medio de setProductosFiltrados
      setProductosFiltrados(products);
    }
  }, [params, products]);

  //console.log(products);

  //const handleConfirm = (quantity) => {
  // console.log("se agregó la cantidad de:" + quantity);
  //};

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

//esta linea estaaba en el desafío 8
//<ItemList products={productosFiltrados} />

export default ItemListContainer;

//para agregar al desafío 9 - inicio
//import ItemCount from "../ItemCount/ItemCount";

//const handleConfirm = (quantity) => {
// console.log("se agregó la cantidad de:" + quantity);
//};

//return (
//<div className="container">
// <Container className="mensaje">
//   <p>{greeting}</p>
// </Container>
// <div className="container container-card">
//  <ItemCount value={1} stock={10} onAdd={handleConfirm} />

// </div>
// </div>
//);
//};

//para agregar al desafío 9 - final
