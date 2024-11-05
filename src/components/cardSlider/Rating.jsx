import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ReactComponent as GingerIconFilled } from '../../icons/ginger.svg';
import { ReactComponent as GingerIconEmpty } from '../../icons/ginger_blank.svg';

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const StarIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.2s ease;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const FilledGinger = styled(GingerIconFilled)`
  position: relative;
  left: -4px;
  top: -3px;
`;
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
    <RatingContainer ref={ratingRef}>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          onClick={e => {
            e.stopPropagation();
            handleClick(index);
          }}
        >
          {index < rating ? <FilledGinger /> : <GingerIconEmpty />}
        </StarIcon>
      ))}
    </RatingContainer>
  );
};

Rating.propTypes = {
  totalStars: PropTypes.number,
};

Rating.defaultProps = {
  totalStars: 5,
};

export default Rating;
