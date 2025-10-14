import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Припускаю, що Navbar теж в components
import Home from './components/Home';
import Massages from './components/Massages';
import Courses from './components/Courses';
import YoniMassage from './components/YoniMassage';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/yoni-massage" element={<YoniMassage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;