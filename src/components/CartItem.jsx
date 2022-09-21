import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartItem({compra}) {
  const{removeItem}=useCart()
  
    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem", width: "100%" }}>
          <img src={compra.img} alt={compra.name} style={{width: "10rem"}} />
          <span>{compra.name}</span>
          <span>{compra.quantity}</span>
          <span>${compra.precio}</span>
          <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Borrar producto</button>
      </div>
  )
}
