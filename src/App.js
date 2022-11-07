import React from 'react'
import './App.css'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import Footer from './Component/Home/Footer/Footer'
import Shop from './Component/Shop/Shop'
import Element from './Component/Element/Element'
import Cart from './Component/Cart/Cart'
import Checkout from './Component/Checkout/Checkout'
import Order_comblited from './Component/Order_comblited/Order_comblited'
import Navbar from './Component/Home/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/element" element={<Element />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/order_comblited" element={<Order_comblited />} />
          <Route exact path="/element" element={<Element />} />
        </Routes>
        <div className="Footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
