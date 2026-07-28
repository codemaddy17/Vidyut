import React from 'react';

import BackgroundGrid from './components/BackgroundGrid';
import Header from './components/Header';
import Hero from './components/Hero';
import GridMetrics from './components/GridMetrics';
import ProblemStatement from './components/ProblemStatement';
import InfrastructureHighlights from './components/InfrastructureHighlights';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import ManifestoQuote from './components/ManifestoQuote';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <BackgroundGrid />
      <div className="content-wrapper">
        <Header />
        <Hero />
        <GridMetrics />
        <ProblemStatement />
        <InfrastructureHighlights />
        <HowItWorks />
        <TargetAudience />
        <ManifestoQuote />
        <EmailSignup />
        <Footer />
      </div>
    </div>
  );
}
