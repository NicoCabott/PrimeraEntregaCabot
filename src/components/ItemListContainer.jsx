import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../mocks/mockData";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const{categoriaId} = useParams()


  useEffect(() => {
    setLoading(true)
      data
        .then((res) =>{
          if (categoriaId) {
            setProductList(res.filter((item) => item.category === categoriaId))
          }else{
            setProductList(res)
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
  }, [categoriaId])

  return (
    <div style={{padding:"3rem"}}>
      <ItemList productList = {productList} />
    </div>
  )
}
