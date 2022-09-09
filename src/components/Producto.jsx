import React, { useState, useEffect } from "react"
import ItemCount from "./ItemCount";

export default function Producto({item, color}) {
  
  const [contador, setContador] = useState(0);

  const stock = 10;

  const handleAumentar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    } else {
      alert("No tenemos mas unidades")
    }
  }

  const handleRestar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    } else {
      alert("Seleccione al menos una unidad")
    }
  }

  const onAdd = () => {
    console.log(contador);
  }



    return (
      <div style={{backgroundColor: color, marginTop: "5px"}}>
          <ItemCount 
            contador={contador}
            handleAumentar = {handleAumentar}
            handleRestar = {handleRestar}
            onAdd={onAdd}
            />
      </div>        
  )
}
