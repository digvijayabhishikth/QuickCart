import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductPage from './Pages/ProductPage/ProductPage'
import Cart from './Pages/Cart/Cart'
import AuthLogin from './Pages/AuthLogin/AuthLogin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductPage />}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='auth/login' element={<AuthLogin/>}></Route>
      </Routes>
    </>
  )
}

export default App
