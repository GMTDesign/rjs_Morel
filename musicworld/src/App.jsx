import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a MusicWorld!" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a MusicWorld!" />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
