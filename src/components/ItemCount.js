import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);


    const addCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restCount = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div className='count-item'>
                <button className="btn btn-accent" onClick={restCount}> - </button>

                <p className='tamañop'> {count} </p>

                <button className="btn btn-accent" onClick={addCount}> + </button>
            </div>

            <button className="btn btn-accent" onClick={()=>onAdd(count)}>Comprar</button>

        </div>

    )
}

export default ItemCount;