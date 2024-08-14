import React from 'react';
import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import Header from "./components/header/Header";
import './App.css';
import Hero from './components/hero/Hero';
import Category from './components/Category/Category';
import Recipes from "./components/Recipes";
import AboutUs from "./components/AboutUs";
import Reviews from "./components/Reviews";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Menubar from '../components/Menu/Menubar/Menubar'; 


function RecipeDetails() {
return (
    <div>
      <Header />

       <div className='hero'>

        <div> 
       <h1>Health Japanese Fried Rice</h1>

       <div>

         <div>  
         <p><img src={} /></p>

         <div>
           <b>John Smith</b>
           <p>15 March 2022</p> 
         </div>
       </div>

       <div>
        <img  />

        <div>
           <h4>PREP TIME</h4>
           <p>15 Minutes</p> 
        </div>
       </div>

       <div>
         <img  />
         
         <div>
          <h4>COOK TIME</h4>
          <p>15 Minutes</p>  
         </div>
       </div>

       <div>
        <img />
        <p>Chicken</p>
       </div>

       </div>
      </div>
    


       <div>
        <div>
       <p>
        <img  />
       </p>
       <p>PRINT</p>
        </div>

      <div>
      <p>
       <img  />
     </p>
     <p>SHARE</p>
     </div>  

     <div>
      <h2>Nutrition Information</h2>
     
     <p> Calories</p> 
     <p> Total Fat</p> 
     <p> Protein</p> 
     <p> Carbohydrate</p> 
     <p> Cholesterol</p> 
    


    <p>Lorem ipsum dolor sit amet.</p>
     </div>

    </div>
    
    
      </div>
    

     <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ex sunt, tempora, atque 
        quia perferendis quos sed similique est cum aut 
        tenetur! Ullam error velit voluptatem commodi dolorem 
        reprehenderit, consectetur ratione?
        </p>

    
    <div className='Ingredients'>
  
      <div className='firstSection'>
     <h1>Ingredients</h1>

     <h2>For main Dish</h2>

     <p><input type="checkbox" checked = "true"  /></p>
    <p> <input type="checkbox" checked = "false"  /></p>
    <p> <input type="checkbox" checked = "false"  /></p>
    <p> <input type="checkbox" checked = "false"  /></p>
    
  <h2>For the sauce</h2>

<p><input type="checkbox" checked = "true"  /></p>
<p> <input type="checkbox" checked = "false"  /></p>
<p> <input type="checkbox" checked = "false"  /></p>
<p> <input type="checkbox" checked = "false"  /></p>

    
      </div>
     
     <div className='secondSection'>
       <h2>Other Recipe</h2>

       <article>
        <img />
       
        <div>
        <h3>Chicken Meatball with Creamy Chees...</h3>
        <p>By Andreas Paula</p>
        </div>
        
       </article>

       <article>
        <img />
       
        <div>
        <h3>The Creamiest Creamy Chicken an...</h3>
        <p>By Andreas Paula</p>
        </div>
        
       </article>

       <article>
        <img />
       
        <div>
        <h3>The Best Easy One Pot Chicken and Rice</h3>
        <p>By Andreas Paula</p>
        </div>
        
       </article>

       <img  />
     </div>
     



        <div className='directions'>
         <h1>Directions</h1>

        <h2> <input type='checkbox' checked="false" /> 1. Lorem ipsum dolor sit amet </h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p>
         <img />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p>
         <hr  />
         

         <h2> <input type='checkbox' checked="false" /> 2. Lorem ipsum dolor sit amet </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p> 

         <hr  />

         <h2> <input type='checkbox' checked="false" /> 3. Lorem ipsum dolor sit amet </h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat itaque est at distinctio,<br /> minima recusandae porro soluta explicabo qui illo laborum quas dolorem cupiditate aliquam rem omnis dolorum eius? Laboriosam eligendi corporis a cum!</p> 

         <hr  />

           
           <Contact />
         
          <div className='Extras'>

            <h1>You may like these more.</h1>

            <div>
            <Menubar  />
            <Menubar  />
            <Menubar  />
            <Menubar  />
            </div>
            
          </div>
         
          
          <Footer  />

        </div>


    <div>
    
    </div>  
    
    </div>

    </div>
  )
}

export default RecipeDetails;
