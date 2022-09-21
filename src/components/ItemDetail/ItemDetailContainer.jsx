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
  
  
  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  );
}
