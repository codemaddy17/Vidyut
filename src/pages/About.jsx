import React from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import { useScrollReveal } from '../hooks/useScrollReveal';

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function TeamCard({ initials, name, role, tags, bullets }) {
  const reveal = useScrollReveal();
  return (
    <div className={`team-card ${reveal.className}`} ref={reveal.ref}>
      <div className="team-avatar">{initials}</div>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
        <ul className="team-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

function ValuePillar({ number, title, body }) {
  const reveal = useScrollReveal();
  return (
    <div className={`value-pillar ${reveal.className}`} ref={reveal.ref}>
      <span className="value-number">{number}</span>
      <h3 className="value-title">{title}</h3>
      <p className="value-body">{body}</p>
    </div>
  );
}

function ProductCard({ number, title, tagline, stages }) {
  const reveal = useScrollReveal();
  return (
    <div className={`product-card ${reveal.className}`} ref={reveal.ref}>
      <div className="product-card-header">
        <span className="product-number">Product {number}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-tagline">{tagline}</p>
      </div>
      <div className="product-stages">
        {stages.map((s, i) => (
          <div className="product-stage" key={i}>
            <span className="product-stage-label">{s.step}</span>
            <div className="product-stage-content">
              <span className="product-stage-name">{s.name}</span>
              <span className={`product-stage-tag ${s.isAI ? 'product-stage-tag--ai' : ''}`}>
                {s.tag}
              </span>
              <p className="product-stage-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const team = [
  {
    initials: 'AS',
    name: 'Aashna Suman',
    role: 'Co-founder — AI / ML & Research',
    bullets: [
      'Published anomaly-detection framework (IMMUNE) — the same core technique behind Product 2\'s detection layer',
      'Prior research spanning graph-based systems and RL-based decision models in the energy domain',
      'Four published research papers; concurrent AI specialization alongside CS degree',
    ],
  },
  {
    initials: 'MT',
    name: 'Madhav Tiwari',
    role: 'Co-founder — Product Engineering & Design',
    bullets: [
      'iOS and web development — builds the live dashboard and field-technician app in-house from day one',
      'Photography and visual design background — brings genuine product polish, rare in grid-tech tooling',
      'Covers the full delivery layer without depending on outside technical hires',
    ],
  },
];

const values = [
  {
    number: '01',
    title: 'Graph-Native, Not Per-Node',
    body: 'The grid is modeled as an actual graph with real topology. A bottleneck or anomaly is a network event, not an isolated point statistic.',
  },
  {
    number: '02',
    title: 'Prediction, Not Detection',
    body: 'We forecast where and when a problem will occur — giving operators time to act — instead of lighting up a dashboard after the fact.',
  },
  {
    number: '03',
    title: 'Localization, Not Just Flagging',
    body: 'We pinpoint the physical origin of an anomaly using topology — the far harder, far less commoditized problem versus simple meter flagging.',
  },
  {
    number: '04',
    title: 'Compounding Accuracy',
    body: 'Field-confirmed feedback retrains both models continuously. Accuracy improves with every deployment instead of staying static.',
  },
];

const products = [
  {
    number: '1',
    title: 'Curtailment Prediction',
    tagline: 'Forecasts where and when a renewable bottleneck will occur — ahead of time — so operators can reroute, store, or trade power instead of switching it off.',
    stages: [
      {
        step: '1. Sense', name: 'Hardware', tag: 'No AI', isAI: false,
        desc: 'A clamp-on sensor + micro-weather inputs stream live grid and generation data continuously. This is the live-monitoring foundation.',
      },
      {
        step: '2. Predict', name: 'Core IP', tag: 'AI — This is the product', isAI: true,
        desc: 'A temporal Graph Neural Network models the grid as a graph — substations as nodes, lines as capacity-weighted edges — learning how load and generation propagate to forecast where and when curtailment will hit.',
      },
      {
        step: '3. Deliver', name: 'Software', tag: 'No AI', isAI: false,
        desc: 'Live dashboard shows real-time readings plus forecasted bottlenecks and alerts, with a track record of predicted-vs-actual outcomes.',
      },
    ],
  },
  {
    number: '2',
    title: 'Fault & Theft Localization',
    tagline: 'Infers the physical origin point of a fault or theft from correlated anomaly signals — not just flagging that something looks wrong.',
    stages: [
      {
        step: '1. Sense', name: 'Hardware', tag: 'No AI', isAI: false,
        desc: 'A clamp-on CT sensor at transformer/meter clusters streams live voltage & current data — the same live-monitoring foundation, reused across the low-voltage network.',
      },
      {
        step: '2. Predict', name: 'Core IP', tag: 'AI — This is the product', isAI: true,
        desc: 'An anomaly detection model (autoencoder / isolation forest) flags unusual patterns; a graph-based localization model triangulates the true origin point from correlated signals using real network topology.',
      },
      {
        step: '3. Deliver', name: 'Software + Feedback', tag: 'No AI', isAI: false,
        desc: 'Dashboard flags the location on the network map; field technicians confirm or reject via mobile app, and that feedback retrains both models over time.',
      },
    ],
  },
];

export default function About() {
  const heroReveal = useScrollReveal();
  const missionReveal = useScrollReveal();

  return (
    <div className="page-enter--visible">
      <BackgroundGrid />
      <div className="content-wrapper">

        {/* ── Hero ── */}
        <section className={`about-hero ${heroReveal.className}`} ref={heroReveal.ref}>
          <p className="section-label">About Vidyut</p>
          <h1 className="about-title">
            Built for the grid.<br />Designed for India.
          </h1>
          <p className="about-lead">
            Vidyut is an AI-native grid intelligence platform — a sensor-to-dashboard system
            with two AI products: one predicts where and when renewable power will be wasted,
            the other pinpoints exactly where on the grid energy is being lost to faults or theft.
          </p>
        </section>

        {/* ── One-Line Pitch ── */}
        <section className={`about-mission ${missionReveal.className}`} ref={missionReveal.ref}>
          <SectionLabel>The Problem We Are Solving</SectionLabel>
          <blockquote className="mission-quote">
            India's grid is leaking money in two directions at once — and existing tools are
            blind to both, because they monitor each substation or meter in isolation.
            Curtailment and theft are network phenomena. Our models reason over the network.
          </blockquote>
          <div className="problem-stat-row">
            <div className="problem-stat">
              <span className="problem-stat-number">2.1 TWh</span>
              <span className="problem-stat-label">of clean electricity curtailed in FY 2025-26 — roughly ₹629 crore in foregone revenue — to keep coal plants running at minimum load.</span>
            </div>
            <div className="problem-stat">
              <span className="problem-stat-number">22.5%</span>
              <span className="problem-stat-label">technical losses on distribution networks — well above the 5–10% global benchmark — plus tens of billions in annual theft losses.</span>
            </div>
          </div>
        </section>

        {/* ── Products ── */}
        <section className="about-products-section">
          <SectionLabel>One Pipeline, Two AI Products</SectionLabel>
          <p className="about-lead" style={{ marginBottom: '1.5rem' }}>
            Both products share the same physical pipeline: Sense → Predict → Deliver.
            The hardware sensor and dashboard are the input/output layers — not standalone products.
            The two AI models in the middle are the product.
          </p>
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.number} {...p} />
            ))}
          </div>
        </section>

        {/* ── Why Defensible ── */}
        <section className="about-values-section">
          <SectionLabel>Why This Is Defensible AI</SectionLabel>
          <p className="about-lead" style={{ marginBottom: '1.5rem' }}>
            Only the middle stage — Predict — is where genuinely hard, defensible ML work happens.
            When asked "where's the AI," the answer points at exactly two models.
          </p>
          <div className="values-grid">
            {values.map((v) => (
              <ValuePillar key={v.number} {...v} />
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="about-team-section">
          <SectionLabel>The Founders</SectionLabel>
          <p className="about-lead" style={{ marginBottom: '1.5rem' }}>
            Two B.Tech founders, close enough to the technical layer to build the core models
            and product ourselves — and committed fully to one problem.
          </p>
          <div className="team-grid">
            {team.map((t) => (
              <TeamCard key={t.name} {...t} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
