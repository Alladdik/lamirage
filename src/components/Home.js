import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HomeContainer = styled.div`
  text-align: center;
  padding: 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  max-width: 800px;
  width: 90%;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ff6600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #ff6600;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #ff6600;
  font-weight: bold;
`;

const ClientCount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6600;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <ProfileImage src="/me.png" alt="Мирослава Руденко" />
        <Title>Мирослава Руденко</Title>
        <Description>
          <Highlight>Інтимний фітнес</Highlight> / <Highlight>Сексолог</Highlight> / <Highlight>Енергопрактик</Highlight>
        </Description>
        <Description>
          Здоров'я / Краса
        </Description>
        <Description>
          Відкриваю твою внутрішню силу через насолоду, яка живе в тобі
        </Description>
        <ClientCount>
          500+ задоволених клієнток
        </ClientCount>
      </Content>
    </HomeContainer>
  );
};

export default Home;

