import React from 'react'
import "./WhyUs.scss"
import { info } from '../../../data'

const WhyUs = () => {
  return (
    <div className='whyus'>
        <div className="whyus_top">
            <div className='product' > 
                <img src={info[0].img} alt="" />
                <p>{info[0].desc}</p>
                <h2>{info[0].title}</h2>
            </div>
            <div className='product' > 
                <img src={info[1].img} alt="" />
                <p>{info[1].desc}</p>
                <h2>{info[1].title}</h2>
            </div>
        </div>
        <div className="whyus_bottom">
            <div className='product' > 
                <img src={info[2].img} alt="" />
                <p>{info[2].desc}</p>
                <h2>{info[2].title}</h2>
            </div>
            <div className='product' > 
                <img src={info[3].img} alt="" />
                <p>{info[3].desc}</p>
                <h2>{info[3].title}</h2>
            </div>
        </div>

    </div>
  )
}

export default WhyUs