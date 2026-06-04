import React, { useState } from 'react';
import { examsRegistry } from '../data/examsData';
import { Search, Calendar, Award, MapPin, ClipboardList, BookOpen, Clock, ShieldCheck, X, FileText } from 'lucide-react';

export default function ExamsTracker() {
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeScope, setActiveScope] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExam, setSelectedExam] = useState(null);

  // Filters logic
  const filteredExams = examsRegistry.filter((exam) => {
    const matchesLevel = activeLevel === 'all' || exam.level === activeLevel;
    const matchesScope = activeScope === 'all' || exam.scope === activeScope;
    
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      exam.name.toLowerCase().includes(query) ||
      exam.fullName.toLowerCase().includes(query) ||
      exam.description.toLowerCase().includes(query) ||
      exam.conductingBody.toLowerCase().includes(query);

    return matchesLevel && matchesScope && matchesSearch;
  });

  return (
    <section id="entrance-exams" className="exams-tracker-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-subtitle-tag">
            <ClipboardList size={14} className="tag-decor" /> Entrance Exam Calendars
          </span>
          <h2 className="section-main-title">State & National Entrance Exams</h2>
          <p className="section-desc-text">
            Stay ahead of schedule. Access complete syllabus, paper patterns, weightage, and guidelines for AP State and India National exams.
          </p>
        </div>

        {/* Dynamic Filters Wrapper */}
        <div className="filters-container glass-card">
          <div className="filters-row-top">
            
            {/* Level Tabs */}
            <div className="filter-group">
              <label>Education Stage:</label>
              <div className="stage-tabs">
                <button 
                  className={`stage-tab ${activeLevel === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveLevel('all')}
                >
                  All Stage
                </button>
                <button 
                  className={`stage-tab ${activeLevel === '10th' ? 'active' : ''}`}
                  onClick={() => setActiveLevel('10th')}
                >
                  After 10th
                </button>
                <button 
                  className={`stage-tab ${activeLevel === 'inter' ? 'active' : ''}`}
                  onClick={() => setActiveLevel('inter')}
                >
                  After Inter
                </button>
                <button 
                  className={`stage-tab ${activeLevel === 'grad' ? 'active' : ''}`}
                  onClick={() => setActiveLevel('grad')}
                >
                  After Graduation
                </button>
              </div>
            </div>

            {/* Scope / Geography Toggle */}
            <div className="filter-group">
              <label>Exam Scope:</label>
              <div className="scope-switches">
                <button 
                  className={`scope-switch ${activeScope === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveScope('all')}
                >
                  All Scope
                </button>
                <button 
                  className={`scope-switch ${activeScope === 'AP State' ? 'active' : ''}`}
                  onClick={() => setActiveScope('AP State')}
                >
                  AP State Wise
                </button>
                <button 
                  className={`scope-switch ${activeScope === 'National' ? 'active' : ''}`}
                  onClick={() => setActiveScope('National')}
                >
                  National Wide
                </button>
              </div>
            </div>

          </div>

          <div className="filters-row-bottom">
            {/* Search Input */}
            <div className="search-bar-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search exams by name, conducting body or description (e.g., POLYCET, GATE)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Exams Results Card Grid */}
        {filteredExams.length > 0 ? (
          <div className="exams-grid animate-slideUp">
            {filteredExams.map((exam) => (
              <div 
                key={exam.id} 
                className={`exam-grid-card glass-card ${exam.scope === 'AP State' ? 'glow-orange' : 'glow-cyan'}`}
              >
                <div className="exam-card-header">
                  <span className={`exam-scope-pill ${exam.scope === 'AP State' ? 'scope-ap' : 'scope-national'}`}>
                    <MapPin size={10} />
                    {exam.scope === 'AP State' ? 'AP State' : 'National'}
                  </span>
                  <span className="exam-timeline">
                    <Calendar size={12} /> {exam.months}
                  </span>
                </div>

                <h3 className="exam-card-name">{exam.name}</h3>
                <h4 className="exam-card-fullname">{exam.fullName}</h4>
                <p className="exam-card-desc-snippet">{exam.description.substring(0, 120)}...</p>

                <div className="exam-card-meta-bullets">
                  <div className="meta-bullet">
                    <ShieldCheck size={14} className="bullet-icon-check" />
                    <span>Eligibility: {exam.eligibility.substring(0, 50)}...</span>
                  </div>
                  <div className="meta-bullet">
                    <Clock size={14} className="bullet-icon-check" />
                    <span>Body: {exam.conductingBody}</span>
                  </div>
                </div>

                <button 
                  className="btn btn-outline btn-sm w-full btn-view-pattern"
                  onClick={() => setSelectedExam(exam)}
                >
                  <FileText size={14} />
                  <span>Syllabus & Exam Pattern</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-exams-found-box glass-card text-center">
            <h3>No Exams Found</h3>
            <p>We couldn't find any exams matching your stage, scope, or search parameters. Try adjusting filters.</p>
          </div>
        )}

      </div>

      {/* Details Overlay Modal */}
      {selectedExam && (
        <div className="modal-overlay animate-fadeIn" onClick={() => setSelectedExam(null)}>
          <div className="modal-content glass-card animate-slideUp" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="modal-header-row">
              <div>
                <span className={`exam-scope-pill ${selectedExam.scope === 'AP State' ? 'scope-ap' : 'scope-national'}`}>
                  <MapPin size={12} />
                  {selectedExam.scope === 'AP State' ? 'AP Local State Exam' : 'India National Exam'}
                </span>
                <h2>{selectedExam.name}</h2>
                <h4>{selectedExam.fullName}</h4>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedExam(null)}>
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body-scroll">
              
              {/* Section 1: Overview */}
              <div className="modal-info-block">
                <h5>Exam Description</h5>
                <p>{selectedExam.description}</p>
              </div>

              {/* Grid 2-column info */}
              <div className="modal-detail-grid">
                <div className="detail-item">
                  <strong>Conducting Body:</strong>
                  <span>{selectedExam.conductingBody}</span>
                </div>
                <div className="detail-item">
                  <strong>Tentative Timeline:</strong>
                  <span>{selectedExam.months}</span>
                </div>
                <div className="detail-item">
                  <strong>Duration:</strong>
                  <span>{selectedExam.pattern.duration}</span>
                </div>
                <div className="detail-item">
                  <strong>Marking Scheme:</strong>
                  <span>{selectedExam.pattern.marking}</span>
                </div>
              </div>

              {/* Section 2: Exam Pattern (Subject Weights) */}
              <div className="modal-info-block">
                <h5>Paper Pattern & Weightage ({selectedExam.pattern.totalQuestions})</h5>
                <div className="subject-weight-list">
                  {selectedExam.pattern.subjects.map((sub, idx) => (
                    <div key={idx} className="subject-weight-item">
                      <div className="sub-weight-info">
                        <span className="sub-name">{sub.name}</span>
                        <span className="sub-count">{sub.weight}</span>
                      </div>
                      <div className="weight-bar-bg">
                        <div 
                          className="weight-bar-fill"
                          style={{
                            width: sub.weight.includes('Questions') 
                              ? `${(parseInt(sub.weight) / parseInt(selectedExam.pattern.totalQuestions)) * 100}%`
                              : '50%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Syllabus Outline */}
              <div className="modal-info-block">
                <h5>Syllabus Overview</h5>
                <div className="syllabus-outline-card">
                  <BookOpen size={16} className="syllabus-icon" />
                  <p>{selectedExam.syllabusOutline}</p>
                </div>
              </div>

              {/* Section 4: Prep Strategy */}
              <div className="modal-info-block">
                <h5>Telugu Career Prep Strategy</h5>
                <div className="prep-strategy-card">
                  <Award size={16} className="prep-icon" />
                  <p>{selectedExam.prepTips}</p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="modal-footer-row">
              <button className="btn btn-secondary btn-sm" onClick={() => setSelectedExam(null)}>
                Close Guidelines
              </button>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .exams-tracker-section {
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

        .filters-container {
          margin-bottom: 50px;
          padding: 24px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 24px;
          box-shadow: var(--shadow-md);
        }

        .filters-row-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .filter-group label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stage-tabs, .scope-switches {
          display: flex;
          gap: 6px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 10px;
          border: 1.5px solid var(--border-light);
        }

        .stage-tab, .scope-switch {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 8px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .stage-tab:hover, .scope-switch:hover {
          color: var(--text-main);
        }

        .stage-tab.active {
          background: var(--primary-cyan);
          color: #ffffff;
          font-weight: 700;
        }

        .scope-switch.active {
          background: var(--primary-orange);
          color: #ffffff;
          font-weight: 700;
        }

        .search-bar-wrapper {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }

        .search-input {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 14px;
          padding: 14px 16px 14px 48px;
          color: var(--text-main);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }

        .search-input:focus {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 15px rgba(2, 132, 199, 0.15);
        }

        .search-clear-btn {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }

        .search-clear-btn:hover {
          color: var(--text-main);
        }

        .exams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }

        .exam-grid-card {
          display: flex;
          flex-direction: column;
          min-height: 380px;
          padding: 24px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }

        .exam-grid-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .exam-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .exam-scope-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .scope-ap {
          background: rgba(234, 88, 12, 0.08);
          color: var(--primary-orange);
          border: 1px solid var(--border-orange-glow);
        }

        .scope-national {
          background: rgba(2, 132, 199, 0.08);
          color: var(--primary-cyan);
          border: 1px solid var(--border-cyan-glow);
        }

        .exam-timeline {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .exam-card-name {
          font-size: 1.6rem;
          color: var(--text-main);
          margin-bottom: 6px;
          font-weight: 800;
        }

        .exam-card-fullname {
          font-size: 0.85rem;
          color: var(--primary-cyan);
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .exam-card-desc-snippet {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .exam-card-meta-bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
          margin-top: auto;
        }

        .meta-bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .bullet-icon-check {
          color: var(--primary-teal);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .btn-view-pattern {
          border-color: var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .btn-view-pattern:hover {
          background: var(--bg-base);
          border-color: var(--primary-cyan);
          color: var(--primary-cyan);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 680px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          padding: 30px;
          position: relative;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 24px;
          box-shadow: var(--shadow-lg);
          color: var(--text-main);
        }

        .modal-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1.5px solid var(--border-light);
          padding-bottom: 20px;
          margin-bottom: 20px;
        }

        .modal-header-row h2 {
          font-size: 2rem;
          color: var(--text-main);
          margin-top: 8px;
        }

        .modal-header-row h4 {
          font-size: 0.95rem;
          color: var(--primary-cyan);
          font-weight: 600;
        }

        .modal-close-btn {
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
          transition: color var(--transition-fast) ease;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
        }

        .modal-body-scroll {
          overflow-y: auto;
          flex-grow: 1;
          padding-right: 10px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .modal-info-block h5 {
          font-size: 1.05rem;
          color: var(--text-main);
          margin-bottom: 10px;
          font-weight: 700;
          border-left: 3px solid var(--primary-orange);
          padding-left: 10px;
        }

        .modal-info-block p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .modal-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          background: #f8fafc;
          border: 1.5px solid var(--border-light);
          border-radius: 14px;
          padding: 18px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-item strong {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .detail-item span {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .subject-weight-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .subject-weight-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sub-weight-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .sub-name {
          color: var(--text-main);
          font-weight: 600;
        }

        .sub-count {
          color: var(--primary-cyan);
          font-weight: 700;
        }

        .weight-bar-bg {
          height: 6px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }

        .weight-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-cyan), var(--primary-teal));
          border-radius: 10px;
        }

        .syllabus-outline-card, .prep-strategy-card {
          background: rgba(2, 132, 199, 0.04);
          border: 1.5px solid var(--border-cyan-glow);
          border-radius: 14px;
          padding: 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          box-shadow: var(--shadow-sm);
        }

        .syllabus-icon {
          color: var(--primary-cyan);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .prep-strategy-card {
          background: rgba(234, 88, 12, 0.04);
          border: 1.5px solid var(--border-orange-glow);
        }

        .prep-icon {
          color: var(--primary-orange);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .modal-footer-row {
          border-top: 1.5px solid var(--border-light);
          padding-top: 20px;
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }

        .no-exams-found-box {
          padding: 50px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
        }

        .no-exams-found-box h3 {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .no-exams-found-box p {
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .filters-row-top {
            flex-direction: column;
            align-items: stretch;
          }
          .modal-content {
            padding: 20px;
          }
          .modal-detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
