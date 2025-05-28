import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, Star, Instagram, X, BookOpen, MessageSquare, Sparkles, Shield, Zap, Quote, ChevronDown, ChevronUp, Gift, Sun, Moon } from 'lucide-react';
import Preloader from './Preloader/Preloader'; // <--- ДОДАНО: Імпорт Preloader (перевір шлях!)
import './Home.scss';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Стан для розкриття додаткового тексту про послуги
  const [expandedService, setExpandedService] = useState(null);

  // Ефект паралаксу для фону (залишаємо)
  useEffect(() => {
    const overlay = document.querySelector('.home-background-overlay');
    // Додана перевірка, чи елемент існує, перед маніпуляцією
    if (!overlay) {
        // console.warn('.home-background-overlay not found for parallax effect.');
        return;
    }
    
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * -0.015;
      const y = (e.clientY - window.innerHeight / 2) * -0.015;
      overlay.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Блокування скролу, коли модальне вікно відкрите (залишаємо)
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  // Послуги тепер з коротким описом, який можна розкрити
  const servicesData = [
    { 
      id: "fitness", 
      name: "Інтимний фітнес", 
      icon: <Heart size={20} className="service-icon-inline"/>, 
      short_desc: "Пробудження чуттєвості, здоров'я та впевненості.",
      full_desc: "Комплексні тренування для зміцнення інтимних м'язів, покращення сексуального життя та жіночого здоров'я. Відкрийте нові грані задоволення та контролю над своїм тілом." 
    },
    { 
      id: "sexology", 
      name: "Сексолог", 
      icon: <Sparkles size={20} className="service-icon-inline"/>, 
      short_desc: "Гармонія у стосунках та з собою.",
      full_desc: "Консультації для вирішення особистих та парних питань сексуального характеру. Допомагаю знайти гармонію, зрозуміти себе та партнера, та побудувати щасливі стосунки." 
    },
    { 
      id: "energy", 
      name: "Енергопрактик", 
      icon: <Zap size={20} className="service-icon-inline"/>, 
      short_desc: "Відновлення балансу та життєвої сили.",
      full_desc: "Практики для роботи з енергетичним полем, зняття блоків, відновлення життєвої енергії та досягнення внутрішнього спокою. Дозвольте енергії текти вільно." 
    },
    { 
      id: "health", 
      name: "Здоров'я", 
      icon: <Shield size={20} className="service-icon-inline"/>, 
      short_desc: "Турбота про тіло як храм душі.",
      full_desc: "Цілісний підхід до фізичного благополуччя через масажні техніки, рекомендації щодо способу життя та практики, що зміцнюють тіло та дух." 
    },
    { 
      id: "beauty", 
      name: "Краса", 
      icon: <Sun size={20} className="service-icon-inline"/>, 
      short_desc: "Розкриття вашої природної привабливості.",
      full_desc: "Процедури та практики, спрямовані на омолодження, покращення стану шкіри та розкриття вашої внутрішньої та зовнішньої краси. Сяйте зсередини!" 
    }
  ];

  const stats = [
    { icon: <Heart size={36} />, value: "22", label: "Роки глибокої практики та досвіду" },
    { icon: <Users size={36} />, value: "5000+", label: "Щасливих клієнток, що змінили життя" },
    { icon: <Award size={36} />, value: "30+", label: "Сертифікатів та дипломів майстра" },
    { icon: <Star size={36} />, value: "5.0", label: "Бездоганна репутація та відгуки" }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Після сесії з Мирославою я ніби народилася наново. Пішли блоки, про які я навіть не здогадувалася. Це значно більше, ніж масаж, це справжнє зцілення душі та тіла! Відчуваю легкість та неймовірний прилив енергії.",
      author: "",
      stars: 5
    },
    {
      id: 2,
      text: "Ніколи не думала, що моє тіло здатне на такі яскраві відчуття. Курс з інтимного фітнесу — це найкраща інвестиція в себе та свої стосунки. Мирослава — справжній професіонал і дуже чутлива людина.",
      author: "", 
      stars: 5
    },
    {
      id: 3,
      text: "Дельта Вортекс – це щось космічне! Таких глибоких трансформацій я не відчувала ніде. Мирослава майстерно веде через процес, і результати просто вражають. Знайшла нову роботу і гармонію в сім'ї!",
      author: "", 
      stars: 5
    }
  ];
  
  const toggleServiceDescription = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  // Плавний скрол до секції при кліку (залишаємо, хоча кнопка була видалена з JSX)
  // Якщо кнопка повернеться, ця функція буде потрібна.
  const scrollToStats = () => {
     const statsSection = document.getElementById('stats-section');
     if (statsSection) { // Перевірка, чи елемент існує
        statsSection.scrollIntoView({ behavior: 'smooth' });
     }
  };


  return (
    <>
      <Preloader minDisplayTime={1200} /> {/* Ось тут ми додаємо Preloader */}
      
      <div className="home-container">
        <div className="home-background-overlay" />
        <div className="home-content-wrapper">
          
          {/* --- СЕКЦІЯ 1: ЗНАЙОМСТВО --- */}
          <section className="profile-section">
            <div className="profile-image-container">
              <img src="/me.png" alt="Мирослава Руденко - Експерт з жіночого здоров'я та енергопрактик" className="profile-image" />
            </div>
            <h1 className="profile-title">Мирослава Руденко</h1>
            <p className="profile-tagline">Творець простору любові, здоров'я та насолоди</p>
            
            {/* Оновлена "карусель" послуг - тепер це інтерактивний список */}
            <div className="services-preview-section">
              <h2 className="services-preview-title">Мої ключові напрямки:</h2>
              {servicesData.map(service => (
                <div key={service.id} className="service-preview-item">
                  <div className="service-preview-header" onClick={() => toggleServiceDescription(service.id)} aria-expanded={expandedService === service.id} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleServiceDescription(service.id)}>
                    {service.icon}
                    <span>{service.name} - <span className="service-short-desc">{service.short_desc}</span></span>
                    {expandedService === service.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {expandedService === service.id && (
                    <div className="service-full-desc-wrapper"> {/* Додано обгортку для кращої анімації */}
                        <p className="service-full-desc">{service.full_desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="profile-description main-promise">
              Я тут, щоб допомогти тобі пробудити твою <strong>внутрішню богиню</strong>, відновити зв'язок із тілом та відкрити безмежне джерело енергії та задоволення, що живе в тобі.
            </p>
            <div className="profile-actions">
                <button className="about-me-button main-cta-button" onClick={() => setIsModalOpen(true)}>
                    Моя Історія та Місія
                </button>
                {/* Кнопка скролу була видалена, але функція scrollToStats залишена про всяк випадок */}
                {/* Якщо захочеш повернути кнопку, розкоментуй:
                <button className="scroll-down-button" onClick={scrollToStats} aria-label="Дізнатись більше">
                     ↓
                </button>
                */}
            </div>
          </section>

          {/* --- СЕКЦІЯ 2: ДОВІРА (СОЦІАЛЬНИЙ ДОКАЗ) --- */}
          <section id="stats-section" className="stats-grid-container">
            <h2 className="section-title stats-title">Моя Практика в Цифрах та Фактах:</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* --- СЕКЦІЯ 3: ВІДГУКИ (ЕМОЦІЙНИЙ ЗВ'ЯЗОК) --- */}
          <section className="testimonial-section">
            <h2 className="section-title">Історії Трансформацій Моїх Клієнток</h2>
            <div className="testimonial-wrapper">
              {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id} style={{ animationDelay: `${testimonial.id * 0.12}s` }}> {/* Трохи збільшив затримку для плавності */}
                  <Quote className="testimonial-quote-icon" />
                  <div className="testimonial-stars">
                      {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={18} className="star-filled"/>)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">- {testimonial.author}</p>
                </div>
              ))}
            </div>
            <p className="testimonial-cta">Маєте свою історію перевтілення? <Link to="/contact">Поділіться нею зі мною!</Link></p>
          </section>

          {/* --- СЕКЦІЯ 4: ЗАКЛИК ДО ДІЇ (CTA) --- */}
          <section className="cta-section">
            <h2 className="section-title">Зроби Крок до Нової Себе:</h2>
            <div className="cta-grid">
                <div className="cta-card" style={{ animationDelay: "0.1s" }}>
                  <div className="cta-icon"><BookOpen size={36}/></div>
                  <h3 className="cta-title">Авторські Курси та Програми</h3>
                  <p className="cta-description">
                    Глибокі онлайн-програми, де я крок за кроком проведу тебе до розкриття жіночності, сексуальності та здоров'я. Кожен курс — це концентрат мого досвіду та унікальних методик.
                  </p>
                  <Link to="/courses" className="cta-button">Дізнатися більше про курси</Link>
                </div>
                <div className="cta-card" style={{ animationDelay: "0.2s" }}>
                  <div className="cta-icon"><MessageSquare size={36}/></div>
                  <h3 className="cta-title">Особиста Консультація</h3>
                  <p className="cta-description">
                    Якщо ти готова до індивідуальної роботи, глибокого занурення та персонального підходу — я тут для тебе. Запишись на консультацію або сеанс, і ми разом знайдемо шлях до твоїх цілей.
                  </p>
                  <Link to="/contact" className="cta-button">Записатися на консультацію</Link>
                </div>
                <div className="cta-card cta-card-special" style={{ animationDelay: "0.3s" }}>
                  <div className="cta-icon"><Gift size={36}/></div>
                  <h3 className="cta-title">Енергія як Подарунок</h3>
                  <p className="cta-description">
                    Відкрий для себе світ енергопрактик. Це не магія, а наука про те, як твій внутрішній стан формує зовнішню реальність. Подаруй собі оновлення на всіх рівнях!
                  </p>
                  <a href="https://www.instagram.com/lamirage_studio/" target="_blank" rel="noopener noreferrer" className="cta-button">
                    <Instagram size={20}/> Слідкуй за новинами
                  </a>
                </div>
            </div>
          </section>
        </div>
      </div>

      {/* --- МОДАЛЬНЕ ВІКНО "МОЯ ІСТОРІЯ" --- */}
      {isModalOpen && (
        <div className="about-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-button" onClick={() => setIsModalOpen(false)} aria-label="Закрити модальне вікно">
              <X size={28} />
            </button>
            <img src="/me.png" alt="Мирослава Руденко" className="modal-profile-image"/>
            <h2 className="modal-title">Моя Місія — Ваше Сяйво</h2>
            <p className="modal-subtitle">Всім привіт, я — Мирослава, і моя пристрасть — допомагати жінкам повертати собі себе: свою силу, чуттєвість та здоров'я.</p>
            
            <div className="modal-specialization">
              <span>МАСАЖ</span> • <span>ІМБІЛДІНГ</span> • <span>ЕНЕРГОПРАКТИКИ</span>
            </div>
            <hr className="modal-divider" />

            <div className="modal-section">
              <h4>Мій Шлях та Філософія:</h4>
              <p>Понад 22 роки я досліджую та практикую методи зцілення тіла та духу. Маючи медичну освіту, я поєдную науковий підхід з глибоким розумінням енергетичних процесів. Я вірю, що кожна жінка — це Всесвіт, сповнений неймовірної енергії. Часто ця енергія заблокована стресами, травмами минулого чи суспільними стереотипами. Моє завдання — допомогти тобі м'яко та ефективно зняти ці блоки.</p>
              <p className="modal-quote">
              "Ти можеш довго працювати з психологією, писати афірмації, чекати змін. А можеш одного разу відчути, як твоє тіло відпускає, душа заспокоюється, і простір починає рухатись. Бо коли ти змінюєшся всередині — змінюється реальність навколо. Не магія. Просто енергія знає, куди текти, якщо не заважаєш."
              </p>
            </div>
            <hr className="modal-divider" />

            <div className="modal-section">
              <h4><Sparkles size={20} className="modal-icon"/> Дельта Вортекс: Живі Трансформації</h4>
              <p>Це унікальна енергетична сесія, яка працює глибоко на рівні тіла, поля та енергії. Це не про аналіз розумом, а про відчуття та проживання. Наслідки вражають:</p>
              <ul>
                <li>💎 Відпускання застарілих емоційних блоків та повернення яскравої чутливості.</li>
                <li>💎 Зміцнення зв'язку з жіночим родом та покращення жіночого здоров'я.</li>
                <li>💎 Відкриття потоку достатку: клієнтки знаходять ідеальне житло, отримують більше грошей та подарунків.</li>
              </ul>
            </div>
            <hr className="modal-divider" />

            <div className="modal-section">
              <h4><Zap size={20} className="modal-icon"/> Божественне Вирівнювання: Повернення до Своєї Осі</h4>
              <p>Це потужна енергетична практика, що безконтактно гармонізує тіло на всіх рівнях: фізичному (хребет, таз, плечі), емоційному (старі болі, страхи) та духовному. Ти відчуєш внутрішній центр, пробудження життєвої сили, спокій та ясність.</p>
                <p><strong>Кому варто пройти:</strong> якщо відчуваєш втому, перекоси тіла, болі в спині, втрату орієнтирів, або шукаєш глибокого духовного зцілення.</p>
            </div>
            <hr className="modal-divider" />
            
            <div className="modal-section">
              <h4><Shield size={20} className="modal-icon"/> MTVSS: Клітинне Оновлення та Імунітет</h4>
              <p>Тілесний процес із системи Access Consciousness®, що через м'який дотик активує природні здібності тіла до самозцілення. MTVSS зміцнює імунну систему, оновлює клітини, знімає напруження та енергетичні блоки, викликані стресом чи травмами.</p>
            </div>

            <div className="modal-footer">
              <p>Твій стан = твоя сила. Я тут, щоб стати твоїм провідником до оновлення та щасливого життя.</p>
              <a href="https://www.instagram.com/lamirage_studio/" target="_blank" rel="noopener noreferrer" className="cta-button modal-insta-button">
                <Instagram size={20}/> Більше в Моєму Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;