import React from "react";
import Item from "../Item/Item";
//import { useState, useEffect } from "react";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ItemList;
