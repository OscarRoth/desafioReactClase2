import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Item/styles.css";

const Item = ({ product }) => {
  return (
    <Card className="box-card">
      <Card.Img src={product.image} className="img-card-item" />
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Button variant="primary">Ver detalle de producto</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
