import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import ButtonCount from "../ButtonCount/ButtonCount";
import "./styles.css";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();

  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);

  const { addItem } = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };

  const handleTerminate = () => {
    //addItem(product, qtyAdded);
    navigate("/cart");
  };

  console.log(qtyAdded);

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-5 offset-md-3">
          <h1>{product.title}</h1>
          <div className="contImgSingleProd">
            <img
              style={{
                width: "300",
                height: "auto",
              }}
              src={product.image}
              alt={product.title}
              className="imgProductSingle"
            />
          </div>

          <p className="descriptionSingleDetail">{product.description}</p>
          <hr />
          {!qtyAdded ? (
            <ButtonCount
              value={1}
              stock={10}
              onAdd={handleConfirm}
              //onConfirm={handleConfirm}
              // maxQuantity={product.stock}
            />
          ) : (
            <div
              style={{
                margin: "0 auto",
                width: "32%",
              }}
              className="justify-content-between align-items-center mt-2 mb-5"
            >
              <button className="btn btn-primary" onClick={handleTerminate}>
                Terminar compra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
