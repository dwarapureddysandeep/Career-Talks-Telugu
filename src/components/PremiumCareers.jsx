import React, { useState } from 'react';
import { highPayingJobs, startupConcepts, aiTools } from '../data/premiumCareersData';
import { Sparkles, Briefcase, Rocket, BrainCircuit, ShieldCheck, DollarSign, Award, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

export default function PremiumCareers() {
  const [activeTab, setActiveTab] = useState('mnc');

  const categories = ["Software", "Core Engineering", "Finance", "Healthcare", "Management"];

  return (
    <section id="premium-careers" className="premium-careers-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Sparkles size={14} className="tag-decor" /> Future-Proof Careers & Innovations
          </span>
          <h2 className="section-main-title">Premium MNC Jobs & Startup Hub</h2>
          <p className="section-desc-text">
            Stay ahead of the curve. Explore highly lucrative corporate careers, regional startup playbooks, and modern AI skills schools don't teach you.
          </p>
        </div>

        {/* Tab Toggle Navigation Bar */}
        <div className="careers-tab-bar glass-card">
          <button 
            className={`career-tab ${activeTab === 'mnc' ? 'active' : ''}`}
            onClick={() => setActiveTab('mnc')}
          >
            <Briefcase size={16} />
            <span>High Paying MNC Jobs</span>
          </button>
          <button 
            className={`career-tab ${activeTab === 'startups' ? 'active' : ''}`}
            onClick={() => setActiveTab('startups')}
          >
            <Rocket size={16} />
            <span>Startup Incubator</span>
          </button>
          <button 
            className={`career-tab ${activeTab === 'aitools' ? 'active' : ''}`}
            onClick={() => setActiveTab('aitools')}
          >
            <BrainCircuit size={16} />
            <span>Essential Student AI Skills</span>
          </button>
        </div>

        {/* Active Tab Content Switch */}
        <div className="careers-tab-content">
          
          {/* TAB 1: MNC JOBS */}
          {activeTab === 'mnc' && (
            <div className="mnc-tab-grid animate-slideUp">
              {/* Jobs List Grid */}
              <div className="mnc-jobs-list">
                {categories.map((catName) => {
                  const jobsInCat = highPayingJobs.filter(j => j.category === catName);
                  if (jobsInCat.length === 0) return null;
                  
                  return (
                    <div key={catName} className="job-category-group">
                      <div className="category-header-row">
                        <span className="bullet-indicator"></span>
                        <h4 className="job-category-title">{catName} Sector</h4>
                      </div>
                      
                      <div className="category-jobs-grid-inner">
                        {jobsInCat.map((job, idx) => (
                          <div key={idx} className="mnc-job-card glass-card glow-cyan">
                            <div className="job-card-header">
                              <h3>{job.title}</h3>
                              <span className="salary-range-tag">
                                <DollarSign size={12} />
                                {job.salary}
                              </span>
                            </div>
                            <p className="job-desc">{job.description}</p>
                            
                            <div className="skills-badge-list">
                              <strong>Core Skills Required:</strong>
                              <div className="badges-row">
                                {job.skills.map((skill, sIdx) => (
                                  <span key={sIdx} className="skill-badge">{skill}</span>
                                ))}
                              </div>
                            </div>

                            <div className="get-in-strategy">
                              <strong>How to Get in:</strong>
                              <p>{job.howToGetIn}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Sidebar: MNC Preparation Roadmap */}
              <div className="mnc-prep-roadmap glass-card">
                <span className="roadmap-badge"><TrendingUp size={12} /> INTERVIEW ROADMAP</span>
                <h3>How to Crack Top MNCs</h3>
                <p className="prep-subtitle">Follow this step-by-step roadmap to land high-paying software positions:</p>
                
                <div className="roadmap-steps-list">
                  <div className="roadmap-step-item">
                    <div className="step-number">01</div>
                    <div className="step-info">
                      <h4>Master Data Structures & Algorithms</h4>
                      <p>Spend 3-6 months solving puzzles on LeetCode or GeeksforGeeks. Focus on arrays, strings, trees, and dynamic programming.</p>
                    </div>
                  </div>
                  <div className="roadmap-step-item">
                    <div className="step-number">02</div>
                    <div className="step-info">
                      <h4>Build 2-3 Core Portfolio Projects</h4>
                      <p>Avoid copying generic tutorial clones. Build real solutions (e.g. tracking systems, SaaS tools) and host them on GitHub.</p>
                    </div>
                  </div>
                  <div className="roadmap-step-item">
                    <div className="step-number">03</div>
                    <div className="step-info">
                      <h4>Clean Your LinkedIn & Resume</h4>
                      <p>Create a one-page resume detailing technical outcomes. Optimize your LinkedIn profile to attract international recruiters.</p>
                    </div>
                  </div>
                  <div className="roadmap-step-item">
                    <div className="step-number">04</div>
                    <div className="step-info">
                      <h4>Secure Referral Internships</h4>
                      <p>Connect with senior software engineers on LinkedIn. Ask for referrals at MNCs to bypass heavy initial resume screening rounds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STARTUP INCUBATOR */}
          {activeTab === 'startups' && (
            <div className="startups-tab-grid animate-slideUp">
              {/* Left Column: Startup Ideas */}
              <div className="startup-concepts-list">
                <h3 className="section-block-title">Telugu Ecosystem Startup Opportunities</h3>
                <div className="concepts-grid">
                  {startupConcepts.map((concept, idx) => (
                    <div key={idx} className="startup-concept-card glass-card glow-orange">
                      <div className="concept-card-header">
                        <span className="concept-badge">IDEA {idx + 1}</span>
                        <h3>{concept.title}</h3>
                      </div>
                      
                      <div className="concept-detail-block">
                        <strong>⚠️ The Problem:</strong>
                        <p>{concept.problem}</p>
                      </div>
                      <div className="concept-detail-block">
                        <strong>💡 The Solution:</strong>
                        <p>{concept.solution}</p>
                      </div>
                      <div className="concept-detail-block">
                        <strong>💰 Monetization Model:</strong>
                        <p>{concept.monetization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: How to Launch a Startup Guide */}
              <div className="startup-launch-guide glass-card">
                <span className="roadmap-badge"><Rocket size={12} /> LAUNCH INCUBATOR</span>
                <h3>Concept to Launch Checklist</h3>
                <p className="prep-subtitle">Avoid launching without validation. Follow these steps to build a sustainable business:</p>
                
                <div className="checklist-items">
                  <div className="check-item">
                    <CheckCircle2 size={18} className="check-icon-orange" />
                    <div>
                      <h4>Identify a Pain Point</h4>
                      <p>Identify a problem in your surroundings (e.g. agricultural transport, local skills gaps).</p>
                    </div>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 size={18} className="check-icon-orange" />
                    <div>
                      <h4>Build a Minimal Viable Product (MVP)</h4>
                      <p>Create a simple mockup page or manual WhatsApp service before spending money on coding developers.</p>
                    </div>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 size={18} className="check-icon-orange" />
                    <div>
                      <h4>Validate with 10 Paying Customers</h4>
                      <p>Ensure customers are willing to buy your solution. Real validation happens with transactions, not compliments.</p>
                    </div>
                  </div>
                  <div className="check-item">
                    <CheckCircle2 size={18} className="check-icon-orange" />
                    <div>
                      <h4>Bootstrap or Seek Seed Funding</h4>
                      <p>Use your revenues to fund growth (bootstrap) or pitch to local angel investors (T-Hub, Startup India grants) for expansion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI ERA & TOOLS */}
          {activeTab === 'aitools' && (
            <div className="aitools-tab-grid animate-slideUp">
              {/* Left Column: AI Tools Grid */}
              <div className="ai-tools-list-column">
                <h3 className="section-block-title">Key AI Tools to Master</h3>
                <div className="ai-tools-grid">
                  {aiTools.map((tool, idx) => (
                    <div key={idx} className="ai-tool-card glass-card glow-cyan">
                      <div className="tool-header">
                        <h3>{tool.name}</h3>
                        <span className="tool-type-badge">{tool.type}</span>
                      </div>
                      <p className="tool-desc">{tool.description}</p>
                      
                      <div className="tool-meta">
                        <span className="tool-cost"><strong>Cost Model:</strong> {tool.cost}</span>
                        <div className="tool-benefit">
                          <strong>Core Benefit:</strong>
                          <p>{tool.benefits}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Graphic Banner & AI Grow Explanation */}
              <div className="ai-grow-graphic-card glass-card">
                <div className="ai-graphic-img-wrapper">
                  <img 
                    src="/assets/analytics.jpg" 
                    alt="AI Growth Analytics Concept" 
                    className="ai-banner-img"
                  />
                  <div className="graphic-gradient-shield"></div>
                </div>
                <div className="ai-grow-details-block">
                  <span className="roadmap-badge"><BrainCircuit size={12} /> THE AI REVOLUTION</span>
                  <h3>AI is growing exponentially</h3>
                  <p>
                    AI will not replace humans, but humans using AI tools will replace those who do not. Many schools and colleges still teach obsolete systems.
                  </p>
                  <p className="highlight-ai-sentence">
                    By mastering tools like **Cursor**, **Lovable**, and **Gemini**, a single student can design functional websites, code products, and automate workflows at the scale of a full team.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        .premium-careers-section {
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

        .careers-tab-bar {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 50px;
          padding: 12px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 50px;
          box-shadow: var(--shadow-sm);
        }

        .career-tab {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          color: var(--text-muted);
          padding: 10px 24px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .career-tab:hover {
          color: var(--text-main);
          background: var(--bg-base);
          border-color: var(--border-hover);
        }

        .career-tab.active {
          background: var(--primary-cyan);
          color: #ffffff;
          border-color: var(--primary-cyan);
          font-weight: 750;
          box-shadow: var(--shadow-sm);
        }

        /* MNC Tab Layout */
        .mnc-tab-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }

        .mnc-jobs-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .job-category-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .category-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bullet-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-cyan);
        }

        .job-category-title {
          font-size: 1.25rem;
          color: var(--text-main);
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .category-jobs-grid-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .mnc-job-card {
          padding: 30px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
        }

        .job-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .job-card-header h3 {
          font-size: 1.35rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .salary-range-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(15, 118, 110, 0.08);
          color: var(--primary-teal);
          border: 1px solid rgba(15, 118, 110, 0.2);
          padding: 6px 14px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .job-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .skills-badge-list {
          margin-bottom: 20px;
        }

        .skills-badge-list strong, .get-in-strategy strong {
          display: block;
          font-size: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-badge {
          background: var(--bg-base);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .get-in-strategy {
          border-top: 1.5px solid rgba(15, 23, 42, 0.04);
          padding-top: 16px;
        }

        .get-in-strategy p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .mnc-prep-roadmap {
          padding: 30px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 100px;
        }

        .roadmap-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border: 1px solid var(--border-cyan-glow);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .mnc-prep-roadmap h3 {
          font-size: 1.6rem;
          color: var(--text-main);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .prep-subtitle {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .roadmap-steps-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .roadmap-step-item {
          display: flex;
          gap: 16px;
        }

        .step-number {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary-cyan);
          background: rgba(2, 132, 199, 0.06);
          border: 1.5px solid var(--border-cyan-glow);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-info h4 {
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .step-info p {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.5;
        }

        /* Startup Tab Layout */
        .startups-tab-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }

        .section-block-title {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 24px;
          font-weight: 800;
        }

        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .startup-concept-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
        }

        .concept-card-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .concept-badge {
          background: rgba(234, 88, 12, 0.08);
          color: var(--primary-orange);
          border: 1px solid var(--border-orange-glow);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          width: fit-content;
        }

        .concept-card-header h3 {
          font-size: 1.25rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .concept-detail-block strong {
          display: block;
          font-size: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .concept-detail-block p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .startup-launch-guide {
          padding: 30px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 100px;
        }

        .startup-launch-guide h3 {
          font-size: 1.6rem;
          color: var(--text-main);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .checklist-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .check-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .check-icon-orange {
          color: var(--primary-orange);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-item h4 {
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .check-item p {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.5;
        }

        /* AI Era Tab Layout */
        .aitools-tab-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }

        .ai-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .ai-tool-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
        }

        .tool-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .tool-header h3 {
          font-size: 1.3rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .tool-type-badge {
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border: 1px solid var(--border-cyan-glow);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          width: fit-content;
        }

        .tool-desc {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .tool-meta {
          border-top: 1.5px solid rgba(15, 23, 42, 0.04);
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tool-cost {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .tool-benefit strong {
          display: block;
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .tool-benefit p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .ai-grow-graphic-card {
          padding: 0;
          overflow: hidden;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 100px;
        }

        .ai-graphic-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
        }

        .ai-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .graphic-gradient-shield {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 100%);
        }

        .ai-grow-details-block {
          padding: 24px;
        }

        .ai-grow-details-block h3 {
          font-size: 1.6rem;
          color: var(--text-main);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .ai-grow-details-block p {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .highlight-ai-sentence {
          border-left: 3px solid var(--primary-cyan);
          padding-left: 10px;
          color: var(--text-main) !important;
          font-weight: 600;
        }

        @media (max-width: 991px) {
          .mnc-tab-grid, .startups-tab-grid, .aitools-tab-grid {
            grid-template-columns: 1fr;
          }
          .mnc-prep-roadmap, .startup-launch-guide, .ai-grow-graphic-card {
            position: static;
          }
          .careers-tab-bar {
            border-radius: 20px;
            padding: 8px;
          }
          .career-tab {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
