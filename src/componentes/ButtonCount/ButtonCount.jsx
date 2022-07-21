import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonCount = ({ value, stock, onAdd }) => {
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
    <div className="contenedor-botones">
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success" onClick={increment}>
          +
        </button>
        <span>{counter}</span>
        <button className="btn btn-success" onClick={decrement}>
          -
        </button>
      </div>
      <div
        style={{
          margin: "0 auto",
          width: "32%",
        }}
        className="justify-content-between align-items-center mt-2 mb-5"
      >
        <button className="btn btn-success" onClick={() => onAdd(counter)}>
          agregar al carrito de compras
        </button>
      </div>
    </div>
  );
};

export default ButtonCount;
