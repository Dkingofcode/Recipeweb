import React from 'react';
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

  return (
    <div className='menu'>
    
      <div className='header'>
      <h1>Try this delicious recipe<br /> to make your day</h1>  
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid a quam fugiat hic dolorum animi esse. Maiores sed nulla ipsum?
        </p> 
      </div>
      
    
      <div className='menuBlock'>
        <Menubar img={fruitSalad} title={"Mixed Tropical Fruit Salad with SuperFood Bossts"} smText={"Healthy"} />
        <Menubar img={Beef} title={"Big and Juicy Wagyu Beef Cheeseburger"} smText={"Western"} />
        <Menubar img={Friedrice} title={"Healthy Japanese Fried Rice With Asparagus"} smText={"Healthy"} />
        <Menubar img={cauliflower} title={"Cauliflower Walnut Vegetarian Taco Meat"} smText={"Eastern"} />
        <Menubar img={chickenSalad} title={"Rainbow Chicken Salad with Almond Honey Mustard Dressing"} smText={"Healthy"} />
        <Menubar img={Sandwiches} title={"Barbeque Spicy Sandwiches with Chips"} smText={"Snack"} />
        <Menubar img={Lettuce} title={"Firecarcker Vegan Lettuce Wraps"} smText={"Seafood"} />
        <Menubar img={Ramen} title={"Chicken Ramen Soup with Mushroom"} smText={"Japanese"} />
      </div>
    </div>

  )
}

export default menu;
