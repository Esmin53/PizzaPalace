import React from 'react'
import "./Home.scss"
import {italianPizza, americanPizza, menuPreview } from '../../data'
import Slide from "../../components/slide/Slide"
import FeaturedCard from '../../components/featuredCard/FeaturedCard';
import WhyUs from './whyus/WhyUs';
import Banner from '../../components/banner/Banner';
import {MdDeliveryDining, MdFastfood} from "react-icons/md"
import {IoIosHome} from "react-icons/io"

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
          
          <Banner first={"Bringing people together,"} second="One slice at the time" img="/img/pizzaboxes.png"  />

          <div className="about">
                <h2>Why Us?</h2>
            <div className="top">
              <WhyUs />
            </div>

          </div>
          <hr />

          <div className="second_menu_preview">
            <div className="left">
            <img src="/img/italiana.png"  alt="" />
              <img src="/img/pizza5.png" className='second' alt="" />

            </div>
                  <div className="right">
                      <h3>Try our original neapolitana</h3>
                      <h2>Made using traditional <span>Italian</span> recipe.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptates incidunt nobis nihil minus libero sint quisquam vero assumenda excepturi maxime hic, debitis veritatis cumque nam perspiciatis placeat explicabo adipisci!</p>
                  </div>
              </div>

          <div className="menu_preview">
              <div className="top">
                <h2>Our Menu Pricing</h2>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellat ratione doloremque, dolores deleniti aut.</p>
              </div>
              <div className="bottom">
                {menuPreview?.map((item, index) => {
                  return <div className="item" key={index}>
                  <img src={item.img} alt="" />
                  <div className="info">
                    <div className='info_top'>
                        <p className="title">{item.title}</p>
                        <span className="dots"></span>
                        <p className="price">$ {item.price}</p>
                    </div>
                    <div className="bottom">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                })}

                <button>Order now</button>
              </div>


          </div>

          <div className="featured">
              <h1>Find your perfect pizza now</h1>
              <h2>American Pizza</h2>
              
                <Slide>
                    {americanPizza.map((item) => {
                      return <FeaturedCard item={item} key={item.id}/>
                    })}
                </Slide>

                <h2>Italian Pizza</h2>

                  <Slide>
                    {italianPizza?.map((item) => {
                      return <FeaturedCard item={item} key={item.id}/>
                    })}
                  </Slide>

                    <button className="featured_button">See Menu</button>
          </div>
          <div className="action">
            <div className="left">
              <img src="/img/action.png" alt="" />
            </div>
            <div className="right">
              <h2>Great Offer</h2>
              <h1>Buy 1 Get 1 Free</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s​</p>
              <button>Order Now</button>
            </div>
          </div>

          <div className="collage">
            <h2>Bringing a piece of Italy to your table since 1997</h2>
            <img className='second' src="https://images.unsplash.com/photo-1516697073-419b2bd079db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
            <img className='first' src="https://images.unsplash.com/photo-1601924567521-c18b82b81b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
            <img className='third' src="https://images.unsplash.com/photo-1546724867-3b2dabdbc5b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='fourth' src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
            <img className='fifth' src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home