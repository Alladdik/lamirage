import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Massages from './components/Massages';
import Courses from './components/Courses';
import YoniMassage from './components/YoniMassage';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding-top: 80px; // Забезпечує відступ для фіксованого Navbar

  @media (max-width: 768px) {
    padding-top: 100px; // Збільшуємо відступ для мобільних пристроїв
  }
`;

function App() {
  return (
    <Router>
      <Navbar />
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
