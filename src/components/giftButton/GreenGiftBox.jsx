import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ReactComponent as GreenHat } from '../../icons/giftBoxGreenHat.svg';
import { ReactComponent as GreenBody } from '../../icons/giftBoxGreenBody.svg';

const GreenGiftBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      css={giftBoxStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div css={lidStyle(isHovered)}>
        <GreenHat />
      </div>
      <div css={boxBodyStyle}>
        <GreenBody />
      </div>
    </div>
  );
};

export default GreenGiftBox;

const giftBoxStyle = css`
  display: flex;
  flex-direction: column;
`;

const lidStyle = isHovered => css`
  margin-bottom: -20px;
  margin-left: 20px;
  z-index: 2;
  transition: transform 0.3s ease;
  transform: ${isHovered
    ? 'translateY(-40px) translateX(-20px) rotate(-30deg)'
    : 'none'};
`;

const boxBodyStyle = css`
  z-index: 1;
  position: relative;
`;
