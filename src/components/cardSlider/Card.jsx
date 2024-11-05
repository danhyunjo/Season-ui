import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #c84333;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  text-align: center;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0 5px 0;
`;

const Description = styled.p`
  font-size: 12px;
  margin: 0;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Icon = styled.span`
  font-size: 20px;
  margin: 0 2px;
`;

const HireButton = styled.button`
  padding: 8px 20px;
  background-color: #f3e0d4;
  color: #c84333;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  &:hover {
    background-color: #e3cbbf;
  }
`;

const Carousel = () => {
  return (
    <CardContainer>
      <Card>
        <ImagePlaceholder />
        <Title>루돌프 이름</Title>
        <Description>저 밥 조금만 먹어요</Description>
        <IconRow>
          <Icon>🦌</Icon>
          <Icon>🦌</Icon>
          <Icon>🦌</Icon>
          <Icon>🦌</Icon>
          <Icon>🦌</Icon>
        </IconRow>
        <HireButton>Hire Me</HireButton>
      </Card>
    </CardContainer>
  );
};

export default Carousel;
