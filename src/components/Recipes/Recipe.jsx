import React from 'react';
import RecipeCard from "./RecipeCard/RecipeCard";
import firstImg from "../../assets/Firstimage .png";
import secondImg from "../../assets/image 26 (1).png";
import thirdImg from "../../assets/image 26 (2).png";
import fourthImg from "../../assets/image 26 (3).png";
import fifthImg from "../../assets/image 26 (4).png";
import sixthImg from "../../assets/image 26 (5).png";
import seventhImg from "../../assets/image 26 (6).png";
import eightImg from "../../assets/image 26 (7).png";
import "./Recipe.css";
import Foodplate from "../../assets/01.png";
import BgGreen from "../../assets/Mask Group (1).png";

function Recipe() {
  return (
    <div className='recipe'>
      <h1>Simple and tasty recipes</h1>
    
      <p className='Subtext'>Lorem officiis delectus reiciendis provident! Alias reprehenderit suscipit totam, quos eius vero dolor!</p>
       
        <div className='recipeBlock'> 
       <RecipeCard img={firstImg} Bgtext={"Big and Juicy Wagyu Beef Cheeseburger"} smtext={"snack"} /> 
       <RecipeCard img={secondImg} Bgtext={"Big and Juicy Wagyu Beef Cheeseburger"} smtext={"healthy"} /> 
       <RecipeCard img={thirdImg} Bgtext={"Big and Juicy Wagyu Beef Cheeseburger"} smtext={"dessert"} /> 
       <RecipeCard img={fourthImg} Bgtext={"Big and Juicy Wagyu Beef  Cheeseburger"} smtext={"coffee"} /> 
       <RecipeCard img={fifthImg} Bgtext={"Big and Juicy Wagyu Beef Cheeseburger"} smtext={"Sweet"} /> 
       <div className='oddCard'>
         <img className='backcover' src={BgGreen} />     
         <img className='frontpic' src={Foodplate} />
          <h3 className='title'>Don't forget to eat healthy food</h3> 
         <p className='link'>www.foodieland.com</p>
         </div>
       <RecipeCard img={sixthImg} Bgtext={"Big and Juicy Wagyu Beef CHeeseburger"} smtext={"noodles"} /> 
       <RecipeCard img={seventhImg} Bgtext={"Big and Juicy Wagyu Beef CHeeseburger"} smtext={"medicinal"} /> 
       <RecipeCard img={eightImg} Bgtext={"Big and Juicy Wagyu Beef CHeeseburger"}  smtext={"food"}/>
       </div>
    </div>

  )
}

export default Recipe;
