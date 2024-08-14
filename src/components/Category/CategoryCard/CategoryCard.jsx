import React, { useState } from 'react';
import "./categoryCard.css";



function CategoryCard({ text, img, bgColor, filterBg }) {
  const [hover, setHover] = useState(false); 

  const handleMouseEnter = () => {
     setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  
  
  return (
    <div>
      <div className='card' style={{ transition: 'filter 0.3s ease-in-out', background: bgColor }}>
        <img style={{ filter: hover ? filterBg : 'none' }} src={img} alt={text} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CategoryCard;
