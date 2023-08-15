import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (product) => {
    return (
        <Card className='col-3 m-2' style={{ width: '14rem' }}>
            <Card.Img className='imgSize' variant="top" src={`/${product.image}`} />
            <Card.Body>
                <Card.Title>Producto: {product.name}</Card.Title>
                <Card.Text>Categoría: {product.category}</Card.Text>
                <Link to={`/detail/${product.id}`}>
                    <Button variant="outline-primary">Ver Detalle</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item