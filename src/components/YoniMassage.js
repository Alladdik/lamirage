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
  margin: 10px;

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

const ModalSubtitle = styled.h3`
  font-size: 1.2rem;
  color: #ff6600;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const YoniMassage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  return (
    <YoniMassageContainer>
      <Content>
        <Title>Йоні масаж</Title>
        <Button onClick={() => openModal('what')}>
          Що таке йоні масаж?
        </Button>
        <Button onClick={() => openModal('benefits')}>
          Переваги йоні масажу
        </Button>
        <Button onClick={() => openModal('expect')}>
          Чого очікувати?
        </Button>
        <Button onClick={() => openModal('precautions')}>
          Застереження
        </Button>
      </Content>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            {modalContent === 'what' && (
              <>
                <ModalSubtitle>Що таке йоні масаж?</ModalSubtitle>
                <ModalText>
                  Йоні - це санскритське слово, що означає піхву, яка символізує богиню Шакті в індуїзмі. «Йоні» можна перекласти як «священна печера» або «священний простір».
                </ModalText>
                <ModalText>
                  Східна культура подарувала світові знання про тантричний секс, Лінгам і Йоні. Тантра являє собою досконалу систему духовних і фізичних практик з напрямком сексуального бажання в розвиток духовної складової людини і оздоровлення організму.
                </ModalText>
                <ModalText>
                  Згідно тантрик, кожен чоловік і кожна жінка - божественні істоти. Масаж Йоні допомагає досягти свого божественного начала через розслаблення і отримання задоволення.🔥🧚🏻‍♀️
                </ModalText>
              </>
            )}
            {modalContent === 'benefits' && (
              <>
                <ModalSubtitle>Переваги йоні масажу</ModalSubtitle>
                <ModalText>
                  1. Покращення сексуального здоров'я та задоволення
                </ModalText>
                <ModalText>
                  2. Зняття емоційних блоків та травм
                </ModalText>
                <ModalText>
                  3. Підвищення чутливості та усвідомленості тіла
                </ModalText>
                <ModalText>
                  4. Поліпшення кровообігу в тазовій області
                </ModalText>
                <ModalText>
                  5. Зміцнення м'язів тазового дна
                </ModalText>
                <ModalText>
                  6. Допомога у лікуванні сексуальних дисфункцій
                </ModalText>
              </>
            )}
            {modalContent === 'expect' && (
              <>
                <ModalSubtitle>Чого очікувати від йоні масажу?</ModalSubtitle>
                <ModalText>
                  1. Початкова консультація та обговорення ваших цілей та меж
                </ModalText>
                <ModalText>
                  2. Розслаблююча атмосфера з м'яким освітленням та музикою
                </ModalText>
                <ModalText>
                  3. Поступовий початок з масажу всього тіла
                </ModalText>
                <ModalText>
                  4. Ніжний масаж зовнішніх та внутрішніх частин йоні
                </ModalText>
                <ModalText>
                  5. Фокус на диханні та усвідомленості відчуттів
                </ModalText>
                <ModalText>
                  6. Можливість емоційного вивільнення
                </ModalText>
              </>
            )}
            {modalContent === 'precautions' && (
              <>
                <ModalSubtitle>Застереження</ModalSubtitle>
                <ModalText>
                  1. Йоні масаж не рекомендується під час вагітності або менструації
                </ModalText>
                <ModalText>
                  2. Повідомте масажиста про будь-які інфекції або захворювання
                </ModalText>
                <ModalText>
                  3. Масаж повинен проводитися тільки кваліфікованим спеціалістом
                </ModalText>
                <ModalText>
                  4. Ви маєте право зупинити сеанс в будь-який момент
                </ModalText>
                <ModalText>
                  5. Обов'язково обговоріть свої очікування та межі перед початком сеансу
                </ModalText>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </YoniMassageContainer>
  );
};

export default YoniMassage;

