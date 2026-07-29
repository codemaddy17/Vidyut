import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-bar">
      <NavLink to="/" className="brand-logo-group" onClick={() => setMenuOpen(false)}>
        <img
          src="/assets/vidyut-logo.png"
          alt="Vidyut"
          className="brand-logo-img"
        />
      </NavLink>

      {/* Desktop nav */}
      <nav className="header-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
        >
          About
        </NavLink>
        <NavLink
          to="/investors"
          className={({ isActive }) => `nav-link nav-link--cta ${isActive ? 'nav-link--active' : ''}`}
        >
          For Investors
        </NavLink>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <NavLink to="/" end className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/investors" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>For Investors</NavLink>
        </div>
      )}
    </header>
  );
}
