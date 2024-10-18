import React, { useState } from 'react';
import 'css/header.css';

function Header({ visible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  };

  return (
    <header style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className="container">
        <div className="header-content">
          <div className="logo">rgmazon.</div>
          <nav>
            <ul className={isMenuOpen ? 'show' : ''}>
              <li><a href="#home" onClick={handleNavClick}>Home</a></li>
              <li><a href="#about" onClick={handleNavClick}>About</a></li>
              {/* <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
              <li><a href="#education" onClick={handleNavClick}>Education</a></li> */}
              <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            </ul>
          </nav>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;