import React from 'react';
import HeroImg from "../../assets/HeroPic.png";
import thumbsup from "../../assets/Thumbsup.png";
import scrollImg from "../../assets/Oldpaperscroll.png";
import stopWatch from "../../assets/stopwatch.png";
import forkandKnife from "../../assets/forkKitchenKnife.png";
import jonhsmith from "../../assets/johnsmith.jpg";
import "./hero.css";




function Hero() {
  return (
    <div className='hero'>
       <div className='firstbar'></div>

     <div className='groupedLogo'>
         <img src={thumbsup}  />
         </div>


         <div className='heroInfo'>
           <div className='heroInfo-highlight'>
            <img src={scrollImg} width={30} height={30} />
            <p>Hot Recipes</p>
            </div> 

            <h1>Spicy delicious<br /> chicken wings</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Officia aliquid  sint earum possimus officiis,  <br />sequuntur blanditiis.
            </p>
            
            <div className='heroInfo-bottomtext'>
             <div>
             <img src={stopWatch} width={35} height={35} alt='stopwatch image' />
             <p>30 Minutes</p>
             </div>

             <div>
             <img src={forkandKnife} width={35} height={35} alt='fork and knife image' />
             <p>Chicken</p>
             </div>
             
            </div>

           <div className='heroInfo-footer'>
            <div className='heroInfo-footerInfo'>
             <img src={jonhsmith} width={75} height={75} />
             <div> 
             <h4>John Smith</h4>
             <p>15 March 2022</p>
             </div>
            </div>

            <div className='heroInfo-footerBtn'>
              <p>View Recipes</p>

              <div>
                <img  />
              </div>

            </div>

            </div>        


         </div>

         <div className='heroImg'>
         <img src={HeroImg}  />
         </div>

         <div className='lastbar'></div>
       </div>
  )
}

export default Hero;
