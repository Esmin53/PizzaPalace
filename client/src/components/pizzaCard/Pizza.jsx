import React from 'react'
import "./Pizza.scss"
import {AiOutlineClockCircle, AiOutlineSearch} from "react-icons/ai"
import {GiSlicedMushroom, GiMeat, GiSaucepan, GiCheeseWedge} from "react-icons/gi"
import {FaShoppingBasket} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Pizza = () => {
  return (
    <div className='pizza'>
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <div className="overlay">
            <AiOutlineSearch />
        </div>
        <div className="info">
            <div className="top">
                <Link to="/pizza/1" className='link'>
                    <span className='pizza_name'>Siciliana</span>
                </Link>
                <div>
                    <span>$ 15.00</span>
                    <span> <AiOutlineClockCircle /> 15 minutes</span>
                </div>
            </div>
            <div className="desc">
             <span>
                <GiCheeseWedge />
                <GiSlicedMushroom />
                <GiMeat />
                <GiSaucepan />:
            </span>
                <p>Tomato sauce</p>
                <p>Cheese</p>
                <p>Mushrooms</p>
                <p>Mozzarela</p>
                <p>Pepperoni</p>
                <p>Cheese</p>
                <p>Cheese</p>
            </div>
            
            <button> <FaShoppingBasket /> </button>
        </div>
    </div>
  )
}

export default Pizza