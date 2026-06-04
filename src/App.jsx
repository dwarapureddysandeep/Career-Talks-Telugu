import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PathwayNavigator from './components/PathwayNavigator';
import ExamsTracker from './components/ExamsTracker';
import GovJobsExplorer from './components/GovJobsExplorer';
import PremiumCareers from './components/PremiumCareers';
import SideHustles from './components/SideHustles';
import MotivationZone from './components/MotivationZone';
import SuccessStories from './components/SuccessStories';
import CareerBuddy from './components/CareerBuddy';
import './App.css';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Scroll progress tracker logic
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressEl = document.getElementById('scroll-progress');
      if (progressEl) {
        progressEl.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Scroll indicator */}
      <div id="scroll-progress"></div>

      {/* Navigation Header */}
      <Header activeView={activeView} setActiveView={setActiveView} setChatOpen={setChatOpen} />

      {/* Conditional Navigation Page Views */}
      <main className="main-content-view">
        {activeView === 'home' && (
          <>
            {/* Hero / Introduction (Part 1) */}
            <Hero />

            {/* Interactive Pathway Navigator (Parts 2, 3, 4, 5) */}
            <PathwayNavigator />
          </>
        )}

        {activeView === 'exams' && (
          /* Entrance Exams Tracker (Part 6) */
          <ExamsTracker />
        )}

        {activeView === 'govjobs' && (
          /* Government Jobs Directory (Part 7) */
          <GovJobsExplorer />
        )}

        {activeView === 'highpaying' && (
          /* Premium Careers & Innovations (Part 9) */
          <PremiumCareers />
        )}

        {activeView === 'contentcreation' && (
          /* Content Creation & Online Earning (Part 10) */
          <SideHustles />
        )}

        {activeView === 'motivation' && (
          <>
            {/* Motivation Zone (Part 11) */}
            <MotivationZone />

            {/* Success Stories (Part 12) */}
            <SuccessStories />
          </>
        )}
      </main>

      {/* Global AI Career Buddy Chat Drawer Overlay */}
      {chatOpen && (
        <CareerBuddy onClose={() => setChatOpen(false)} />
      )}

      {/* Simple Footer */}
      <footer className="simple-footer">
        <div className="container footer-content-wrap">
          <div className="footer-brand-side">
            <img src="/assets/logo.png" alt="Career Talks Telugu Logo" className="footer-logo-img" />
            <p>Empowering Telugu youth with modern guidance and practical skills.</p>
          </div>
          <div className="footer-bottom-line">
            <p>&copy; {new Date().getFullYear()} Career Talks Telugu. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .app-container {
          min-height: 100vh;
          background-color: var(--bg-base);
          display: flex;
          flex-direction: column;
        }

        .main-content-view {
          flex-grow: 1;
          margin-top: 80px; /* Offset for sticky header */
        }

        /* Footer styling */
        .simple-footer {
          background: #ffffff;
          padding: 60px 0 30px;
          border-top: 1.5px solid var(--border-light);
          margin-top: auto;
        }

        .footer-content-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .footer-brand-side {
          text-align: center;
        }

        .footer-logo-img {
          height: 52px;
          object-fit: contain;
          margin-bottom: 16px;
        }

        .footer-brand-side p {
          color: var(--text-dim);
          font-size: 0.9rem;
          max-width: 400px;
        }

        .footer-bottom-line {
          border-top: 1.5px solid rgba(15, 23, 42, 0.04);
          width: 100%;
          padding-top: 24px;
          text-align: center;
        }

        .footer-bottom-line p {
          color: var(--text-dim);
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}
