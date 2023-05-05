import React, { useEffect, useState } from 'react'
import Slider from 'infinite-react-carousel';
import FeaturedCard from '../featuredCard/FeaturedCard';
import "./Slide.scss"


const Slide = ({children}) => {
  const [width, setWidth] = useState(null)
  const [slides, setSlides] = useState(3)

  const handleResize = () => {
    if(window.innerWidth > 1000 && slides !== 3) {
      setSlides(3)
    } 
    if(window.innerWidth > 600 && window.innerWidth < 1000) {
      setSlides(2)
    }
    if(window.innerWidth < 600 && slides) {
      setSlides(1)
    }
  }


  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <div className="slide">
        <div className="slide-container">
        <Slider slidesToShow={slides} arrowsScroll={1} className="slider">
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide