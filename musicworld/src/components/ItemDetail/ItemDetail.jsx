import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'



const ItemDetail = ({ product }) => {
  const { addToCart, getItem, cartItems } = useCartContext()
  const [isInCart, setIsInCart] = useState(false)

  const onAdd = (count) => {
    addToCart({ ...product, count: count })
    setIsInCart(true)
  }

  const itemInCart = getItem(product.id)

  const maxCount = itemInCart ? product.stock - itemInCart.count : product.stock
  return (
    <>
      <div className="container-fluid d-flex justify-content-center row">
        <Card className='ms-5 mt-5' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/${product.image}`} />
          <Card.Body>
            <Card.Title>Producto: {product.name}</Card.Title>
            <Card.Text>Descripción: {product.description}</Card.Text>
            <Card.Text>Categoría: {product.category}</Card.Text>
            {product.discount
              ?
              <>
                <Card.Text>Precio: {product.price}</Card.Text>
                <Card.Text style={{ color: 'green' }} >Precio con descuento: {product.price - product.price * product.discount / 100}</Card.Text>
              </>
              :
              <Card.Text>Precio: {product.price}</Card.Text>
            }
            {product.stock !== 0
              ?
              <Card.Text>Stock: {product.stock}</Card.Text>
              :
              <Card.Text>No hay stock disponible</Card.Text>
            }
            {product.freeDelivery && <Card.Text style={{ color: 'red' }}  >Envío gratis</Card.Text>}
          </Card.Body>
        </Card>
        <div className='col-6 mt-5'>
          {isInCart
            ?
            <>
              <Link to="/cart">
                <Button variant="outline-success m-2 w-250">Ir al Carrito</Button>
              </Link>
              <Link to="/">
                <Button variant="outline-primary m-2 w-250">Seguir comprando</Button>
              </Link>
            </>
            :
            <ItemCount stock={maxCount} onAdd={onAdd} />
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail