import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ReactComponent as GingerIconFilled } from '../../icons/ginger.svg';
import { ReactComponent as GingerIconEmpty } from '../../icons/ginger_blank.svg';

const RatingContainer = styled.div`
  display: flex;
  gap: ${({ iconWidth }) => iconWidth * 0.2}px;
  cursor: pointer;
`;

const StarIcon = styled.div`
  width: ${({ iconWidth }) => iconWidth}px;
  height: ${({ iconWidth }) => iconWidth}px;
  transition: transform 0.2s ease;
  transform-origin: center;

  &:hover {
    transform: scale(1.1);
  }
`;

const FilledGinger = styled(GingerIconFilled)`
  width: 110%;
  height: 110%;
  position: relative;
  left: -4px;
  top: -3px;
`;

const EmptyGinger = styled(GingerIconEmpty)`
  width: 100%;
  height: 100%;
`;

const Rating = ({ totalStars, iconWidth }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const ratingRef = useRef(null);

  const handleClick = index => {
    setRating(index + 1);
  };

  const handleMouseEnter = index => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
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
    <RatingContainer ref={ratingRef} iconWidth={iconWidth}>
      {Array.from({ length: totalStars }, (_, index) => (
        <StarIcon
          key={index}
          iconWidth={iconWidth}
          onClick={e => {
            e.stopPropagation();
            handleClick(index);
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {index < (hoverRating || rating) ? <FilledGinger /> : <EmptyGinger />}
        </StarIcon>
      ))}
    </RatingContainer>
  );
};

Rating.propTypes = {
  totalStars: PropTypes.number,
  iconWidth: PropTypes.number,
};

Rating.defaultProps = {
  totalStars: 5,
  iconWidth: 40,
};

export default Rating;
