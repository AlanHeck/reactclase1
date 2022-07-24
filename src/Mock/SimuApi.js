const productos = [
    {id: '00', nombre: "Hamburguesa con queso", descripcion: "Suculenta y rica hamburguesa", precio: 950, img:"./Images/hamb0.jpg", stock: 40 },
    {id: '01', nombre: "Hamburguesa con cebolla crispy", descripcion: "Suculenta y rica hamburguesa", precio: 1100, img:"./Images/hamb1.jpg", stock: 25 },
    {id: '02', nombre: "Hamburguesa napolitana", descripcion: "Suculenta y rica hamburguesa", precio: 1000, img:"./Images/hamb2.webp", stock: 50 },
  ];

export const data = new Promise  ((resolve, reject) => {
    
    let condition = true
    setTimeout(()=> {
      if(condition ){
        resolve(productos)
      }else{
        reject('peticion denegada')
      }
    },2000)
  })
