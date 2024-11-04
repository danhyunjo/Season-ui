import React, { useState, useEffect, useRef } from 'react';
import './Rating.css';
import gingerIconFilled from './assets/ginger.svg';
import gingerIconEmpty from './assets/ginger_blank.svg';

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const ratingRef = useRef(null);

  const handleClick = index => {
    setRating(index + 1);
  };

  const handleOutsideClick = event => {
    if (ratingRef.current && !ratingRef.current.contains(event.target)) {
      setRating(0);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='rating-container' ref={ratingRef}>
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? gingerIconFilled : gingerIconEmpty}
          alt='gingerbread'
          className='star-icon'
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Rating;
