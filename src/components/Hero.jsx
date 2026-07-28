import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ComingSoonBadge() {
  return (
    <div className="badge-coming-soon">
      <span>Coming Soon</span>
      <span>•</span>
      <span>Early Access</span>
    </div>
  );
}

export default function Hero() {
  const reveal = useScrollReveal();

  return (
    <section className={`hero-section ${reveal.className}`} ref={reveal.ref}>
      <ComingSoonBadge />
      <h1 className="hero-title">
        AI-Native Grid Intelligence for India's Renewable Transition
      </h1>
      <p className="hero-description">
        Predicting where renewable power will be wasted. Locating exactly where it's being lost.
      </p>
    </section>
  );
}
