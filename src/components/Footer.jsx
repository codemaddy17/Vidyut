import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-left">
        <img
          src="/assets/vidyut-logo.png"
          alt="Vidyut"
          className="footer-logo-img"
        />
        <p className="founders-names">
          Founders: <strong>Aashna Suman</strong> & <strong>Madhav Tiwari</strong>
        </p>
      </div>
      <div className="footer-right">
        <p>© 2026 Vidyut. All rights reserved.</p>
      </div>
    </footer>
  );
}
