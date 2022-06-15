import React from "react";
import './styles.css';

import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const ItemListContainer = ({greeting}) => {
    return (
        <Container className="mensaje">            
            <p>{greeting}</p>            
        </Container>
    )
}

export default ItemListContainer