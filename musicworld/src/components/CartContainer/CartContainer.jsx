import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cartItems, totalPrice, removeItem, clearCart } = useCartContext()
    return (
        <div>
            {cartItems.map(item => <div key={item.id}>
                <Container className="m-2">
                    <Row>
                        <Col><img className="w-75" src={`/${item.image}`}></img></Col>
                        <Col>Producto: {item.name}</Col>
                        <Col>Precio: $ {item.price}</Col>
                        <Col>Cantidad: {item.count}</Col>
                        <Col>Subtotal: $ {item.price * item.count}</Col>
                        <Col>
                            <Button onClick={() => { removeItem(item.id) }}>X</Button>
                        </Col>
                    </Row>
                </Container>
            </div>)}
            
                {totalPrice() !== 0
                    ?
                    <>
                        <h3>Total de la compra: $ {totalPrice()}</h3>
                        <Button variant="primary" onClick={clearCart}>Vaciar carrito</Button>
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