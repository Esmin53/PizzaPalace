import React from 'react'
import "./Pizza.scss"
import {AiOutlineClockCircle} from "react-icons/ai"
import {GiFullPizza, GiPizzaSlice} from "react-icons/gi"
import {FaShoppingBasket} from "react-icons/fa"

const Pizza = () => {
  return (
    <div className='pizza_page'>
        <div className="container">
            <div className="left">
                <img src="/img/pizza5.png" alt="" />
            </div>
            <div className="right">
                <h1>Neapolitana</h1>
                <hr />
                <p>
                    <span>$ 15.00</span>
                    <span><AiOutlineClockCircle />  15 min</span>
                </p>
                <p className='desc'>Neapolitan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam ab labore, fugit beatae sapiente.</p>
                <h2>Choose the size</h2>
                <div className="size">
                    <span className='small'> 
                    <span>Small</span>
                    <GiFullPizza /> </span>
                    <span className='medium'> 
                    <span>Medium</span>
                    <GiFullPizza /> </span>
                    <span className='large'>
                        <span>Large</span>
                        <GiFullPizza /> </span>
                </div>
                <h2>Toppings</h2>
                <ul className="toppings">
                    <li><GiPizzaSlice /> Tomato sauce</li>
                    <li><GiPizzaSlice /> Cheese</li>
                    <li><GiPizzaSlice /> Mushrooms</li>
                    <li><GiPizzaSlice /> Pepperoni</li>
                </ul>
                <div className="button">
                    <input type='text' value={1} />
                    <button> Add to cart </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pizza