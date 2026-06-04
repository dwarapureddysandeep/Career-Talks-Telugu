import React, { useState } from 'react';
import { departmentsRegistry } from '../data/jobsData';
import { Shield, Train, Briefcase, Landmark, Building2, MapPin, Award, CheckCircle, IndianRupee, BookOpen, Mail, FileText, ArrowRight } from 'lucide-react';

export default function GovJobsExplorer() {
  const [activeDeptId, setActiveDeptId] = useState('army');

  const activeDept = departmentsRegistry.find((dept) => dept.id === activeDeptId) || departmentsRegistry[0];

  // Helper to map icon components dynamically based on department ID
  const getDeptIcon = (id, size = 20) => {
    switch (id) {
      case 'army':
      case 'navy':
      case 'airforce':
        return <Shield size={size} />;
      case 'railways':
        return <Train size={size} />;
      case 'ssc':
        return <Briefcase size={size} />;
      case 'banking':
        return <Landmark size={size} />;
      case 'ap-state':
        return <Building2 size={size} />;
      case 'upsc':
        return <Award size={size} />;
      case 'teachers':
        return <BookOpen size={size} />;
      case 'postal':
        return <Mail size={size} />;
      default:
        return <Briefcase size={size} />;
    }
  };

  return (
    <section id="jobs" className="gov-jobs-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Building2 size={14} className="tag-decor" /> Public Sector Career Pathways
          </span>
          <h2 className="section-main-title">Government Jobs Directory</h2>
          <p className="section-desc-text">
            Explore secure, prestigious careers in central departments, defense forces, and AP State services. Find qualifications, pay details, and promotion timelines.
          </p>
        </div>

        {/* Infographic Showcase Frame */}
        <div className="gov-infographic-card glass-card">
          <div className="infographic-split">
            <div className="info-graphic-preview">
              <img 
                src="/assets/gov-jobs-india.png" 
                alt="Top Government Jobs in India Map" 
                className="gov-jobs-banner-img"
              />
            </div>
            <div className="info-graphic-details">
              <span className="info-badge">INFOGRAPHIC OVERVIEW</span>
              <h3>State & National Career Portals</h3>
              <p>
                From defense services defending the nation, to clerical administration managing railways and postal networks, government positions offer stability, prestige, and high social respect.
              </p>
              <div className="infographic-features">
                <div className="feat-bullet">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Comprehensive eligibility requirements (10th to postgrad)</span>
                </div>
                <div className="feat-bullet">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Salary standards matching 7th Pay Commission</span>
                </div>
                <div className="feat-bullet">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Direct link to central and state selection exams</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Dashboard Layout */}
        <div className="jobs-dashboard-grid">
          
          {/* Left Column: Department Tabs Side Menu */}
          <div className="jobs-dept-sidemenu">
            <h4 className="sidemenu-header">Select Public Sector:</h4>
            <div className="dept-buttons-stack">
              {departmentsRegistry.map((dept) => (
                <button
                  key={dept.id}
                  className={`dept-menu-btn ${activeDeptId === dept.id ? 'active' : ''}`}
                  onClick={() => setActiveDeptId(dept.id)}
                >
                  <span className="btn-icon-wrap">{getDeptIcon(dept.id, 18)}</span>
                  <div className="btn-text-block">
                    <span className="dept-btn-name">{dept.name}</span>
                    <span className="dept-btn-subname">{dept.subName}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Department Details & Job Cards */}
          <div className="active-jobs-viewer">
            
            {/* Header describing active department */}
            <div className="active-dept-header glass-card">
              <div className="dept-header-top-row">
                <span className="dept-icon-header">{getDeptIcon(activeDept.id, 24)}</span>
                <h2>{activeDept.name} ({activeDept.subName})</h2>
                <span className={`region-badge ${activeDept.region.includes('AP') ? 'ap-theme' : 'national-theme'}`}>
                  <MapPin size={12} />
                  {activeDept.region}
                </span>
              </div>
              <p>{activeDept.description}</p>
            </div>

            {/* List of positions for active department */}
            <div className="positions-cards-container animate-slideUp">
              {activeDept.posts.map((post, idx) => (
                <div key={idx} className="position-info-card glass-card glow-cyan">
                  
                  {/* Position top header row */}
                  <div className="post-card-top-row">
                    <div className="post-title-block">
                      <h3 className="post-title">{post.title}</h3>
                    </div>
                    <div className="salary-pill-tag">
                      <IndianRupee size={12} />
                      <span>{post.salary}</span>
                    </div>
                  </div>

                  {/* Core specifications grid */}
                  <div className="post-specs-grid">
                    <div className="spec-item full-width">
                      <span className="spec-label">Work Profile</span>
                      <p className="spec-value text-muted">{post.workProfile}</p>
                    </div>

                    <div className="spec-item">
                      <span className="spec-label">Qualification Required</span>
                      <p className="spec-value">{post.qualification}</p>
                    </div>

                    <div className="spec-item">
                      <span className="spec-label">Age Limit</span>
                      <p className="spec-value font-semibold">{post.ageLimit}</p>
                    </div>

                    <div className="spec-item">
                      <span className="spec-label">Exam Pattern / Selection</span>
                      <p className="spec-value">{post.examPattern}</p>
                    </div>

                    <div className="spec-item full-width">
                      <span className="spec-label">Promotion Path / Career Growth</span>
                      <div className="promotion-track-container">
                        {post.promotionPath.split(' -> ').map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            {sIdx > 0 && <ArrowRight size={14} className="promotion-arrow" />}
                            <span className="promotion-step-tag">{step}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .gov-jobs-section {
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

        /* Infographic banner styles */
        .gov-infographic-card {
          margin-bottom: 50px;
          padding: 30px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 24px;
          box-shadow: var(--shadow-md);
        }

        .infographic-split {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
          align-items: center;
        }

        .info-graphic-preview {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .gov-jobs-banner-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform var(--transition-slow) ease;
        }

        .info-graphic-preview:hover .gov-jobs-banner-img {
          transform: scale(1.03);
        }

        .info-graphic-details {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .info-badge {
          display: inline-block;
          width: fit-content;
          background: rgba(180, 83, 9, 0.08);
          color: var(--primary-gold);
          border: 1.5px solid var(--border-orange-glow);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 6px;
        }

        .info-graphic-details h3 {
          font-size: 2rem;
          color: var(--text-main);
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .info-graphic-details p {
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.6;
        }

        .infographic-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feat-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .text-teal {
          color: var(--primary-teal);
        }

        /* Dashboard Grid Layout */
        .jobs-dashboard-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Sidemenu styles */
        .jobs-dept-sidemenu {
          position: sticky;
          top: 100px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow-sm);
        }

        .sidemenu-header {
          font-size: 0.85rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .dept-buttons-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dept-menu-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text-muted);
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: all var(--transition-fast);
        }

        .dept-menu-btn:hover {
          background: var(--bg-base);
          color: var(--text-main);
          transform: translateX(4px);
          border-color: var(--border-hover);
        }

        .dept-menu-btn.active {
          background: rgba(2, 132, 199, 0.05);
          border-color: var(--primary-cyan);
          color: var(--primary-cyan);
          box-shadow: var(--shadow-sm);
        }

        .btn-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--bg-base);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          transition: all 0.2s ease;
          border: 1px solid var(--border-light);
        }

        .dept-menu-btn.active .btn-icon-wrap {
          background: rgba(2, 132, 199, 0.1);
          color: var(--primary-cyan);
          border-color: var(--border-cyan-glow);
        }

        .btn-text-block {
          display: flex;
          flex-direction: column;
        }

        .dept-btn-name {
          font-size: 0.95rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
        }

        .dept-btn-subname {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        /* Active Viewer Styles */
        .active-jobs-viewer {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .active-dept-header {
          padding: 30px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .dept-header-top-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .dept-icon-header {
          width: 48px;
          height: 48px;
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-cyan-glow);
        }

        .active-dept-header h2 {
          font-size: 1.8rem;
          color: var(--text-main);
          font-weight: 800;
          flex-grow: 1;
        }

        .region-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 50px;
          text-transform: uppercase;
        }

        .region-badge.national-theme {
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border: 1px solid var(--border-cyan-glow);
        }

        .region-badge.ap-theme {
          background: rgba(234, 88, 12, 0.08);
          color: var(--primary-orange);
          border: 1px solid var(--border-orange-glow);
        }

        .active-dept-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .positions-cards-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .position-info-card {
          padding: 30px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .post-card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .post-title {
          font-size: 1.45rem;
          color: var(--text-main);
          font-weight: 800;
        }

        .salary-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 118, 110, 0.08);
          color: var(--primary-teal);
          border: 1px solid rgba(15, 118, 110, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          box-shadow: var(--shadow-sm);
        }

        /* Specs Grid */
        .post-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          background: #fafafb;
          border: 1.5px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .spec-item.full-width {
          grid-column: span 2;
        }

        .spec-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .spec-value {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.5;
        }

        .promotion-track-container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .promotion-step-tag {
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }

        .promotion-arrow {
          color: var(--text-dim);
        }

        @media (max-width: 991px) {
          .infographic-split {
            grid-template-columns: 1fr;
          }
          .jobs-dashboard-grid {
            grid-template-columns: 1fr;
          }
          .jobs-dept-sidemenu {
            position: static;
          }
          .post-specs-grid {
            grid-template-columns: 1fr;
          }
          .spec-item.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
