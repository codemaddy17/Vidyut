import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function GridMetrics() {
  const reveal = useScrollReveal('reveal-stagger');

  const metrics = [
    { value: '17.1%', unit: 'Curtailed', label: 'RE generation lost to grid congestion in peak regions, 2024-25' },
    { value: '225', unit: 'GW Target', label: 'Renewable capacity goal under India\'s national energy strategy' },
    { value: '33', unit: 'SLDCs', label: 'State-level dispatch centers managing grid operations nationwide' },
    { value: '<15ms', unit: 'Latency', label: 'Near real-time inference on grid state for actionable dispatch' }
  ];

  return (
    <section className="metrics-section">
      <div className="section-label">India Grid Intelligence at a Glance</div>
      <div className={`metrics-grid ${reveal.className}`} ref={reveal.ref}>
        {metrics.map((m, i) => (
          <div className="metric-card" key={i}>
            <span className="metric-value">{m.value}</span>
            <span className="metric-unit">{m.unit}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
