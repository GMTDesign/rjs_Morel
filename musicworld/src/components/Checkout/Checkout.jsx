import Button from "react-bootstrap/esm/Button"
import { useCartContext } from "../../context/CartContext"
import { newOrder } from "../../services/firebase"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useCartContext()
    const navigate = useNavigate()
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleCheckout = async () => {
        const orderInfo = {
            buyer: buyer,
            date: new Date(),
            items: cartItems.map(({ name, price, count }) => ({ name, price, count })),
            total: totalPrice()
        }
        try {
            const idOrder = await newOrder(orderInfo)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Gracias por tu compra, orden número ${idOrder}`,
                showConfirmButton: false,
                timer: 1500
            })
            clearCart()
            navigate(`/orderInfo/${idOrder}`)
        }
        catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: `Error al realizar la compra ${error.message}`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const handleOnChange = (evt) => {
        const value = evt.target.value
        const field = evt.target.name
        const newState = { ...buyer }
        newState[field] = value
        setBuyer(newState)
    }

    const resetForm = (evt) => {
        evt.preventDefault
        setBuyer({
            name: "",
            email: "",
            phone: ""
        })
    }
    return (
        <div>
            <h2 className="m-5">Completa el formulario de compra</h2>
            <div className="container-fluid d-flex justify-content-center">
            <form>
                <label htmlFor="name">Ingrese su nombre y apellido</label><br />
                <input
                    type="text"
                    name="name"
                    placeholder="nombre y apellido"
                    value={buyer.name}
                    onChange={handleOnChange}
                /><br />
                <label htmlFor="phone">Ingrese su teléfono</label><br />
                <input
                    type="text"
                    name="phone"
                    placeholder="teléfono"
                    value={buyer.phone}
                    onChange={handleOnChange}
                /><br />
                <label htmlFor="email">Ingrese su email</label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={buyer.email}
                    onChange={handleOnChange}
                /><br />
            </form>
            </div>

            <div className="container-fluid d-flex justify-content-center">
                <Button className="m-5" variant="outline-primary" onClick={resetForm}>Cancelar</Button>
                <Button 
                type ="submit"
                className="m-5" 
                variant="outline-success" 
                disabled= {!(buyer.name !== "" && buyer.phone !== "" && buyer.email !== "")}
                onClick={handleCheckout}>Generar Orden</Button>
            </div>
        </div>
    )
}

export default Checkout