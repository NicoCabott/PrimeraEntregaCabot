import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../mocks/mockData";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/firebase";



export default function ItemDetailContainer() {
  
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const{id} = useParams()

  useEffect(() => {

    setLoading(true)
    const collectionProductos = collection(db, "productos")

    const referenciaDoc = doc(collectionProductos, id)

    getDoc(referenciaDoc)
    .then((res) => {
      setProductDetail({
        id: res.id,
        ...res.data()
      })
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
    
  }, [])
  
  
  
  
  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  );
}
