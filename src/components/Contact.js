import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaInstagram, FaPhone, FaTelegram, FaCopy } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContactContainer = styled.div`
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
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ff6600;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  background: linear-gradient(45deg, #ff6600, #ff8533);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`;

const CopyMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  animation: ${fadeIn} 0.3s ease-in;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

const Contact = () => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    });
  };

  return (
    <ContactContainer>
      <Content>
        <Title>Зв'яжіться з нами</Title>
        <ContactInfo>
          <ContactItem href="https://www.instagram.com/lamirage_studio/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram (Робочий)
          </ContactItem>
          <ContactItem href="https://www.instagram.com/myroslavarudenko/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram (Основний)
          </ContactItem>
          <ContactItem as="div" onClick={() => copyToClipboard('+380661317566')}>
            <FaPhone /> +380 66 131 75 66
            <FaCopy style={{ marginLeft: '10px' }} />
          </ContactItem>
          <ContactItem href="https://t.me/myroslavarudenko" target="_blank" rel="noopener noreferrer">
            <FaTelegram /> Telegram
          </ContactItem>
        </ContactInfo>
      </Content>
      {showCopyMessage && <CopyMessage>Номер телефону скопійовано!</CopyMessage>}
    </ContactContainer>
  );
};

export default Contact;

