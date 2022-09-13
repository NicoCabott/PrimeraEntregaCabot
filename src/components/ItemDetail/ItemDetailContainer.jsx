import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../mocks/mockData";
import ItemDetail from "./ItemDetail";



export default function ItemDetailContainer() {
  
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const{id} = useParams()

  useEffect(() => {
    setLoading(true)
    data
    .then((res) => 
      setProductDetail(res.find((item) => item.id === id)))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [id])
  
  
  
  // const [arrayItems, setArrayItems] = useState([]);

  // //Nico pensemos lo siguiente. Ahora queremos un solo producto, ya no quiero un array de objetos de producto.
  // //ENTONCES, no le voy a pegar a la url que devuelve products, sino que a la que me trae uno solo, como lo vimos con la pokeapi.
  // // Será a https://fakestoreapi.com/products/${detailId}, ese id es el que cambiará dinámicamente cuando entremos a cada uno de los productos de nuestra lista.
  // //Para eso usaremos el hook useParams(), y deberemos establecer que el efecto se ejecute, pero en esta ocasión cada vez que el id cambie, es decir cada vez que esté en
  // // la ruta detail/:detailId, (o /item/:itemId), que previamente lo estableceremos en las rutas.
  // //Me estoy yendo más apra adelante con esto último pero te va a ayudar para lo que se viene.

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/1")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setArrayItems(json);
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => console.log("finally"));
  // }, []); // Acá vas a indicar que se ejecute cuando cambie el detailId.

  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  );
}
