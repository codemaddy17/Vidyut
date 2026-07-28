import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HowItWorks() {
  const reveal = useScrollReveal();

  const steps = [
    {
      num: '01',
      title: 'Ingest grid telemetry and weather data',
      desc: 'Vidyut connects to SCADA systems, SLDC dispatch feeds, IMD weather data, and satellite-derived irradiance to build a real-time digital representation of the state grid.'
    },
    {
      num: '02',
      title: 'Run physics-informed inference models',
      desc: 'Our ML pipeline combines power-flow physics with learned patterns from historical dispatch data to forecast renewable curtailment, feeder congestion, and transformer stress across every node.'
    },
    {
      num: '03',
      title: 'Surface actionable dispatch advisories',
      desc: 'Grid operators receive prioritized alerts and recommendations through a clean decision-support interface, showing exactly which corridors need attention and what actions reduce loss.'
    },
    {
      num: '04',
      title: 'Measure, learn, and refine continuously',
      desc: 'Every dispatch cycle feeds back into the model. Accuracy improves with each seasonal pattern, new RE installation, and grid topology change.'
    }
  ];

  return (
    <section className="how-section">
      <div className="section-label">How Vidyut Works</div>
      <div className={`how-steps ${reveal.className}`} ref={reveal.ref}>
        {steps.map((step, idx) => (
          <div className="how-step" key={idx}>
            <span className="how-step-number">{step.num}</span>
            <div className="how-step-content">
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
