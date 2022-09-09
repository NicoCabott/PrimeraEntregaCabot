
 const productos = [
    { id: "1", name: "zapatilla nike", category: "zapatilla", precio: 100, stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/03/21/16478758154102.jpg" },
    { id: "2", name: "Zapatilla Adidas", category: "zapatilla", precio: 100, stock: 7, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg" },
    { id: "3", name: "Camiseta de River", category: "camiseta", precio: 80, stock: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/42f6e0d4f39047e8b476aee60109bc4c_9366/Camiseta_Titular_River_Plate_22-23_Blanco_GB7592_01_laydown.jpg" },
    { id: "4", name: "Camiseta de Argentina", category: "camiseta", precio: 80, stock: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg" },
    { id: "5", name: "Jogging de River", category: "pantalon", precio: 50, stock: 7, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5f02e70a4c514d62b5ddad1a0103feae_9366/Pantalon_de_Entrenamiento_Tiro_River_Plate_Gris_GU9627_21_model.jpg" },
    { id: "6", name: "Zapatilla nike 2", category: "zapatilla", precio: 100, stock: 8, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://static.runnea.com/images/202106/nike-pegasus-trail-3-400x400x80xX.jpg?1" },
    { id: "7", name: "Camiseta del Chelsea", category: "camiseta", precio: 70, stock: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/V/CV7889-409_0.jpg" },
    { id: "8", name: "Jogging nike negro", category: "pantalon", precio: 55, stock: 8, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://static.dafiti.com.ar/p/nike-3723-538681-1-product.jpg" },
    { id: "9", name: "Short de Argentina", category: "pantalon", precio: 40, stock: 7, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-argentina-adidas-oficial-negro-100020fs6573001-1.jpg" }

]

export const data = new Promise((res, rej) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            res(productos)
        } else {
            rej("Salio mal")
        }
    }, 2000)
})