import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';


export default function Item({product}) {
  
  const {id, img, name, precio} = product
  const navegar = useNavigate()


  return (

      <Card style={{ width: '18rem', display: "flex", justifyContent: "center", flexDirection: "center", alignItems: "center" }}>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Precio: ${precio}</Card.Text>
          
        </Card.Body>
        <Button className="btn btn-primary" onClick={() => navegar(`/detalle/${id}`)}>Ver detalle</Button>
      </Card>
  )
}
