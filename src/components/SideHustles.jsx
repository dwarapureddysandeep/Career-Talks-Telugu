import React, { useState } from 'react';
import { sideHustlesRegistry } from '../data/sideHustlesData';
import { 
  Laptop, Video, BookOpen, Mic, Briefcase, Percent, 
  TrendingUp, ShoppingCart, ShieldAlert, Wrench, Sparkles, 
  DollarSign, Clock, BarChart, ArrowRight, CheckCircle2, 
  AlertTriangle, Play, HelpCircle, Layers, Activity 
} from 'lucide-react';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function SideHustles() {
  const [activeHustleId, setActiveHustleId] = useState('creator');
  const [activeSubTabId, setActiveSubTabId] = useState('youtube');
  
  // Simulator State
  const [simHustleId, setSimHustleId] = useState('freelance');
  const [simHours, setSimHours] = useState(15);
  const [simSkill, setSimSkill] = useState('intermediate'); // beginner, intermediate, pro
  const [simCapital, setSimCapital] = useState(10000); // Only for trading simulation

  const activeHustle = sideHustlesRegistry.find(h => h.id === activeHustleId) || sideHustlesRegistry[0];

  const handleHustleChange = (id) => {
    setActiveHustleId(id);
    const targetHustle = sideHustlesRegistry.find(h => h.id === id);
    if (targetHustle && targetHustle.subChannels && targetHustle.subChannels.length > 0) {
      setActiveSubTabId(targetHustle.subChannels[0].id);
    } else {
      setActiveSubTabId('');
    }
  };

  // Get icons for left sidebar categories
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'creator': return <Video size={18} />;
      case 'freelance': return <Briefcase size={18} />;
      case 'affiliate': return <Percent size={18} />;
      case 'trading': return <TrendingUp size={18} />;
      case 'dropship': return <ShoppingCart size={18} />;
      default: return <Laptop size={18} />;
    }
  };

  // Simulation logic
  const calculateSimulation = () => {
    let baseRate = 0;
    let skillMultiplier = 1;
    let timeToMoney = '';
    let description = '';

    // Assign skill multiplier
    if (simSkill === 'beginner') skillMultiplier = 0.5;
    else if (simSkill === 'intermediate') skillMultiplier = 1.3;
    else if (simSkill === 'pro') skillMultiplier = 3.6;

    if (simHustleId === 'creator') {
      baseRate = 320; // ₹/hr long-term average
      timeToMoney = "6 - 12 Months (audience traction dependent)";
      description = "Content creation requires high upfront consistency before monetizing via AdSense or Brand deals.";
    } else if (simHustleId === 'freelance') {
      baseRate = 450;
      timeToMoney = "1 - 3 Months (depends on bidding/portfolio)";
      description = "Freelancing allows you to trade skills (like coding or editing) for quick foreign client payments.";
    } else if (simHustleId === 'affiliate') {
      baseRate = 280;
      timeToMoney = "3 - 6 Months (SEO and click referral builds)";
      description = "Affiliate earnings scale when you build traffic around Hostinger plans or Amazon products.";
    } else if (simHustleId === 'dropship') {
      baseRate = 380;
      timeToMoney = "1 - 2 Months (depends on ad budgets converting)";
      description = "Dropshipping offers high revenue potential, but you must factor in Facebook/Instagram ad spend.";
    }

    if (simHustleId === 'trading') {
      // Trading uses capital ROI instead of hourly rates
      let roiMin = 0;
      let roiMax = 0;
      let warningText = '';

      if (simSkill === 'beginner') {
        roiMin = -15; // Loss potential
        roiMax = 2;
        warningText = "As a beginner, there is a very high probability of losing your initial capital.";
      } else if (simSkill === 'intermediate') {
        roiMin = -2;
        roiMax = 7;
        warningText = "Consistent intermediate traders focus heavily on risk management and small, compounding swing gains.";
      } else {
        roiMin = 4;
        roiMax = 12;
        warningText = "Professional traders maintain strict stop-losses. 90% of retail F&O traders fail; equity swing is recommended.";
      }

      const minGain = Math.round((simCapital * roiMin) / 100);
      const maxGain = Math.round((simCapital * roiMax) / 100);
      
      const earningsText = minGain < 0 
        ? `-₹${Math.abs(minGain)} to +₹${maxGain} / month`
        : `₹${minGain} to ₹${maxGain} / month`;

      return {
        income: earningsText,
        timeToMoney: "Volatile (Immediate wins/losses)",
        description: `Based on ₹${simCapital.toLocaleString('en-IN')} trading capital. ${warningText}`,
        routine: `Spend ${Math.min(4, Math.round(simHours/7))} hours/day studying market indices, drawing charts in TradingView, and keeping records of trades.`
      };
    }

    // Standard hours-based calculations
    const lowRange = Math.round(simHours * 4 * baseRate * skillMultiplier * 0.85);
    const highRange = Math.round(simHours * 4 * baseRate * skillMultiplier * 1.25);

    // Format display string
    const incomeDisplay = `₹${lowRange.toLocaleString('en-IN')} - ₹${highRange.toLocaleString('en-IN')} / month`;
    
    // Suggested Routine
    let routine = '';
    if (simHours <= 10) {
      routine = `Focus 1.5 hours/day on learning 1 high-income skill (e.g. learning Figma or CapCut edits).`;
    } else if (simHours <= 20) {
      routine = `Spend 2 hours/day client-hunting/scripting and 1 hour building your digital portfolio or profile gigs.`;
    } else {
      routine = `Execute like a full-time business. Spend 3 hours/day on client deliverables/production and 2 hours on marketing & outreach.`;
    }

    return {
      income: incomeDisplay,
      timeToMoney,
      description,
      routine
    };
  };

  const simResult = calculateSimulation();

  return (
    <section id="side-hustles" className="side-hustles-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <Laptop size={14} className="tag-decor" /> Side Side-Hustles Hub
          </span>
          <h2 className="section-main-title">Content Creation & Online Earning</h2>
          <p className="section-desc-text">
            Explore authentic step-by-step blueprints for launching side businesses. Select a channel to view requirements, platforms, and risk frameworks.
          </p>
        </div>

        {/* Outer Dashboard layout representing separate pages */}
        <div className="hustles-dashboard-frame glass-card">
          
          {/* Left Navigation bar: Pages */}
          <div className="hustles-sidebar-nav">
            <div className="nav-title-lbl">Earn Pages</div>
            <div className="nav-links-grid">
              {sideHustlesRegistry.map((hustle) => {
                const isActive = activeHustleId === hustle.id;
                return (
                  <button
                    key={hustle.id}
                    onClick={() => handleHustleChange(hustle.id)}
                    className={`nav-page-btn ${isActive ? 'active-page' : ''}`}
                  >
                    <span className="nav-page-icon">{getCategoryIcon(hustle.id)}</span>
                    <span className="nav-page-name">{hustle.name}</span>
                    <ArrowRight size={14} className="nav-arrow-indicator" />
                  </button>
                );
              })}
            </div>
            
            <div className="sidebar-quick-note">
              <Sparkles size={14} className="note-icon" />
              <p>Verify earnings targets in the interactive calculator below!</p>
            </div>
          </div>

          {/* Right Dashboard Area: Simulating a separate page loaded dynamically */}
          <div className="hustle-page-viewport animate-slideUp" key={activeHustleId}>
            
            {/* Sub-page Header */}
            <div className="viewport-header">
              <div className="vh-main">
                <span className="vh-badge">{activeHustle.budget.includes('Zero') ? 'Zero Capital Start' : 'Investment Required'}</span>
                <h3>{activeHustle.name} Overview</h3>
                <p className="vh-tagline">{activeHustle.tagline}</p>
              </div>

              {/* Sub-page Quick Stats */}
              <div className="vh-stats-grid">
                <div className="vh-stat-card">
                  <div className="vhs-icon-wrap"><DollarSign size={16} /></div>
                  <div className="vhs-txt">
                    <span>Potential</span>
                    <strong>{activeHustle.income.split(' (')[0]}</strong>
                  </div>
                </div>
                <div className="vh-stat-card">
                  <div className="vhs-icon-wrap"><Clock size={16} /></div>
                  <div className="vhs-txt">
                    <span>Commitment</span>
                    <strong>{activeHustle.time}</strong>
                  </div>
                </div>
                <div className="vh-stat-card">
                  <div className="vhs-icon-wrap"><BarChart size={16} /></div>
                  <div className="vhs-txt">
                    <span>Difficulty</span>
                    <strong>{activeHustle.difficulty.split(' (')[0]}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Inner Dashboard Tabs (Sub-Channels details) */}
            {activeHustle.subChannels && activeHustle.subChannels.length > 0 && (
              <div className="sub-tab-panel">
                <div className="sub-tabs-list-header">
                  {activeHustle.subChannels.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubTabId(sub.id)}
                      className={`sub-tab-pill ${activeSubTabId === sub.id ? 'active-sub-tab' : ''}`}
                    >
                      {sub.id === 'youtube' && <Video size={13} />}
                      {sub.id === 'instagram' && <InstagramIcon size={13} />}
                      {sub.id === 'blogging' && <BookOpen size={13} />}
                      {sub.id === 'podcast' && <Mic size={13} />}
                      {sub.id === 'options' && <ShieldAlert size={13} />}
                      <span>{sub.name}</span>
                    </button>
                  ))}
                </div>

                {/* Sub-Tab Details View */}
                {activeHustle.subChannels.map((sub) => {
                  if (activeSubTabId !== sub.id) return null;
                  return (
                    <div key={sub.id} className="sub-tab-content-viewport animate-slideUp">
                      
                      {/* Sub-Channel Description */}
                      <div className="sub-channel-brief">
                        <h4>How to Start {sub.name}</h4>
                        <p>{sub.description}</p>
                      </div>

                      {/* Technical Blueprint splits */}
                      <div className="blueprint-grid">
                        <div className="blueprint-card">
                          <div className="bp-hdr">
                            <Wrench size={16} className="bp-icon cyan-icon" />
                            <h5>Setup & Hardware Required</h5>
                          </div>
                          <p>{sub.setup}</p>
                        </div>

                        <div className="blueprint-card">
                          <div className="bp-hdr">
                            <Sparkles size={16} className="bp-icon orange-icon" />
                            <h5>Execution & Growth Strategy</h5>
                          </div>
                          <p>{sub.strategy}</p>
                        </div>

                        <div className="blueprint-card">
                          <div className="bp-hdr">
                            <DollarSign size={16} className="bp-icon teal-icon" />
                            <h5>Monetization Mechanics</h5>
                          </div>
                          <p>{sub.monetization}</p>
                        </div>
                      </div>

                      {/* OPTIONS TRADING RISK BANNER */}
                      {sub.id === 'options' && (
                        <div className="sebi-alert-warning-banner">
                          <div className="sebi-banner-accent"></div>
                          <div className="sebi-banner-content">
                            <div className="sebi-header-row">
                              <ShieldAlert className="sebi-alert-icon" size={24} />
                              <h4>CRITICAL RISK WARNING: SEBI Options Trading Advisory</h4>
                            </div>
                            <p className="sebi-stat-main">
                              <strong>9 out of 10</strong> individual traders in equity Futures & Options (F&O) segment incurred net losses.
                            </p>
                            <p className="sebi-details-txt">
                              On average, loss-makers registered a net loss close to <strong>₹50,000</strong>. Over and above these losses, transaction costs added another 15% to their financial burden. Never trade F&O with borrowed money or capital designated for essential living expenses.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Freelancing Special Content: Skills Grid */}
            {activeHustleId === 'freelance' && (
              <div className="freelance-skills-hub">
                <h4 className="hub-title"><Wrench size={16} className="inline-title-icon" /> Essential Skills Registry</h4>
                <p className="hub-desc">To succeed in freelancing, master one of these high-paying skill streams. Avoid bidding with general profiles.</p>
                
                <div className="skills-registry-grid">
                  {activeHustle.skills.map((skill, index) => (
                    <div key={index} className="skill-registry-card">
                      <div className="skill-reg-hdr">
                        <CheckCircle2 size={16} className="skill-chk-icon" />
                        <h5>{skill.name}</h5>
                      </div>
                      <p>{skill.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dropshipping Special Content: Visual Flowchart */}
            {activeHustleId === 'dropship' && activeHustle.processFlow && (
              <div className="dropship-flowchart-area">
                <h4 className="flow-title"><Layers size={16} className="inline-title-icon" /> Dropshipping Supply Chain Flow</h4>
                
                <div className="stepper-horizontal">
                  {activeHustle.processFlow.map((step, index) => (
                    <div key={index} className="stepper-step">
                      <div className="step-circle-badge">
                        <span>{index + 1}</span>
                      </div>
                      <div className="step-content-box">
                        <h6>{step.step}</h6>
                        <p>{step.details}</p>
                      </div>
                      {index < activeHustle.processFlow.length - 1 && (
                        <div className="step-connector-arrow">
                          <Play size={10} className="connector-play" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Disclaimer Box */}
            <div className="viewport-disclaimer-box">
              <AlertTriangle size={16} className="disc-icon" />
              <div>
                <strong>Realistic Expectation Disclaimer:</strong> {activeHustle.warning}
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Simulator Section */}
        <div className="simulator-glass-card glass-card">
          <div className="simulator-hdr">
            <Activity size={20} className="sim-logo-decor" />
            <div>
              <h3>Interactive Side Hustle Simulator</h3>
              <p>Simulate realistic earnings potential and customize your weekly learning schedule.</p>
            </div>
          </div>

          <div className="simulator-split-layout">
            
            {/* Controls Side */}
            <div className="sim-controls-pane">
              
              {/* Hustle Selection */}
              <div className="sim-control-group">
                <label className="sim-label">Select Side Hustle to Simulate:</label>
                <div className="sim-tabs-selection">
                  <button 
                    onClick={() => { setSimHustleId('creator'); if (simHours < 15) setSimHours(15); }}
                    className={`sim-select-tab ${simHustleId === 'creator' ? 'sim-tab-active' : ''}`}
                  >
                    🎥 Creator
                  </button>
                  <button 
                    onClick={() => setSimHustleId('freelance')}
                    className={`sim-select-tab ${simHustleId === 'freelance' ? 'sim-tab-active' : ''}`}
                  >
                    💻 Freelancing
                  </button>
                  <button 
                    onClick={() => setSimHustleId('affiliate')}
                    className={`sim-select-tab ${simHustleId === 'affiliate' ? 'sim-tab-active' : ''}`}
                  >
                    🤝 Affiliate
                  </button>
                  <button 
                    onClick={() => setSimHustleId('trading')}
                    className={`sim-select-tab ${simHustleId === 'trading' ? 'sim-tab-active' : ''}`}
                  >
                    📈 Trading
                  </button>
                  <button 
                    onClick={() => { setSimHustleId('dropship'); if (simHours < 20) setSimHours(20); }}
                    className={`sim-select-tab ${simHustleId === 'dropship' ? 'sim-tab-active' : ''}`}
                  >
                    📦 Dropshipping
                  </button>
                </div>
              </div>

              {/* Hours Slider */}
              <div className="sim-control-group">
                <div className="sim-label-row">
                  <label className="sim-label">Weekly Hours Committed:</label>
                  <span className="sim-val-bubble">{simHours} Hours</span>
                </div>
                <input 
                  type="range" 
                  min={simHustleId === 'dropship' ? 10 : simHustleId === 'creator' ? 10 : 5} 
                  max="40" 
                  value={simHours} 
                  onChange={(e) => setSimHours(parseInt(e.target.value))}
                  className="sim-slider-input"
                />
                <span className="sim-sub-desc">
                  {simHours <= 10 && "Casual / Hobby schedule"}
                  {simHours > 10 && simHours <= 25 && "Consistent Part-Time effort"}
                  {simHours > 25 && "High Commitment / Full business setup"}
                </span>
              </div>

              {/* Skill level buttons */}
              <div className="sim-control-group">
                <label className="sim-label">Target Skill Expertise level:</label>
                <div className="sim-skill-toggle-group">
                  <button 
                    onClick={() => setSimSkill('beginner')} 
                    className={`skill-toggle-btn ${simSkill === 'beginner' ? 'skill-active bg-cyan-light' : ''}`}
                  >
                    Beginner <span>(Learning phase)</span>
                  </button>
                  <button 
                    onClick={() => setSimSkill('intermediate')} 
                    className={`skill-toggle-btn ${simSkill === 'intermediate' ? 'skill-active bg-orange-light' : ''}`}
                  >
                    Intermediate <span>(1-2 portfolio projects)</span>
                  </button>
                  <button 
                    onClick={() => setSimSkill('pro')} 
                    className={`skill-toggle-btn ${simSkill === 'pro' ? 'skill-active bg-teal-light' : ''}`}
                  >
                    Professional <span>(Expert delivery speed)</span>
                  </button>
                </div>
              </div>

              {/* Capital Slider - ONLY visible if Trading is active */}
              {simHustleId === 'trading' && (
                <div className="sim-control-group animate-slideUp">
                  <div className="sim-label-row">
                    <label className="sim-label">Starting Trading Capital:</label>
                    <span className="sim-val-bubble text-orange">₹{simCapital.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range" 
                    min="5000" 
                    max="150000" 
                    step="5000"
                    value={simCapital} 
                    onChange={(e) => setSimCapital(parseInt(e.target.value))}
                    className="sim-slider-input trading-slider"
                  />
                  <p className="sim-sub-desc warning-text-sub">Remember: Leverage and derivatives segments multiply potential losses rapidly.</p>
                </div>
              )}

            </div>

            {/* Results Side */}
            <div className="sim-results-pane">
              <div className="res-panel-box">
                <span className="res-card-label">Estimated Monthly Potential</span>
                <div className="res-earnings-value">{simResult.income}</div>
                <p className="res-sub-disclaimer">Estimates are based on historical marketplace data averages.</p>
              </div>

              <div className="res-details-blocks">
                <div className="res-info-row">
                  <strong>Expected time to first payout:</strong>
                  <span>{simResult.timeToMoney}</span>
                </div>

                <div className="res-info-row">
                  <strong>Market Assessment:</strong>
                  <p>{simResult.description}</p>
                </div>

                <div className="res-routine-card">
                  <span className="rc-lbl">Your Recommended Weekly Routine:</span>
                  <p>{simResult.routine}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .side-hustles-section {
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

        /* Dashboard Frame styling */
        .hustles-dashboard-frame {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          overflow: hidden;
          padding: 0;
          border-radius: 20px;
          margin-bottom: 50px;
          border: 1.5px solid var(--border-light);
        }

        /* Sidebar navigation */
        .hustles-sidebar-nav {
          background: #fafafb;
          border-right: 1.5px solid var(--border-light);
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
        }

        .nav-title-lbl {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          font-weight: 700;
          margin-bottom: 15px;
          padding-left: 10px;
        }

        .nav-links-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .nav-page-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          padding: 12px 16px;
          text-align: left;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.25s ease;
          width: 100%;
        }

        .nav-page-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          transition: color 0.2s ease;
        }

        .nav-arrow-indicator {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.25s ease;
          color: var(--primary-cyan);
        }

        .nav-page-btn:hover {
          background: rgba(15, 23, 42, 0.02);
          color: var(--text-main);
        }

        .nav-page-btn:hover .nav-page-icon {
          color: var(--text-main);
        }

        .active-page {
          background: #ffffff !important;
          border-color: var(--border-light) !important;
          color: var(--primary-cyan) !important;
          box-shadow: var(--shadow-sm);
        }

        .active-page .nav-page-icon {
          color: var(--primary-cyan) !important;
        }

        .active-page .nav-arrow-indicator {
          opacity: 1;
          transform: translateX(0);
        }

        .sidebar-quick-note {
          margin-top: 30px;
          background: rgba(2, 132, 199, 0.04);
          border: 1px dashed var(--border-cyan-glow);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .note-icon {
          color: var(--primary-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .sidebar-quick-note p {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Viewport Area */
        .hustle-page-viewport {
          padding: 40px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          min-height: 520px;
        }

        .viewport-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 25px;
          margin-bottom: 25px;
        }

        .vh-main {
          flex-grow: 1;
        }

        .vh-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary-cyan);
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid var(--border-cyan-glow);
          padding: 3px 10px;
          border-radius: 50px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .viewport-header h3 {
          font-size: 1.8rem;
          color: var(--text-main);
          margin-bottom: 6px;
          font-weight: 800;
        }

        .vh-tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 600px;
        }

        /* Stats in header */
        .vh-stats-grid {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
        }

        .vh-stat-card {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 140px;
        }

        .vhs-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vhs-txt {
          display: flex;
          flex-direction: column;
        }

        .vhs-txt span {
          font-size: 0.7rem;
          color: var(--text-dim);
          text-transform: uppercase;
          font-weight: 600;
        }

        .vhs-txt strong {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 700;
        }

        /* Inner tabs for sub-channels */
        .sub-tab-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sub-tabs-list-header {
          display: flex;
          gap: 10px;
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 12px;
          flex-wrap: wrap;
        }

        .sub-tab-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 50px;
          border: 1.5px solid transparent;
          background: #fafafb;
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sub-tab-pill:hover {
          background: rgba(15, 23, 42, 0.03);
          color: var(--text-main);
        }

        .active-sub-tab {
          background: #ffffff !important;
          border-color: var(--primary-cyan) !important;
          color: var(--primary-cyan) !important;
          box-shadow: var(--shadow-sm);
        }

        .sub-tab-content-viewport {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sub-channel-brief h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .sub-channel-brief p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Blueprint cards grid */
        .blueprint-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .blueprint-card {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 18px;
        }

        .bp-hdr {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .bp-icon {
          flex-shrink: 0;
        }

        .cyan-icon { color: var(--primary-cyan); }
        .orange-icon { color: var(--primary-orange); }
        .teal-icon { color: var(--primary-teal); }

        .bp-hdr h5 {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .blueprint-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* SEBI Warning Box styling */
        .sebi-alert-warning-banner {
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          background: #fff5f5;
          border: 1.5px solid #fecaca;
          margin-top: 15px;
        }

        .sebi-banner-accent {
          width: 6px;
          background: #ef4444;
          flex-shrink: 0;
        }

        .sebi-banner-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sebi-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sebi-alert-icon {
          color: #ef4444;
        }

        .sebi-header-row h4 {
          color: #991b1b;
          font-size: 1rem;
          font-weight: 800;
        }

        .sebi-stat-main {
          font-size: 1rem;
          color: #991b1b;
        }

        .sebi-details-txt {
          font-size: 0.85rem;
          color: #7f1d1d;
          line-height: 1.5;
        }

        /* Skills Hub */
        .freelance-skills-hub {
          margin-top: 20px;
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
        }

        .inline-title-icon {
          vertical-align: middle;
          margin-right: 6px;
          color: var(--primary-cyan);
        }

        .hub-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .hub-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .skills-registry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .skill-registry-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 16px;
          box-shadow: var(--shadow-sm);
        }

        .skill-reg-hdr {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .skill-chk-icon {
          color: var(--primary-teal);
        }

        .skill-reg-hdr h5 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .skill-registry-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Dropshipping supply chain flowchart */
        .dropship-flowchart-area {
          margin-top: 20px;
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
        }

        .flow-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 16px;
        }

        .stepper-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          flex-wrap: wrap;
        }

        .stepper-step {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          position: relative;
          flex: 1;
          min-width: 160px;
        }

        .step-circle-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--primary-cyan);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .step-content-box h6 {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .step-content-box p {
          font-size: 0.75rem;
          color: var(--text-dim);
          line-height: 1.4;
        }

        .step-connector-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          color: var(--border-hover);
          margin-left: auto;
          padding-left: 10px;
        }

        .connector-play {
          transform: rotate(0deg);
        }

        /* Disclaimer Box */
        .viewport-disclaimer-box {
          margin-top: 30px;
          padding: 16px;
          background: #fafafb;
          border-radius: 12px;
          border: 1.5px solid var(--border-light);
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .disc-icon {
          color: var(--primary-orange);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Simulator Glass Card */
        .simulator-glass-card {
          margin-top: 40px;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
        }

        .simulator-hdr {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 20px;
          margin-bottom: 25px;
        }

        .sim-logo-decor {
          color: var(--primary-orange);
        }

        .simulator-hdr h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .simulator-hdr p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .simulator-split-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .sim-controls-pane {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sim-control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sim-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sim-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: var(--text-main);
          font-weight: 700;
        }

        .sim-val-bubble {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-cyan);
          background: rgba(2, 132, 199, 0.08);
          padding: 2px 10px;
          border-radius: 4px;
        }

        .sim-tabs-selection {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .sim-select-tab {
          padding: 8px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .sim-select-tab:hover {
          background: rgba(15, 23, 42, 0.03);
        }

        .sim-tab-active {
          background: var(--text-main) !important;
          color: #ffffff !important;
          border-color: var(--text-main) !important;
        }

        .sim-slider-input {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: var(--border-hover);
          outline: none;
        }

        .sim-slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--primary-cyan);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: var(--shadow-sm);
          transition: transform 0.1s ease;
        }

        .sim-slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .trading-slider::-webkit-slider-thumb {
          background: var(--primary-orange) !important;
        }

        .sim-sub-desc {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .warning-text-sub {
          color: #ef4444 !important;
          font-weight: 500;
        }

        .sim-skill-toggle-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .skill-toggle-btn {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .skill-toggle-btn span {
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--text-dim);
          margin-top: 2px;
        }

        .skill-active {
          color: var(--text-main) !important;
          border-width: 2px;
        }

        .bg-cyan-light {
          border-color: var(--primary-cyan) !important;
          background: rgba(2, 132, 199, 0.03);
        }

        .bg-orange-light {
          border-color: var(--primary-orange) !important;
          background: rgba(234, 88, 12, 0.03);
        }

        .bg-teal-light {
          border-color: var(--primary-teal) !important;
          background: rgba(15, 118, 110, 0.03);
        }

        /* Results Pane */
        .sim-results-pane {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
        }

        .res-panel-box {
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 20px;
        }

        .res-card-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-dim);
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 6px;
        }

        .res-earnings-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--primary-teal);
        }

        .res-sub-disclaimer {
          font-size: 0.7rem;
          color: var(--text-dim);
          margin-top: 4px;
        }

        .res-details-blocks {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .res-info-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .res-info-row strong {
          font-size: 0.8rem;
          color: var(--text-main);
          text-transform: uppercase;
          font-weight: 700;
        }

        .res-info-row span, .res-info-row p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .res-routine-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 14px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .rc-lbl {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-orange);
          text-transform: uppercase;
        }

        .res-routine-card p {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 600;
          line-height: 1.4;
        }

        /* Responsive styling */
        @media (max-width: 991px) {
          .hustles-dashboard-frame {
            grid-template-columns: 1fr;
          }
          .hustles-sidebar-nav {
            border-right: none;
            border-bottom: 1.5px solid var(--border-light);
            padding: 20px;
          }
          .nav-links-grid {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .nav-page-btn {
            width: calc(50% - 4px);
            padding: 10px 12px;
          }
          .hustle-page-viewport {
            padding: 24px;
          }
          .viewport-header {
            flex-direction: column;
            gap: 20px;
          }
          .vh-stats-grid {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 8px;
          }
          .blueprint-grid {
            grid-template-columns: 1fr;
          }
          .skills-registry-grid {
            grid-template-columns: 1fr;
          }
          .simulator-split-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .stepper-horizontal {
            flex-direction: column;
            gap: 25px;
          }
          .step-connector-arrow {
            display: none;
          }
        }

        @media (max-width: 575px) {
          .nav-page-btn {
            width: 100%;
          }
          .sim-skill-toggle-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
