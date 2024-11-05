import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as GreenHat } from '../../icons/giftBoxGreenHat.svg';
import { ReactComponent as GreenBody } from '../../icons/giftBoxGreenBody.svg';

const GreenGiftBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GiftBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lid isHovered={isHovered}>
        <GreenHat />
      </Lid>
      <BoxBody>
        <GreenBody />
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
  transform: ${({ isHovered }) =>
    isHovered ? 'translateY(-40px) translateX(-20px) rotate(-30deg)' : 'none'};
`;

const BoxBody = styled.div`
  z-index: 1;
  position: relative;
`;
