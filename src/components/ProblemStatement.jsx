import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProblemStatement() {
  const leftReveal = useScrollReveal('reveal-left');
  const rightReveal = useScrollReveal('reveal-right');

  return (
    <section className="problem-section">
      <div className="section-label">The Problem We Are Solving</div>
      <div className="problem-columns">
        <div className={`problem-column ${leftReveal.className}`} ref={leftReveal.ref}>
          <h2 className="problem-column-title">
            India is adding renewable capacity faster than the grid can absorb it
          </h2>
          <p className="problem-column-body">
            India added roughly 50 GW of renewable capacity in 2025 alone and is targeting 500 GW of non-fossil
            capacity by 2030. But transmission infrastructure and dispatch systems are inflexible.
            Renewable output fluctuates by the hour, and grid operators lack the predictive tooling to forecast
            where surplus will occur or which corridors will saturate.
          </p>
          <div className="stat-highlight">
            <span className="stat-number">2.1 TWh</span>
            <span className="stat-context">of renewable electricity curtailed in FY 2025-26 — roughly ₹629 crore in foregone revenue</span>
          </div>
        </div>
        <div className={`problem-column ${rightReveal.className}`} ref={rightReveal.ref}>
          <h2 className="problem-column-title">
            Transmission and commercial losses remain opaque and expensive
          </h2>
          <p className="problem-column-body">
            Aggregate technical and commercial (AT&C) losses across Indian distribution networks are estimated
            around 22.5% — well above the 5–10% global benchmark. Pinpointing and localizing the physical origin of
            theft or faults requires network-level graph reasoning rather than looking at nodes in isolation.
          </p>
          <div className="stat-highlight">
            <span className="stat-number">22.5%</span>
            <span className="stat-context">estimated distribution losses across India's network, costing tens of billions annually</span>
          </div>
        </div>
      </div>
    </section>
  );
}
