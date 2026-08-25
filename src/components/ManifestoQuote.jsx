import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ManifestoQuote() {
  const reveal = useScrollReveal();

  return (
    <section className={`manifesto-section ${reveal.className}`} ref={reveal.ref}>
      <p className="manifesto-quote">
        India's grid is one of the most complex electrical networks in the world.
        The transition to renewables will not succeed without intelligence
        at every node, every feeder, every dispatch cycle. That is the system we are building.
      </p>
      <p className="manifesto-attribution">
        Aarush Agrawal, Aashna Suman & Madhav Tiwari, Co-founders
      </p>
    </section>
  );
}
