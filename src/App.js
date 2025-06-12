// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importe seu CSS personalizado

import Header from './components/Header';
import HomeSection from './components/HomeSection';
import HomeSection2 from './components/HomeSection2';
import HomeSection3 from './components/HomeSection3';
import HomeSection4 from './components/HomeSection4';
import HomeSection5 from './components/HomeSection5';
import HomeSection6 from './components/HomeSection6';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />

    </div>
  );
}

export default App;