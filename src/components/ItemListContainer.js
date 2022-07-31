import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { data } from '../Mock/SimuApi';



const ItemListContainer = ({ greeting, onClickVerMas }) => {
  const [listaProductos, setListaProductos] = useState([])

  const [mensaje, setMensaje] = useState(false)

  const [loading, setLoading] = useState(true)





  useEffect(() => {
    data
      .then((respuesta) => setListaProductos(respuesta))
      .catch(() => setMensaje("error, intente luego"))
      .finally(() => setLoading(false))
  }, [])




  return (
    <div>
      <h2>{greeting}</h2>
      {!mensaje && <p>{mensaje}</p>}
      {loading ? <p> loading...</p> : <ItemList listaProductos={listaProductos} onClickVerMas={onClickVerMas} />}
    </div>
  )
}


export default ItemListContainer