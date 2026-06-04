import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Header({ activeView, setActiveView, setChatOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a 
          href="#home" 
          className="logo-container"
          onClick={(e) => { e.preventDefault(); setActiveView('home'); window.scrollTo(0, 0); }}
        >
          <img src="/assets/logo.png" alt="Career Talks Telugu Logo" className="header-logo-img" />
        </a>

        {/* Desktop Navigation for the 6 pages */}
        <nav className="desktop-nav">
          <a 
            href="#home" 
            className={`nav-item ${activeView === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('home'); window.scrollTo(0, 0); }}
          >
            Home
          </a>
          <a 
            href="#exams" 
            className={`nav-item ${activeView === 'exams' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('exams'); window.scrollTo(0, 0); }}
          >
            Entrance Exams
          </a>
          <a 
            href="#govjobs" 
            className={`nav-item ${activeView === 'govjobs' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('govjobs'); window.scrollTo(0, 0); }}
          >
            Government Jobs
          </a>
          <a 
            href="#highpaying" 
            className={`nav-item ${activeView === 'highpaying' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('highpaying'); window.scrollTo(0, 0); }}
          >
            High-Paying Jobs
          </a>
          <a 
            href="#contentcreation" 
            className={`nav-item ${activeView === 'contentcreation' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('contentcreation'); window.scrollTo(0, 0); }}
          >
            Content Creation
          </a>
          <a 
            href="#motivation" 
            className={`nav-item ${activeView === 'motivation' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('motivation'); window.scrollTo(0, 0); }}
          >
            Motivation
          </a>
        </nav>

        {/* Action Button & Toggle */}
        <div className="header-actions">
          <button 
            className="btn btn-primary btn-sm btn-header-chat"
            onClick={() => setChatOpen(true)}
          >
            <Sparkles size={14} />
            <span>AI Career Buddy</span>
          </button>

          <button className="mobile-menu-toggle-btn" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <nav className="mobile-nav">
          <a 
            href="#home" 
            className={`mobile-nav-item ${activeView === 'home' ? 'm-active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setActiveView('home'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          >
            Home
          </a>
          <a 
            href="#exams" 
            className={`mobile-nav-item ${activeView === 'exams' ? 'm-active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setActiveView('exams'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          >
            Entrance Exams
          </a>
          <a 
            href="#govjobs" 
            className={`mobile-nav-item ${activeView === 'govjobs' ? 'm-active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setActiveView('govjobs'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          >
            Government Jobs
          </a>
          <a 
            href="#highpaying" 
            className={`mobile-nav-item ${activeView === 'highpaying' ? 'm-active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setActiveView('highpaying'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          >
            High-Paying Jobs
          </a>
          <a 
            href="#contentcreation" 
            className={`mobile-nav-item ${activeView === 'contentcreation' ? 'm-active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setActiveView('contentcreation'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          >
            Content Creation
          </a>
          <a 
            href="#motivation" 
            className={`mobile-nav-item ${activeView === 'motivation' ? 'm-active' : ''}`} 
            onClick={(e) => { e.preventDefault(); setActiveView('motivation'); window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          >
            Motivation
          </a>
          <button 
            className="btn btn-primary btn-mobile-nav" 
            onClick={() => { setMobileMenuOpen(false); setChatOpen(true); }}
          >
            <Sparkles size={16} />
            <span>Chat with AI Buddy</span>
          </button>
        </nav>
      </div>

      <style>{`
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 100;
          display: flex;
          align-items: center;
          border-bottom: 1.5px solid transparent;
          background: rgba(248, 250, 252, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .header-scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.92);
          border-bottom: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          gap: 15px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-logo-img {
          height: 44px;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .header-scrolled .header-logo-img {
          height: 36px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-item {
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--primary-cyan);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-cyan), var(--primary-orange));
          transition: width var(--transition-fast);
        }

        .nav-item:hover::after, .nav-item.active::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .mobile-menu-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 4px;
          z-index: 110;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: #ffffff;
          border-left: 1px solid var(--border-light);
          padding: 100px 30px 40px;
          z-index: 99;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -5px 0 30px rgba(15, 23, 42, 0.05);
        }

        .drawer-open {
          right: 0;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .mobile-nav-item {
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color var(--transition-fast);
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.04);
        }

        .mobile-nav-item:hover, .m-active {
          color: var(--primary-cyan) !important;
          border-bottom-color: var(--primary-cyan);
        }

        .btn-mobile-nav {
          margin-top: 10px;
          width: 100%;
          border: none;
        }

        @media (max-width: 1120px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle-btn {
            display: block;
          }
          .btn-header-chat {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
