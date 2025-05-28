import React, { useState } from 'react';
import { FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import './Contact.scss';

const Contact = () => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage(message);
      setTimeout(() => setCopyMessage(''), 2500);
    });
  };

  return (
    <>
      {copyMessage && <div className="contact-copy-notification">{copyMessage}</div>}
      <div className="contact-page-container">
        <div className="contact-card-wrapper">
          <h1 className="contact-main-title">Зв'яжіться зі мною</h1>
          <p className="contact-main-subtitle">Оберіть зручний для вас спосіб зв'язку</p>
          <div className="contact-items-grid">

            <a href="https://www.instagram.com/lamirage_studio/" target="_blank" rel="noopener noreferrer" className="contact-item-bubble instagram">
              <FaInstagram className="contact-icon" />
              <div className="contact-text-content">
                <strong>Instagram</strong>
                <span>Робочий профіль</span>
              </div>
            </a>

            <a href="https://www.instagram.com/myroslavarudenko/" target="_blank" rel="noopener noreferrer" className="contact-item-bubble instagram-personal">
              <FaInstagram className="contact-icon" />
              <div className="contact-text-content">
                <strong>Instagram</strong>
                <span>Особистий блог</span>
              </div>
            </a>

            <a href="https://t.me/myroslavarudenko" target="_blank" rel="noopener noreferrer" className="contact-item-bubble telegram">
              <FaTelegram className="contact-icon" />
              <div className="contact-text-content">
                <strong>Telegram</strong>
                <span>Написати повідомлення</span>
              </div>
            </a>

            <div className="contact-item-bubble phone" onClick={() => copyToClipboard('+380661317566', 'Номер телефону скопійовано!')}>
              <FaPhone className="contact-icon" />
              <div className="contact-text-content">
                <strong>+380 66 131 75 66</strong>
                <span>Натисніть, щоб скопіювати</span>
              </div>
              <FiCopy className="contact-copy-icon" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;