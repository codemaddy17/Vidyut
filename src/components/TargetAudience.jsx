import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TargetAudience() {
  const reveal = useScrollReveal('reveal-stagger');

  const audiences = [
    {
      type: 'State Grid Operators',
      title: 'SLDCs and Regional Load Dispatch Centers',
      desc: 'Real-time curtailment forecasts and congestion maps for dispatch engineers managing state-level power balancing.',
      icon: (
        <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" />
        </svg>
      )
    },
    {
      type: 'Power Distribution Companies',
      title: 'DISCOMs across Indian States',
      desc: 'Transmission loss localization and feeder-level analytics to reduce AT&C losses and improve billing efficiency.',
      icon: (
        <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      type: 'Renewable Energy Developers',
      title: 'Solar & Wind Project Companies',
      desc: 'Understand grid absorption capacity at interconnection points before committing capital to new generation projects.',
      icon: (
        <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )
    },
    {
      type: 'Energy Policy & Regulation',
      title: 'CERC, SERCs, and Planning Commissions',
      desc: 'Evidence-based grid intelligence for regulatory filings, tariff setting, and long-range transmission planning.',
      icon: (
        <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
      )
    }
  ];

  return (
    <section className="audience-section">
      <div className="section-label">Built For</div>
      <div className={`audience-grid ${reveal.className}`} ref={reveal.ref}>
        {audiences.map((a, idx) => (
          <div className="audience-card" key={idx}>
            <div className="audience-icon-row">
              {a.icon}
              <span className="audience-type">{a.type}</span>
            </div>
            <h3 className="audience-title">{a.title}</h3>
            <p className="audience-desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
