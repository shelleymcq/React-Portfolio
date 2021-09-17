import React from 'react';
import '../styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#form"
            onClick={() => handlePageChange('Form')}
            className={currentPage === 'Form' ? 'nav-link active' : 'nav-link'}
          >
            contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            about
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            portfolio
          </a>
          
        </li>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            home
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
