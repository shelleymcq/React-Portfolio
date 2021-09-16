import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const {PUBLIC_URL} = process.env;

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Renders component corresponding to current page
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
        Made with <img src={PUBLIC_URL + "/images/molecule-foot.png"} /> by Shelley McHardy
      </footer>
    </div>
  );
}
