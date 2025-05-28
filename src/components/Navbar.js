import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Закриваємо меню при кліку на посилання
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  // Додаємо тінь до Navbar при скролі
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src="/logo.PNG" alt="La Mirage Studio Logo" />
        </Link>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleLinkClick}>
              Головна
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/massages" className={`nav-link ${location.pathname === '/massages' ? 'active' : ''}`} onClick={handleLinkClick}>
              Тренажери
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/yoni-massage" className={`nav-link ${location.pathname === '/yoni-massage' ? 'active' : ''}`} onClick={handleLinkClick}>
                Йоні Масаж
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`} onClick={handleLinkClick}>
              Курси
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link contact-button ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;