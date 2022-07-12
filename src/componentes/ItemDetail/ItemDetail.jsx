import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./styles.css";

//este itemdeatail va a tener todos los datos del producto, de uno solo, el id, img, etc, se puede pasar todo el objeto
const ItemDetail = ({ product }) => {
  const [cantidadSuma, setCantidadSuma] = useState();

  const navigate = useNavigate();

  const handleConfirm = (quantity) => {
    setCantidadSuma(quantity);
  };

  const handleFinalizar = () => {
    navigate("/Cart");
  };

  console.log(cantidadSuma);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5 offset-md-3">
          <h1>{product.title}</h1>
          <div className="contImgSingleProd">
            <img
              src={product.image}
              alt={product.tittle}
              className="imgProductSingle"
            />
          </div>
          <p className="descriptionSingleDetail">{product.description}</p>
        </div>
        <div>
          {!cantidadSuma ? (
            <ItemCount value={1} stock={10} onAdd={handleConfirm} />
          ) : (
            <button className="btn btn-primary" onClick={handleFinalizar}>
              Finalizar compra
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
