import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Item = (product) => {

    return (
            <Card className='col-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`/${product.image}`} />
                <Card.Body>
                    <Card.Title>Producto: {product.name}</Card.Title>
                    <Card.Text>Código identificador: {product.id}</Card.Text>
                    <Link to={`/detail/${product.id}`}>
                        <Button variant="primary">Ver Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Item