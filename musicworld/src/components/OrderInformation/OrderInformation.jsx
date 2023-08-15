import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getOrder } from "../../services/firebase"
import Loader from "../Loader/Loader"
import Button from "react-bootstrap/esm/Button"
import Container from 'react-bootstrap/Container'
import "./OrderInformation.css"

const OrderInformation = () => {
    const { id } = useParams()
    const [orderData, setOrderData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const requestOrder = async () => {
            const response = await getOrder(id)
            setOrderData(response)
            setLoading(false)
        }
        requestOrder()
    }, [])

    return (
        <div>
            {
                loading
                    ?
                    <Loader />
                    :
                    <section>
                        <h2 className="orderStyle">Gracias por confiar en nosotros!</h2>
                        <h3 className="orderStyle">Comprador/a: {orderData.buyer.name}</h3>
                        <h4 className="orderStyle">Datos de la compra:</h4>
                            {orderData.items.map((item) => {
                                return (<div className="orderStyle2" key={item.id}>
                                    <h5>Producto: {item.name} - Cantidad: {item.count} - Precio unitario: $ {item.price}</h5>
                                </div>)
                            })}
                        
                        <h2 className="orderStyle">Total de la compra: $ {orderData.total} </h2>
                        <Link to="/">
                            <Button variant="outline-primary w-250 orderStyle">Ir al Inicio</Button>
                        </Link>
                    </section>
            }
        </div>
    )
}

export default OrderInformation