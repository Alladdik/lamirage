import React from 'react';
import { Sparkles, CheckCircle2, Heart, Star, Zap, BookOpen, Users, Mic } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  padding: 4rem 0;
  overflow: hidden;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  border-radius: 15px;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #444;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const Emphasis = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff4081;
  background: linear-gradient(45deg, #ff4081, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 64, 129, 0.2);
`;

const PricingSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

const PricingCard = styled.div`
  flex: 1;
  min-width: 280px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  ${props => props.isPopular && `
    border: 3px solid #ff4081;
    position: relative;
    &::before {
      content: 'Популярний';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(45deg, #ff4081, #ff6b6b);
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: bold;
    }
  `}
`;

const PricingTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const PricingPrice = styled.div`
  font-size: 2.5rem;
  color: #ff4081;
  margin-bottom: 1rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 1.8rem;
  margin-right: 10px;
`;

const Discount = styled.span`
  font-size: 1rem;
  color: #4caf50;
  font-weight: bold;
`;

const PricingFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const PricingFeature = styled.li`
  margin-bottom: 0.5rem;
  color: #666;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #ff4081, #ff6b6b);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 64, 129, 0.4);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const FeatureItem = styled.li`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    margin-right: 1rem;
    color: #ff4081;
  }
`;

const Courses = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleChoosePackage = () => {
    window.open('https://t.me/myroslavarudenko', '_blank');
  };

  return (
    <Container>
      <HeroSection>
        <Title>✨ Інтимний фітнес для лінивих ✨</Title>
        <Subtitle>🌸 Для тих, хто прагне мати чудове жіноче здоров'я 🌸</Subtitle>
        <Description>
          Відкрийте для себе унікальний онлайн курс з інтимного фітнесу, який змінить ваше життя назавжди. 
          Приготуйтеся до яскравих оргазмів 🎆, гармонійних стосунків 💑 та покращення жіночого здоров'я 💖. 
          Ви готові притягувати гроші з усіх можливих джерел? 💰💰💰 Якщо ваша відповідь "Так!", 
          то ця пропозиція створена саме для вас!
        </Description>
      </HeroSection>

      <Emphasis>
        Що вас очікує в нашій захоплюючій подорожі?
      </Emphasis>

      <FeatureList>
        <FeatureItem><Sparkles size={24} /> 30 днів інтенсивного онлайн навчання</FeatureItem>
        <FeatureItem><CheckCircle2 size={24} /> Понад 9 унікальних уроків з інтимного фітнесу</FeatureItem>
        <FeatureItem><Zap size={24} /> Захоплюючий прямий ефір: розкрийте свою сексуальність, вивчіть секрети активного сексу та енергетичних практик</FeatureItem>
        <FeatureItem><Heart size={24} /> Чуттєві сексуальні медитації</FeatureItem>
        <FeatureItem><Star size={24} /> Ексклюзивний майстер-клас з орального мистецтва</FeatureItem>
      </FeatureList>

      <Emphasis>
        Детальна програма курсу та ціни
      </Emphasis>

      <PricingSection>
        <PricingCard>
          <PricingTitle>Новачок</PricingTitle>
          <PricingPrice>
            <OldPrice>2550 грн</OldPrice>
            1750 грн
            <Discount> (Знижка 31%)</Discount>
          </PricingPrice>
          <PricingFeatures>
            <PricingFeature><BookOpen size={18} /> 2-12 січня: 1 блок</PricingFeature>
            <PricingFeature>- Заняття з інтимного фітнесу</PricingFeature>
            <PricingFeature>- Знайомство з інтимними м'язами</PricingFeature>
            <PricingFeature>- Безтренажерні та тренажерні методи</PricingFeature>
            <PricingFeature>- Вправи при нетриманні сечі</PricingFeature>
            <PricingFeature>Доступ до 1 блоку на 1 місяць</PricingFeature>
          </PricingFeatures>
          <Button onClick={handleChoosePackage}>Обрати пакет</Button>
        </PricingCard>

        <PricingCard>
          <PricingTitle>Спокусниця</PricingTitle>
          <PricingPrice>
            <OldPrice>5500 грн</OldPrice>
            3400 грн
            <Discount> (Знижка 38%)</Discount>
          </PricingPrice>
          <PricingFeatures>
            <PricingFeature><Users size={18} /> 12-22 січня: 2 блок (включає 1 блок)</PricingFeature>
            <PricingFeature>- 3 нові заняття з інтимного фітнесу</PricingFeature>
            <PricingFeature>- Вправи для підсилення чутливості і оргазму</PricingFeature>
            <PricingFeature>- 2 медитації</PricingFeature>
            <PricingFeature>- Доступ до ефіру та онлайн підтримка в телеграм</PricingFeature>
            <PricingFeature>Доступ до 1-2 блоків</PricingFeature>
          </PricingFeatures>
          <Button onClick={handleChoosePackage}>Обрати пакет</Button>
        </PricingCard>

        <PricingCard isPopular>
          <PricingTitle>Богиня оргазму</PricingTitle>
          <PricingPrice>
            <OldPrice>9500 грн</OldPrice>
            5600 грн
            <Discount> (Знижка 41%)</Discount>
          </PricingPrice>
          <PricingFeatures>
            <PricingFeature><Mic size={18} /> 22 січня - 1 лютого: 3 блок (включає 1-2 блоки)</PricingFeature>
            <PricingFeature>- 3 нові заняття по інтимному фітнесу для сексуального задоволення себе і партнера</PricingFeature>
            <PricingFeature>- Додаткові медитації</PricingFeature>
            <PricingFeature>- Індивідуальний урок-консультація зі мною (1 година)</PricingFeature>
            <PricingFeature>- Семінар з орального мистецтва</PricingFeature>
            <PricingFeature>Доступ до всіх 3 блоків на 3 місяці</PricingFeature>
          </PricingFeatures>
          <Button onClick={handleChoosePackage}>Обрати пакет</Button>
        </PricingCard>
      </PricingSection>

      <Emphasis>
        Не втрачайте шанс трансформувати своє життя! Приєднуйтесь до нашого курсу зараз і відкрийте двері до нового, захоплюючого світу жіночої сексуальності та здоров'я!
      </Emphasis>

      {showModal && (
        <Modal>
          <ModalContent>
            <h2>Дякуємо за ваш вибір!</h2>
            <p>Ми зв'яжемося з вами найближчим часом для оформлення замовлення.</p>
            <Button onClick={() => setShowModal(false)}>Закрити</Button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Courses;
