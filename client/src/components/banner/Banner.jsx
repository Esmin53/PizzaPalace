import React from 'react'
import "./Banner.scss"

const Banner = (props) => {

  return (
    <div className="banner_container">
            <div className="banner">
              <div className="left">
                <h2>
                  <span> {props.first}</span>
                  <span> {props.second}</span>
                </h2>
              </div>
              <div className="right">
                <img src={props.img} alt="" />
              </div>
            </div>
          </div>
  )
}

export default Banner