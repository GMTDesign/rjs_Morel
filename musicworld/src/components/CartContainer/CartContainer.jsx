import { useCartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"

const CartContainer = () => {
    const { cartItems, totalPrice, clearCart } = useCartContext()
    return (
        <div>
            {cartItems.map(item => <div key={item.id}>
                <Cart item={item}/>
            </div>)}
            
                {totalPrice() !== 0
                    ?
                    <>
                        <h3 className="m-5">Total de la compra: $ {totalPrice()}</h3>
                        <Link to="/checkout">
                            <Button className="m-5" variant="primary">Comprar</Button>
                        </Link>
                        
                        <Button className="m-5" variant="primary" onClick={clearCart}>Vaciar carrito</Button>
                    </>

                    :
                    <>
                        <h3 className="m-5">No hay productos en el carrito</h3>
                        <Link to="/">
                            <Button variant="primary m-5">Ir al Inicio</Button>
                        </Link>
                        
                    </>

                }

            

        </div>
    )
}

export default CartContainer