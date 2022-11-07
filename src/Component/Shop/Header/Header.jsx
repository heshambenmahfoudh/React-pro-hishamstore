import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../../Home/Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (
    <div className="header_shop">
      <div className="container">
        <div className="header_content">
          <h2>Shop</h2>
          <li>
            <NavLink to="/">Home</NavLink> / <span>Shop</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Header
