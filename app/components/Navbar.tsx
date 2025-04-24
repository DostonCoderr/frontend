'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaBook, FaUser, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <span className="logo-icon">🎵</span> Music API
        </Link>

        {/* Hamburger Menu (Mobil uchun) */}
        <div className="menu-icon" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/about-api" className="nav-link" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/api-doc" className="nav-link" onClick={toggleSidebar}>
              API Doc
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/how-can-use" className="nav-link" onClick={toggleSidebar}>
              How Can Use
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about-doston" className="nav-link" onClick={toggleSidebar}>
              About Doston
            </Link>
          </li>
          <li className="nav-item register-btn">
            <Link href="/login" className="nav-link btn-register" onClick={toggleSidebar}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}