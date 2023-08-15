import { Link } from "react-router-dom"
import CartContainer from "../CartContainer/CartContainer"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  const { totalCount } = useCartContext()
  return (
    <>
      <Link to="/cart">
        <img src="/carrito.png" className="cart" alt="cart" />
        {totalCount() !== 0 && <span>{totalCount()}</span>}
      </Link>
    </>
  )
}

export default CartWidget