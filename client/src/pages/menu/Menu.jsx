import React from 'react'
import "./Menu.scss"
import Banner from '../../components/banner/Banner'
import {AiFillCaretDown, AiOutlineSearch} from "react-icons/ai"
import Pizza from '../../components/pizzaCard/Pizza'

const Menu = () => {
  return (
    <div className='menu'>
        <Banner first="You can’t have enough of a good thing." second="Pizza should be that thing." img="/img/bannerimg2.png" />
        <div className="container">
            <div className="search">
                <div className="left">
                <h2>Love at first slice</h2>

                <div className="searchbar">
                    <span><AiOutlineSearch /></span>
                    <input type="text" />
                    <button>Search</button>
                    </div>
                </div>
                <div className="sort">
                    <h2>Sort By: </h2>
                    <span className='sortby'><span>Price</span> <AiFillCaretDown /></span>
                </div>
            </div>
            <hr />
            <h1>It's all about the crust!</h1>
            <div className='products'>
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
            </div>
            <div className="buttons">
                <span>1</span>
                <span className='active_button'>2</span>
                <span>3</span>
            </div>
        </div>
    </div>
  )
}

export default Menu