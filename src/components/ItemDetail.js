import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ producto }) => {
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={producto.img} alt={producto.nombre}class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio $ {producto.precio}</p>
                    <p>Stock {producto.stock}</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
            <ItemCount stock={producto.stock} initial={1} />
        </div>
    )
}

export default ItemDetail

{/*<div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={producto.img} alt={producto.nombre} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio $ {producto.precio}</p>
                    <p>Stock {producto.stock}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
</div>*/}