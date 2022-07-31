import { useState, useEffect } from 'react'
import { obtenerProductoConId } from '../Mock/SimuApi'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({ greeting, idDeProductoSeleccionado }) => {
  const [producto, setProducto] = useState([])
  const [mensaje, setMensaje] = useState(false)
  const [loading, setLoading] = useState(true)




  useEffect(() => {
    setLoading(true)
    obtenerProductoConId(idDeProductoSeleccionado)
      .then((respuesta) => setProducto(respuesta))
      .catch(() => setMensaje("error, intente luego"))
      .finally(() => setLoading(false))
  }, [idDeProductoSeleccionado])



  return (
    <div>
      <h2>{greeting}</h2>
      {mensaje && <p>{mensaje}</p>}
      {loading ? <p> loading...</p> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer