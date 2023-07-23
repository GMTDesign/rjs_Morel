import Card from 'react-bootstrap/Card'

import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ product }) => {

  const onAdd = (count) => {
    console.log(count)
  }

  return (
    <>
      <div className="container-fluid row">
        <Card className='col-6 ms-5 mt-5' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/${product.image}`} />
          <Card.Body>
            <Card.Title>Producto: {product.name}</Card.Title>
            <Card.Text>Descripción: {product.description}</Card.Text>
            <Card.Text>Categoría: {product.category}</Card.Text>
            <Card.Text>Price: {product.price}</Card.Text>
            <Card.Text>Stock: {product.stock}</Card.Text>
          </Card.Body>
        </Card>
        <div className='col-6 mt-5'>
        <ItemCount onAdd={onAdd} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail