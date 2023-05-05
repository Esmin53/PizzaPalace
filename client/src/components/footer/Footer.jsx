import React from 'react'
import "./Footer.scss"
import {BsFacebook, BsInstagram, BsMailbox, BsPinterest} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <ul className="navigation">  
                <h2>Navigation</h2>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Cart</li>
                
            </ul>
            <ul className="socials">
                <h2>Find Us</h2>
                <li>
                    <span><BsFacebook /></span> <span>Pizza Palace</span>
                </li>
                <li>
                    <span> <BsInstagram /> </span> <span>@pizzapalace</span>
                </li>
                <li>
                    <span> <BsPinterest /> </span> <span>PizzaPalace</span>
                </li>
                <li>
                    <span> <BsMailbox /> </span> <span>pizapalace@gmail.com</span>
                </li>
            </ul>
            <ul className="locations">
                <h2>Find Our Restaurants</h2>
                <li><span>2356. Andrew Ryan #225.</span> Rapture 721-1020</li>
                <li><span>1001. F. Fontaine #883.</span> Rapture 426-2632</li>

            </ul>

            <ul className="working">
                <h2>Working Hours</h2>
                <li>MONDAY TO FRIDAY
                    <span> 9:00 - 22:00</span>
                </li>
                <li>SATURDAY - SUNDAY
                    <span> 12:00 : 24:00</span>
                </li>
                <li>
                    PHONE
                    <span> 062 167 211</span>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default Footer