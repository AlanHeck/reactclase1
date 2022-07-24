import {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { data } from '../Mock/SimuApi';



 const ItemListContainer = ({greeting}) => {
  const[listaProductos, setListaProductos]= useState([])

  const[mensaje, setMensaje]= useState(false)

  const[loading, setLoading]= useState(true)


  const onAdd = (cantidad) =>{
     setMensaje(`Agregaste ${cantidad} en el carrito`)
  }



  useEffect(() => {
    data
    .then((respuesta)=> setListaProductos(respuesta))
    .catch(()=> setMensaje("error, intente luego") )
    .finally(()=> setLoading(false))
  }, [])
  
    
  

  return (
    <div>
      <h2>{greeting}</h2>
      {!mensaje && <p>{mensaje}</p>}
    { loading ? <p> loading...</p>  :  <ItemList listaProductos={listaProductos}/>}
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}


export default ItemListContainer