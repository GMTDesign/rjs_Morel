import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, query, where, doc, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAiU4SFtn7027gxPOXYuZRNpapIMLURhWg",
  authDomain: "musicworld-a8856.firebaseapp.com",
  projectId: "musicworld-a8856",
  storageBucket: "musicworld-a8856.appspot.com",
  messagingSenderId: "17794546671",
  appId: "1:17794546671:web:719bdca4421820aa57941a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products")
  const documentsSnapshot = await getDocs(productsRef)
  const documents = documentsSnapshot.docs
  return documents.map((doc) => ({ id: doc.id, ...doc.data() }))
}

const getProductsByCategory = async (categoryId) =>{
  const productsRef = collection(db, "products")
  const queryCategory = query(productsRef, where("category", "==", categoryId))
  const documentsSnapshot = await getDocs(queryCategory)
  const documents = documentsSnapshot.docs
  return documents.map((doc) => ({ id: doc.id, ...doc.data() }))
}

const getProductById = async (id) =>{
  const docRef = doc(db, "products", id)
  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists){
    return { id: docSnapshot.id, ...docSnapshot.data()}
  } else {
    throw new Error("Producto inexistente!!!")
  }
}

const newOrder = async (orderInfo) =>{
  const ordersRef = collection(db, "orders")
  const orderDoc = await addDoc(ordersRef, orderInfo)
  return (orderDoc.id)
}

const getOrder = async (id) =>{
  const orderRef = doc(db, "orders", id)
  const orderSnapshot = await getDoc(orderRef)
  return {...orderSnapshot.data(), id: orderSnapshot.id}
}

export { getProducts, getProductsByCategory, getProductById, newOrder, getOrder }