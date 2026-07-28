import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function EmailSignup() {
  const reveal = useScrollReveal();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Please enter a valid work or official email address.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setIsSubmitted(true); }, 450);
  };

  const handleReset = () => {
    setEmail(''); setIsSubmitted(false); setError('');
  };

  return (
    <section className={`signup-section ${reveal.className}`} ref={reveal.ref}>
      <div className="signup-container">
        {!isSubmitted ? (
          <>
            <div className="signup-header-group">
              <h3 className="signup-title">Get notified at launch</h3>
              <p className="signup-subtext">
                Join the early access queue for grid operators, utility executives, and energy infrastructure teams.
              </p>
            </div>
            <form className="email-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className="email-input"
                placeholder="your.name@utility.gov.in"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }}
                disabled={isLoading}
                aria-label="Work Email Address"
              />
              <button type="submit" className="signup-button" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Request Early Access'}
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </>
        ) : (
          <div className="success-box">
            <div className="success-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Request Received</span>
            </div>
            <p className="success-text">
              Thank you. We have registered <strong>{email}</strong> for launch notifications
              and grid intelligence briefings.
            </p>
            <button className="reset-link" onClick={handleReset}>
              Submit another email →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
