import React from 'react';
import { Sparkles, CheckCircle2, Heart, Star, Zap, Gift, Clock, TrendingUp } from 'lucide-react';
import './Courses.scss'; // Переконайся, що SCSS файл підключений

const Courses = () => {
  const handleEarlyBirdSignUp = () => {
    // Можна відкривати телеграм або іншу форму для запису
    window.open('https://t.me/myroslavarudenko', '_blank');
  };

  const generalFeatures = [
    { icon: <Sparkles size={24} />, text: "Трансформаційні знання та практики" },
    { icon: <CheckCircle2 size={24} />, text: "Унікальні авторські методики" },
    { icon: <Zap size={24} />, text: "Потужний заряд енергії та натхнення" },
    { icon: <Heart size={24} />, text: "Глибоке з'єднання з власною чуттєвістю" },
    { icon: <Star size={24} />, text: "Ексклюзивні матеріали та підтримка" }
  ];

  return (
    <div className="courses-page-container">
      <div className="courses-wrapper">
        {/* --- HERO СЕКЦІЯ --- */}
        <section className="courses-hero-section">
          <div className="hero-icon-flare">✨</div>
          <h1 className="courses-title">Курси від Мирослави Руденко</h1>
          <h2 className="courses-subtitle">Подорож до Себе: Здоров'я, Енергія, Насолода</h2>
          <p className="courses-description">
            Мої курси — це не просто інформація. Це глибокий трансформаційний досвід, що поєднує мудрість давніх практик із сучасними знаннями про тіло та енергію. Разом ми розкриємо твій потенціал, повернемо радість життя та наповнимо кожен день усвідомленістю та задоволенням.
          </p>
        </section>

        {/* --- ЗАГАЛЬНІ ПЕРЕВАГИ КУРСІВ --- */}
        <section className="courses-features-section">
          <h3 className="section-heading courses-section-heading">Що ти отримаєш на моїх програмах:</h3>
          <div className="feature-list">
            {generalFeatures.map((feature, index) => (
              <div className="feature-item" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon-bubble">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- СЕКЦІЯ "СКОРО В ПРОДАЖІ" ТА "РАННІЙ ДОСТУП" --- */}
        <section className="early-bird-section">
          <div className="early-bird-content-wrapper">
            <div className="coming-soon-badge">
              <Clock size={20} />
              <span>СТАРТ ПРОДАЖІВ НЕЗАБАРОМ</span>
            </div>
            <h3 className="section-heading early-bird-heading">🔥 Стань Першою та Отримай Найкраще!</h3>
            <p className="early-bird-description">
              Повна програма моїх унікальних курсів зараз на фінальній стадії підготовки. Я вкладаю всю свою душу та досвід, щоб дати тобі максимум цінності.
              Хочеш отримати доступ до ексклюзивних умов, найкращої ціни та приємних бонусів раніше за всіх?
            </p>
            
            <div className="early-bird-offer-card">
              <div className="offer-icon">
                <Gift size={40} />
              </div>
              <h4>Пакет "Рання Пташка"</h4>
              <p className="offer-details">
                Залиш заявку на ранній доступ та отримай:
              </p>
              <ul className="offer-benefits">
                <li><TrendingUp size={18} /> Найнижчу ціну, яка буде недоступна після офіційного старту.</li>
                <li><Star size={18} /> Додаткові бонусні матеріали та медитації.</li>
                <li><Sparkles size={18} /> Першочерговий доступ до курсу та закритий чат.</li>
              </ul>
              <div className="early-bird-pricing">
                <span className="early-price">від 1200 грн</span>
                <span className="original-price-note">(замість стандартної ціни від 2000 грн)</span>
              </div>
              <button className="early-bird-button" onClick={handleEarlyBirdSignUp}>
                Хочу Ранній Доступ!
              </button>
            </div>
             <p className="early-bird-note">
                Кількість місць за спеціальною пропозицією буде обмежена. Не пропусти свій шанс!
             </p>
          </div>
        </section>

        {/* --- ФІНАЛЬНИЙ ЗАКЛИК --- */}
        <section className="courses-final-call">
          <p>Мої курси – це інвестиція у твоє щасливе, здорове та наповнене життя. Я з нетерпінням чекаю, щоб поділитися з тобою цими знаннями та провести тебе шляхом неймовірних трансформацій!</p>
        </section>
      </div>
    </div>
  );
};

export default Courses;