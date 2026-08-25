import React from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import { useScrollReveal } from '../hooks/useScrollReveal';

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function InvestorSection({ number, title, children }) {
  const reveal = useScrollReveal();
  return (
    <div className={`investor-block ${reveal.className}`} ref={reveal.ref}>
      <div className="investor-block-header">
        <span className="investor-block-num">{number}</span>
        <h2 className="investor-block-title">{title}</h2>
      </div>
      <div className="investor-block-body">{children}</div>
    </div>
  );
}

function TractionItem({ label, value }) {
  return (
    <div className="traction-item">
      <span className="traction-label">{label}</span>
      <span className="traction-value">{value}</span>
    </div>
  );
}

function MetricCard({ value, unit, label }) {
  const reveal = useScrollReveal();
  return (
    <div className={`metric-card ${reveal.className}`} ref={reveal.ref}>
      <span className="metric-value">{value}</span>
      <span className="metric-unit">{unit}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}

function CompetitorCard({ name, category, gap }) {
  return (
    <div className="competitor-card">
      <span className="competitor-category">{category}</span>
      <h4 className="competitor-name">{name}</h4>
      <p className="competitor-gap">{gap}</p>
    </div>
  );
}

const marketMetrics = [
  {
    value: '50 GW',
    unit: 'Added in 2025',
    label: 'Renewable capacity added in India in 2025 alone — every GW added increases the curtailment problem Vidyut targets.',
  },
  {
    value: '500 GW',
    unit: 'Non-Fossil Target',
    label: 'Non-fossil capacity target by 2030 — requiring an estimated ₹30.5 lakh crore in investment through that period.',
  },
  {
    value: '60+',
    unit: 'DISCOMs',
    label: 'State & private distribution companies under regulatory pressure to cut AT&C losses under ongoing reform programs.',
  },
  {
    value: '25 Cr',
    unit: 'Smart Meters',
    label: 'Smart meters targeted under the national rollout — a live data foundation Vidyut can build directly on top of.',
  },
];

const competitors = [
  {
    category: 'SCADA / AMI Vendors',
    name: 'Grid telemetry & smart-meter infra',
    gap: 'Deliver raw monitoring and connectivity — no predictive layer on top of the data.',
  },
  {
    category: 'Anomaly Analytics Vendors',
    name: 'Meter-level flagging tools',
    gap: 'Flag unusual readings, but stop at detection — no localization, no network reasoning.',
  },
  {
    category: 'Manual Vigilance',
    name: 'Discom raids & field teams',
    gap: 'Physical raids and static heuristics — reactive, labor-intensive, no forecasting whatsoever.',
  },
];

const nextSteps = [
  'Scope the training data pipeline for both core models — confirmed data (SCADA history, past curtailment orders, confirmed theft cases) vs. what must be bootstrapped during a pilot.',
  'Identify 2–3 target discoms or SLDCs for pilot conversations and confirm data-sharing feasibility.',
  'Pressure-test the defensibility claim against published literature on graph-based grid forecasting and anomaly localization — so it survives technical due diligence.',
];

export default function InvestorDeck() {
  const heroReveal = useScrollReveal();

  return (
    <div className="page-enter--visible">
      <BackgroundGrid />
      <div className="content-wrapper">

        {/* ── Hero ── */}
        <section className={`investor-hero ${heroReveal.className}`} ref={heroReveal.ref}>
          <p className="section-label">For Investors — Pre-Seed / AI Founders Lab</p>
          <h1 className="about-title">
            The intelligence layer<br />India's grid doesn't have.
          </h1>
          <p className="about-lead">
            Predicting where renewable power will be wasted. Locating exactly where it's being stolen or lost.
            A sensor-to-dashboard platform with two AI products built on graph-based reasoning over real grid topology.
          </p>
          <a
            href="/Vidyut_Pitch_Deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="investor-cta-btn"
          >
            Download Full Pitch Deck →
          </a>
        </section>

        {/* ── The Problem ── */}
        <InvestorSection number="01" title="The Problem — Two Leaks, One Root Cause">
          <p className="investor-para">
            India's grid is being asked to absorb renewable power faster than it can flexibly manage it,
            while simultaneously losing a large share of revenue to technical and commercial losses.
            Both are large, quantifiable, and currently under-served by AI.
          </p>
          <div className="investor-two-col" style={{ marginTop: '1.25rem' }}>
            <div>
              <h3 className="investor-sub-title">Renewable Curtailment</h3>
              <p className="investor-para">
                Ember's analysis found India curtailed <strong>2.1 TWh</strong> of renewable electricity in
                FY 2025-26 — representing roughly ₹629 crore in foregone revenue — to keep coal plants above
                minimum technical load. In Q4 FY26 alone, roughly 31 GW of renewable capacity was curtailed
                due to transmission constraints, with peak-hour curtailment reaching 4% of solar and wind generation.
              </p>
            </div>
            <div>
              <h3 className="investor-sub-title">Technical & Commercial Losses</h3>
              <p className="investor-para">
                Distribution technical losses in India are estimated at <strong>22.5%</strong> — well above the
                5–10% international benchmark. Industry estimates put annual revenue loss from power theft nationally
                in the tens of billions of dollars. Even well-run private discoms like Adani Electricity, which cut
                AT&C losses to ~4.46% in FY 2025-26, still ran tens of thousands of manual raids to get there.
              </p>
            </div>
          </div>
          <div className="investor-root-cause">
            <span className="investor-root-cause-label">Common Root Cause</span>
            <p className="investor-para">
              Existing tools look at each node (a substation, a meter) in isolation. Neither curtailment nor theft
              is a single-point phenomenon — they are <em>network phenomena</em>. That's the opening for a graph-native approach.
            </p>
          </div>
        </InvestorSection>

        {/* ── The Solution ── */}
        <InvestorSection number="02" title="The Solution — One Pipeline, Two AI Products">
          <p className="investor-para">
            Both products share the same physical pipeline: a clamp-on hardware sensor streams live data,
            a graph-based AI model interprets it, and a live dashboard delivers the result.
            The hardware and dashboard are not separate products — they are how each AI product is delivered.
          </p>
          <div className="pipeline-steps">
            {[
              { step: '1', label: 'Sense', desc: 'Clamp-on hardware sensor streams live voltage, current & weather data continuously.' },
              { step: '2', label: 'Predict', desc: 'Graph-based AI models reason over the grid\'s real topology to forecast and localize.', isAI: true },
              { step: '3', label: 'Deliver', desc: 'Live dashboard + field app show operators exactly what\'s about to go wrong, and where.' },
            ].map((s) => (
              <div className={`pipeline-step ${s.isAI ? 'pipeline-step--ai' : ''}`} key={s.step}>
                <span className="pipeline-step-num">{s.step}</span>
                <div className="pipeline-step-content">
                  <span className="pipeline-step-label">{s.label}</span>
                  <p className="pipeline-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="investor-two-col" style={{ marginTop: '1.5rem' }}>
            <div className="investor-product-block">
              <h3 className="investor-sub-title">Product 1: Curtailment Prediction</h3>
              <p className="investor-para">
                A <strong>temporal Graph Neural Network</strong> models the grid as a graph — substations as nodes,
                transmission lines as capacity-weighted edges — learning how load and generation propagate to
                forecast where and when curtailment will hit, ahead of time.
              </p>
            </div>
            <div className="investor-product-block">
              <h3 className="investor-sub-title">Product 2: Fault & Theft Localization</h3>
              <p className="investor-para">
                An anomaly detection model (autoencoder / isolation forest) flags unusual patterns; a
                <strong> graph-based localization model</strong> then triangulates the true origin point from
                multiple correlated signals using real network topology — not just naming the single worst-looking meter.
              </p>
            </div>
          </div>
        </InvestorSection>

        {/* ── Why Defensible ── */}
        <InvestorSection number="03" title="Why It's Defensible AI — Two Hard ML Problems. Nothing Else.">
          <p className="investor-para">
            Only the middle stage — Predict — is where genuinely hard, defensible ML work happens.
            Sense and Deliver exist to feed that stage better data and get its output in front of a human.
            When asked "where's the AI," the answer points at exactly these two models.
          </p>
          <ul className="investor-list" style={{ marginTop: '0.75rem' }}>
            <li>
              <strong>Graph-native, not per-node:</strong> the grid is modeled as an actual graph — a bottleneck
              or anomaly is treated as a network event, not an isolated point statistic.
            </li>
            <li>
              <strong>Prediction, not detection:</strong> forecasts where and when a problem will occur, giving
              operators time to act — instead of a dashboard that lights up after the fact.
            </li>
            <li>
              <strong>Localization, not just flagging:</strong> pinpoints the physical origin of an anomaly using
              topology — the harder, far less commoditized problem.
            </li>
            <li>
              <strong>Compounding accuracy:</strong> field-confirmed feedback retrains both models continuously —
              accuracy improves with deployment instead of staying static.
            </li>
          </ul>
        </InvestorSection>

        {/* ── Market ── */}
        <InvestorSection number="04" title="Market Opportunity">
          <p className="investor-para">
            India added roughly 50 GW of renewable capacity in 2025 alone and is targeting 500 GW of non-fossil
            capacity by 2030. Every gigawatt added increases the curtailment and grid-balancing problem Vidyut
            targets. India's 60+ state and private distribution companies are simultaneously under regulatory
            pressure to cut AT&C losses under national reform programs.
          </p>
          <div className="metrics-grid" style={{ marginTop: '1.5rem' }}>
            {marketMetrics.map((m) => (
              <MetricCard key={m.unit} {...m} />
            ))}
          </div>
        </InvestorSection>

        {/* ── Business Model ── */}
        <InvestorSection number="05" title="Business Model & Go-To-Market">
          <div className="investor-two-col">
            <div>
              <h3 className="investor-sub-title">Revenue Model</h3>
              <ul className="investor-list">
                <li>
                  <strong>SaaS / B2G licensing:</strong> per substation-node or per-meter-cluster monitored,
                  sold on annual contracts to discoms and grid operators.
                </li>
                <li>
                  <strong>Hardware bundle (optional):</strong> sensor pods and edge appliances sold or leased
                  alongside software for sites without existing telemetry.
                </li>
                <li>
                  <strong>Value-based pricing:</strong> priced partly against quantifiable savings — avoided
                  curtailment payouts, recovered theft revenue.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="investor-sub-title">Go-To-Market</h3>
              <ul className="investor-list">
                <li>
                  <strong>Pilot on one feeder:</strong> one mid-size discom or SLDC, using existing SCADA /
                  smart-meter data — no new hardware required to prove the model.
                </li>
                <li>
                  <strong>Prove it with numbers:</strong> use quantified pilot savings (MWh avoided, ₹ recovered)
                  as the case study for the next 3–5 sales conversations.
                </li>
                <li>
                  <strong>Layer in hardware selectively:</strong> add sensor pods only where existing telemetry
                  is too sparse for the models to perform well.
                </li>
              </ul>
            </div>
          </div>
        </InvestorSection>

        {/* ── Competitive Landscape ── */}
        <InvestorSection number="06" title="Competitive Landscape — Everyone Solves Half the Problem">
          <div className="competitor-grid">
            {competitors.map((c) => (
              <CompetitorCard key={c.category} {...c} />
            ))}
          </div>
          <div className="investor-root-cause" style={{ marginTop: '1.25rem' }}>
            <span className="investor-root-cause-label">Vidyut's Gap</span>
            <p className="investor-para">
              No existing player combines live sensing with graph-based prediction of <em>where</em> a bottleneck
              or anomaly will occur. Our closest competitive risk is a well-funded AMI vendor or global
              grid-analytics platform expanding into this space.
            </p>
          </div>
        </InvestorSection>

        {/* ── Team ── */}
        <InvestorSection number="07" title="Team — Built by students, not around one">
          <p className="investor-para" style={{ marginBottom: '1rem' }}>
            Three B.Tech founders, close enough to the technical layer to build the core models and product
            ourselves — and young enough to commit fully to one problem.
          </p>
          <div className="investor-two-col">
            <div className="investor-team-block">
              <div
                className="investor-team-photo"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: 'var(--primary-blue)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '1.2rem',
                }}
              >
                AA
              </div>
              <div>
                <h3 className="investor-sub-title">Aarush Agrawal — Full Stack Developer</h3>
                <ul className="investor-list">
                  <li>Builds responsive web applications across both frontend and backend</li>
                  <li>Experienced in turning ideas into functional, scalable software solutions.</li>
                  <li>Capable of taking a product from initial concept and UI implementation to backend integration and deployment.</li>
                </ul>
              </div>
            </div>
            <div className="investor-team-block">
              <img src="/assets/aashna.png" alt="Aashna Suman" className="investor-team-photo" />
              <div>
                <h3 className="investor-sub-title">Aashna Suman — AI / ML & Research</h3>
                <ul className="investor-list">
                  <li>Published anomaly-detection framework (IMMUNE) — the same core technique behind Product 2's detection layer</li>
                  <li>Prior research spanning graph-based systems and RL-based decision models in the energy domain</li>
                  <li>Four published research papers; concurrent AI specialization alongside CS degree</li>
                </ul>
              </div>
            </div>
            <div className="investor-team-block">
              <img src="/assets/madhav.png" alt="Madhav Tiwari" className="investor-team-photo" />
              <div>
                <h3 className="investor-sub-title">Madhav Tiwari — Product Engineering & Design</h3>
                <ul className="investor-list">
                  <li>iOS and web development — builds the live dashboard and field-technician app in-house from day one</li>
                  <li>Photography and visual design background — brings genuine product polish, rare in grid-tech tooling</li>
                  <li>Covers the full delivery layer without depending on outside technical hires</li>
                </ul>
              </div>
            </div>
          </div>
        </InvestorSection>

        {/* ── Next Steps ── */}
        <InvestorSection number="08" title="Next Steps — From Concept to a Live Pilot">
          <ol className="investor-next-steps">
            {nextSteps.map((s, i) => (
              <li key={i}>
                <span className="investor-step-num">{i + 1}</span>
                <p className="investor-para">{s}</p>
              </li>
            ))}
          </ol>
        </InvestorSection>

        {/* ── CTA ── */}
        <section className="investor-footer-cta">
          <h2 className="investor-cta-title">Let's build this together.</h2>
          <p className="investor-cta-body">
            We are raising a pre-seed round to fund pilot deployment and expand the engineering team.
            Reach out to the founders directly.
          </p>
          <div className="investor-cta-actions">
            <a
              href="mailto:founders@vidyut.ai"
              className="investor-cta-btn"
            >
              Contact the Founders
            </a>
            <a
              href="/Vidyut_Pitch_Deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="investor-cta-btn investor-cta-btn--outline"
            >
              Full Pitch Deck →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
