import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as GreenHat } from '../../icons/giftBoxGreenHat.svg';
import { ReactComponent as GreenBody } from '../../icons/giftBoxGreenBody.svg';
import { ReactComponent as Popper } from '../../icons/popper.svg';

const GreenGiftBox = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopper, setShowPopper] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowPopper(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPopper(false);
  };

  const handleTransitionEnd = () => {
    if (isHovered) {
      setShowPopper(true);
    }
  };

  return (
    <GiftBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Lid
        className={isHovered ? 'hovered' : ''}
        onTransitionEnd={handleTransitionEnd}
      >
        <GreenHat />
      </Lid>
      <BoxBody>
        <GreenBody />
        <StyledPopper style={{ opacity: showPopper ? 1 : 0 }} />
      </BoxBody>
    </GiftBox>
  );
};

export default GreenGiftBox;

const GiftBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Lid = styled.div`
  margin-bottom: -20px;
  margin-left: -3px;
  z-index: 2;
  transition: transform 0.3s ease;

  &.hovered {
    transform: translateY(-40px) translateX(-20px) rotate(-30deg);
  }
`;

const BoxBody = styled.div`
  z-index: 1;
  position: relative;
`;

const StyledPopper = styled(Popper)`
  position: absolute;
  top: -37px;
  left: 35px;
  z-index: 3;
  transition: opacity 0.1s ease;
`;
