import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../mocks/mockData";
import ItemList from "./ItemList";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const{categoriaId} = useParams()


  //firebase

  useEffect(() => {

    setLoading(true)
    const productos = categoriaId ? query(collection(db, "productos"), where("category", "==", categoriaId)) :collection(db, "productos")
    getDocs(productos)
    .then((res)=>{
      const lista = res.docs.map((product) => {
        return{
          id: product.id,
          ...product.data()
        }
      })
      setProductList(lista)
    })
    .catch((error)=> console.log(error))
    .finally(() => setLoading(false))

  },[categoriaId])




  return (
    <div style={{padding:"3rem"}}>
      <ItemList productList = {productList} />
    </div>
  )
}
