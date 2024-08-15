import React, { useState } from 'react';
import Menubar from "./Menubar/Menubar"
import "./menu.css";
import fruitSalad from "../../assets/image 26 (8).png"
import Beef  from "../../assets/image 26 (9).png"
import Friedrice from "../../assets/image 26 (10).png"
import cauliflower from "../../assets/image 26 (11).png"
import chickenSalad from "../../assets/image 26 (12).png"
import Sandwiches  from "../../assets/image 26 (13).png"
import Lettuce  from "../../assets/image 26 (14).png"
import Ramen  from "../../assets/image 26 (15).png"


function menu() {
  const [showDetails, setShowDetails] = useState(false);
  
  const handleClick = () => {
    setShowDetails(true);

  }


  return (
    <div className='menu'>
    
      <div className='header'>
      <h1>Try this delicious recipe<br /> to make your day</h1>  
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid a quam fugiat hic dolorum animi esse. Maiores sed nulla ipsum?
        </p> 
      </div>
      
    
      <div className='menuBlock'>
        <Menubar onClick={handleClick} img={fruitSalad} title={"Mixed Tropical Fruit Salad with SuperFood Bossts"} smText={"Healthy"} />
        <Menubar onClick={handleClick} img={Beef} title={"Big and Juicy Wagyu Beef Cheeseburger"} smText={"Western"} />
        <Menubar onClick={handleClick} img={Friedrice} title={"Healthy Japanese Fried Rice With Asparagus"} smText={"Healthy"} />
        <Menubar onClick={handleClick} img={cauliflower} title={"Cauliflower Walnut Vegetarian Taco Meat"} smText={"Eastern"} />
        <Menubar onClick={handleClick} img={chickenSalad} title={"Rainbow Chicken Salad with Almond Honey Mustard Dressing"} smText={"Healthy"} />
        <Menubar onClick={handleClick} img={Sandwiches} title={"Barbeque Spicy Sandwiches with Chips"} smText={"Snack"} />
        <Menubar onClick={handleClick} img={Lettuce} title={"Firecarcker Vegan Lettuce Wraps"} smText={"Seafood"} />
        <Menubar onClick={handleClick} img={Ramen} title={"Chicken Ramen Soup with Mushroom"} smText={"Japanese"} />
      </div>
    </div>

  )
}

export default menu;
