import React, { useState } from 'react';
import { ChevronDown, Heart, Shield, Sun, Droplets, GitCommit } from 'lucide-react';
import './YoniMassage.scss';

const YoniMassage = () => {
  const [openAccordion, setOpenAccordion] = useState('what');

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionData = [
    {
      id: 'what',
      icon: <Heart />,
      title: 'Що таке Йоні Масаж?',
      content: [
        "Йоні (Yoni) — це санскритське слово, що з любов'ю та повагою означає жіночі геніталії. Його перекладають як «священний простір» або «джерело життя». Це не просто частина тіла, а центр жіночої енергії, інтуїції та творчості.",
        "Йоні масаж — це глибока, чуттєва та терапевтична практика, що поєднує ніжний дотик, дихання та свідому увагу. Його мета — не лише фізичне задоволення, а й зцілення емоційних блоків, звільнення від стресу та пробудження вашої природної сексуальної енергії. Це подорож до самопізнання та прийняття свого тіла."
      ]
    },
    {
      id: 'benefits',
      icon: <Sun />,
      title: 'Які переваги я отримаю?',
      content: [
        "<strong>Пробудження чуттєвості:</strong> Поверніть яскраві фарби у своє сексуальне життя та відкрийте нові грані оргазму.",
        "<strong>Емоційне зцілення:</strong> Звільніться від старих образ, страхів та негативного досвіду, що зберігаються в тілі.",
        "<strong>Зміцнення здоров'я:</strong> Покращується кровообіг в органах малого тазу, що позитивно впливає на жіноче здоров'я.",
        "<strong>Прийняття себе:</strong> Навчіться любити та приймати своє тіло таким, яке воно є, з усією його унікальною красою.",
        "<strong>Гармонія у стосунках:</strong> Глибше розуміння своєї сексуальності позитивно впливає на близькість з партнером."
      ]
    },
    {
      id: 'expect',
      icon: <Droplets />,
      title: 'Чого очікувати під час сеансу?',
      content: [
        "Сеанс проходить в атмосфері повної довіри, безпеки та конфіденційності. Усе починається з розмови, де ми обговорюємо ваші очікування та встановлюємо межі.",
        "Процес включає розслаблюючий масаж усього тіла, щоб зняти напругу, і лише потім, з вашої повної згоди, майстер переходить до ніжного та шанобливого масажу зони йоні. Основна увага приділяється вашому комфорту, диханню та відчуттям."
      ]
    },
    {
      id: 'precautions',
      icon: <Shield />,
      title: 'Безпека та протипоказання',
      content: [
        "Ваша безпека — мій головний пріоритет. Я маю всі необхідні сертифікати та дотримуюсь найвищих стандартів гігієни.",
        "<strong>Протипоказання:</strong> менструація, вагітність, гострі запальні процеси органів малого тазу, інфекції, що передаються статевим шляхом. Якщо у вас є сумніви, краще проконсультуватися."
      ]
    }
  ];

  return (
    <div className="yoni-page-container">
      <div className="yoni-hero">
        <div className="yoni-hero-overlay"></div>
        <div className="yoni-hero-content">
          <h1 className="yoni-main-title">Мистецтво Йоні Масажу</h1>
          <p className="yoni-subtitle">Шлях до пробудження жіночої енергії, чуттєвості та глибокого зцілення</p>
        </div>
      </div>

      <div className="yoni-content-wrapper">
        <div className="yoni-intro-text">
            <GitCommit className="intro-icon" />
            <p>
                Ця сторінка — ваш гід у світ тантричної практики, яка допомагає жінкам по-новому відкрити себе, своє тіло та свою неймовірну внутрішню силу. Дізнайтеся більше про те, як ця священна подорож може змінити ваше життя.
            </p>
        </div>
        <div className="accordion-container">
          {accordionData.map(item => (
            <div key={item.id} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(item.id)}>
                <div className="header-icon">{item.icon}</div>
                <span className="header-title">{item.title}</span>
                <ChevronDown className={`chevron-icon ${openAccordion === item.id ? 'open' : ''}`} />
              </button>
              <div className={`accordion-content ${openAccordion === item.id ? 'open' : ''}`}>
                <div className="content-inner">
                  {item.content.map((p, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoniMassage;