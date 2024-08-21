import React, { useContext } from 'react'
import './Rating.css'
import Star from '../Star/Star';
import { useState } from 'react';
import { RateContext } from '../../Context/RateContext';
function Rating() {
   
 
     
    const value= useContext(RateContext);
    
    const {rating,setrating}= value;
     
    const handleClick = (value) => {
      setrating(rating === value ? rating-1 : value);

    };
  
  return (
    <div className='text-center'>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => handleClick(value)}
        />
      ))}
    </div>
  )
}

export default Rating
