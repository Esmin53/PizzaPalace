import React from 'react'
import "./Cart.scss"

const Cart = () => {
  return (
    <div className='cart'>
        <div className="container">
            <div className="left">
                <div className="ordered">
                    <div className="top">
                        <p>Product</p>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Size</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    <div className="bottom">
                        <span>
                            <img src="/img/pizza5.png" alt="" />
                        </span>
                        <p>Naepolitana</p>
                        <p>$ 12.00</p>
                        <p>2</p>
                        <p>Medium</p>
                        <p>$ 24.00</p>
                        <span>
                            <img src="/img/pizza3.png" alt="" />
                        </span>
                        <p>New York</p>
                        <p>$ 14.00</p>
                        <p>1</p>
                        <p>Large</p>
                        <p>$ 14.00</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Subtotal <span>$ 36.00</span></h2>
                <h2>Discount <span>$ 00.00</span></h2>
                <h2>Total <span>$ 36.00</span></h2>
                <button>Checkout Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cart