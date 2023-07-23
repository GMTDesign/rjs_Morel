import { useState, useEffect } from "react"
import getProducts from "../../services/musicData"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
  const { greeting } = props
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  const requestProducts = async () => {
    const response = await getProducts()
    categoryId
      ?
      setProducts(response.filter(items => items.category === categoryId))
      :
      setProducts(response)

      setLoading(false)
  }

  useEffect(() => {
    requestProducts()
  }, [categoryId])

  return (
    <>
      {
        loading
          ?
          <h1>{greeting}</h1>
          :
          <ItemList products={products} />
      }
    </>
  )
}

export default ItemListContainer