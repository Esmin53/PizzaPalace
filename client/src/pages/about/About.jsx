import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="about_banner">
          <div className="top">
            <h2>Love at first slice!</h2>
            <p>A combination of fresh ingredients, profesional chefs and 24 years of tradition resulting in <span>best pizza in town</span></p>
            <img src="https://images.unsplash.com/photo-1564936281403-f92f66f89ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="" />
          </div>
          <div className="bottom">
              <div>
                <h2>Fresh ingredients</h2>
                <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div>
                <h2>Proffesional Staff</h2>
                <img src="https://images.unsplash.com/photo-1555981437-e1663bc872bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div>
                <h2>24 years of expirience</h2>
                <img src="https://images.unsplash.com/photo-1607018244619-dab6235709dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
              </div>
              <div>
                <h2>Fast delivery</h2>
                <img src="https://images.unsplash.com/photo-1621510564330-c87695020b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80" alt="" />
              </div>
          </div>
        </div>
        <div className="info">
          <span>Since 1997</span>
          <h1>Fresh, natural & tasty</h1>
          <p>Here at Pizza Palace we are proud to use only fresh and natural ingredients. That way we are not only we are getting freshest,
             healtiest and tastiest toppings, but also that we are perserving nature and supporting local farmers and economy.
             Weather it is by using localy traced vegetables or making our dough from traditional Italian recipe using simple ingredients like
             flour, water and yeast, we made it our mission to bring to your table only highest quality pizza you could get.                                                                                                                                                              </p>
        </div>
        <hr />
        <div className="collage_container">
        <div className="collage">
          <div className="first">
            <img src="https://images.unsplash.com/photo-1542587222-f9172e5eba29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          </div>
          <div className="second">
            <img src="https://images.unsplash.com/photo-1572295444831-513e140957e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
          </div>
          <div className="third">
            <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
        </div>
        <div className="info">
          <h1>Making the best pizza for 27 years</h1>
          <p>Here at Pizza Palace we are proud to use only fresh and natural ingredients. That way we are not only we are getting freshest,
             healtiest and tastiest toppings, but also that we are perserving nature and supporting local farmers and economy.
             Weather it is by using localy traced vegetables or making our dough from traditional Italian recipe using simple ingredients like
             flour, water and yeast, we made it our mission to bring to your table only highest quality pizza you could get. </p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default About