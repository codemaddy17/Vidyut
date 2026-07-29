import React, { useEffect, useState } from 'react';

/**
 * LoadingScreen
 * ─────────────
 * Phase timeline (ms from mount):
 *   0          – overlay visible, logo hidden
 *   200        – logo begins fade-in  (800 ms CSS transition)
 *   1200       – logo fully visible, hold…
 *   2000       – overlay begins slide-up exit (700 ms CSS transition)
 *   2700       – overlay fully gone → onDone() fires
 */
export default function LoadingScreen({ onDone }) {
  // 'entering' | 'visible' | 'leaving' | 'gone'
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('visible'),  200);
    const t2 = setTimeout(() => setPhase('leaving'),  2000);
    const t3 = setTimeout(() => { setPhase('gone'); onDone(); }, 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === 'gone') return null;

  return (
    <div className={`loader-overlay loader-overlay--${phase}`}>
      <img
        src="/assets/vidyut-logo.png"
        alt="Vidyut"
        className={`loader-logo loader-logo--${phase}`}
      />
    </div>
  );
}
