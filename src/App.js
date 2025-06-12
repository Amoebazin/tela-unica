// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importe seu CSS personalizado

import Header from './components/Header';
import HomeSection from './components/HomeSection';
import HomeSection2 from './components/HomeSection2';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <HomeSection2/>



    </div>
  );
}

export default App;