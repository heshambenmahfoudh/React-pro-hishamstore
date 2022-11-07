import React from 'react'
import './Nvabar.css'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsCart2, BsPerson } from 'react-icons/bs'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [open_menu, setOpen_menu] = React.useState(false)
  const [childone, setChildone] = React.useState(false)
  const [childtwo, setChildtwo] = React.useState(false)
  const [change, setChange] = React.useState(false)
  const mobile = window.innerWidth > 991 ? true : false

  React.useEffect(() => {
    const change_nav = () => {
      window.scrollY > 10 ? setChange(true) : setChange(false)
    }
    window.addEventListener('scroll', change_nav)
    console.log(window.scrollY)
  }, [])

  const closeMenu = (e) => {
    e.path[1].tagName !== 'SPAN' && setOpen_menu(false)
  }
  document.body.addEventListener('click', closeMenu)

  return (
    <div className={change && mobile === true ? 'navbar  active' : 'navbar'}>
      <div className="container">
        <div className="app_navbar">
          <div className="logo">
            <Link to="/">
              <h2>HishamStore</h2>
            </Link>
          </div>
          <span className="open_links_menu" onClick={() => setOpen_menu(true)}>
            <AiOutlineMenu />
          </span>

          <ul className="links_navigation">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>

              <span style={{ marginLeft: '6px' }} className="shope">
                <FaAngleDown style={{ fontSize: '10px' }} />
              </span>
              <ul className="links_child_one">
                <li>t-shirt</li>
                <li>underware</li>
                <li>clothing</li>
                <li>watches</li>
                <li>shoes</li>
                <li>t-shirt</li>
              </ul>
            </li>
            <li className="page">
              <Link>pages</Link>
              <span style={{ marginLeft: '6px' }}>
                <FaAngleDown style={{ fontSize: '10px' }} />
              </span>
              <ul className="links_child_two">
                <li>
                  <Link to="/element">Element</Link>
                </li>
                <li>
                  <Link>about</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout </Link>
                </li>
                <li>menu_two</li>
                <li>menu_three</li>
              </ul>
            </li>
            <li>
              <Link to="/shop">MEN</Link>
            </li>
            <li>
              <Link to="/shop">WOMEN</Link>
            </li>
          </ul>

          {open_menu && (
            <motion.ul
              className="links_menu"
              initial={{ x: '100%' }}
              whileInView={{ x: '0%' }}
              transition={{ type: 'tween', duration: 0.6 }}
            >
              <span
                className="close_links_menu"
                onClick={() => setOpen_menu(false)}
              >
                {<AiOutlineClose />}
              </span>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="shop">
                <div>
                  <NavLink to="/shop">Shop</NavLink>
                  <span
                    className="icon"
                    onClick={() => setChildone((prev) => !prev)}
                  >
                    {childone === true ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
                {childone && (
                  <ul className="links_child_one">
                    <li>t-shirt</li>
                    <li>underware</li>
                    <li>clothing</li>
                    <li>watches</li>
                    <li>shoes</li>
                    <li>t-shirt</li>
                  </ul>
                )}
              </li>
              <li className="page">
                <div>
                  <Link>pages</Link>
                  <span
                    className="icon"
                    onClick={() => setChildtwo((prev) => !prev)}
                  >
                    {childtwo === true ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
                {childtwo && (
                  <ul className="links_child_two">
                    <li>
                      <NavLink to="/element">element</NavLink>
                    </li>
                    <li>
                      <Link>about</Link>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                      <NavLink to="/checkout">Checkout </NavLink>
                    </li>
                    <li>menu_two</li>
                    <li>menu_three</li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/shop">Men</Link>
              </li>
              <li>
                <Link to="/shop"> Women</Link>
              </li>
            </motion.ul>
          )}
          <div className="nav_icon">
            <span style={{ cursor: 'pointer' }}>
              <BsSearch />
            </span>
            <span>
              <BsPerson />
            </span>
            <span>
              <NavLink to="/cart">
                <BsCart2 style={{ color: '#000' }} />
                <span className="count">20</span>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
