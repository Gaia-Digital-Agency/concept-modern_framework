import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../assets/image';

const Navbar: React.FC = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for the Services dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Helper to close mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={IMAGES.logo} alt="Brand Logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          
          {/* Dropdown Menu Showcase */}
          <li 
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="dropdown-trigger">
              Services {isDropdownOpen ? '▴' : '▾'}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={closeMenu}><Link to="/">Web Design</Link></li>
                <li onClick={closeMenu}><Link to="/">Brand Strategy</Link></li>
                <li onClick={closeMenu}><Link to="/">Digital Marketing</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;