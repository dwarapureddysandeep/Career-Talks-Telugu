import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, RefreshCw, Send, Sparkles, X } from 'lucide-react';

export default function CareerBuddy({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "నమస్తే! I am your AI Career Buddy. 🎯 I am here to help you identify the best career pathway according to your interests and strengths. Let's start with your current academic stage. What is your highest qualification?" }
  ]);
  
  // Dialogue steps:
  // 0: Qualification, 1: Interests, 2: Skills, 3: Finance, 4: Goals, 5: Finished
  const [step, setStep] = useState(0);
  const [userProfile, setUserProfile] = useState({
    qualification: '',
    interests: '',
    skills: '',
    finance: '',
    goals: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Dialogue configuration
  const stepsConfig = {
    0: {
      question: "What is your highest qualification?",
      field: "qualification",
      options: [
        { label: "10th Class", value: "10th" },
        { label: "Intermediate (10+2)", value: "inter" },
        { label: "B.Tech Graduate", value: "btech" },
        { label: "Degree Graduate", value: "degree" }
      ]
    },
    1: {
      question: "What area interests you the most?",
      field: "interests",
      options: [
        { label: "Computers & Coding", value: "computers" },
        { label: "Medicine & Healthcare", value: "medical" },
        { label: "Business, Audit & Finance", value: "finance" },
        { label: "Public Administration", value: "admin" },
        { label: "Arts, Design & Sports", value: "creative" }
      ]
    },
    2: {
      question: "What core skills do you possess or want to build?",
      field: "skills",
      options: [
        { label: "Problem Solving & Logic", value: "analytical" },
        { label: "Speaking & Writing", value: "communication" },
        { label: "Drawing & Creative Design", value: "artistic" },
        { label: "Coding & Technical Setup", value: "technical" }
      ]
    },
    3: {
      question: "What is your financial standing for education?",
      field: "finance",
      options: [
        { label: "Budget-Friendly (Govt Scheme)", value: "free" },
        { label: "Standard Tuition Fees", value: "standard" },
        { label: "Open to Foreign / High budget", value: "abroad" }
      ]
    },
    4: {
      question: "What is your primary long-term career goal?",
      field: "goals",
      options: [
        { label: "Get a High-Paying Software Job", value: "software" },
        { label: "Clear Central/State Govt Exams", value: "officer" },
        { label: "Become a Doctor/Healthcare Leader", value: "doctor" },
        { label: "Chartered Accountant / Banker", value: "banker" },
        { label: "Start a Business / Freelance", value: "entrepreneur" }
      ]
    }
  };

  const handleOptionSelect = (val, label) => {
    // 1. Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: label }]);
    
    // 2. Update profile
    const updatedProfile = { ...userProfile, [stepsConfig[step].field]: val };
    setUserProfile(updatedProfile);

    // 3. Increment step
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const nextStep = step + 1;
      setStep(nextStep);

      if (nextStep < 5) {
        setMessages((prev) => [
          ...prev, 
          { sender: 'bot', text: stepsConfig[nextStep].question }
        ]);
      } else {
        // Compile career path
        const roadmap = generateRoadmap(updatedProfile);
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `Based on your profile, here is your customized career roadmap:\n\n${roadmap}\n\nStudy this branch carefully and explore our pathways diagram sections for a detailed syllabus and exams schedule!` },
          { sender: 'bot', text: roadmap, isRoadmap: true }
        ]);
      }
    }, 800);
  };

  // Keyword matches for free text
  const handleCustomTextSend = () => {
    if (!inputText.trim()) return;

    const query = inputText.toLowerCase().trim();
    setMessages((prev) => [...prev, { sender: 'user', text: inputText }]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let matchedRoadmap = "";
      
      if (query.includes('comp') || query.includes('cod') || query.includes('soft') || query.includes('web') || query.includes('c programming')) {
        matchedRoadmap = "MPC -> B.Tech CSE -> AI/ML -> Internships -> Software Engineer -> Product Companies";
      } else if (query.includes('doc') || query.includes('medic') || query.includes('health') || query.includes('pharm') || query.includes('nurse')) {
        matchedRoadmap = "BiPC -> MBBS -> Internship -> MD Specialization -> Specialist Doctor -> Corporate Hospitals";
      } else if (query.includes('ias') || query.includes('ips') || query.includes('govt') || query.includes('civil') || query.includes('upsc') || query.includes('officer')) {
        matchedRoadmap = "Intermediate (HEC/CEC) -> B.A. (History/Civics) -> UPSC Civil Services Prep -> IAS / IPS Officer";
      } else if (query.includes('bank') || query.includes('audit') || query.includes('ca ') || query.includes('accounting') || query.includes('finance')) {
        matchedRoadmap = "Intermediate (MEC/CEC) -> B.Com -> CA Articleship -> Chartered Accountant -> Corporate Auditing";
      } else if (query.includes('business') || query.includes('startup') || query.includes('freelance') || query.includes('own boss') || query.includes('earn money')) {
        matchedRoadmap = "B.Tech / Degree -> Build MVP -> Launch Micro-SaaS / Smart Startup -> Bootstrapping / Venture Funding";
      }

      if (matchedRoadmap) {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `I found a customized roadmap matches your request:\n\n${matchedRoadmap}\n\nHere is your step-by-step flowchart:` },
          { sender: 'bot', text: matchedRoadmap, isRoadmap: true }
        ]);
        setStep(5);
      } else {
        setMessages((prev) => [
          ...prev, 
          { sender: 'bot', text: "That is interesting! Let's narrow it down step-by-step to get a precise roadmap. What is your highest qualification?" }
        ]);
        setStep(0);
      }
    }, 1000);
  };

  const generateRoadmap = (profile) => {
    if (profile.goals === 'software' || profile.interests === 'computers') {
      if (profile.qualification === '10th') {
        return "MPC -> B.Tech CSE -> AI/ML -> Internships -> Software Engineer -> Product Companies";
      } else if (profile.qualification === 'degree') {
        return "B.Sc -> MCA -> AI Engineer -> Product Companies";
      } else {
        return "B.Tech CSE -> AI/ML -> Internships -> Software Engineer -> Product Companies";
      }
    }
    
    if (profile.goals === 'doctor' || profile.interests === 'medical') {
      return "BiPC -> MBBS -> Internship -> MD Specialization -> Specialist Doctor -> Corporate Hospitals";
    }

    if (profile.goals === 'officer' || profile.interests === 'admin') {
      return "Intermediate (HEC/CEC) -> B.A. (History/Civics) -> UPSC Civil Services Prep -> IAS / IPS Officer";
    }

    if (profile.goals === 'banker' || profile.interests === 'finance') {
      return "Intermediate (MEC/CEC) -> B.Com -> CA Articleship -> Chartered Accountant -> Corporate Auditing";
    }

    if (profile.goals === 'entrepreneur' || profile.finance === 'abroad') {
      return "B.Tech / Degree -> Build MVP -> Launch Micro-SaaS / Smart Startup -> Bootstrapping / Venture Funding";
    }

    return "Intermediate MPC / Diploma -> B.Tech -> Core Technical Internships -> Technical Engineer -> Industry Expert";
  };

  const handleReset = () => {
    setMessages([
      { sender: 'bot', text: "నమస్తే! I am your AI Career Buddy. 🎯 I am here to help you identify the best career pathway according to your interests and strengths. Let's start with your current academic stage. What is your highest qualification?" }
    ]);
    setStep(0);
    setUserProfile({ qualification: '', interests: '', skills: '', finance: '', goals: '' });
    setIsTyping(false);
  };

  return (
    <div className="chat-drawer-backdrop" onClick={onClose}>
      <div className="chat-drawer-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Console Header Bar */}
        <div className="chat-console-header">
          <div className="bot-profile-info">
            <span className="bot-avatar-glow"><Bot size={20} className="bot-icon" /></span>
            <div>
              <h3>Career Buddy <span className="online-indicator"></span></h3>
              <p>Telugu Career Counselor</p>
            </div>
          </div>
          
          <div className="chat-header-actions">
            <button className="chat-reset-btn" onClick={handleReset} title="Start Over">
              <RefreshCw size={12} />
              <span>Reset</span>
            </button>
            <button className="chat-close-btn" onClick={onClose} aria-label="Close Chat">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages Display Board */}
        <div className="chat-messages-board">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message-bubble ${msg.sender === 'user' ? 'msg-user' : 'msg-bot'}`}>
              
              <span className="msg-avatar-icon">
                {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
              </span>

              <div className="msg-content-wrapper">
                <span className="sender-tag">{msg.sender === 'user' ? "You" : "Career Buddy"}</span>
                
                {msg.isRoadmap ? (
                  /* Render flowchart visually for roadmaps! */
                  <div className="roadmap-flowchart-card">
                    <div className="roadmap-flow-header">
                      <Sparkles size={16} className="text-orange" />
                      <span>RECOMMENDED PATHWAY</span>
                    </div>
                    <div className="flow-steps-stack">
                      {msg.text.split(' -> ').map((stepText, sIdx) => (
                        <React.Fragment key={sIdx}>
                          {sIdx > 0 && (
                            <div className="flow-connector-line">
                              <span className="connector-dot"></span>
                            </div>
                          )}
                          <div className="flow-step-bubble animate-float">
                            <span className="flow-step-num">Step 0{sIdx + 1}</span>
                            <p className="flow-step-name">{stepText}</p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bubble-text-content">
                    {msg.text.split('\n').map((para, pIdx) => (
                      <p key={pIdx} className="bubble-paragraph">{para}</p>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}

          {/* Bouncing Dots Typing State */}
          {isTyping && (
            <div className="chat-message-bubble msg-bot typing-indicator-bubble">
              <span className="msg-avatar-icon"><Bot size={14} /></span>
              <div className="msg-content-wrapper">
                <span className="sender-tag">Career Buddy</span>
                <div className="typing-dots-wrapper">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Action Choice Chips Input Bar */}
        <div className="chat-actions-bar">
          {step < 5 ? (
            <>
              <h4 className="actions-bar-header">
                Select Your Response:
              </h4>
              <div className="choice-chips-container">
                {stepsConfig[step].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(opt.value, opt.label)}
                    disabled={isTyping}
                    className="choice-chip-btn"
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="congrats-status-bar">
              <Sparkles size={16} className="text-orange" />
              <span>Counseling Roadmap Compiled.</span>
            </div>
          )}

          {/* Free Text Input Field */}
          <div className="chat-typing-input-row">
            <input
              type="text"
              placeholder="Or type directly: 'I like computers'..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCustomTextSend()}
              disabled={isTyping}
              className="chat-typing-field"
            />
            <button
              className="chat-send-btn"
              onClick={handleCustomTextSend}
              disabled={isTyping || !inputText.trim()}
            >
              <Send size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        /* Global Overlay Backdrop */
        .chat-drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out forwards;
        }

        /* Slide Out Drawer Container */
        .chat-drawer-container {
          width: 480px;
          max-width: 100%;
          height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 45px rgba(15, 23, 42, 0.1);
          border-left: 1.5px solid var(--border-light);
          position: relative;
          z-index: 2010;
          animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .chat-console-header {
          background: #f8fafc;
          border-bottom: 1.5px solid var(--border-light);
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bot-profile-info {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .bot-avatar-glow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid var(--border-cyan-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-cyan);
        }

        .bot-profile-info h3 {
          font-size: 1.05rem;
          color: var(--text-main);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .online-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }

        .bot-profile-info p {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .chat-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chat-reset-btn {
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          color: var(--text-muted);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .chat-reset-btn:hover {
          color: var(--text-main);
          background: var(--bg-base);
          border-color: var(--border-hover);
        }

        .chat-close-btn {
          background: transparent;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .chat-close-btn:hover {
          background: rgba(15, 23, 42, 0.05);
          color: var(--text-main);
        }

        /* Messages Board */
        .chat-messages-board {
          flex-grow: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: #fafafb;
        }

        .chat-message-bubble {
          display: flex;
          gap: 12px;
          max-width: 90%;
        }

        .msg-bot {
          align-self: flex-start;
        }

        .msg-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .msg-avatar-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          flex-shrink: 0;
          margin-top: 4px;
          box-shadow: var(--shadow-sm);
        }

        .msg-bot .msg-avatar-icon {
          color: var(--primary-cyan);
          border-color: var(--border-cyan-glow);
        }

        .msg-user .msg-avatar-icon {
          color: var(--primary-orange);
          border-color: var(--border-orange-glow);
        }

        .msg-content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }

        .msg-bot .msg-content-wrapper {
          align-items: flex-start;
        }

        .msg-user .msg-content-wrapper {
          align-items: flex-end;
        }

        .sender-tag {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .bubble-text-content {
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 12px 16px;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
        }

        .msg-bot .bubble-text-content {
          border-top-left-radius: 4px;
          color: var(--text-main);
        }

        .msg-user .bubble-text-content {
          border-top-right-radius: 4px;
          background: var(--primary-cyan);
          color: #ffffff;
          border-color: var(--primary-cyan);
        }

        .bubble-paragraph {
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .bubble-paragraph:last-child {
          margin-bottom: 0;
        }

        /* Roadmap flowchart */
        .roadmap-flowchart-card {
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          border-radius: 16px;
          padding: 16px;
          box-shadow: var(--shadow-sm);
          width: 100%;
          min-width: 280px;
        }

        .roadmap-flow-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary-orange);
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .flow-steps-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .flow-step-bubble {
          background: #fafafb;
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .flow-step-num {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--primary-cyan);
          background: rgba(2, 132, 199, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .flow-step-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .flow-connector-line {
          height: 12px;
          border-left: 2px dashed var(--border-light);
          margin-left: 32px;
          display: flex;
          align-items: center;
        }

        .connector-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-orange);
          margin-left: -4px;
        }

        /* Typing Dots Animation */
        .typing-indicator-bubble {
          align-self: flex-start;
        }

        .typing-dots-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1.5px solid var(--border-light);
          padding: 12px 18px;
          border-radius: 16px;
          border-top-left-radius: 4px;
          box-shadow: var(--shadow-sm);
        }

        .typing-dots-wrapper .dot {
          width: 6px;
          height: 6px;
          background: var(--primary-cyan);
          border-radius: 50%;
          display: inline-block;
          opacity: 0.3;
          animation: bounce 1.2s infinite ease-in-out;
        }

        .typing-dots-wrapper .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dots-wrapper .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Actions Bar */
        .chat-actions-bar {
          background: #ffffff;
          border-top: 1.5px solid var(--border-light);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .actions-bar-header {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-dim);
          font-weight: 700;
        }

        .choice-chips-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .choice-chip-btn {
          background: #ffffff;
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          padding: 8px 12px;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.2s ease;
        }

        .choice-chip-btn:hover {
          color: var(--primary-cyan);
          border-color: var(--primary-cyan);
          background: rgba(2, 132, 199, 0.02);
        }

        .congrats-status-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--primary-orange);
          font-weight: 700;
        }

        .chat-typing-input-row {
          display: flex;
          gap: 10px;
        }

        .chat-typing-field {
          flex-grow: 1;
          border: 1.5px solid var(--border-light);
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.8rem;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.2s ease;
        }

        .chat-typing-field:focus {
          border-color: var(--primary-cyan);
        }

        .chat-send-btn {
          background: var(--primary-cyan);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.2);
        }

        .chat-send-btn:hover {
          background: #0369a1;
          transform: translateY(-1px);
        }

        .chat-send-btn:disabled {
          background: var(--border-hover);
          color: var(--text-dim);
          cursor: not-allowed;
          box-shadow: none;
        }

        @media (max-width: 575px) {
          .chat-drawer-container {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
}
