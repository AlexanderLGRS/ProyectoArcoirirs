import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import FairSection from './Components/FairSection';
import Header from './Components/Header';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutUs />
      <FairSection />
    </React.Fragment>
  );
}
