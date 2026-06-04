import React, { useState } from 'react';
import { pathwayNodes } from '../data/pathwayData';
import { ArrowLeft, BookOpen, MapPin, Award, CheckCircle2, ChevronRight, RefreshCw, Milestone } from 'lucide-react';

export default function PathwayNavigator() {
  // Navigation stack state: starts with "10th"
  const [pathHistory, setPathHistory] = useState(["10th"]);
  const [selectedNodeDetails, setSelectedNodeDetails] = useState(null);

  const currentId = pathHistory[pathHistory.length - 1];
  const currentNode = pathwayNodes[currentId];

  // Navigate forward by clicking a card option
  const handleNodeClick = (nodeId) => {
    // If the node exists in our database
    if (pathwayNodes[nodeId]) {
      setPathHistory([...pathHistory, nodeId]);
      setSelectedNodeDetails(null); // Reset detail preview
    } else {
      // Node has no children - terminal node or no data, show a detail modal/card instead
      setSelectedNodeDetails(nodeId);
    }
  };

  // Navigate back to a specific index in the breadcrumb trail
  const handleBreadcrumbClick = (index) => {
    const newHistory = pathHistory.slice(0, index + 1);
    setPathHistory(newHistory);
    setSelectedNodeDetails(null);
  };

  // Pop the last node to go back one step
  const handleBackClick = () => {
    if (pathHistory.length > 1) {
      const newHistory = [...pathHistory];
      newHistory.pop();
      setPathHistory(newHistory);
      setSelectedNodeDetails(null);
    }
  };

  // Reset navigation to the beginning
  const handleReset = () => {
    setPathHistory(["10th"]);
    setSelectedNodeDetails(null);
  };

  // Options available for the current active node
  const optionIds = currentNode?.children || [];

  return (
    <section id="career-paths" className="pathway-navigator-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Milestone size={14} className="tag-decor" /> Step-by-Step Educational Roadmaps
          </span>
          <h2 className="section-main-title">Interactive Career Path Planner</h2>
          <p className="section-desc-text">
            Our education system is changing. Navigate through the detailed local state (Andhra Pradesh) and national (India) avenues below to build your path.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="navigator-dashboard glass-card">
          
          {/* Dashboard Header Bar */}
          <div className="dashboard-control-bar">
            {/* Breadcrumb Navigation Trail */}
            <div className="breadcrumb-trail">
              {pathHistory.map((nodeId, idx) => {
                const node = pathwayNodes[nodeId];
                return (
                  <React.Fragment key={nodeId}>
                    {idx > 0 && <ChevronRight size={14} className="breadcrumb-separator" />}
                    <span 
                      className={`breadcrumb-item ${idx === pathHistory.length - 1 ? 'active' : ''}`}
                      onClick={() => handleBreadcrumbClick(idx)}
                    >
                      {idx === 0 ? "Start (10th)" : node?.title.split(" (")[0]}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="dashboard-actions">
              {pathHistory.length > 1 && (
                <button className="btn-control" onClick={handleBackClick}>
                  <ArrowLeft size={14} /> <span>Go Back</span>
                </button>
              )}
              {pathHistory.length > 1 && (
                <button className="btn-control text-orange" onClick={handleReset}>
                  <RefreshCw size={14} /> <span>Reset Route</span>
                </button>
              )}
            </div>
          </div>

          {/* Core Dashboard Content Split */}
          <div className="dashboard-main-grid">
            
            {/* Left Box: Active Category Description */}
            <div className="active-pathway-desc">
              <div className="level-badge">Level {currentNode?.level} Pathway</div>
              <h3>{currentNode?.title}</h3>
              <p className="pathway-description-paragraph">{currentNode?.description}</p>
              
              {/* Illustration placement - Dynamically renders the cute study illustrations! */}
              <div className="pathway-illustration-box">
                {currentNode?.level <= 2 ? (
                  <img src="/assets/study-girl.jpg" alt="Student study environment" className="path-deco-img" />
                ) : currentNode?.level === 3 ? (
                  <img src="/assets/group-study.png" alt="Collaborative learning group" className="path-deco-img" />
                ) : (
                  <img src="/assets/analytics.jpg" alt="Career analytics details" className="path-deco-img" />
                )}
                <div className="illustration-overlay-accent"></div>
              </div>
            </div>

            {/* Right Box: Interactive Sub-options */}
            <div className="pathway-options-picker">
              <h4 className="picker-title-header">
                {optionIds.length > 0 ? "Select Your Desired Path:" : "Pathway Outcome reached!"}
              </h4>

              {optionIds.length > 0 ? (
                <div className="options-cards-list animate-slideUp">
                  {optionIds.map((childId) => {
                    const childNode = pathwayNodes[childId];
                    if (!childNode) return null;

                    return (
                      <div 
                        key={childId}
                        className="option-selection-card glow-cyan"
                        onClick={() => handleNodeClick(childId)}
                      >
                        <div className="card-selection-content">
                          <div className="card-top-row">
                            <h5>{childNode.title}</h5>
                            <ChevronRight size={18} className="arrow-enter" />
                          </div>
                          <p>{childNode.description.substring(0, 100)}...</p>
                          
                          {/* Badges for Region */}
                          <div className="card-footer-badges">
                            <span className="badge-region">
                              <MapPin size={10} />
                              {childNode.region === "Both" ? "AP & India wide" : childNode.region}
                            </span>
                            <span className="badge-level">Level {childNode.level}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Ultimate Destination Screen */
                <div className="destination-reached-box animate-fadeIn">
                  <div className="dest-icon-container">
                    <Award size={48} className="gold-award" />
                  </div>
                  <h3>Congratulations!</h3>
                  <p>You have mapped out a premium career roadmap to become a <strong>{currentNode?.title}</strong>.</p>
                  
                  <div className="dest-checkpoints-card">
                    <h5>Path Milestones Accomplished:</h5>
                    <ul>
                      {pathHistory.map((stepId, idx) => {
                        const step = pathwayNodes[stepId];
                        return (
                          <li key={stepId}>
                            <CheckCircle2 size={16} className="milestone-check" />
                            <span>Step {idx + 1}: {step?.title}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button className="btn btn-secondary w-full" onClick={handleReset}>
                    <RefreshCw size={16} />
                    <span>Plan a New Pathway</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .pathway-navigator-section {
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

        .navigator-dashboard {
          padding: 0;
          overflow: hidden;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 24px;
          box-shadow: var(--shadow-lg);
        }

        .dashboard-control-bar {
          background: #f8fafc;
          border-bottom: 1.5px solid var(--border-light);
          padding: 20px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .breadcrumb-trail {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .breadcrumb-item {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dim);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .breadcrumb-item:hover {
          color: var(--primary-cyan);
        }

        .breadcrumb-item.active {
          color: var(--primary-orange);
          cursor: default;
          pointer-events: none;
        }

        .breadcrumb-separator {
          color: var(--text-dim);
          opacity: 0.5;
        }

        .dashboard-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-control {
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }

        .btn-control:hover {
          background: var(--bg-base);
          border-color: var(--border-hover);
          color: var(--text-main);
          transform: translateY(-1px);
        }

        .btn-control.text-orange {
          color: var(--primary-orange);
          border-color: var(--border-orange-glow);
        }

        .btn-control.text-orange:hover {
          background: rgba(234, 88, 12, 0.05);
          border-color: var(--primary-orange);
        }

        .dashboard-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          min-height: 550px;
        }

        .active-pathway-desc {
          padding: 40px;
          border-right: 1.5px solid var(--border-light);
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .level-badge {
          display: inline-block;
          width: fit-content;
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border: 1.5px solid var(--border-cyan-glow);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .active-pathway-desc h3 {
          font-size: 1.8rem;
          color: var(--text-main);
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .pathway-description-paragraph {
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .pathway-illustration-box {
          margin-top: auto;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid var(--border-light);
          aspect-ratio: 16/10;
          box-shadow: var(--shadow-sm);
        }

        .path-deco-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .pathway-illustration-box:hover .path-deco-img {
          transform: scale(1.05);
        }

        .illustration-overlay-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 100%);
        }

        .pathway-options-picker {
          padding: 40px;
          background: #fafafb;
          display: flex;
          flex-direction: column;
        }

        .picker-title-header {
          font-size: 1.1rem;
          color: var(--text-main);
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .options-cards-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 480px;
          overflow-y: auto;
          padding-right: 8px;
        }

        .option-selection-card {
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }

        .option-selection-card:hover {
          background: #ffffff;
          border-color: var(--primary-cyan);
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-top-row h5 {
          font-size: 1.1rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .arrow-enter {
          color: var(--text-dim);
          transition: transform var(--transition-fast), color var(--transition-fast);
        }

        .option-selection-card:hover .arrow-enter {
          transform: translateX(4px);
          color: var(--primary-cyan);
        }

        .option-selection-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .card-footer-badges {
          display: flex;
          gap: 12px;
        }

        .badge-region, .badge-level {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
          background: var(--bg-base);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--border-light);
        }

        .option-selection-card:hover .badge-region {
          color: var(--primary-cyan);
          border-color: var(--border-cyan-glow);
          background: rgba(2, 132, 199, 0.04);
        }

        /* Destination Box */
        .destination-reached-box {
          text-align: center;
          margin: auto 0;
          padding: 20px 0;
        }

        .dest-icon-container {
          width: 80px;
          height: 80px;
          background: rgba(180, 83, 9, 0.08);
          border: 1.5px solid var(--border-orange-glow);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 25px rgba(234, 88, 12, 0.1);
        }

        .gold-award {
          color: var(--primary-orange);
        }

        .destination-reached-box h3 {
          font-size: 1.8rem;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .destination-reached-box p {
          color: var(--text-muted);
          margin-bottom: 24px;
          font-size: 1rem;
        }

        .dest-checkpoints-card {
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
          text-align: left;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
        }

        .dest-checkpoints-card h5 {
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 14px;
          font-weight: 700;
        }

        .dest-checkpoints-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .dest-checkpoints-card li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .milestone-check {
          color: var(--primary-teal);
        }

        @media (max-width: 991px) {
          .dashboard-main-grid {
            grid-template-columns: 1fr;
          }
          .active-pathway-desc {
            border-right: none;
            border-bottom: 1.5px solid var(--border-light);
          }
          .pathway-illustration-box {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
