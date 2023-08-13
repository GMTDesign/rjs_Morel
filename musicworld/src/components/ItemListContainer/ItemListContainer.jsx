import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader"
import { getProducts, getProductsByCategory } from "../../services/firebase"


const ItemListContainer = (props) => {
  const { greeting } = props
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()


  useEffect(() => {
    const requestProducts = async () => {
      setLoading(true)
      let response = categoryId
        ? await getProductsByCategory(categoryId)
        : await getProducts()
      setProducts(response)
      setLoading(false)
    }
    requestProducts()
  }, [categoryId])

  return (
    <>
      <h1 className="m-5">{greeting}</h1>
      {
        loading
          ?
          <Loader />
          :
          <ItemList products={products} />
      }
    </>
  )
}

export default ItemListContainer