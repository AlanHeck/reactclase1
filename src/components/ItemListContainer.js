import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
  return (
    <div>{props.contenedor}
    <ItemCount/>
    </div>
  )
}


export default ItemListContainer