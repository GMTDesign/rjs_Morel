import { useCartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Cart = ({ item }) => {
  const { removeItem } = useCartContext()
  return (
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
  )
}

export default Cart