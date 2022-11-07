import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header_ele">
      <div className="container">
        <div className="header_content">
          <h2>Elements</h2>
          <li>
            <NavLink to="/">Home</NavLink> / <span>Elements</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Header
