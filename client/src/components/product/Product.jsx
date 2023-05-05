import React from 'react'
import "./Product.scss"

const Product = () => {
  return (
    <div className='product'>
        <img src="/img/pizza3.png" alt="" />
        <div className="info">
            <h2>Pepperoni</h2>
            <span>$ 12.00</span>
        </div>
        <div className="ingredients">
            <p>Ingredients: cheese, tomato sauce, mozarella, pepperoni, mushrooms</p>
        </div>

    </div>
  )
}

export default Product