import React from 'react';
import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import Header from "../components/header/Header";
import '../App.css';
import jonhsmith from "../assets/johnsmith.jpg";
import "./RecipeDetails.css";
import Hero from '../components/hero/Hero';
import Category from '../components/Category/Category';
import Recipes from "../components/Recipes/Recipe";
import AboutUs from "../components/AboutUs/AboutUs";
import Reviews from "../components/Reviews/Reviews";
import Menu from "../components/Menu/menu";
import Contact from "../components/Contact/Contact";
import Menubar from '../components/Menu/Menubar/Menubar'; 
import stopWatch from "../assets/stopWatch.png";
import forkandKnife from "../assets/forkKitchenKnife.png";
import Footer from "../components/Footer/Footer";
import herodetailPic from "../assets/Mask Group (2).png"
import share from "../assets/share.png";
import printer from "../assets/printer.png";
import fruitSalad from "../assets/image 26 (8).png"
import Beef  from "../assets/image 26 (9).png"
import Friedrice from "../assets/image 26 (10).png"
import cauliflower from "../assets/image 26 (11).png"
import directImg from "../assets/Rectangle 23.png"
import Foodplate from "../assets/01.png";
import BgGreen from "../assets/Mask Group (1).png";
import MeatBalls from "../assets/image 26 (4).png";
import Chickecrice from "../assets/image 26 (6).png";
import Pasta from "../assets/image 26 (7).png";


function RecipeDetails() {
return (
    <div>
      <Header />

       <div className='hero'>

      <div className='heroHeader'> 
        
       <div> 
       <h1>Health Japanese Fried Rice</h1>

       <div className='info'>

         <div className='snippet'>  
         <p><img className='johnsmith' src={jonhsmith} /></p>

         <div>
           <b>John Smith</b>
           <p>15 March 2022</p> 
         </div>
       </div>

       <div className='snippet'>
        <img src={stopWatch} width={30} height={30} />

        <div>
           <h4>PREP TIME</h4>
           <p>15 Minutes</p> 
        </div>
       </div>

       <div className='snippet'>
         <img src={stopWatch} width={30} height={30}  />
         
         <div>
          <h4>COOK TIME</h4>
          <p>15 Minutes</p>  
         </div>
       </div>

       <div className='snippet'>
        <img style={{ alignItems: "center", textAlign: "center"}} src={forkandKnife} width={25} height={32} />
        <p>Chicken</p>
       </div>

       </div>
    

    <div>
    <img className='detailPic' src={herodetailPic} />
    </div>


    </div>


       <div className='heroNutrition'>
        <div className='heroBtn'>

        <div>
       <p>
        <img src={printer}  />
       </p>
       <h6>PRINT</h6>
        </div>

      <div>
      <p>
       <img src={share} />
     </p>
     <h6>SHARE</h6>
     </div>  
     </div>

     <div className='NutriInfo'>
      <h2>Nutrition Information</h2>
     
     <ul>
     <li> Calories</li> 
     <li> Total Fat</li> 
     <li> Protein</li> 
     <li> Carbohydrate</li> 
     <li> Cholesterol</li> 
     </ul>
     


    <p>Lorem ipsum dolor sit amet.</p>
     </div>

    </div>
    </div>  
    </div>
    

     <p className='description'>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ex sunt, tempora, atque 
        quia perferendis quos sed similique est cum aut 
        tenetur! Ullam error velit voluptatem commodi dolorem 
        reprehenderit, consectetur ratione?
        </p>

    
    <div className='Ingredients'>
  
      <div className='firstSection'>
     <h1>Ingredients</h1>

     <h2>For main Dish</h2>

    <h3> <input type="radio"   /> Lorem ipsum dolor amet</h3>
    <h3> <input type="radio"   /> Lorem ipsum dolor amet </h3>
    <h3> <input type="radio"  /> Lorem ipsum dolor amet </h3>
    <h3> <input type="radio"  /> Lorem ipsum dolor amet </h3>
    
  <h2>For the sauce</h2>

<h3><input className='check' width={100} height={20} type="radio" /> Lorem ipsum dolor amet  </h3>
<h3> <input type="radio"   /> Lorem ipsum dolor amet </h3>
<h3> <input type="radio"   /> Lorem ipsum dolor amet </h3>
<h3> <input type="radio"   /> Lorem ipsum dolor amet </h3>

    
      </div>
     
     <div className='secondSection'>
       <h2>Other Recipe</h2>

       <article>
        <img src={MeatBalls} />
       
        <div>
        <h3>Chicken Meatball with Creamy Chees...</h3>
        <p>By Andreas Paula</p>
        </div>
        
       </article>

       <article>
        <img src={Chickecrice} />
       
        <div>
        <h3>The Creamiest Creamy Chicken an...</h3>
        <p>By Andreas Paula</p>
        </div>
        
       </article>

       <article>
        <img src={Pasta} />
       
        <div>
        <h3>The Best Easy One Pot Chicken and Rice</h3>
        <p>By Andreas Paula</p>
        </div>
        
       </article>

       <div className='oddCard'>
         <img className='backcover' src={BgGreen} />     
         <img className='frontpic' src={Foodplate} />
          <h3 className='title'>Don't forget to eat healthy food</h3> 
         <p className='link'>www.foodieland.com</p>
         </div>

    
     </div>
     </div>



        <div className='directions'>
         <h1>Directions</h1>

        <h2> <input width={100} height={20} style={{ border: "3px solid red", width: "13px" }} className='check' type='radio' /> 1. Lorem ipsum dolor sit amet </h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p>
         <img className='directionImg' src={directImg} />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p>
         <hr  />
         

         <h2> <input className='check' type='radio' checked="false" /> 2. Lorem ipsum dolor sit amet </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p> 

         <hr  />

         <h2> <input className='check' type='radio' checked="false" /> 3. Lorem ipsum dolor sit amet </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p> 

         <hr  />
  </div>

           
           <Contact />
         
          <div className='Extras'>

            <h1>You may like these more.</h1>

            <div className='recipe'>
            <Menubar img={fruitSalad} title={"Mixed Tropical Fruit Salad with SuperFood Bossts"} smText={"Healthy"} />
            <Menubar img={Beef} title={"Big and Juicy Wagyu Beef Cheeseburger"} smText={"Western"} />
            <Menubar img={Friedrice} title={"Healthy Japanese Fried Rice With Asparagus"} smText={"Healthy"} />
            <Menubar img={cauliflower} title={"Cauliflower Walnut Vegetarian Taco Meat"} smText={"Eastern"} />
            </div>
            
          </div>
         
          
          <Footer  />

      
       
    <div>
    
    </div>  
    
    </div>

    
  )
}

export default RecipeDetails;
