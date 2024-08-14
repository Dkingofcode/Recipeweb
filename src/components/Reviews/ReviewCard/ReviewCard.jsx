import React from 'react';
import "./ReviewCard.css";

import sendicon from "../../../assets/Sendshape.png";
import Likeicon from "../../../assets/Likeshape.png";
import commenticon from "../../../assets/Comment.png";
import Bookmark from "../../../assets/Bookmarkshape.png";
import pagination from "../../../assets/Pagination.png";
import logo from "../../../assets/Foodieland..png";
import oval from "../../../assets/Oval.png";
import blueTick from "../../../assets/bluetickshape.png";
import instgram from "../../../assets/004-instagram (1).png";
import moreIcon from "../../../assets/More Icon.png";


function ReviewCard({ img, text }) {


  return (
    <div>
      <div className='reviewCard'>
        <div className='header'>
         <div className='location'>  
         
         <img className='oval' src={oval} alt='app logo' />
         
         <div>
         <h4>Foodieland. <img src={blueTick}  /> </h4> 
         <p>Tokyo, Japan</p> 
         </div>
         
        </div>

        <img className='more' width={15} src={moreIcon} />
        </div>

         <div className='reviewImg'>
           <p className='superText'>1/3</p> 
           <img width={500} height={300} src={img} />
         </div>

         <div className='icons'>
           <div>
           <img src={Likeicon} alt='like button' />
           <img src={commenticon} alt='comment button' />
           <img src={sendicon} alt='send button' />
           </div>


           <div>
             <img src={pagination} alt='circle' />
           </div>
 
           <div>
           <img src={Bookmark} alt='bookmark' />
           </div>

         </div>


         <div className='notification'>
            <img  />
            <p>Liked by <b>craig_love</b> and <b>44,686</b></p>

            <p><b>Foodieland.</b>{text} </p>

            <p>September 19</p>
         </div>
      </div>

    </div>
  )
}

export default ReviewCard;
