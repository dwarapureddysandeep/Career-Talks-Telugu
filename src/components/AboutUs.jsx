import React from 'react';
import { Heart, ShieldCheck, Users, HelpCircle, Award, Compass } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="about-us-section animate-slideUp">
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Compass size={14} className="tag-decor" /> Our Core Mission
          </span>
          <h2 className="section-main-title">About Career Talks Telugu</h2>
          <p className="section-desc-text">
            Bridging the gap between rural Telugu students and global high-paying careers through language-first, actionable coaching.
          </p>
        </div>

        {/* Brand Mission Split */}
        <div className="about-split-layout">
          <div className="about-info-pane">
            <span className="about-tag">Empowering Regional Talent</span>
            <h3>Unbiased Career Maps for Everyone</h3>
            <p>
              Many bright minds in Andhra Pradesh and Telangana fail to reach their full potential simply due to a lack of timely information. Standard counseling portals are often in English, highly generic, and hidden behind paywalls.
            </p>
            <p>
              <strong>Career Talks Telugu</strong> was created as a free, comprehensive knowledge registry. We translate complex corporate job paths, entrance exam details, and government exam formats into highly readable, visual guides.
            </p>
            
            <div className="about-features-list">
              <div className="about-feat-item">
                <ShieldCheck size={20} className="feat-check-icon" />
                <div>
                  <h6>100% Free & Open Access</h6>
                  <p>No premium sign-ups or subscription paywalls. All roadmap databases are freely open.</p>
                </div>
              </div>
              <div className="about-feat-item">
                <Users size={20} className="feat-check-icon" />
                <div>
                  <h6>Local Telugu Context</h6>
                  <p>Bilingual instructions and regional support channels to guide parents and students.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual-pane">
            <div className="about-visual-decor glass-card">
              <img 
                src="/assets/group-study.png" 
                alt="Students discussing study strategies illustration" 
                className="about-deco-img"
              />
              <div className="about-badge-card animate-float">
                <Award size={18} className="badge-icon" />
                <div>
                  <strong>10 Lakh+</strong>
                  <span>Target Youth Guided</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Statistics Dashboard */}
        <div className="stats-dashboard-card glass-card">
          <h3 className="stats-title">Career Talks Telugu Registry by the Numbers</h3>
          <div className="stats-grid">
            <div className="stat-card-item">
              <div className="sci-num text-cyan">50+</div>
              <div className="sci-label">Career Pathway Nodes</div>
              <p className="sci-sub">From Inter MPC/BiPC to B.Tech, Doctor, or PhD outcomes.</p>
            </div>
            
            <div className="stat-card-item">
              <div className="sci-num text-orange">29+</div>
              <div className="sci-label">Entrance Exams Mapped</div>
              <p className="sci-sub">Covers AP EAMCET, JEE, NEET, GATE, CAT, and Law exams.</p>
            </div>
            
            <div className="stat-card-item">
              <div className="sci-num text-teal">10+</div>
              <div className="sci-label">Government Sectors</div>
              <p className="sci-sub">Work profile, qualification, salary, and paths for Army, Banking, Group 1-4, etc.</p>
            </div>
            
            <div className="stat-card-item">
              <div className="sci-num text-gold">24/7</div>
              <div className="sci-label">AI Telugu Counselor</div>
              <p className="sci-sub">Career Buddy chat routing keyboard phrases directly to roadmaps.</p>
            </div>
          </div>
        </div>

        {/* Contact/Support Section */}
        <div className="support-cta-area">
          <div className="support-cta-box glass-card text-center">
            <HelpCircle size={40} className="support-logo-decor" />
            <h3>Need Personalized Career Advice?</h3>
            <p>
              If you have specific queries about study branches, low-budget colleges, or how to start coding/design freelancing, reach out to our Telugu student support channels.
            </p>
            <div className="support-btns-row">
              <a href="mailto:support@careertalkstelugu.org" className="btn btn-primary">
                Email Our Mentors
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('chat-buddy');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="btn btn-outline"
              >
                Launch AI Buddy Chat
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-us-section {
          padding: 100px 0;
          background-color: var(--bg-base);
          border-top: 1.5px solid var(--border-light);
        }

        .tag-decor {
          color: var(--primary-cyan);
          vertical-align: middle;
          margin-right: 4px;
        }

        .section-header {
          margin-bottom: 60px;
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

        /* Split Layout */
        .about-split-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 80px;
        }

        .about-info-pane {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-orange);
          background: rgba(234, 88, 12, 0.08);
          border: 1px solid var(--border-orange-glow);
          padding: 3px 10px;
          border-radius: 4px;
          width: fit-content;
          text-transform: uppercase;
        }

        .about-info-pane h3 {
          font-size: 2rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .about-info-pane p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-features-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 15px;
        }

        .about-feat-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .feat-check-icon {
          color: var(--primary-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .about-feat-item h6 {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .about-feat-item p {
          font-size: 0.85rem;
          color: var(--text-dim);
          line-height: 1.4;
          margin: 0;
        }

        /* Visual Pane */
        .about-visual-pane {
          position: relative;
        }

        .about-visual-decor {
          padding: 0;
          overflow: visible;
          border-radius: 20px;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4/3;
        }

        .about-deco-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          display: block;
        }

        .about-badge-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-md);
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }

        .badge-icon {
          color: var(--primary-orange);
        }

        .about-badge-card strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          display: block;
          line-height: 1.2;
        }

        .about-badge-card span {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        /* Statistics Dashboard */
        .stats-dashboard-card {
          padding: 40px;
          border: 1.5px solid var(--border-light);
          margin-bottom: 80px;
        }

        .stats-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          text-align: center;
          margin-bottom: 30px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sci-num {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.1;
        }

        .sci-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .sci-sub {
          font-size: 0.75rem;
          color: var(--text-dim);
          line-height: 1.4;
          padding: 0 10px;
        }

        /* Support CTA Area */
        .support-cta-box {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          border: 1.5px solid var(--border-light);
        }

        .support-logo-decor {
          color: var(--primary-orange);
          margin-bottom: 16px;
        }

        .support-cta-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .support-cta-box p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .support-btns-row {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        @media (max-width: 991px) {
          .about-split-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-visual-pane {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 575px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .support-btns-row {
            flex-direction: column;
            gap: 12px;
          }
          .support-cta-box {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
}
