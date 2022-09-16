import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Contador from "../Contador"

export default function ItemDetail({ productDetail }) {
  // Lo recibo de ItemDetailContainer.
  const [count, setCount] = useState(1)
  const [compra, setCompra] = useState(false)
  const{name, description, img, stock, precio, id} = productDetail
  const navegar = useNavigate()
  const {addItem} = useCart()
  
  const onAdd = () => {
    let purchase = {
      id,
      name,
      precio,
      stock,
      img,
      quantity: count
    }
    setCompra(true)
    addItem(purchase)
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
          { !compra
            ? <Contador stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount} />
          : <div>
              <button className="btn btn-info" onClick={() => navegar("/cart")}>ir al carrito</button>
              <button className="btn btn-warning" onClick={() => navegar("/")}>seguir comprando</button>
          </div>}
        </Card.Body>
      </Card>
      
    </div>
    
    
  );
}
