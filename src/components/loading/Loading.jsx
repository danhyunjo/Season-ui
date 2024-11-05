import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Hat } from '../../icons/hat.svg';
import { ReactComponent as BladHead } from '../../icons/bald head.svg';

const Loading = () => {
  return (
    <SantaContainer>
      <Santa>
        <IconWrapper>
          <BladHead />
          <AnimatedHat delay='0s' />
        </IconWrapper>
      </Santa>
      <Santa>
        <IconWrapper>
          <BladHead />
          <AnimatedHat delay='0.7s' />
        </IconWrapper>
      </Santa>
      <Santa>
        <IconWrapper>
          <BladHead />
          <AnimatedHat delay='1.4s' />
        </IconWrapper>
      </Santa>
    </SantaContainer>
  );
};

export default Loading;

const SantaContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transform: scale(0.5);
`;

const Santa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedHat = styled(Hat)`
  position: absolute;
  top: -55px;
  animation: bounce 2.1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};

  @keyframes bounce {
    0%,
    20% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-35px);
    }
    80%,
    100% {
      transform: translateY(0);
    }
  }
`;
