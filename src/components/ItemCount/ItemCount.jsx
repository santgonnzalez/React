import { useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({initial, stock, onAdd}) => {
    
    //número máximo = stock --> valor indicador para saber hasta cuándo sumar
    //número mínimo (1) --> valor indicador para saber hasta cuándo restar
    const[count, setCount] = useState(1)
    const onIncrease = () => { //botón que agrega
        count + 1 <= stock ? 
            setCount(count + 1) 
            : 
                setCount(count);
    }    
    
    const onDecrease = () => { //botón que resta
        count -1 >= 1 ? 
            setCount(count - 1) 
            : 
                setCount(1);
    }

    const handlerOnAdd = () => {
        onAdd(count)
        //setCambiarBoton(true)
    }
    return (
        <>
            <div className="countCarrito">
                <Button className="addCart" onClick={ onDecrease }> - </Button>
                <span className="divQty">{ count }</span>
                <Button  className="addCart" onClick={ onIncrease }> + </Button>
                
                <Button  className="addCart" onClick={ handlerOnAdd }> Agregar al carrito </Button>
                

                
                {/* <Button className="addCart" onClick={() => onAdd(qty) }> Agregar al carrito</Button> */}
            </div>
        </>
    )
}

export default ItemCount