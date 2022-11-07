import React from 'react'
import Worldwide from '../Home/Worldwide/Worldwide'
import Cart_product from './Cart_product/Cart_product'
import Coupon_product from './Coupon_product/Coupon_product'
import Header from './Header/Header'

const Cart = () => {
  return (
    <>
      <Header />
      <Cart_product />
      <Worldwide />
    </>
  )
}

export default Cart
