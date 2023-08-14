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
            buyer: { name: "Gabriela", email: "gabriela@mail", phone: "565656" },
            date: new Date(),
            items: cartItems.map(({ id, name, price }) => ({ id, name, price })),
            total: totalPrice()
        }

        try {
            const idOrder = await newOrder(orderInfo)
            clearCart()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Gracias por tu compra, orden número ${idOrder}`,
                showConfirmButton: false,
                timer: 1500
            })
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
        console.log(evt.target.name, evt.target.value)
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
            <form className="container-fluid col-6">
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
            <div className="d-flex m-5">
            <Button className="m-5" variant="primary" onClick={resetForm}>Cancelar</Button>
            <Button className="m-5" variant="primary" onClick={handleCheckout}>Confirmar compra</Button>

            </div>
        </div>
    )
}

export default Checkout