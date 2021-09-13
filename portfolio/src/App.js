import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
