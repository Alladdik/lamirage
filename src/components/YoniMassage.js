import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const YoniMassageContainer = styled.div`
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
  text-align: center;
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

const Button = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff8533;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
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
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  color: #333;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
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

const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const YoniMassage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <YoniMassageContainer>
      <Content>
        <Title>Йоні масаж</Title>
        <Button onClick={() => setIsModalOpen(true)}>
          Хочете дізнатись, що таке йоні масаж?
        </Button>
      </Content>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <ModalText>
              Йоні - це санскритське слово, що означає піхву, яка символізує богиню Шакті в індуїзмі. «Йоні» можна перекласти як «священна печера» або «священний простір».
            </ModalText>
            <ModalText>
              Східна культура подарувала світові знання про тантричний секс, Лінгам і Йоні. Тантра являє собою досконалу систему духовних і фізичних практик з напрямком сексуального бажання в розвиток духовної складової людини і оздоровлення організму.
            </ModalText>
            <ModalText>
              Згідно тантрик, кожен чоловік і кожна жінка - божественні істоти. Масаж Йоні допомагає досягти свого божественного начала через розслаблення і отримання задоволення.🔥🧚🏻‍♀️
            </ModalText>
            <ModalText>
              Жінкам практика масажу Йоні дозволяє розкрити свої внутрішні сили і природну чарівність. Завдяки постійним тантричним масажам сексуальна сфера людини дозволяє позбавити себе від стресових наслідків, вилікувати розлади різного ступеня тяжкості і підтримати здоровʼя.
            </ModalText>
            <ModalText>
              У лоні Йоні у жінки збирається вся негативна інформація, укладена в неприємний сексуальний досвід. Наслідки плачевні: хворобливі статеві акти, фригідність, категоричне неприйняття статевих зносин, холодність і грубість з партнером. Масаж Йоні дає можливість позбутися від негативу і відновити свій жіночий потік енергії, який відповідає за сексуальні аспекти життя.
            </ModalText>
          </ModalContent>
        </Modal>
      )}
    </YoniMassageContainer>
  );
};

export default YoniMassage;

