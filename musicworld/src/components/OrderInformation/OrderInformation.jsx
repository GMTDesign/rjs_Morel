import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrder } from "../../services/firebase"

const OrderInformation = () => {
    const { id } = useParams()
    const [orderData, setOrderData] = useState({})


    useEffect(() => {
        const requestOrder = async () => {
            const order = await getOrder(id)

            setOrderData(order)

        }
        requestOrder()

    }, [])

    console.log(id)
    console.log(orderData.items)





    return (
        <div>
            
            <h2>Gracias por confiar en nosotros. Tu compra  </h2>
            <h4>Fecha de la compra:  </h4>
            <h4>Productos comprados
               
            </h4>





        </div>
    )
}

export default OrderInformation