import React from 'react';
import { Target, Heart, Zap, Smile } from 'lucide-react';
import Preloader from './Preloader/Preloader'; // <--- ДОДАНО: Імпорт Preloader (перевір шлях!)
import './Massages.scss';

const Massages = () => {
  const benefits = [
    {
      icon: <Target size={32} />, // Додав size для іконок, щоб узгодити з іншими
      title: "Зміцнення м'язів",
      text: "Підвищується тонус та еластичність інтимних м'язів, що є профілактикою багатьох жіночих захворювань."
    },
    {
      icon: <Heart size={32} />,
      title: "Покращення кровообігу",
      text: "Активізація кровообігу в органах малого тазу сприяє покращенню здоров'я та чутливості."
    },
    {
      icon: <Zap size={32} />,
      title: "Яскравіші відчуття",
      text: "Розвинені м'язи дарують нові, більш яскраві відчуття під час близькості як вам, так і вашому партнеру."
    },
    {
      icon: <Smile size={32} />,
      title: "Впевненість у собі",
      text: "Володіння своїм тілом та вміння керувати інтимними м'язами дарує неймовірну впевненість."
    }
  ];

  return (
    <>
      <Preloader minDisplayTime={1000} /> {/* Ось тут ми додаємо Preloader, час можна налаштувати */}

      <div className="massages-page-container">
        <div className="massages-content-wrapper">
          <section className="massages-intro">
            <h1 className="massages-main-title">Тренажерна Методика</h1>
            <p className="massages-description">
              Це сучасний та ефективний підхід до розвитку інтимних м'язів, заснований на поєднанні давніх знань та сучасних технологій. Використання спеціалізованих тренажерів, таких як вагінальні кульки або яйця з натурального каменю, дозволяє точно та безпечно пропрацьовувати м'язи тазового дна, досягаючи результатів значно швидше.
            </p>
          </section>

          <section className="benefits-section">
            <h2 className="section-title">Переваги методики</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div className="benefit-card" key={index} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}> {/* Додав анімаційну затримку */}
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-text">{benefit.text}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="gallery-section">
            <h2 className="section-title">Як це виглядає</h2>
            <div className="image-gallery">
                <div className="image-card-massages large-card" style={{ animationDelay: "0.5s" }}>
                    <img src="/tren1.jpg" alt="Тренажерна методика з нефритовим яйцем для інтимних м'язів" loading="lazy" />
                </div>
                <div className="image-card-massages" style={{ animationDelay: "0.6s" }}>
                    <img src="/tren2.jpg" alt="Різноманітні тренажери для інтимного фітнесу та зміцнення тазового дна" loading="lazy" />
                </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Massages;