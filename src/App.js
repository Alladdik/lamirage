import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Massages from './components/Massages';
import Courses from './components/Courses';
import YoniMassage from './components/YoniMassage';
import Contact from './components/Contact';
import Logo from './components/Logo';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding-top: 80px; // Щоб контент не перекривався з Navbar
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333; // Або будь-який інший колір, який підходить до вашого дизайну
  padding: 10px 20px;
`;
function App() {
  return (
    <Router>
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/yoni-massage" element={<YoniMassage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;

