const productos = [
  { id: '00', nombre: "Hamburguesa de pollo", descripcion: "Suculenta y rica hamburguesa", precio: 950, img: "./Images/hamburguesa0.jpg", stock: 10 },
  { id: '01', nombre: "Hamburguesa con cebolla crispy", descripcion: "Suculenta y rica hamburguesa", precio: 1100, img: "./Images/hamburguesa1.jpg", stock: 10 },
  { id: '02', nombre: "Hamburguesa vegetariana", descripcion: "Suculenta y rica hamburguesa", precio: 1000, img: "./Images/hamburguesa2.jpg", stock: 10 },
];

export const data = new Promise((resolve, reject) => {

  let condition = true
  setTimeout(() => {
    if (condition) {
      resolve(productos)
    } else {
      reject('peticion denegada')
    }
  }, 2000)
})



export const obtenerProductoConId = (id) => {
  return new Promise((resolve, reject) => {
    const productoEncontrado = productos.find((producto) => producto.id === id);
    setTimeout(() => {
      if (productoEncontrado !== undefined) {
        resolve(productoEncontrado)
      } else {
        reject(new Error(`No se encontró un producto con id ${id}`))
      }
    }, 2000)
  });
}


