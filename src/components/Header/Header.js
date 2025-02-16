// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/library" className="header-button left">Library</Link>
      <Link to="/" className="header-button center">Home</Link>
      <Link to="/filters" className="header-button right">Filters</Link>
    </header>
  );
}

export default Header;
