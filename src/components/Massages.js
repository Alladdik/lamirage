import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/background.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const Massages = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Тренажерна методика</Title>
        <ImageContainer>
          <Image src="/tren1.jpg" alt="Тренажерна методика 1" />
          <Image src="/tren2.jpg" alt="Тренажерна методика 2" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Massages;

