import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';

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
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
        Made with <img src={PUBLIC_URL + "/images/molecule-foot.png"} /> by Shelley McHardy
        <a href="https://github.com/shelleymcq" target="_blank" rel="noopener noreferrer"><img src={PUBLIC_URL + "/images/icons/github-icon.png"} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/shelleymchardy/" target="_blank" rel="noopener noreferrer"><img src={PUBLIC_URL + "/images/icons/linkedin-icon.png"} alt="linkedin icon" /></a>
        <a href="mailto:shelleymcq.dev@gmail.com"><img src={PUBLIC_URL + "/images/icons/email-icon.png"} alt="email icon" /></a>
      </footer>
    </div>
  );
}
