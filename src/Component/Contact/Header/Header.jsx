import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header_con">
      <div className="container">
        <div className="header_content">
          <h2>Contact</h2>
          <li>
            <NavLink to="/">Home</NavLink> / <span>Contact</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Header
