import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/firebase"

const ItemDetailContainer = () => {
  const { detailId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const requestProduct = async () => {
      const response = await getProductById(detailId)
      setProduct(response)
    }
    requestProduct()
  }, [detailId])

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer