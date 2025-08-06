"use client"
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">🍕 Pizza Heaven</div>

      <div
        className={`hamburger ${menuOpen ? 'rotate' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#menu">Menu</a>
        <a href="#order">Order</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
