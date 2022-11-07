import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { accordiom } from '../Data/dummy'
import './Coupon_code.css'

const Coupon_code = () => {
  const [click, setClick] = React.useState()

  return (
    <div className="coupon_code">
      <h2>Coupon Code</h2>
      <div className="enter_code">
        <p>Enter your coupon code if you have one</p>
        <div className="inter_code_form">
          <input type="text" placeholder="Coupon Code" />
          <input type="submit" value="APPLY" />
        </div>
      </div>
      <h2>Your Order</h2>
      <div className="yo_order">
        <ul className="prodct">
          <li>
            <small>Product</small>
            <small>Total</small>
          </li>
          <li>
            <small>Top Up T-Shirt x 1 </small>
            <small> $250.00</small>
          </li>
          <li>
            <small> Polo Shirt x 1</small>
            <small> $100.00</small>
          </li>
          <li>
            <small>Cart Subtotal</small>
            <small> $350.00</small>
          </li>
          <li>
            <small>Order Total</small>
            <small> $350.00</small>
          </li>
        </ul>
        <div className="pro_acco">
          {accordiom.map(({ h2, p }, index) => (
            <div
              key={index}
              onClick={() =>
                click === index ? setClick(!index) : setClick(index)
              }
            >
              <h2>{h2}</h2>
              {click === index && <p>{p}</p>}
            </div>
          ))}
        </div>
        <div className="place_order">
          <NavLink to="/order_comblited">
            <input type="submit" value="place order" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Coupon_code
