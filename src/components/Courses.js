import React, { useEffect, useMemo, useState } from 'react';
import {
  Sparkles,
  Heart,
  Star,
  Zap,
  TrendingUp,
  Calendar,
  MessageCircle,
  ArrowRight,
  Copy,
  Check,
  CreditCard,
  Smartphone,
  Send,
  Lock,
  Tag
} from 'lucide-react';
import './Courses.scss';

const Courses = () => {
  const TELEGRAM = 'https://t.me/myroslavarudenko';
  const startDateText = '26 жовтня';
  const HOST_IMAGE = '/Mira.jpg';

  const [copiedKey, setCopiedKey] = useState('');
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  const banks = useMemo(
    () => ({
      mono: {
        name: 'Моно Банк',
        card: '4441114440819884'
      },
      privat: {
        name: 'Приват Банк',
        card: '5457082279380245'
      }
    }),
    []
  );

  const formatCard = (c) => c.replace(/\s+/g, '').replace(/(.{4})/g, '$1 ').trim();

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 1500);
    } catch {}
  };

  const handleOpenTelegram = () => {
    window.open(TELEGRAM, '_blank', 'noopener,noreferrer');
  };

  const nextPriceRise = () => {
    const now = new Date();
    const day = now.getDay();
    const diff = (7 - day) % 7;
    const target = new Date(now);
    target.setDate(now.getDate() + (diff === 0 ? 7 : diff));
    target.setHours(23, 59, 59, 999);
    return target;
  };

  useEffect(() => {
    const updateTimer = () => {
      const target = nextPriceRise().getTime();
      const now = Date.now();
      let delta = Math.max(0, target - now);
      const d = Math.floor(delta / (1000 * 60 * 60 * 24));
      delta -= d * 24 * 60 * 60 * 1000;
      const h = Math.floor(delta / (1000 * 60 * 60));
      delta -= h * 60 * 60 * 1000;
      const m = Math.floor(delta / (1000 * 60));
      delta -= m * 60 * 1000;
      const s = Math.floor(delta / 1000);
      setTimeLeft({
        d: String(d).padStart(2, '0'),
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0')
      });
    };
    updateTimer();
    const i = setInterval(updateTimer, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="courses-page-container">
      <div className="courses-wrapper">
        <section className="hero-main">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>12 днів активації грошового потоку</span>
              </div>
              
              <h1 className="hero-title">Оргазм грошей</h1>
              
              <p className="hero-subtitle">
                Тілесні практики, трансформаційні квантові медитації у стилі Delta Vortex та спеціальні дії, які ведуть до створення більших сум грошей.
              </p>

              <div className="hero-features">
                <div className="hero-feature">
                  <div className="feature-icon">💸</div>
                  <span>Практики на прийняття, вдячність і рух грошей</span>
                </div>
                <div className="hero-feature">
                  <div className="feature-icon">🔥</div>
                  <span>Вправи з інтимними м'язами та грошові коди</span>
                </div>
              </div>

              <div className="hero-host-info">
                <div className="host-avatar">
                  <img src={HOST_IMAGE} alt="Мирослава Руденко" />
                </div>
                <div className="host-text">
                  <p className="host-name-small">Мирослава Руденко</p>
                </div>
              </div>

              <a href="#payment" className="btn-primary btn-hero">
                Увійти в потік грошей <ArrowRight size={20} />
              </a>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <div className="hero-image-wrapper">
                <img 
                  src={HOST_IMAGE} 
                  alt="Мирослава Руденко"
                  className="hero-image"
                />
              </div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </section>

        <section className="info-cards">
          <div className="info-card">
            <div className="info-icon info-icon-calendar">
              <Calendar size={24} />
            </div>
            <div className="info-body">
              <div className="info-label">Старт</div>
              <div className="info-value">{startDateText}</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon info-icon-message">
              <MessageCircle size={24} />
            </div>
            <div className="info-body">
              <div className="info-label">Формат</div>
              <div className="info-value">Telegram-челендж</div>
            </div>
          </div>
          <div className="info-card info-accent">
            <div className="info-icon info-icon-trend">
              <TrendingUp size={24} />
            </div>
            <div className="info-grow">
              <div className="info-label">Вартість зростає щотижня</div>
              <div className="timer">
                <div className="tbox">
                  <span>{timeLeft.d}</span>
                  <small>дн</small>
                </div>
                <div className="tsep">:</div>
                <div className="tbox">
                  <span>{timeLeft.h}</span>
                  <small>год</small>
                </div>
                <div className="tsep">:</div>
                <div className="tbox">
                  <span>{timeLeft.m}</span>
                  <small>хв</small>
                </div>
                <div className="tsep">:</div>
                <div className="tbox">
                  <span>{timeLeft.s}</span>
                  <small>с</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2 className="about-title">Ваше тіло — головний магніт для грошей</h2>
            <p className="about-text">
              Стан, в якому ви перебуваєте, визначає фінансовий потік. Ми активуємо сексуальну енергію, знімаємо блоки і запускаємо потік отримання через авторські практики Delta Vortex.
            </p>
          </div>
        </section>

        <section className="value-grid">
          <div className="value-card">
            <div className="value-icon">
              <Heart size={28} />
            </div>
            <h4>Ваше тіло — магніт для грошей</h4>
            <p>Стан, в якому ви перебуваєте, визначає фінансовий потік. Навчимося керувати ним.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <Zap size={28} />
            </div>
            <h4>Активація сексуальної енергії</h4>
            <p>Зняття блоків та запуск потоку отримання через роботу з тілом.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <Star size={28} />
            </div>
            <h4>Грошові коди в практики</h4>
            <p>Інтеграція кодів, завдяки яким створите потрібні суми грошей.</p>
          </div>
        </section>

        <section id="payment" className="payment-section">
          <div className="section-head">
            <h3>Приєднатися до челенджу</h3>
            <p>Оберіть зручний банк для оплати. Після переказу скиньте, будь ласка, скрін в Telegram.</p>
          </div>

          <div className="price-showcase">
            <div className="price-badge-top">
              <Tag size={20} />
              <span>Спеціальна ціна</span>
            </div>
            <div className="price-container">
              <div className="old-price">2500 ₴</div>
              <div className="new-price">1111 ₴</div>
            </div>
            <div className="price-discount">
              <span className="discount-badge">-56% знижка</span>
              <span className="save-text">Ви економите 1389 грн</span>
            </div>
          </div>

          <div className="payment-cards">
            <div className="payment-card">
              <div className="card-header">
                <Smartphone size={24} />
                <span className="card-bank">Моно Банк</span>
              </div>
              <div className="card-number-row">
                <span className="card-number">{formatCard(banks.mono.card)}</span>
                <button
                  className={`copy-btn ${copiedKey === 'mono' ? 'copied' : ''}`}
                  onClick={() => handleCopy('mono', banks.mono.card)}
                  title="Скопіювати номер картки"
                >
                  {copiedKey === 'mono' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <div className="card-amount">
                <span className="amount-label">Сума до сплати:</span>
                <span className="amount-value">1111 ₴</span>
              </div>
            </div>

            <div className="payment-card">
              <div className="card-header">
                <CreditCard size={24} />
                <span className="card-bank">Приват Банк</span>
              </div>
              <div className="card-number-row">
                <span className="card-number">{formatCard(banks.privat.card)}</span>
                <button
                  className={`copy-btn ${copiedKey === 'privat' ? 'copied' : ''}`}
                  onClick={() => handleCopy('privat', banks.privat.card)}
                  title="Скопіювати номер картки"
                >
                  {copiedKey === 'privat' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <div className="card-amount">
                <span className="amount-label">Сума до сплати:</span>
                <span className="amount-value">1111 ₴</span>
              </div>
            </div>
          </div>

          <div className="telegram-action">
            <button className="btn-telegram" onClick={handleOpenTelegram}>
              <Send size={20} />
              Надіслати скрін в Telegram
            </button>
          </div>

          <div className="payment-footer">
            <div className="secure-badge">
              <Lock size={16} />
              <span>Безпечна оплата • Дані не зберігаються</span>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-content">
            <div className="cta-icon">
              <Sparkles size={32} />
            </div>
            <h3>Готові увійти в потік грошей?</h3>
            <p>Приєднуйтесь до челенджу та відчуйте трансформацію вже з перших днів</p>
            <button
              className="btn-primary btn-cta"
              onClick={() => {
                const paymentSection = document.getElementById('payment');
                if (paymentSection) {
                  paymentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              Приєднатися зараз <ArrowRight size={22} />
            </button>
          </div>
        </section>
      </div>

      <div aria-live="polite" className={`copy-toast ${copiedKey ? 'show' : ''}`}>
        <Check size={18} />
        <span>Скопійовано</span>
      </div>
    </div>
  );
};

export default Courses;