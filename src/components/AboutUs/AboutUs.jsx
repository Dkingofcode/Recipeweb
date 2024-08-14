import React from 'react';
import "./AboutUs.css";
import chef from "../../assets/portrait-happy-male-chef.png"
import tomato from "../../assets/image 27.png"
import onion from "../../assets/image 28.png"
import vegetable from "../../assets/image2.png";
import meat from "../../assets/image21.png";


function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='AboutInfo'>
        <h1>Everyone can be a <br  /> chef in their own kitchen</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis <br />ipsum voluptate tempora earum. Nam suscipit quia rem minus asperiores! Iure!</p>
   
      <p className='AboutBtn'>
        Learn More
      </p>
    </div>

    <div className='AboutImg'>
         <div className='BgPoster'>
        <img src={chef} alt='image of chef' />
         </div>
        <img className='tomato' src={tomato} alt='image of tomato' />
        <img className='onion' src={onion}  alt='image of onion' />
        <img className='vegetable' src={vegetable} alt='image of vegetable' />
        <img className='meat' src={meat} alt='image of meat' />

    </div>
  </div>
  )
}

export default AboutUs;
