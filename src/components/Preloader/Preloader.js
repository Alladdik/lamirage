import React, { useState, useEffect } from 'react';
import './Preloader.scss'; // Стилі для прелоадера

const Preloader = ({ minDisplayTime = 1500 }) => { // minDisplayTime в мілісекундах
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimumTimePassed, setIsMinimumTimePassed] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Таймер для мінімального часу показу
    const timer = setTimeout(() => {
      setIsMinimumTimePassed(true);
    }, minDisplayTime);

    // Слухач для події повної загрузки сторінки
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    // Перевіряємо, чи сторінка вже завантажена (на випадок кешування)
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handlePageLoad);
    };
  }, [minDisplayTime]);

  useEffect(() => {
    // Ховаємо прелоадер, якщо і сторінка завантажена, і мінімальний час пройшов
    if (isPageLoaded && isMinimumTimePassed) {
      // Додаємо клас для анімації зникнення
      const preloaderElement = document.getElementById('preloader');
      if (preloaderElement) {
        preloaderElement.classList.add('preloader-hidden');
        // Можна повністю видалити з DOM після анімації, якщо потрібно
        setTimeout(() => {
          setIsVisible(false); 
        }, 500); // Час має співпадати з transition в SCSS
      } else {
        setIsVisible(false); // Якщо елемент раптом не знайдено
      }
    }
  }, [isPageLoaded, isMinimumTimePassed]);

  if (!isVisible) {
    return null; // Не рендеримо нічого, якщо невидимий
  }

  return (
    <div id="preloader" className="preloader-container">
      <div className="preloader-content">
        {/* Сюди можна вставити твій логотип або іншу анімацію */}
        <div className="preloader-logo-pulsing">
          <img src="/logo.PNG" alt="Loading Logo" />
        </div>
        <div className="preloader-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="preloader-text">Пробуджуємо твою енергію...</p>
      </div>
    </div>
  );
};

export default Preloader;