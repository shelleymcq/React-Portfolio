import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
