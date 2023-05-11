import React from 'react'
import './App.css'
import Contact from './Page/Contact'
import Home from './Page/Home'
import Footer from './Component/Home/Footer/Footer'
import Shop from './Page/Shop'
import Element from './Page/Element'
import Cart from './Page/Cart'
import Checkout from "./Page/Checkout"
import Order_comblited from './Page/Order_comblited'
import Navbar from './Component/Home/Navbar/Navbar'
import {  Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
     
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="*" element={<Home />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/element" element={<Element />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/checkout" element={<Checkout />} />
          <Route  path="/shop" element={<Shop />} />
          <Route  path="/order_comblited" element={<Order_comblited />} />
        </Routes>
        <div className="Footer">
          <Footer />
        </div>
        <div>

        </div>
     
    </div>
  )
}

export default App
