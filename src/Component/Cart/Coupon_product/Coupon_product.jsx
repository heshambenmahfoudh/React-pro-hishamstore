import React from 'react'
import './Coupon_product.css'

const Coupon_product = () => {
  return (
    <div className="coupon_pro">
      <div className="copun_update_cart">
        <div className="coup_upd_sub">
          <input type="submit" value="Update Cart " />
          <input type="submit" value="Continue Shopping " />
        </div>
        <div className="coup_upd_form">
          <h2>Coupon</h2>
          <p>Enter your coupon code if you have one</p>
          <div>
            <input type="text" placeholder="Coupon Code" />
            <input type="submit" value="apply  coupon " />
          </div>
        </div>
      </div>
      <div className="copun_total_cart">
        <h2>CART TOTALS</h2>
        <ul>
          <li>
            <small>Subtotal</small>
            <small>$230.00</small>
          </li>

          <li>
            <small>Total</small>
            <small>$230.00</small>
          </li>
        </ul>
        <input type="submit" name="" value="Proceed To Checkout" />
      </div>
    </div>
  )
}

export default Coupon_product
