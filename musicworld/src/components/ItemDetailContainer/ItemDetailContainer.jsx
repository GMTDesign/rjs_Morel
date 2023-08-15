import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/firebase"
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {
  const { detailId } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const requestProduct = async () => {
      const response = await getProductById(detailId)
      setProduct(response)
      setLoading(false)
    }
    requestProduct()
  }, [detailId])

  return (
    <>
      {
        loading
          ?
          <Loader />
          :
          <ItemDetail product={product} />
      }
    </>
  )
}

export default ItemDetailContainer