import React from 'react'
import facebookLogo from "../../assets/001-facebook.png";
import twitterLogo from "../../assets/003-twitter.png";
import instagramLogo from "../../assets/004-instagram.png";
import logo from "../../assets/Foodieland..png";
import "./footer.css";

function Footer() {
  return (
    <div className='footer'>

        <div className='top'>
        <div>
        <img width={75}  src={logo} />
        <p>Lorem ipsum dolor sit amet, consectetuipiscing elit,</p>
        </div>
         
        <div className='footerNav'>
         <p>Recipes</p>
         <p>Blog</p>
         <p>Contact</p>
         <p>About us</p>
         </div> 
         </div>




         <hr  />

         <div className='bottom'>

         <p>Powered by Webflow</p>

         <div className='footerlinks'>
          <img src={facebookLogo} />
          <img src={twitterLogo} />
          <img src={instagramLogo} />
         </div>
    </div>
  </div>
  )
}

export default Footer;
