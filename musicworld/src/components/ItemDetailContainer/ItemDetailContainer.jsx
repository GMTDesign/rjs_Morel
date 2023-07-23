import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getProducts from "../../services/musicData"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
  const {detailId} =  useParams()
  const [product, setProduct] = useState({})

  const requestProduct = async () =>{
    const response = await getProducts(detailId)
    setProduct(response)
  }
  
  useEffect(()=>{ 
    requestProduct()
  },[])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer