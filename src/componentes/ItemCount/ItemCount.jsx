import React from "react";
import { useState } from "react";
import "./styles.css";

const ItemCount = ({ value, stock, onAdd }) => {
  const [counter, setCounter] = useState(value);

  const increment = (e) => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      e.preventDefault();
    }
  };
  const decrement = (e) => {
    if (counter <= value) {
      e.preventDefault();
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="container-contador">
        <div className="container-btn-carrito">
          <button className="btn btn-primary" onClick={decrement}>
            quitar
          </button>
          <div className="counter">{counter}</div>
          <button className="btn btn-secondary" onClick={increment}>
            agrerar
          </button>
        </div>
        <div className="conainer-btn-carrito">
          <button className="btn btn-success" onClick={() => onAdd(counter)}>
            agregar al carrito de compras
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
