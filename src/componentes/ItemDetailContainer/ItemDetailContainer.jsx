import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  //clase 6 -tenemos que obtener un detalle y ese detalle va a estar dentro
  //clase 6 -de un estado, y ese estado va a aser un objeto

  //clase 7 - el hook para capturar parametros del navegador es useParams

  const [productDetail, setProductDetail] = useState([]);

  const params = useParams();

  //clase 7 - log a parametros para saber si viene bien, estos parámetros son un objeto
  // el objeto que me trae es productId y se llama así pq lo definí de ese modo, y el contenido me lo da la barra de navegación
  console.log(params);

  //clase 6 -luego se obtiene la informacion, por eso usamos efecto

  useEffect(() => {
    const getProducts = async () => {
      try {
        //clase 6 -se setea respuesta del servidor con await
        //clase 6 -luego de obtener respuesta obtenemos los datos
        //clase 6 -para terminar de obtener el cuerpo de la respuesta

        //clase 7 - para pasarle el id de producto desde app, cambiar el fecth a template string - const response = await fetch("https://fakestoreapi.com/products/1");
        //clase 7 - cada vez que cambie params, se va a hacer un fetch nuevamente
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );

        const data = await response.json();
        //clase 6 -luego de obtener los datos seteamos el product detail
        setProductDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [params]);

  //clase 6 -luego de armar el itemdetail, se pasan por props,
  //clase 6 -y lo recibimos en este detail
  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
