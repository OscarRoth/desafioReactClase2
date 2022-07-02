import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  //tenemos que obtener un detalle y ese detalle va a estar dentro
  //de un estado, y ese estado va a aser un objeto

  const [productDetail, setProductDetail] = useState([]);

  //luego se obtiene la informacion, por eso usamos efecto

  useEffect(() => {
    const getProducts = async () => {
      try {
        //se setea respuesta del servidor con await
        //luego de obtener respuesta obtenemos los datos
        //para terminar de obtener el cuerpo de la respuesta
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        //luego de obtener los datos seteamos el product detail
        setProductDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  //luego de armar el itemdetail, se pasan por props,
  //y lo recibimos en este detail
  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
