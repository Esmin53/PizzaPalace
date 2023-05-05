import React from 'react'
import "./FeaturedCard.scss"

const FeaturedCard = ({item}) => {
    console.log(item)
  return (
    <div className='featuredcard'>
        <img src={item.img} alt="" className='featuredcard-img'/>
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
    </div>
  )
}

export default FeaturedCard