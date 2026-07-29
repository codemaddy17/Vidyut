import React, { useState, useCallback } from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import Hero from '../components/Hero';
import GridMetrics from '../components/GridMetrics';
import ProblemStatement from '../components/ProblemStatement';
import InfrastructureHighlights from '../components/InfrastructureHighlights';
import HowItWorks from '../components/HowItWorks';
import TargetAudience from '../components/TargetAudience';
import ManifestoQuote from '../components/ManifestoQuote';
import EmailSignup from '../components/EmailSignup';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onDone={handleDone} />
      <div className={loaded ? 'page-enter--visible' : 'page-enter--hidden'}>
        <BackgroundGrid />
        <div className="content-wrapper">
          <Hero />
          <GridMetrics />
          <ProblemStatement />
          <InfrastructureHighlights />
          <HowItWorks />
          <TargetAudience />
          <ManifestoQuote />
          <EmailSignup />
        </div>
      </div>
    </>
  );
}
