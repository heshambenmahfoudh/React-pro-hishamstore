import React from 'react'
import './Footer_company.css'

const Footer_company = () => {
  return (
    <div className="app_linlk">
      {/* <div className="app_company_link"> */}
      <article>
        <h2>Help</h2>

        <ul className="app_link_one">
          <li>
            <a href="#"> Contact us</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Shipping</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#"> FAQ</a>
          </li>
        </ul>
      </article>
      <article>
        <h2>About</h2>
        <ul className="app_link_two">
          <li>
            <a href="#">Aobut us</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#"> FAQ</a>
          </li>
        </ul>
      </article>
      <article>
        <h2>Shop</h2>
        <ul className="app_link_three">
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Gift</a>
          </li>
          <li>
            <a href="#">Student Discount</a>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default Footer_company
