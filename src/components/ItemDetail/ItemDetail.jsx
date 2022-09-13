import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import Contador from "../Contador";

export default function ItemDetail({ productDetail }) {
  // Lo recibo de ItemDetailContainer.
  const{name, description, img, stock, precio} = productDetail
  const [carrito, setCarrito] = useState()
  
  const agregarCarrito = () => {
    alert("Agregaste al carrito");
  }
  


  return (
    <div style = {{ display: "flex", justifyContent: "center", flexDirection: "center", alignItems: "center", padding:"3rem" }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Contador stock={stock} initial={1} agregarCarrito={agregarCarrito} />
        </Card.Body>
      </Card>
      
    </div>
    
    
  );
}
