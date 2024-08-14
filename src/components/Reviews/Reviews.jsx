import React from 'react';
import ReviewCard from "./ReviewCard/ReviewCard";
//import Instagram from "../../assets/004-instagram.png";
import './Reviews.css';
import instagram from "../../assets/004-instagram (1).png"
import cookieReview from "../../assets/Rectangle (3).png";
import onionReview from "../../assets/Rectangle (2).png";
import dessertReview from "../../assets/Rectangle (1).png";
import vegeReview from "../../assets/Rectangle.png";

function Reviews() {
  return (
    <div className='review'>
      <div className='review-header'>
      <h1>Check out @foodieland on Instagram </h1>
      <p>Lorem, ipsum dolor sit amest consectetur adipisicing elit. <br />Earum perferendis officiis ullam itaque odio veniam ad non magni aut vitae?</p>
      </div>
       
      <div className='reviewBlock'>  
      <ReviewCard img={vegeReview} text={"sweet food can bring someone into happinness that they never imagined before"} /> 
      <ReviewCard img={onionReview} text={"What do you do before you start cooking? Check the ingredients and spices?."} /> 
      <ReviewCard img={cookieReview} text={"sweet food can bring someone into happinness that they never imagined before"} /> 
      <ReviewCard img={dessertReview} text={"sweet food can bring someone into happinness that they never imagined before"} />   
      </div> 

        <div className='reviewBtn'>
        <p>Visit Our Instagram <img src={instagram} alt="instagram icon" /></p>
        </div>
    </div>
  )
}

export default Reviews;
