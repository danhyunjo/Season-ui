import React, { useState } from 'react';
import './RedGiftBox.css';
import redHat from './assets/giftBoxRedHat.svg';
import redBody from './assets/giftBoxRedBody.svg';
import popper from './assets/popper.svg';

const RedGiftBox = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopper, setShowPopper] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowPopper(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTransitionEnd = () => {
    if (isHovered) {
      setShowPopper(true);
    }
  };

  return (
    <div
      className='gift-box'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`lid ${isHovered ? 'hovered' : ''}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <img src={redHat} alt='redHat' />
      </div>
      <div className='box-body'>
        <img src={redBody} alt='redBody' />
        {showPopper && <img src={popper} alt='popper' className='popper' />}
      </div>
    </div>
  );
};

export default RedGiftBox;
