import React, { useState, useEffect } from "react";

export default function Promesas() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])   
    const [error, setError] = useState("")
    

    useEffect(() => {
        let promesaProducto = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    { id: 100, name: 'zapato nike', precio: 100 },
                    { id: 101, name: 'zapato nike', precio: 100 },
                    { id: 102, name: 'zapato nike', precio: 100 },
                    { id: 103, name: 'zapato nike', precio: 100 },
                    { id: 104, name: 'zapato nike', precio: 100 },
                ]);
            }, 2000)
        });
        
        
        promesaProducto
            .then((res) => {
                setProducto(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        < div >    
            <p>{loading ? "Loading" : "FIN"}</p>
            <p>{error ? error : null}</p>
            {producto.map((item) => (
                <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.precio}</p>
                </div>
            ))}
        </ div>
    )
}


    