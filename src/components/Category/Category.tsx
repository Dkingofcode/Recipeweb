import React from 'react';
import breakfast from "../../assets/img1.png";
import vegetable from "../../assets/image2.png";
import meat from "../../assets/image21.png";
import cake from "../../assets/image 22.png";
import CategoryCard from "./CategoryCard/CategoryCard";
import "./category.css";



function Category() {
  return (
    <div className='category'>
      <div className='head'>  
      <h1>Categories</h1>
      <p className='categoryBtn'>View All Categories</p>
       </div>
      <div className='categoryCards'>
        <CategoryCard img={breakfast} text={"Breakfast"} filterBg={"drop-shadow(0 0 0.75rem grey)"} bgColor={"linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)"} />  
        <CategoryCard img={vegetable} text={"Vegan"}  filterBg={"drop-shadow(0 0 0.75rem green)"} bgColor={"linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)"} />  
        <CategoryCard img={meat} text={"Meat"}  filterBg={"drop-shadow(0 0 0.75rem crimson)"} bgColor={"linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)"} />  
        <CategoryCard img={cake} text={"Dessert"} filterBg={"drop-shadow(0 0 0.75rem yellow)"}  bgColor={"linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)"} />  
        <CategoryCard img={breakfast} text={"Lunch"} filterBg={"drop-shadow(0 0 0.75rem grey)"} bgColor={"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"} />  
        <CategoryCard img={cake} text={"Chocolate"} filterBg={"drop-shadow(0 0 0.75rem grey)"} bgColor={"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"} />  
      </div>      
    </div>
  )
}

export default Category;



//  #E7FAFE
// background: linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);
// background: linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);
// background: linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);
// background: linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);
// background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);
// background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);
