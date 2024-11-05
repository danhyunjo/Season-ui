import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CardStyle = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #b03b26;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ width }) => width * 0.1}px;
  color: white;
  text-align: center;
`;

const ImagePlaceholder = styled.div`
  width: 90%;
  height: ${({ height }) => height * 0.5}px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: ${({ height }) => height * 0.05}px;
`;

const Title = styled.h3`
  font-size: ${({ width }) => width * 0.09}px;
  margin: ${({ height }) => height * 0.02}px 0
    ${({ height }) => height * 0.01}px 0;
`;

const Description = styled.p`
  font-size: ${({ width }) => width * 0.06}px;
  margin: 0;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ height }) => height * 0.03}px 0;
`;

const Icon = styled.span`
  font-size: ${({ width }) => width * 0.1}px;
  margin: 0 2px;
`;

const HireButton = styled.button`
  padding: ${({ height }) => height * 0.05}px ${({ width }) => width * 0.1}px;
  background-color: #f3dfcd;
  color: #b03b26;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: ${({ height }) => height * 0.05}px;
  font-size: ${({ width }) => width * 0.06}px;

  &:hover {
    background-color: #e3cbbf;
  }
`;

const Card = ({ title, description, buttonText, width, height }) => {
  return (
    <CardStyle width={width} height={height}>
      <ImagePlaceholder width={width} height={height} />
      <Title width={width} height={height}>
        {title}
      </Title>
      <Description width={width}>{description}</Description>
      <IconRow height={height}>
        <Icon width={width}>🦌</Icon>
        <Icon width={width}>🦌</Icon>
        <Icon width={width}>🦌</Icon>
        <Icon width={width}>🦌</Icon>
        <Icon width={width}>🦌</Icon>
      </IconRow>
      <HireButton width={width} height={height}>
        {buttonText}
      </HireButton>
    </CardStyle>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Card.defaultProps = {
  title: '루돌프 이름',
  description: '저 밥 조금만 먹어요',
  buttonText: 'Hire Me',
  width: 200,
  height: 300,
};
