import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Explore from './components/Explore'
import Cart from './components/Cart'
import Account from './components/Account'
import Fav from './components/Fav'
import Navbar from './components/Navbar'
import Description from './components/Description'
import Products from './components/Products'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Fav/>} />
        <Route path="/desc" element={<Description/>} />
        <Route path='/account' element={<Account/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      
    </>
  )
}

export default App
