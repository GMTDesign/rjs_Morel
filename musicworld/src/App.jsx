import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting="Bienvenido a MusicWorld!" />} />
        <Route path='/category/:categoryId' element= {<ItemListContainer greeting="Bienvenido a MusicWorld!" />} />
        <Route path='/detail/:detailId' element= {<ItemDetailContainer />}/>
        <Route path='*' element= {<Navigate to='/' />} />
        

      </Routes>

    </BrowserRouter>
  )
}

export default App
