import React from 'react';
import './header.css';
import logo from "../../assets/Foodieland..png";
import facebookLogo from "../../assets/001-facebook.png";
import twitterLogo from "../../assets/003-twitter.png";
import instagramLogo from "../../assets/004-instagram.png";




function Header() {
  
    return (
        <>
        <div className="header">
           <img src={logo} width={90} height={20} alt= "recipeLogo" />


           <div className='links'>
             <ul className='navLinks'>
                <li>Home</li>
                <li>Recipes</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About us</li>
             </ul>
           </div>

            <div className='socialLinks'>
             <img src={facebookLogo} alt='facebooklogo' />
             <img src={twitterLogo} alt='twitterlogo' />
             <img src={instagramLogo} alt='instagramlogo' />
            </div>

        </div>
        </>
      )
    }
    
export default Header;