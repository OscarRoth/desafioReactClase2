import React from "react";
import "./styles.css";

//este itemdeatail va a tener todos los datos del producto, de uno solo, el id, img, etc, se puede pasar todo el objeto
const ItemDetail = ({ product }) => {
  console.log(product);
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
      </div>
    </div>
  );
};

export default ItemDetail;
