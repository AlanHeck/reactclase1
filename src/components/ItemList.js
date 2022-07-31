import React from 'react'
import Item from './Item'

const ItemList = ({ listaProductos, onClickVerMas }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      {listaProductos.map((producto) => <Item key={producto.id} producto={producto} onClickVerMas={onClickVerMas} />)}

    </div>
  )
}

export default ItemList