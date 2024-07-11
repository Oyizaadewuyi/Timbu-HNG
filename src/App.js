import 'remixicon/fonts/remixicon.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Shop from './components/ShopPage/Shop';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
         <Route path='home' element={<Home />} />
         <Route path='shop' element={<Shop />} />
        {/* <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} /> */}
      </Routes>
         <Footer />  
    </BrowserRouter>
  )
}

export default App