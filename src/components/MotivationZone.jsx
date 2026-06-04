import React, { useState } from 'react';
import { dailyQuotesRegistry, motivationalCategories } from '../data/quotesData';
import { Sparkles, Quote, Copy, Check, Heart, Award, ArrowUpRight, BookOpen, AlertCircle } from 'lucide-react';

export default function MotivationZone() {
  const [activeQuoteSection, setActiveQuoteSection] = useState('Success');
  const [copiedId, setCopiedId] = useState(null);
  
  // Track active language for each category card: 'en' or 'te'
  const [cardLanguages, setCardLanguages] = useState({
    student: 'en',
    career: 'en',
    exam: 'en',
    failure: 'en'
  });

  const handleCopy = (quote) => {
    const textToCopy = `"${quote.textEn}"\n(${quote.textTe})\n— ${quote.author}\n\nShared via Career Talks Telugu`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(quote.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleCardLanguage = (cardId, lang) => {
    setCardLanguages(prev => ({
      ...prev,
      [cardId]: lang
    }));
  };

  const filteredQuotes = dailyQuotesRegistry.filter(q => q.section === activeQuoteSection);

  const sections = ['Success', 'Education', 'Discipline', 'Hard Work', 'Consistency'];

  return (
    <section id="motivation" className="motivation-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Heart size={14} className="tag-decor" /> Student Fuel Tank
          </span>
          <h2 className="section-main-title">Motivation & Mindset Zone</h2>
          <p className="section-desc-text">
            Chasing ambitious exams and career changes requires mental strength. Stay inspired through the hard phases and keep the goals clear.
          </p>
        </div>

        {/* Categories Grid (with Illustration Cards) */}
        <div className="motivational-categories-grid">
          {motivationalCategories.map((cat) => {
            const currentLang = cardLanguages[cat.id] || 'en';
            return (
              <div key={cat.id} className="motivational-cat-card glass-card">
                
                {/* Illustration Banner */}
                <div className="cat-card-img-wrapper">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="cat-card-img" 
                  />
                  <div className="cat-card-img-overlay">
                    <span className="img-overlay-badge">{cat.title}</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="cat-card-body">
                  {/* Bilingual Headers */}
                  <div className="cat-card-headers">
                    <h3 className="cat-title-en">{cat.title}</h3>
                    <h4 className="cat-title-te">{cat.titleTe}</h4>
                  </div>
                  
                  <p className="cat-desc">
                    {currentLang === 'en' ? cat.description : cat.descriptionTe}
                  </p>

                  {/* Language Selector inside card */}
                  <div className="card-lang-bar">
                    <button 
                      onClick={() => toggleCardLanguage(cat.id, 'en')}
                      className={`lang-switch-btn ${currentLang === 'en' ? 'lang-switch-active' : ''}`}
                    >
                      English Guide
                    </button>
                    <button 
                      onClick={() => toggleCardLanguage(cat.id, 'te')}
                      className={`lang-switch-btn ${currentLang === 'te' ? 'lang-switch-active' : ''}`}
                    >
                      తెలుగు సలహా
                    </button>
                  </div>

                  {/* Bullet guidelines */}
                  <div className="cat-bullets-container animate-slideUp" key={currentLang}>
                    <ul className="cat-bullets-list">
                      {currentLang === 'en' ? (
                        cat.bulletPoints.map((point, idx) => (
                          <li key={idx}>
                            <Sparkles size={14} className="bullet-sparkle-icon" />
                            <span>{point}</span>
                          </li>
                        ))
                      ) : (
                        cat.bulletPointsTe.map((point, idx) => (
                          <li key={idx}>
                            <Sparkles size={14} className="bullet-sparkle-icon sparkle-orange" />
                            <span>{point}</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Daily Quotes Segment */}
        <div className="daily-quotes-segment glass-card">
          <div className="quotes-sec-hdr">
            <Quote size={24} className="quotes-hdr-icon" />
            <div>
              <h3>Daily Bilingual Quotes</h3>
              <p>Filter motivational words by topic. Copy and share with fellow aspirants.</p>
            </div>
          </div>

          {/* Quotes Navigation tabs */}
          <div className="quotes-nav-tabs">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveQuoteSection(sec)}
                className={`quote-sec-tab ${activeQuoteSection === sec ? 'quote-sec-tab-active' : ''}`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Filtered Quotes Grid */}
          <div className="filtered-quotes-grid" key={activeQuoteSection}>
            {filteredQuotes.map((quote) => (
              <div key={quote.id} className={`quote-tile-card animate-slideUp ${quote.themeClass}`}>
                
                {/* Header Copy button row */}
                <div className="quote-tile-top">
                  <span className="quote-section-lbl">{quote.section}</span>
                  <button 
                    className="quote-tile-copy-btn"
                    onClick={() => handleCopy(quote)}
                    title="Copy to clipboard"
                  >
                    {copiedId === quote.id ? (
                      <>
                        <Check size={14} className="green-txt" />
                        <span className="copy-txt green-txt">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span className="copy-txt">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Quote Texts */}
                <div className="quote-tile-body">
                  <p className="quote-txt-en">"{quote.textEn}"</p>
                  <p className="quote-txt-te">"{quote.textTe}"</p>
                </div>

                {/* Author footer */}
                <div className="quote-tile-footer">
                  <div className="footer-author-line"></div>
                  <cite className="quote-author-name">— {quote.author}</cite>
                </div>

                {/* Decorative background circle */}
                <div className="quote-bg-circle-glow"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .motivation-section {
          padding: 100px 0;
          background-color: var(--bg-base);
          border-top: 1.5px solid var(--border-light);
          position: relative;
        }

        .tag-decor {
          color: var(--primary-cyan);
          vertical-align: middle;
          margin-right: 4px;
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-subtitle-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          padding: 6px 16px;
          border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 16px;
        }

        .section-main-title {
          font-size: 2.5rem;
          margin-bottom: 16px;
          color: var(--text-main);
        }

        .section-desc-text {
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.05rem;
        }

        /* Categories Grid */
        .motivational-categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }

        .motivational-cat-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          background: var(--bg-card);
        }

        .cat-card-img-wrapper {
          width: 100%;
          aspect-ratio: 16/9;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border-light);
        }

        .cat-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .motivational-cat-card:hover .cat-card-img {
          transform: scale(1.03);
        }

        .cat-card-img-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          z-index: 5;
        }

        .img-overlay-badge {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 16px;
          border-radius: 50px;
          display: inline-block;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .cat-card-body {
          padding: 30px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cat-card-headers {
          margin-bottom: 15px;
        }

        .cat-title-en {
          font-size: 1.4rem;
          color: var(--text-main);
          font-weight: 800;
          margin-bottom: 2px;
        }

        .cat-title-te {
          font-size: 0.95rem;
          color: var(--primary-cyan);
          font-weight: 700;
        }

        .cat-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 20px;
          min-height: 45px;
        }

        /* Language bar inside card */
        .card-lang-bar {
          display: flex;
          gap: 8px;
          background: #fafafb;
          border: 1px solid var(--border-light);
          padding: 4px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .lang-switch-btn {
          flex: 1;
          background: transparent;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          color: var(--text-dim);
          transition: all 0.2s ease;
        }

        .lang-switch-active {
          background: #ffffff;
          color: var(--text-main);
          box-shadow: var(--shadow-sm);
        }

        /* Bullets */
        .cat-bullets-container {
          flex-grow: 1;
        }

        .cat-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cat-bullets-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .bullet-sparkle-icon {
          color: var(--primary-cyan);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sparkle-orange {
          color: var(--primary-orange);
        }

        /* Daily Quotes segment */
        .daily-quotes-segment {
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          padding: 40px;
        }

        .quotes-sec-hdr {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 20px;
          margin-bottom: 25px;
        }

        .quotes-hdr-icon {
          color: var(--primary-cyan);
        }

        .quotes-sec-hdr h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .quotes-sec-hdr p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        /* Nav tabs */
        .quotes-nav-tabs {
          display: flex;
          gap: 8px;
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 15px;
          margin-bottom: 30px;
          overflow-x: auto;
        }

        .quote-sec-tab {
          background: #fafafb;
          border: 1.5px solid transparent;
          color: var(--text-muted);
          padding: 8px 18px;
          border-radius: 50px;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .quote-sec-tab:hover {
          background: rgba(15, 23, 42, 0.03);
          color: var(--text-main);
        }

        .quote-sec-tab-active {
          background: #ffffff !important;
          border-color: var(--primary-cyan) !important;
          color: var(--primary-cyan) !important;
          box-shadow: var(--shadow-sm);
        }

        /* Filtered quotes cards */
        .filtered-quotes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .quote-tile-card {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          min-height: 200px;
          transition: all 0.3s ease;
        }

        .quote-tile-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .quote-tile-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          z-index: 5;
        }

        .quote-section-lbl {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: var(--text-dim);
          background: rgba(15, 23, 42, 0.04);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .quote-tile-copy-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease;
        }

        .quote-tile-copy-btn:hover {
          color: var(--text-main);
        }

        .copy-txt {
          font-size: 0.75rem;
          font-weight: 600;
        }

        .green-txt {
          color: var(--primary-teal) !important;
        }

        .quote-tile-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
          z-index: 5;
        }

        .quote-txt-en {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.4;
        }

        .quote-txt-te {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          font-style: italic;
          border-left: 2.5px solid var(--border-light);
          padding-left: 10px;
        }

        .quote-tile-footer {
          z-index: 5;
        }

        .footer-author-line {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 12px;
        }

        .quote-author-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-cyan);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* Tile glow circles */
        .quote-bg-circle-glow {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          filter: blur(35px);
          bottom: -35px;
          right: -35px;
          opacity: 0.05;
          z-index: 1;
          pointer-events: none;
        }

        .quote-theme-cyan .quote-bg-circle-glow { background: var(--primary-cyan); }
        .quote-theme-orange .quote-bg-circle-glow { background: var(--primary-orange); }
        .quote-theme-gold .quote-bg-circle-glow { background: var(--primary-gold); }
        .quote-theme-teal .quote-bg-circle-glow { background: var(--primary-teal); }
        .quote-theme-purple .quote-bg-circle-glow { background: #c084fc; }
        .quote-theme-pink .quote-bg-circle-glow { background: #f472b6; }

        .quote-theme-cyan .quote-author-name { color: var(--primary-cyan); }
        .quote-theme-orange .quote-author-name { color: var(--primary-orange); }
        .quote-theme-gold .quote-author-name { color: var(--primary-gold); }
        .quote-theme-teal .quote-author-name { color: var(--primary-teal); }
        .quote-theme-purple .quote-author-name { color: #a855f7; }
        .quote-theme-pink .quote-author-name { color: #ec4899; }

        @media (max-width: 991px) {
          .motivational-categories-grid {
            grid-template-columns: 1fr;
          }
          .filtered-quotes-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 575px) {
          .daily-quotes-segment {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
