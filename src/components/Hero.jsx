import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Compass, BookOpen, FileText, Building2, Code, Video, Heart, Trophy } from 'lucide-react';

export default function Hero() {
  const sectionsList = [
    { name: "Career Guidance", icon: <Compass size={18} />, color: "sec-cyan" },
    { name: "Higher Education", icon: <GraduationCap size={18} />, color: "sec-teal" },
    { name: "Entrance Exams", icon: <FileText size={18} />, color: "sec-orange" },
    { name: "Government Jobs", icon: <Building2 size={18} />, color: "sec-gold" },
    { name: "Skill Development", icon: <Code size={18} />, color: "sec-cyan" },
    { name: "AI Career Buddy", icon: <Sparkles size={18} />, color: "sec-teal" },
    { name: "Content Creation", icon: <Video size={18} />, color: "sec-orange" },
    { name: "Motivation", icon: <Heart size={18} />, color: "sec-gold" },
    { name: "Success Stories", icon: <Trophy size={18} />, color: "sec-cyan" }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid-layout">
        
        {/* Left Side: Copywriting */}
        <div className="hero-text-content animate-slideUp">
          <div className="tagline-badge">
            <span className="tagline-text">Empowering Students • Building Careers • Creating Opportunities</span>
          </div>

          <h1 className="hero-main-title">
            Welcome to <br />
            <span className="gradient-text-cyan">Career Talks</span> <br />
            <span className="gradient-text-orange">Telugu</span>
          </h1>

          <p className="hero-main-desc">
            Career Talks Telugu is a complete career guidance platform helping students and job seekers make informed career decisions. From 10th class to higher education, government jobs, private careers, entrepreneurship, freelancing, content creation, and AI-powered guidance, our mission is to provide clear career roadmaps in Telugu and English.
          </p>

          <div className="hero-actions-container">
            <a href="#sections" className="btn btn-primary">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </a>
            <a href="#chat-buddy" className="btn btn-outline">
              <Sparkles size={16} />
              <span>Talk to Career Buddy</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Index Grid of the 9 Sections */}
        <div className="hero-visual-content">
          <div className="visual-index-board glass-card animate-float">
            <div className="board-header">
              <span className="board-dot red"></span>
              <span className="board-dot yellow"></span>
              <span className="board-dot green"></span>
              <h3>Platform Hub Directory</h3>
            </div>
            
            <div className="sections-index-grid" id="sections">
              {sectionsList.map((sec, idx) => (
                <div key={idx} className={`index-grid-item ${sec.color}`}>
                  <span className="item-icon-wrap">{sec.icon}</span>
                  <span className="item-name">{sec.name}</span>
                </div>
              ))}
            </div>

            {/* Glowing highlights */}
            <div className="board-deco-gradient"></div>
          </div>
        </div>

      </div>

      {/* Background Soft Blurs */}
      <div className="hero-bg-blurs">
        <div className="blur-shape blur-shape-1"></div>
        <div className="blur-shape blur-shape-2"></div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 150px 0 100px;
          min-height: 90vh;
          display: flex;
          align-items: center;
          background-color: var(--bg-base);
          overflow: hidden;
        }

        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .tagline-badge {
          display: inline-flex;
          background: rgba(2, 132, 199, 0.05);
          border: 1px solid rgba(2, 132, 199, 0.12);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
        }

        .tagline-text {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--primary-cyan);
        }

        .hero-main-title {
          font-size: 3.8rem;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #0f172a;
        }

        .hero-main-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 36px;
          max-width: 600px;
          line-height: 1.7;
        }

        .hero-actions-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        /* Right Column Platform Grid Board */
        .hero-visual-content {
          display: flex;
          justify-content: center;
        }

        .visual-index-board {
          width: 100%;
          max-width: 440px;
          padding: 24px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          position: relative;
          z-index: 2;
        }

        .board-header {
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1.5px solid rgba(15, 23, 42, 0.04);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .board-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .board-dot.red { background-color: #ef4444; }
        .board-dot.yellow { background-color: #eab308; }
        .board-dot.green { background-color: #22c55e; }

        .board-header h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          margin-left: 8px;
        }

        .sections-index-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .index-grid-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #f8fafc;
          border: 1.5px solid rgba(15, 23, 42, 0.03);
          border-radius: 10px;
          padding: 10px 14px;
          transition: all 0.2s ease;
        }

        .index-grid-item:hover {
          transform: translateX(4px);
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04);
        }

        .item-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .item-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .index-grid-item:hover .item-name {
          color: var(--text-main);
        }

        /* Color classes */
        .sec-cyan .item-icon-wrap { background: rgba(2, 132, 199, 0.06); color: var(--primary-cyan); }
        .sec-cyan:hover { border-color: rgba(2, 132, 199, 0.2); }

        .sec-teal .item-icon-wrap { background: rgba(15, 118, 110, 0.06); color: var(--primary-teal); }
        .sec-teal:hover { border-color: rgba(15, 118, 110, 0.2); }

        .sec-orange .item-icon-wrap { background: rgba(234, 88, 12, 0.06); color: var(--primary-orange); }
        .sec-orange:hover { border-color: rgba(234, 88, 12, 0.2); }

        .sec-gold .item-icon-wrap { background: rgba(180, 83, 9, 0.06); color: var(--primary-gold); }
        .sec-gold:hover { border-color: rgba(180, 83, 9, 0.2); }

        /* Background blur graphics */
        .hero-bg-blurs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .blur-shape {
          position: absolute;
          filter: blur(130px);
          border-radius: 50%;
          opacity: 0.35;
        }

        .blur-shape-1 {
          width: 350px;
          height: 350px;
          background: rgba(2, 132, 199, 0.2);
          top: -80px;
          right: -50px;
        }

        .blur-shape-2 {
          width: 450px;
          height: 450px;
          background: rgba(234, 88, 12, 0.15);
          bottom: -150px;
          left: -100px;
        }

        @media (max-width: 991px) {
          .hero-section {
            padding: 120px 0 60px;
          }
          .hero-grid-layout {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          .hero-main-title {
            font-size: 2.8rem;
          }
          .hero-main-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions-container {
            justify-content: center;
          }
          .hero-visual-content {
            width: 100%;
          }
          .visual-index-board {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
