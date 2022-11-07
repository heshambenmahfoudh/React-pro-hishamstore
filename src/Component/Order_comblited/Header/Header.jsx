import React from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="order_com">
      <div className="container">
        <div className="app_order_com">
          <BsCartCheck />
          <h1>Thank you!</h1>
          <p>You order was successfuly completed.</p>
          <NavLink to="/shop">
            <button>BACK TO SHOP</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
