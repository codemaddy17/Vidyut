import React from 'react';

function LightningIcon() {
  return (
    <svg className="lightning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="header-bar">
      <a href="#" className="brand-logo-group">
        <LightningIcon />
        <span className="brand-wordmark">Vidyut</span>
      </a>
      <div className="header-meta">
        <span className="status-dot"></span>
        <span>Enterprise Grid Intelligence</span>
      </div>
    </header>
  );
}
