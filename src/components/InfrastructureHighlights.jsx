import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InfrastructureHighlights() {
  const reveal = useScrollReveal('reveal-stagger');

  const items = [
    {
      num: '01',
      title: 'Renewable Curtailment Forecasting',
      desc: 'Physics-informed ML models mapping solar and wind over-generation risks across regional dispatch centers, 4 to 72 hours ahead.'
    },
    {
      num: '02',
      title: 'Transmission Bottleneck Localization',
      desc: 'Identifies the exact feeder lines, transformer thermal limits, and node congestion points most likely to cause grid trips or forced curtailment.'
    },
    {
      num: '03',
      title: 'DISCOM & Utility Decision Support',
      desc: 'Enterprise-grade predictive dispatch advisory built for state power utilities, grid operators, and regional energy companies.'
    }
  ];

  return (
    <section className="highlights-section">
      <div className="section-label">Platform Intelligence Pillars</div>
      <div className={`highlights-grid ${reveal.className}`} ref={reveal.ref}>
        {items.map((item, idx) => (
          <div className="highlight-card" key={idx}>
            <span className="highlight-number">{item.num}</span>
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
