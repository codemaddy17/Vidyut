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
            The country will install over 225 GW of solar and wind by 2030. But transmission
            infrastructure and state dispatch systems were designed for predictable, coal-heavy
            generation. Renewable output fluctuates by the hour, and most grid operators today
            lack the tooling to forecast where surplus will occur or which transmission corridors
            will become saturated.
          </p>
          <div className="stat-highlight">
            <span className="stat-number">$5.4B</span>
            <span className="stat-context">estimated annual economic value<br />of curtailed renewable energy in India</span>
          </div>
        </div>
        <div className={`problem-column ${rightReveal.className}`} ref={rightReveal.ref}>
          <h2 className="problem-column-title">
            Transmission losses remain opaque and expensive
          </h2>
          <p className="problem-column-body">
            Aggregate technical and commercial losses across Indian DISCOMs exceed 17%. Much of
            this is concentrated in a small number of feeders, transformer clusters, and regional
            interconnects. Identifying the precise points of loss requires combining SCADA telemetry,
            weather forecasts, and physics-aware ML models at a resolution that existing SLDC
            software cannot provide.
          </p>
          <div className="stat-highlight">
            <span className="stat-number">17%+</span>
            <span className="stat-context">aggregate T&D losses across<br />India's distribution network</span>
          </div>
        </div>
      </div>
    </section>
  );
}
