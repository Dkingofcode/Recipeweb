import React from 'react';
import "./Menubar.css";
import stopwatch from "../../../assets/stopwatch.png";
import cutlery from "../../../assets/forkKitchenKnife.png";
import { Link } from "react-router-dom";



function Menubar({ title, handleClick, smText, img }) {
 
    return (
     <Link style={{  textDecoration: "none", color: "black" }} to={"/details"}>
    <div className='menuBar'>
        <img className='posterImg' src={img} />
        <div className="imageicon">  
          <img src=''  />
        </div>

      <h4>{title}</h4>
       
       <div className='menuFooter'>
       
        <div>
        <img width={25} src={stopwatch} />
       <p>30 Minutes</p>
        </div>
       
       <div>
         <img width={25} src={cutlery} />
         <p>{smText}</p> 
       </div> 
       </div>


    </div>
    </Link>
  )
}

export default Menubar;
