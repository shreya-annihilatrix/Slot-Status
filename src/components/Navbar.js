import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    console.log("Menu toggle clicked");
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <img src="/image.png" alt="SRM Logo" className="logo" />
        <h2 className="title">
          <span className="full-title">
            National Institute of Technology Jamshedpur
          </span>
          <span className="short-title">NITJSR</span>
        </h2>
        <div
          className="menu-icon"
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === "Enter") toggleMenu();
          }}
        >
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="https://www.nitjsr.ac.in/">Home</a>
        </li>
        <li>
          <a href="https://www.nitjsr.ac.in/Institute/About_NITJSR">About</a>
        </li>
        <li>
          <a href="https://www.nitjsr.ac.in/academic/Academics">Academics</a>
        </li>
        <li>
          <a href="https://www.nitjsr.ac.in/Institute/How_to_Reach">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
