import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Heart, Award, Users, Star, Instagram } from 'lucide-react';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 102, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 102, 0, 0.5); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #000000, #1a0000);
  color: #fff;
  overflow: hidden;
  position: relative;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1620945267900-bbf84674d819?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  transform: scale(1.1);
  filter: blur(3px);
  transition: transform 0.3s ease;

  ${({ mousePosition }) => `
    transform: scale(1.1) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px);
  `}
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const ProfileSection = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  animation: ${slideUp} 1s ease-out;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6600, #ff3366);
    opacity: 0.5;
    animation: ${glow} 3s infinite;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #ff6600;
  position: relative;
  z-index: 1;
  animation: ${float} 6s ease-in-out infinite;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6600, #ff3366, #ff6600);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientMove} 5s linear infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServicesCarousel = styled.div`
  height: 40px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const ServicesSlider = styled.div`
  animation: slide 10s linear infinite;
  @keyframes slide {
    0% { transform: translateY(0); }
    100% { transform: translateY(-200px); }
  }
`;

const ServiceItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #ff6600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 102, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 102, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 102, 0, 0.5);
    box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2);
  }
`;

const StatIcon = styled.div`
  color: #ff6600;
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  background: linear-gradient(45deg, #ff6600, #ff3366);
  color: white;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 20px rgba(255, 102, 0, 0.5);
  }
`;

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    "Інтимний фітнес",
    "Сексолог",
    "Енергопрактик",
    "Здоров'я",
    "Краса"
  ];

  const stats = [
    { icon: <Users size={32} />, value: "5000+", label: "Задоволених клієнток" },
    { icon: <Heart size={32} />, value: "22", label: "Років досвіду" },
    { icon: <Award size={32} />, value: "30+", label: "Сертифікатів" },
    { icon: <Star size={32} />, value: "5", label: "Рейтинг" }
  ];

  return (
    <HomeContainer>
      <BackgroundOverlay mousePosition={mousePosition} />
      <ContentWrapper>
        <ProfileSection>
          <ImageContainer>
            <ProfileImage src="/me.png" alt="Мирослава Руденко" />
          </ImageContainer>
          
          <Title>Мирослава Руденко</Title>

          <ServicesCarousel>
            <ServicesSlider>
              {[...services, ...services].map((service, index) => (
                <ServiceItem key={index}>{service}</ServiceItem>
              ))}
            </ServicesSlider>
          </ServicesCarousel>

          <Description>
            Відкриваю твою внутрішню силу через насолоду, яка живе в тобі
          </Description>

          <SocialLinks>
            <SocialLink href="https://www.instagram.com/lamirage_studio/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </SocialLink>
          </SocialLinks>
        </ProfileSection>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatIcon>{stat.icon}</StatIcon>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;