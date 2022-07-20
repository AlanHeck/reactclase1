import { useState } from 'react';
import './ItemCount.css';

const ItemCount = () => {
    const [count, setCount] = useState(1);


    const addCount = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    const restCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div className='count-item'>
                <button className="btn btn-accent" onClick={restCount}> - </button>

                <p> {count} </p>

                <button className="btn btn-accent" onClick={addCount}> + </button>
            </div>

            <button className="btn btn-accent">Comprar</button>

        </div>

    )
}

export default ItemCount;