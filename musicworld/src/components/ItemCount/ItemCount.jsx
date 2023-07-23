import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const ItemCount = ( { initial=1, stock=15, onAdd}) => {
    const [counter, setCounter] = useState(initial)
    const addHandle = () =>{
        if (counter < stock){
            setCounter(counter + 1)
        }
    }
    const subHandle = () =>{
        if (counter > initial){
            setCounter(counter - 1)
        }
    }
    const onAddHandle = () =>{
        onAdd(`Cantidad:, ${counter}`)
    }
    return(
        <div className='container-fluid col-6'>
            <div>
                <Button variant="outline-primary m-2 w-25" onClick={addHandle}>+</Button>
                <label>{counter}</label>
                <Button variant="outline-primary m-2 w-25" onClick={subHandle}>-</Button>
                <Button variant="outline-primary m-2 w-250" onClick={onAddHandle}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}
export default ItemCount