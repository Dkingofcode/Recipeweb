import React from 'react';
import Salad from "../../assets/salad.png";
import Photo from "../../assets/Photo.png";
import Vege from "../../assets/Photo.png";
import "./contact.css";


function Contact() {
  return (
    <div className='contact'>
      <h1>Deliciousness to your inbox</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br  /> elit. Molestias, dolorem?</p>
        
        
      <form className='form'>
      <input type='text' name='email' placeholder='Your email address...' />
       <p className='subscribe'>Subscribe</p>
      </form>
       
      <img className='salad' src={Salad} alt='salad photo'  />
      <img className='vegetable' src={Photo} alt='vegetable photo' />

    </div>
  )
}

export default Contact;
