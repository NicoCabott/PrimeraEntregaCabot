import React, { useState, useEffect } from "react"

export default function ItemCount({stock, handleAumentar, handleRestar, onAdd, contador}) {
    

  return (
      <div>
          <h2>Contador: {contador}</h2>
          <button onClick={() => {
            handleAumentar()
          }}>
            Sumar al contador
          </button>
          <button onClick={() => {
              handleRestar()
          }}>
              Restar al contador
          </button>
          <button onClick={() => {
            onAdd()
          }}>
            Agregar al carrito
          </button>

      </div>
      
  )
}


