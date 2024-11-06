import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 60px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 5px 0;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: inline-block;

  &:hover {
    color: #ff6600;
    background: rgba(255, 102, 0, 0.1);
  }

  &:hover::before {
    left: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 102, 0, 0.4),
      transparent
    );
    transition: all 0.5s;
  }

  &.active {
    color: #ff6600;
    background: rgba(255, 102, 0, 0.2);
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    width: 100%;
    border-radius: 0;
  }
`;

const ContactButton = styled(NavLink)`
  background: #ff6600;
  color: white;

  &:hover {
    background: #ff8533;
    color: white;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: white;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <Logo src="/logo.PNG" alt="La Mirage Studio Logo" />
        </Link>
        {windowWidth <= 768 && (
          <MenuToggle onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuToggle>
        )}
        <NavItems isOpen={isMenuOpen || windowWidth > 768}>
          <NavItem>
            <NavLink 
              to="/" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => { setActiveLink('home'); setIsMenuOpen(false); }}
            >
              Головна
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/massages" 
              className={activeLink === 'massages' ? 'active' : ''}
              onClick={() => { setActiveLink('massages'); setIsMenuOpen(false); }}
            >
              Масажи
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/courses" 
              className={activeLink === 'courses' ? 'active' : ''}
              onClick={() => { setActiveLink('courses'); setIsMenuOpen(false); }}
            >
              Курси
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/yoni-massage" 
              className={activeLink === 'yoni' ? 'active' : ''}
              onClick={() => { setActiveLink('yoni'); setIsMenuOpen(false); }}
            >
              Йоні масаж
            </NavLink>
          </NavItem>
          <NavItem>
            <ContactButton 
              to="/contact" 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => { setActiveLink('contact'); setIsMenuOpen(false); }}
            >
              Контакти
            </ContactButton>
          </NavItem>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

