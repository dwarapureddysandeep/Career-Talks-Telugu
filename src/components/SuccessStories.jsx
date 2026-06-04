import React, { useState } from 'react';
import { successStoriesRegistry } from '../data/storiesData';
import { Award, BookOpen, Quote, X, Trophy, Milestone, ChevronRight, Play } from 'lucide-react';

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  // Get accent class color codes
  const getAccentColors = (themeClass) => {
    switch (themeClass) {
      case 'story-cyan': return { primary: 'var(--primary-cyan)', bg: 'rgba(2, 132, 199, 0.08)', border: 'rgba(2, 132, 199, 0.2)' };
      case 'story-pink': return { primary: '#ec4899', bg: 'rgba(236, 72, 153, 0.08)', border: 'rgba(236, 72, 153, 0.2)' };
      case 'story-teal': return { primary: 'var(--primary-teal)', bg: 'rgba(15, 118, 110, 0.08)', border: 'rgba(15, 118, 110, 0.2)' };
      case 'story-orange': return { primary: 'var(--primary-orange)', bg: 'rgba(234, 88, 12, 0.08)', border: 'rgba(234, 88, 12, 0.2)' };
      case 'story-gold': return { primary: 'var(--primary-gold)', bg: 'rgba(180, 83, 9, 0.08)', border: 'rgba(180, 83, 9, 0.2)' };
      default: return { primary: 'var(--primary-cyan)', bg: 'rgba(2, 132, 199, 0.08)', border: 'rgba(2, 132, 199, 0.2)' };
    }
  };

  return (
    <section id="success-stories" className="success-stories-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Trophy size={14} className="tag-decor" /> Real-World Role Models
          </span>
          <h2 className="section-main-title">Inspirational Success Stories</h2>
          <p className="section-desc-text">
            Meet 5 remarkable individuals who rose from absolute poverty and limited backgrounds. They had no money, but their hunger for knowledge made them great.
          </p>
        </div>

        {/* Reflection Banner Card */}
        <div className="reflection-banner-card glass-card">
          <div className="reflection-grid">
            <div className="reflection-text">
              <span className="reflection-tag">KNOWLEDGE IS THE EQUALIZER</span>
              <h3>Pedigree is a Myth. Skill is the Reality.</h3>
              <p>
                You do not need a wealthy family, a famous surname, or a premium urban school to achieve greatness. 
                Your dedication to acquiring skills, practical knowledge, and guiding advice is the ultimate equalizer.
              </p>
              <p className="reflection-highlight">
                The five role models detailed below faced obstacles far greater than average. They used self-study and knowledge as their shield to conquer their respective fields.
              </p>
            </div>
            <div className="reflection-visual">
              <img 
                src="/assets/career-thinking.jpg" 
                alt="Student planning her career pathway illustration" 
                className="reflection-banner-img"
              />
              <div className="reflection-shield"></div>
            </div>
          </div>
        </div>

        {/* Grid Cards for the 5 Role Models */}
        <div className="stories-grid animate-slideUp">
          {successStoriesRegistry.map((story) => {
            const colors = getAccentColors(story.themeClass);
            return (
              <div 
                key={story.id} 
                className={`story-card-grid-item glass-card ${story.themeClass}`}
                onClick={() => setSelectedStory(story)}
                style={{ '--accent-color': colors.primary }}
              >
                <div className="story-header-block">
                  <span className="story-avatar-icon" style={{ backgroundColor: colors.bg, color: colors.primary }}>
                    <Award size={20} />
                  </span>
                  <h3>{story.name}</h3>
                  <span className="story-tagline-text">{story.tagline}</span>
                </div>

                {/* Visual Step Stepper within the card */}
                <div className="story-card-stepper">
                  {story.steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="card-step-bubble" title={step}>{step}</span>
                      {idx < story.steps.length - 1 && (
                        <ChevronRight size={12} className="card-stepper-arrow" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="story-quote-preview">
                  <Quote size={16} className="quote-icon" style={{ color: colors.primary }} />
                  <p>"{story.quote.substring(0, 95)}..."</p>
                </div>

                <div className="story-brief-stats">
                  <div className="brief-stat">
                    <strong>Humble Beginnings:</strong>
                    <p>{story.beginnings.substring(0, 85)}...</p>
                  </div>
                </div>

                <button 
                  className="btn btn-outline btn-sm w-full btn-read-story"
                  style={{ '--hover-bg': colors.bg, '--hover-border': colors.primary }}
                >
                  <span>Read Full Journey</span>
                  <ChevronRight size={14} className="arrow-btn-icon" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Story Overlay Details Modal */}
      {selectedStory && (() => {
        const colors = getAccentColors(selectedStory.themeClass);
        return (
          <div className="modal-overlay animate-fadeIn" onClick={() => setSelectedStory(null)}>
            <div className="modal-content glass-card animate-slideUp" onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="modal-header-row">
                <div className="modal-avatar-header">
                  <span className="modal-avatar-glow" style={{ backgroundColor: colors.bg, color: colors.primary, boxShadow: `0 0 15px ${colors.border}` }}>
                    <Trophy size={24} />
                  </span>
                  <div>
                    <h2>{selectedStory.name}</h2>
                    <h4 style={{ color: colors.primary }}>{selectedStory.tagline}</h4>
                  </div>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedStory(null)}>
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body Scroll */}
              <div className="modal-body-scroll">
                
                {/* Horizontal Stepper Timeline */}
                <div className="modal-timeline-stepper">
                  {selectedStory.steps.map((step, idx) => (
                    <div key={idx} className="timeline-node">
                      <div className="node-dot" style={{ backgroundColor: colors.primary }}>
                        <span>{idx + 1}</span>
                      </div>
                      <div className="node-content">
                        <h6>{step}</h6>
                      </div>
                      {idx < selectedStory.steps.length - 1 && (
                        <div className="node-connector" style={{ background: `linear-gradient(90deg, ${colors.primary} 0%, var(--border-light) 100%)` }}></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Section 1: Quote */}
                <div className="modal-quote-block" style={{ borderLeft: `4px solid ${colors.primary}`, backgroundColor: colors.bg }}>
                  <Quote size={28} className="quote-mark-icon" style={{ color: colors.primary }} />
                  <blockquote className="quote-text">
                    "{selectedStory.quote}"
                  </blockquote>
                </div>

                <div className="modal-split-grid">
                  {/* Section 2: Beginnings */}
                  <div className="modal-info-block border-red">
                    <h5 className="sub-red">Humble Beginnings</h5>
                    <p>{selectedStory.beginnings}</p>
                  </div>

                  {/* Section 3: Turning Point (Knowledge) */}
                  <div className="modal-info-block border-cyan">
                    <h5 className="sub-cyan">The Turning Point</h5>
                    <p>{selectedStory.turningPoint}</p>
                  </div>
                </div>

                {/* Section 4: Legacy */}
                <div className="modal-info-block border-green">
                  <h5 className="sub-green">Legacy & National Impact</h5>
                  <p>{selectedStory.achievement}</p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="modal-footer-row">
                <button 
                  className="btn btn-secondary btn-sm" 
                  onClick={() => setSelectedStory(null)}
                  style={{ backgroundColor: colors.primary, boxShadow: `0 4px 12px ${colors.border}` }}
                >
                  Close Biography
                </button>
              </div>

            </div>
          </div>
        );
      })()}

      <style>{`
        .success-stories-section {
          padding: 100px 0;
          background-color: var(--bg-base);
          border-top: 1.5px solid var(--border-light);
        }

        /* Reflection banner */
        .reflection-banner-card {
          margin-bottom: 60px;
          padding: 30px;
          border: 1.5px solid var(--border-light);
        }

        .reflection-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .reflection-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .reflection-tag {
          display: inline-block;
          width: fit-content;
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border: 1px solid var(--border-cyan-glow);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 4px;
        }

        .reflection-text h3 {
          font-size: 2rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .reflection-text p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .reflection-highlight {
          border-left: 3px solid var(--primary-orange);
          padding-left: 14px;
          color: var(--text-main) !important;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .reflection-visual {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          aspect-ratio: 16/11;
        }

        .reflection-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .reflection-shield {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 100%);
        }

        /* Stories Grid */
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .story-card-grid-item {
          padding: 30px 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          min-height: 380px;
          justify-content: space-between;
          border: 1.5px solid var(--border-light);
          background: var(--bg-card);
        }

        .story-card-grid-item:hover {
          border-color: var(--accent-color);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .story-header-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .story-avatar-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .story-card-grid-item h3 {
          font-size: 1.35rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .story-tagline-text {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 700;
          line-height: 1.4;
        }

        /* Inline Card Stepper */
        .story-card-stepper {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 15px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none; /* Hide for firefox */
        }
        
        .story-card-stepper::-webkit-scrollbar {
          display: none; /* Hide for chrome */
        }

        .card-step-bubble {
          font-size: 0.65rem;
          font-weight: 700;
          background: #fafafb;
          border: 1px solid var(--border-light);
          padding: 3px 8px;
          border-radius: 4px;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .card-stepper-arrow {
          color: var(--text-dim);
          flex-shrink: 0;
        }

        .story-quote-preview {
          display: flex;
          gap: 8px;
          margin-top: 15px;
        }

        .story-quote-preview .quote-icon {
          opacity: 0.7;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .story-quote-preview p {
          font-style: italic;
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .story-brief-stats {
          border-top: 1px solid var(--border-light);
          padding-top: 12px;
          margin-top: 18px;
          margin-bottom: 14px;
        }

        .brief-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .brief-stat strong {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .brief-stat p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .btn-read-story {
          border-color: var(--border-light);
          gap: 6px;
          font-weight: 700;
        }

        .story-card-grid-item:hover .btn-read-story {
          border-color: var(--hover-border);
          background: var(--hover-bg);
          color: var(--hover-border);
        }

        .arrow-btn-icon {
          transition: transform 0.2s ease;
        }

        .story-card-grid-item:hover .arrow-btn-icon {
          transform: translateX(3px);
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 680px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          padding: 0;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .modal-header-row {
          padding: 24px 30px;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fafafb;
        }

        .modal-avatar-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-avatar-glow {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-avatar-header h2 {
          font-size: 1.5rem;
          color: var(--text-main);
          font-weight: 800;
          line-height: 1.2;
        }

        .modal-avatar-header h4 {
          font-size: 0.85rem;
          font-weight: 700;
          margin-top: 2px;
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
        }

        .modal-body-scroll {
          padding: 30px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Modal Stepper timeline */
        .modal-timeline-stepper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 20px 16px;
          margin-bottom: 5px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .timeline-node {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          flex: 1;
          min-width: 110px;
        }

        .node-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .node-content h6 {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.2;
        }

        .node-connector {
          height: 2px;
          position: absolute;
          left: 100%;
          width: calc(100% - 24px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .modal-quote-block {
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .modal-quote-block .quote-text {
          font-style: italic;
          color: var(--text-main);
          font-size: 1.05rem;
          line-height: 1.5;
          font-weight: 600;
        }

        .modal-split-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .modal-info-block {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 20px;
        }

        .modal-info-block h5 {
          font-size: 0.9rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .modal-info-block p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .border-red h5 { color: #dc2626; }
        .border-cyan h5 { color: var(--primary-cyan); }
        .border-green h5 { color: var(--primary-teal); }

        .border-red { border-left: 3px solid #dc2626; }
        .border-cyan { border-left: 3px solid var(--primary-cyan); }
        .border-green { border-left: 3px solid var(--primary-teal); }

        /* Modal Footer */
        .modal-footer-row {
          padding: 20px 30px;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: flex-end;
          background: #fafafb;
        }

        .modal-footer-row button {
          color: #ffffff;
          border: none;
          font-weight: 700;
          cursor: pointer;
        }

        .modal-footer-row button:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 991px) {
          .reflection-grid {
            grid-template-columns: 1fr;
          }
          .reflection-visual {
            display: none;
          }
          .modal-split-grid {
            grid-template-columns: 1fr;
          }
          .node-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
