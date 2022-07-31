import React from 'react'

const Item = ({ producto, onClickVerMas }) => {
  const manejarOnClick = () => {
    onClickVerMas(producto.id)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className='w-44 h-32 m-4' src={producto.img} alt={producto.nombre} /></figure>
      <div className="card-body">
        <h2 className="card-title flex justify-evenly">{producto.nombre}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => { manejarOnClick() }}>Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default Item