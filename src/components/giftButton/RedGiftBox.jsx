import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as RedHat } from '../../icons/giftBoxRedHat.svg';
import { ReactComponent as RedBody } from '../../icons/giftBoxRedBody.svg';

const RedGiftBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GiftBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lid isHovered={isHovered}>
        <RedHat />
      </Lid>
      <BoxBody>
        <RedBody />
      </BoxBody>
    </GiftBox>
  );
};

export default RedGiftBox;

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
