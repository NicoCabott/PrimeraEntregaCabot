import React, { useState } from "react"

export default function Contador({ initial, stock, agregarCarrito }) {
  const [count, setCount] = useState(initial)
  

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

  const restar= () => {
    if (count > 0) {
        setCount(count - 1)
    }
  }
    return (
        <div style={{display: "flex", alignContent: "center"}}>
            <div>
                <button className="btn btn-success" onClick={sumar}>+</button>
                <span className="btn btn-light">{count}</span>
                <button className="btn btn-danger" onClick={restar}>-</button>
            </div>
        <button className="btn btn-primary mx-3" 
          onClick={agregarCarrito}>Comprar</button>
        </div>
        

    
    
  )
}

