import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const MassagesContainer = styled.div`
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
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease-in;
`;

const MassageList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const MassageItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const MassageTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  color: #333;
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: ${fadeIn} 0.3s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const massageData = [
  {
    title: "Класичний масаж",
    description: "Класичний масаж - це традиційна техніка, яка допомагає розслабити м'язи, покращити кровообіг та зняти напругу.",
    duration: "60 хвилин",
    benefits: "Зняття стресу, покращення гнучкості, полегшення болю",
    price: "500 грн"
  },
  {
    title: "Шведський масаж",
    description: "Шведський масаж - це техніка, яка використовує довгі гладкі рухи для розслаблення м'язів і покращення циркуляції.",
    duration: "60 хвилин",
    benefits: "Загальне розслаблення, зняття м'язової напруги, покращення гнучкості",
    price: "550 грн"
  },
  {
    title: "Спортивний масаж",
    description: "Спортивний масаж призначений для підготовки м'язів до фізичних навантажень та відновлення після них.",
    duration: "45 хвилин",
    benefits: "Підвищення продуктивності, швидше відновлення, профілактика травм",
    price: "600 грн"
  },
  {
    title: "Лімфодренажний масаж",
    description: "Лімфодренажний масаж стимулює лімфатичну систему та допомагає вивести токсини з організму.",
    duration: "75 хвилин",
    benefits: "Зменшення набряків, покращення імунітету, детоксикація",
    price: "650 грн"
  },
  {
    title: "Антицелюлітний масаж",
    description: "Антицелюлітний масаж спрямований на боротьбу з целюлітом та покращення стану шкіри.",
    duration: "60 хвилин",
    benefits: "Зменшення целюліту, покращення тонусу шкіри, стимуляція кровообігу",
    price: "700 грн"
  }
];
const Massages = () => {
  const [selectedMassage, setSelectedMassage] = useState(null);
  return (
    <MassagesContainer>
      <Content>
        <Title>Наші масажі</Title>
        <MassageList>
          {massageData.map((massage, index) => (
            <MassageItem key={index} onClick={() => setSelectedMassage(massage)}>
              <MassageTitle>{massage.title}</MassageTitle>
            </MassageItem>
          ))}
        </MassageList>
      </Content>
      {selectedMassage && (
        <Modal onClick={() => setSelectedMassage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedMassage(null)}>&times;</CloseButton>
            <h2>{selectedMassage.title}</h2>
            <p><strong>Опис:</strong> {selectedMassage.description}</p>
            <p><strong>Тривалість:</strong> {selectedMassage.duration}</p>
            <p><strong>Переваги:</strong> {selectedMassage.benefits}</p>
            <p><strong>Ціна:</strong> {selectedMassage.price}</p>
          </ModalContent>
        </Modal>
      )}
    </MassagesContainer>
  );
};

export default Massages;
