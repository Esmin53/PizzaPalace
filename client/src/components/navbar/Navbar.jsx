import React from 'react'
import "./Navbar.scss"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaShoppingBasket} from "react-icons/fa"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <span className="logo">
                PizzaPalace
            </span>
            <ul className="navigation">
                <Link to="/" className='link'>
                    <li>Home</li>
                </Link>
                <Link to="/menu" className='link'>
                    <li>Menu</li>
                </Link>
                <Link to="/about" className='link'>
                    <li>About Us</li>
                </Link>
                <Link to="/cart" className='link'>
                    <li>
                        Checkout
                    </li>
                </Link>
            </ul>
            <span className="mobile">
                <GiHamburgerMenu />
            </span>
        </div>
    </div>
  )
}

export default Navbar