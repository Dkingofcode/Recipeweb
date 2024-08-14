import React from 'react';
import stopwatch from "../../../assets/stopwatch.png";
import cutlery from "../../../assets/forkKitchenKnife.png";
import "./RecipeCard.css"


function RecipeCard({ img, Bgtext, smtext }) {
  
 
  return (
    <div className='recipeCard'>
        <div className='imageRecipe'>
        <img className='Posterimg' src={img} alt ={Bgtext} />
        <div className='imageRecipeicon'>
          {/* <img src={clicked ? love : fair}  /> */}
        </div>
        </div>


       <h3>{Bgtext}</h3>

       <div className='cardFooter'>
        <div>
        <img src={stopwatch} width={25} alt="stopwatch" />
        <p>30 Minutes</p>
        </div>
        <div>
        <img src={cutlery} width={25} alt="cutlery" />
        <p>{smtext}</p>
        </div>
       </div>
    </div>
  )
}

export default RecipeCard;
