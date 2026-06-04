// Career Talks Telugu - Comprehensive Career Trees (Steps 1 to 5)

export const pathwayNodes = {
  // --- LEVEL 1: STARTING ENTRY POINT ---
  "10th": {
    id: "10th",
    title: "After 10th Class Options",
    level: 1,
    region: "Both",
    description: "The primary career tree. Click any path category to explore the next sub-branches and career roadmaps.",
    children: [
      "inter", 
      "diploma", 
      "iti", 
      "paramedical", 
      "agri", 
      "defence", 
      "skills", 
      "open", 
      "poly-apprentice", 
      "navy-foundation", 
      "fine-arts", 
      "sports"
    ]
  },

  // --- LEVEL 2: 12 MAIN OPTIONS (A to L) ---

  // A. Intermediate
  "inter": {
    id: "inter",
    title: "A. Intermediate (2 Years)",
    level: 2,
    region: "Both",
    description: "Traditional two-year pre-university study. Focuses heavily on academic theories. Governed by BIEAP in Andhra Pradesh and equivalent boards nationwide.",
    children: ["inter-mpc", "inter-bipc", "inter-mec", "inter-cec", "inter-hec", "inter-vocational"]
  },

  // B. Diploma (AP POLYCET)
  "diploma": {
    id: "diploma",
    title: "B. Diploma / Polytechnic (3 Years)",
    level: 2,
    region: "AP State",
    description: "Hands-on engineering diplomas. Entrance locally in Andhra Pradesh is via AP POLYCET. Prepares for core industry postings or lateral entry to 2nd year B.Tech.",
    children: [
      "dip-civil", 
      "dip-mech", 
      "dip-eee", 
      "dip-ece", 
      "dip-cse", 
      "dip-aiml", 
      "dip-datascience", 
      "dip-auto", 
      "dip-mining", 
      "dip-agri", 
      "dip-chem"
    ]
  },

  // C. ITI
  "iti": {
    id: "iti",
    title: "C. ITI Trades (1 to 2 Years)",
    level: 2,
    region: "Both",
    description: "Industrial Training Institutes trade certifications focusing on specific manual engineering tasks. Highly popular for quick jobs in railways, PSUs, and electricity boards.",
    children: ["iti-elec", "iti-fitter", "iti-welder", "iti-copa", "iti-mech", "iti-turner", "iti-diesel", "iti-plumber", "iti-carp"]
  },

  // D. Paramedical
  "paramedical": {
    id: "paramedical",
    title: "D. Paramedical Courses (2 to 3 Years)",
    level: 2,
    region: "Both",
    description: "Allied healthcare assistance diploma certifications. Prepares support technicians for private hospitals, labs, and government medical teams.",
    children: ["para-dmlt", "para-ophth", "para-rad", "para-nurse"]
  },

  // E. Agriculture
  "agri": {
    id: "agri",
    title: "E. Agriculture Polytechnic (2 to 3 Years)",
    level: 2,
    region: "AP State",
    description: "Specialized diplomas in agricultural science, machinery, and seed technology. Supervised by ANGRAU / Dr. YSRHU in Andhra Pradesh.",
    children: ["agri-poly", "horti-poly"]
  },

  // F. Defence Schools
  "defence": {
    id: "defence",
    title: "F. Defence Schools & Academies",
    level: 2,
    region: "National",
    description: "Elite residential schools focused on rigorous academic curriculum and physical training to prepare candidates for officer commissioning exams.",
    children: ["def-military", "def-sainik", "def-college"]
  },

  // G. Skill Courses
  "skills": {
    id: "skills",
    title: "G. Modern Skill Certifications",
    level: 2,
    region: "Both",
    description: "Job-ready software and marketing capabilities. Master these tools in 3 to 6 months to start freelancing or private agency roles directly.",
    children: ["skill-graphic", "skill-video", "skill-code", "skill-marketing", "skill-aitools"]
  },

  // H. Open School
  "open": {
    id: "open",
    title: "H. Open School Distance Learning",
    level: 2,
    region: "National",
    description: "Flexible distance secondary education for students who cannot attend formal classrooms daily or want to focus on sports or family trade.",
    children: ["open-nios"]
  },

  // I. Polytechnic + Apprenticeship
  "poly-apprentice": {
    id: "poly-apprentice",
    title: "I. Polytechnic + Apprenticeship Dual Course",
    level: 2,
    region: "Both",
    description: "A combination of standard engineering diploma classes followed directly by a 1-year paid apprentice training in local industries. High employment conversion rates.",
    children: []
  },

  // J. Merchant Navy Foundation Courses
  "navy-foundation": {
    id: "navy-foundation",
    title: "J. Merchant Navy Foundation Courses",
    level: 2,
    region: "National",
    description: "Basic deck cadet, pre-sea GP rating training programs. Opens careers as merchant crew on global cargo cargo lines.",
    children: []
  },

  // K. Fine Arts
  "fine-arts": {
    id: "fine-arts",
    title: "K. Fine Arts & Creative Careers",
    level: 2,
    region: "Both",
    description: "Diploma courses in painting, traditional drawing, sculpture design, instrumental music, and theatre arts. Governed by cultural state bodies.",
    children: []
  },

  // L. Sports Academies
  "sports": {
    id: "sports",
    title: "L. Sports Academies & Physical Coaching",
    level: 2,
    region: "Both",
    description: "Enrolling in national sports training centers (SAI) to build careers in athletics, archery, cricket, hockey, and physical fitness coaching.",
    children: []
  },


  // --- LEVEL 3: BRANCHES & STREAMS (STEP 2 Outcomes) ---

  // Intermediate Streams
  "inter-mpc": {
    id: "inter-mpc",
    title: "MPC (Maths, Physics, Chemistry)",
    level: 3,
    region: "Both",
    description: "The primary path for engineering, computer sciences, physical sciences, and technical defense roles.",
    children: ["mpc-eng", "mpc-degree", "mpc-defence", "mpc-pilot", "mpc-merchant-navy", "mpc-arch", "mpc-law"]
  },
  "inter-bipc": {
    id: "inter-bipc",
    title: "BiPC (Biology, Physics, Chemistry)",
    level: 3,
    region: "Both",
    description: "The medical and life sciences branch. Opens medical, nursing, agro-science, and pharmacology paths.",
    children: [
      "bipc-mbbs", "bipc-bds", "bipc-bams", "bipc-bhms", "bipc-bpt",
      "bipc-nursing", "bipc-vet", "bipc-agri", "bipc-pharmacy",
      "bipc-biotech", "bipc-food", "bipc-micro", "bipc-genetics"
    ]
  },
  "inter-mec": {
    id: "inter-mec",
    title: "MEC (Mathematics, Economics, Commerce)",
    level: 3,
    region: "Both",
    description: "A great academic blend of mathematics and corporate finance. Ideal for quantitative business analysts.",
    children: ["mec-bcom", "mec-bba", "mec-ca", "mec-cma", "mec-cs", "mec-economics", "mec-banking"]
  },
  "inter-cec": {
    id: "inter-cec",
    title: "CEC (Commerce, Economics, Civics)",
    level: 3,
    region: "Both",
    description: "Traditional business and accounting stream. Focused on financial frameworks and trade administration.",
    children: ["cec-bcom", "cec-bba", "cec-ba", "cec-law", "cec-hm", "cec-tourism"]
  },
  "inter-hec": {
    id: "inter-hec",
    title: "HEC (History, Economics, Civics)",
    level: 3,
    region: "Both",
    description: "Strong humanities focus. Provides excellent grounding for law, history, journalism, and administrative service.",
    children: ["hec-ba", "hec-journalism", "hec-social", "hec-civils"]
  },
  "inter-vocational": {
    id: "inter-vocational",
    title: "Vocational Intermediate Courses",
    level: 3,
    region: "Both",
    description: "Practical job-specific intermediate certifications.",
    children: ["voc-degree"]
  },

  // --- LEVEL 4: INTERMEDIATE SUB-BRANCHES / DIPLOMA & ITI PATHS (STEP 3) ---

  // MPC Level 4 Options
  "mpc-eng": {
    id: "mpc-eng",
    title: "Engineering (B.Tech / B.E.)",
    level: 4,
    region: "Both",
    description: "Professional technical degrees. Admission via state entrance exams (AP EAPCET) or national exams (JEE Main).",
    children: [
      "eng-cse", "eng-aiml", "eng-ds", "eng-cyber", "eng-ece", "eng-eee",
      "eng-mech", "eng-civil", "eng-aero", "eng-robo", "eng-mechatronics", "eng-biotech"
    ]
  },
  "mpc-degree": {
    id: "mpc-degree",
    title: "Degree (B.Sc)",
    level: 4,
    region: "Both",
    description: "3-year standard or honors science graduation. Focuses on theoretical research and logic foundations.",
    children: ["bsc-maths", "bsc-physics", "bsc-stats"]
  },
  "mpc-defence": {
    id: "mpc-defence",
    title: "Defence Services Officer Entry",
    level: 4,
    region: "National",
    description: "Joining the armed forces as commissioned officers. Primary pathway is through UPSC National Defence Academy (NDA) exam.",
    children: ["def-nda", "def-navy", "def-airforce"]
  },
  "mpc-pilot": {
    id: "mpc-pilot",
    title: "Commercial Pilot License (CPL)",
    level: 4,
    region: "National",
    description: "Requires training at DGCA approved flying clubs, passing ground exams, and completing 200 hours of flight hours.",
    children: []
  },
  "mpc-merchant-navy": {
    id: "mpc-merchant-navy",
    title: "Merchant Navy Deck Cadet",
    level: 4,
    region: "National",
    description: "Pursuing B.Sc Nautical Science or GME cadet courses. Requires IMU CET national entrance qualification.",
    children: []
  },
  "mpc-arch": {
    id: "mpc-arch",
    title: "Architecture (B.Arch)",
    level: 4,
    region: "National",
    description: "5-year creative structural designing degree. Requires qualification in NATA / JEE Paper 2.",
    children: []
  },
  "mpc-law": {
    id: "mpc-law",
    title: "Integrated Law (5 Years LL.B)",
    level: 4,
    region: "Both",
    description: "Combined dual degrees (e.g. B.A. LL.B, B.B.A. LL.B). Cleared via national CLAT or state LAWCET examinations.",
    children: []
  },

  // BiPC Level 4 Options
  "bipc-mbbs": { id: "bipc-mbbs", title: "MBBS (Allopathy Doctor)", level: 4, region: "Both", description: "5.5-year medicine degree. Admission strictly through NEET UG national rank counseling.", children: [] },
  "bipc-bds": { id: "bipc-bds", title: "BDS (Dental Surgeon)", level: 4, region: "Both", description: "5-year dentistry degree covering oral surgery and care. NEET UG qualification required.", children: [] },
  "bipc-bams": { id: "bipc-bams", title: "BAMS (Ayurvedic Medicine)", level: 4, region: "Both", description: "5.5-year Indian traditional medicine degree. Part of AYUSH counseling.", children: [] },
  "bipc-bhms": { id: "bipc-bhms", title: "BHMS (Homeopathic Medicine)", level: 4, region: "Both", description: "5.5-year homeopathy science course. Entrance based on NEET UG.", children: [] },
  "bipc-bpt": { id: "bipc-bpt", title: "BPT (Physiotherapy Science)", level: 4, region: "Both", description: "4.5-year course covering sports injuries, recovery therapies, and physical exercises.", children: [] },
  
  "bipc-nursing": {
    id: "bipc-nursing",
    title: "B.Sc Nursing (4 Years)",
    level: 4,
    region: "Both",
    description: "Professional training in nursing, bedside healthcare assistance, and hospital emergency operations.",
    children: ["nurse-msc", "nurse-healthcare"]
  },
  "bipc-vet": { id: "bipc-vet", title: "Veterinary Sciences (B.V.Sc & AH)", level: 4, region: "Both", description: "5.5-year degree in animal surgery, dairy management, and breeding science. Local entry via AP EAPCET.", children: [] },
  "bipc-agri": { id: "bipc-agri", title: "B.Sc Agriculture / Horticulture", level: 4, region: "Both", description: "4-year science degree in crop technology, genetics, and farm management. Entry via EAPCET/ICAR.", children: [] },
  
  "bipc-pharmacy": {
    id: "bipc-pharmacy",
    title: "B.Pharmacy / Pharm.D",
    level: 4,
    region: "Both",
    description: "Pharmaceutical chemistry, drug manufacturing, and dosage formulations. EAPCET entrance holds locally.",
    children: ["pharm-mpharm", "pharm-ind"]
  },
  "bipc-biotech": { id: "bipc-biotech", title: "Biotechnology (B.Sc / B.Tech)", level: 4, region: "Both", description: "Molecular science, genetic edits, and lab analysis. High industrial career scope.", children: [] },
  "bipc-food": { id: "bipc-food", title: "B.Sc Food Technology", level: 4, region: "Both", description: "Food storage mechanics, package safety, nutrition quality assessment.", children: [] },
  "bipc-micro": { id: "bipc-micro", title: "B.Sc Microbiology", level: 4, region: "Both", description: "Lab analysis of microscopic pathogens, bacteria, vaccines, and cell structures.", children: [] },
  "bipc-genetics": { id: "bipc-genetics", title: "B.Sc Genetics", level: 4, region: "Both", description: "Heredity studies, gene therapies, and hybrid species research.", children: [] },

  // MEC Level 4 Options
  "mec-bcom": {
    id: "mec-bcom",
    title: "B.Com (General / Computer Science)",
    level: 4,
    region: "Both",
    description: "Graduation in corporate tax, banking, bookkeeping, and computer operations.",
    children: ["bcom-mcom", "bcom-mba", "bcom-ca", "bcom-cma", "bcom-banking"]
  },
  "mec-bba": {
    id: "mec-bba",
    title: "BBA (Business Administration)",
    level: 4,
    region: "Both",
    description: "3-year management training focusing on team leadership, HR, and marketing.",
    children: ["bba-mba", "bba-entrepreneurship"]
  },
  "mec-ca": { id: "mec-ca", title: "Chartered Accountancy (CA)", level: 4, region: "National", description: "Top national audit certification by ICAI. Cleared in 3 stages: Foundation, Intermediate, Final.", children: [] },
  "mec-cma": { id: "mec-cma", title: "Cost & Management Accountant (CMA)", level: 4, region: "National", description: "ICAI cost analytics designation. Highly prioritized by public corporations.", children: [] },
  "mec-cs": { id: "mec-cs", title: "Company Secretary (CS)", level: 4, region: "National", description: "Corporate legislation compliance and legal advisory certifications overseen by ICSI.", children: [] },
  "mec-economics": { id: "mec-economics", title: "B.A. Economics", level: 4, region: "Both", description: "Analytical graduation in macro/micro finances, monetary policies, and statistical logic.", children: [] },
  "mec-banking": { id: "mec-banking", title: "Banking & Financial Services", level: 4, region: "Both", description: "Direct certifications (e.g. JAIIB/CAIIB preparation) and bank clerk/PO training courses.", children: [] },

  // CEC Level 4 Options
  "cec-bcom": {
    id: "cec-bcom",
    title: "B.Com (Commerce & Computations)",
    level: 4,
    region: "Both",
    description: "Focuses on commercial finance and business accounting softwares.",
    children: ["bcom-mcom", "bcom-mba", "bcom-ca", "bcom-cma", "bcom-banking"]
  },
  "cec-bba": {
    id: "cec-bba",
    title: "BBA (Management Systems)",
    level: 4,
    region: "Both",
    description: "Covers standard administration structures, marketing plans, and HR setups.",
    children: ["bba-mba", "bba-entrepreneurship"]
  },
  "cec-ba": {
    id: "cec-ba",
    title: "B.A. (Bachelor of Arts)",
    level: 4,
    region: "Both",
    description: "Humanities subjects. Great base for legal streams or social sector works.",
    children: ["ba-ma", "ba-upsc", "ba-group-services"]
  },
  "cec-law": { id: "cec-law", title: "Integrated Law (B.A. LL.B)", level: 4, region: "Both", description: "5-year combined law degree. Entrance via LAWCET state ranks.", children: [] },
  "cec-hm": { id: "cec-hm", title: "Hotel Management (BHM)", level: 4, region: "Both", description: "Catering, hospitality operations, front office management, and global tourism administration.", children: [] },
  "cec-tourism": { id: "cec-tourism", title: "Tourism & Travel Management", level: 4, region: "Both", description: "Hospitality services, tour planning, travel logs agency administration.", children: [] },

  // HEC Level 4 Options
  "hec-ba": {
    id: "hec-ba",
    title: "B.A. (History, Civics, Economics)",
    level: 4,
    region: "Both",
    description: "Classical humanities degree. Focuses on social layouts, historical records, and policy dynamics.",
    children: ["ba-ma", "ba-upsc", "ba-group-services"]
  },
  "hec-journalism": { id: "hec-journalism", title: "Journalism & Media Comm", level: 4, region: "Both", description: "News anchors, field reporting, copywriting, print and digital media jobs.", children: [] },
  "hec-social": { id: "hec-social", title: "Bachelor of Social Work (BSW)", level: 4, region: "Both", description: "NGO management, community mobilization, rural assistance, and social counseling programs.", children: [] },
  "hec-civils": { id: "hec-civils", title: "Civil Services UPSC / Group Prep", level: 4, region: "National", description: "Preparing early for central IAS/IPS (UPSC) or state deputy ranks (APPSC Group 1/2).", children: [] },

  // Vocational Option
  "voc-degree": { id: "voc-degree", title: "Related Degree Programs", level: 4, region: "Both", description: "Direct vocational degrees (B.Voc) focusing on retail, logs, or healthcare assistants.", children: [] },

  // Diploma Outcome Options (Level 4, children of diploma branches)
  "dip-btech-lateral": {
    id: "dip-btech-lateral",
    title: "B.Tech Lateral Entry (Direct 2nd Year)",
    level: 4,
    region: "AP State",
    description: "Enrolling directly into the second year of a 4-year engineering program locally via AP ECET rank.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "dip-bsc": {
    id: "dip-bsc",
    title: "B.Sc Degree Lateral Entry",
    level: 4,
    region: "Both",
    description: "Pursuing standard sciences graduation. Links directly to advanced computer/math outcomes.",
    children: ["bsc-msc", "bsc-mca", "bsc-mba", "bsc-research"]
  },
  "dip-gov-jobs": { id: "dip-gov-jobs", title: "Government Technical Jobs", level: 4, region: "Both", description: "Assistant Engineer (AE) in local boards, Junior Engineer (JE) in Railways/SSC.", children: [] },
  "dip-private-jobs": { id: "dip-private-jobs", title: "Private Core Industry Jobs", level: 4, region: "Both", description: "Factory operator, CAD layout draftsperson, service technician posts.", children: [] },
  "dip-apprentice": { id: "dip-apprentice", title: "1-Year Paid Apprentice Training", level: 4, region: "Both", description: "On-site industrial training under NATS scheme. Leads to standard hiring conversion.", children: [] },

  // ITI Outcome Options (Level 4, children of ITI trades)
  "iti-apprentice-outcome": { id: "iti-apprentice-outcome", title: "ITI Apprenticeship (NAPS)", level: 4, region: "Both", description: "Paid industrial on-job training under National Apprenticeship Promotion Scheme.", children: [] },
  "iti-railway-jobs": { id: "iti-railway-jobs", title: "Railway Technician / ALP Jobs", level: 4, region: "National", description: "Assistant Loco Pilot (ALP), signal maintainer, track machine technician posts in Indian Railways.", children: [] },
  "iti-psu-jobs": { id: "iti-psu-jobs", title: "PSU Technician Jobs", level: 4, region: "National", description: "Core junior technical postings in BHEL, ONGC, SAIL, NTPC, and DRDO.", children: [] },
  "iti-private-jobs": { id: "iti-private-jobs", title: "Private Industry Technician", level: 4, region: "Both", description: "Plant electrician, automobile servicing, CNC operating posts in private sectors.", children: [] },


  // --- LEVEL 5: SPECIALIZED PATHS & DEGREE PROGRAMS (STEP 4) ---

  // Engineering branches
  "eng-cse": {
    id: "eng-cse",
    title: "Computer Science Engineering (CSE)",
    level: 5,
    region: "Both",
    description: "Focuses on software logic, database architecture, network systems, and coding algorithms.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-aiml": {
    id: "eng-aiml",
    title: "Artificial Intelligence & Machine Learning",
    level: 5,
    region: "Both",
    description: "Covers neural structures, predictive algorithms, python scripting, and automated model testing.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-ds": {
    id: "eng-ds",
    title: "Data Science Engineering",
    level: 5,
    region: "Both",
    description: "Focuses on mathematical analytics, big data dashboards, statistics, and business query modeling.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-cyber": {
    id: "eng-cyber",
    title: "Cyber Security Engineering",
    level: 5,
    region: "Both",
    description: "Covers network protection, code penetration testing, firewall operations, and security logs auditing.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-ece": {
    id: "eng-ece",
    title: "Electronics & Communication (ECE)",
    level: 5,
    region: "Both",
    description: "Vlsi design, signal networks, embedded processors, smart chip manufacturing.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-eee": {
    id: "eng-eee",
    title: "Electrical & Electronics (EEE)",
    level: 5,
    region: "Both",
    description: "Power grids, electrical motor dynamics, solar panels generation, heavy voltage systems.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-mech": {
    id: "eng-mech",
    title: "Mechanical Engineering",
    level: 5,
    region: "Both",
    description: "Fluid cycles, combustion engine dynamics, CNC machine layouts, metal processing.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-civil": {
    id: "eng-civil",
    title: "Civil Engineering",
    level: 5,
    region: "Both",
    description: "Concrete materials testing, structural analysis, highway/irrigation layouts mapping.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-aero": {
    id: "eng-aero",
    title: "Aerospace Engineering",
    level: 5,
    region: "Both",
    description: "Aerodynamic designs, jet propulsion physics, satellite structures, drone testing.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-robo": {
    id: "eng-robo",
    title: "Robotics Engineering",
    level: 5,
    region: "Both",
    description: "Embedded controllers, robotic arm servos, computer vision calibration, automatic machines.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-mechatronics": {
    id: "eng-mechatronics",
    title: "Mechatronics Engineering",
    level: 5,
    region: "Both",
    description: "A blend of mechanical assemblies, electronic sensor controllers, and computer scripts.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },
  "eng-biotech": {
    id: "eng-biotech",
    title: "Biotechnology Engineering (B.Tech)",
    level: 5,
    region: "Both",
    description: "Bioreactor designs, molecular farming, cell culture scaling, enzyme synthesis layouts.",
    children: ["eng-mtech", "eng-mba", "eng-ms", "eng-gov", "eng-psu", "eng-software", "eng-startup", "eng-research"]
  },

  // B.Sc Subjects
  "bsc-maths": {
    id: "bsc-maths",
    title: "B.Sc Mathematics",
    level: 5,
    region: "Both",
    description: "Advanced calculus, algebra, numerical equations, and logical mathematical operations.",
    children: ["bsc-msc", "bsc-mca", "bsc-mba", "bsc-research"]
  },
  "bsc-physics": {
    id: "bsc-physics",
    title: "B.Sc Physics",
    level: 5,
    region: "Both",
    description: "Electromagnetism, thermodynamics, quantum mechanics basics, optics, experimental setups.",
    children: ["bsc-msc", "bsc-mca", "bsc-mba", "bsc-research"]
  },
  "bsc-stats": {
    id: "bsc-stats",
    title: "B.Sc Statistics",
    level: 5,
    region: "Both",
    description: "Probability laws, analytics graphs, sampling formulas, business analytics metrics.",
    children: ["bsc-msc", "bsc-mca", "bsc-mba", "bsc-research"]
  },

  // Defence Sub-options (Level 5)
  "def-nda": { id: "def-nda", title: "National Defence Academy (NDA)", level: 5, region: "National", description: "Joint military academy for Army, Navy, Air Force commissioning. Cleared via written UPSC and SSB interview.", children: [] },
  "def-navy": { id: "def-navy", title: "Indian Navy 10+2 Cadet Entry", level: 5, region: "National", description: "B.Tech course sponsored by the Indian Navy at Ezhimala. High JEE Main ranks needed.", children: [] },
  "def-airforce": { id: "def-airforce", title: "Air Force Cadet Scheme", level: 5, region: "National", description: "Joining pilot streams or ground duties in IAFA. Regular medical fitness strictly applies.", children: [] },


  // --- LEVEL 6: AFTER GRADUATION OUTCOMES (STEP 4 & 5 Progression) ---

  // After Engineering Outcomes (Level 6)
  "eng-mtech": {
    id: "eng-mtech",
    title: "M.Tech (Post Graduation)",
    level: 6,
    region: "National",
    description: "Advanced technical specialization. Qualification via national GATE exam opens entries in IITs/NITs.",
    children: ["mtech-phd", "mtech-scientist", "mtech-professor", "mtech-research-engineer", "mtech-psu", "mtech-product"]
  },
  "eng-mba": {
    id: "eng-mba",
    title: "MBA (Management Masters)",
    level: 6,
    region: "National",
    description: "Masters of Business Administration. Entry via CAT/XAT/GMAT exams to prestigious IIMs.",
    children: ["mba-leadership", "mba-consulting", "mba-entrepreneur"]
  },
  "eng-ms": { id: "eng-ms", title: "MS Abroad (International Degrees)", level: 6, region: "National", description: "Technical masters degrees in US, Europe, or Australia. Requires GRE, TOEFL/IELTS tests.", children: [] },
  "eng-gov": { id: "eng-gov", title: "Government Technical Officer Jobs", level: 6, region: "Both", description: "Staff Selection Commission (SSC) CGLE posts, State Public Service assistant director titles.", children: [] },
  "eng-psu": { id: "eng-psu", title: "PSU Jobs (Executive Trainee)", level: 6, region: "National", description: "High-paying direct officer postings in ONGC, IOCL, GAIL, HPCL using GATE scores.", children: [] },
  "eng-software": { id: "eng-software", title: "Software Development Jobs", level: 6, region: "Both", description: "Web/App Developer, QA testing, DevOps positions in IT service MNCs or startup teams.", children: [] },
  "eng-startup": { id: "eng-startup", title: "Launching a Technical Startup", level: 6, region: "Both", description: "Building custom digital products, securing angel funding, forming corporate teams.", children: [] },
  "eng-research": { id: "eng-research", title: "Research & Development Labs", level: 6, region: "National", description: "Joining labs (ISRO, DRDO, CSIR) as junior research trainees or project assistants.", children: [] },

  // After B.Sc Outcomes (Level 6)
  "bsc-msc": {
    id: "bsc-msc",
    title: "M.Sc (Post Graduation)",
    level: 6,
    region: "Both",
    description: "Specialized post-graduation in physical, mathematical, or computing sciences.",
    children: ["msc-research", "msc-phd", "msc-lecturer"]
  },
  "bsc-mca": {
    id: "bsc-mca",
    title: "MCA (Computer Applications)",
    level: 6,
    region: "Both",
    description: "Masters in Computer Applications. Practical software layout coding. Equivalent to B.Tech CSE posts.",
    children: ["mca-architect", "mca-ai-engineer", "mca-product"]
  },
  "bsc-mba": {
    id: "bsc-mba",
    title: "MBA after B.Sc",
    level: 6,
    region: "Both",
    description: "Broadening analytical base with corporate management, finances, or marketing models.",
    children: ["mba-leadership", "mba-consulting", "mba-entrepreneur"]
  },
  "bsc-research": { id: "bsc-research", title: "Research Fellow positions", level: 6, region: "National", description: "Enrolling in CSIR/UGC projects as project assistants and pursuing laboratory studies.", children: [] },

  // After B.Com Outcomes (Level 5/6)
  "bcom-mcom": { id: "bcom-mcom", title: "M.Com (Accounting Masters)", level: 5, region: "Both", description: "Masters in Commerce. High scope in banking structures and physical lecturer streams.", children: [] },
  "bcom-mba": {
    id: "bcom-mba",
    title: "MBA after B.Com",
    level: 5,
    region: "Both",
    description: "Corporate management masters. Fits well with commerce backgrounds.",
    children: ["mba-leadership", "mba-consulting", "mba-entrepreneur"]
  },
  "bcom-ca": { id: "bcom-ca", title: "Chartered Accountant (Post-Grad)", level: 5, region: "National", description: "Completing Articleship training and passing final CA papers.", children: [] },
  "bcom-cma": { id: "bcom-cma", title: "CMA certification completion", level: 5, region: "National", description: "Finalizing cost analytics exams and taking up advisory roles.", children: [] },
  "bcom-banking": { id: "bcom-banking", title: "Banking Officer / PO", level: 5, region: "Both", description: "Cracking IBPS / SBI Probationary Officer (PO) exams for bank management positions.", children: [] },

  // After BBA Outcomes (Level 5/6)
  "bba-mba": {
    id: "bba-mba",
    title: "MBA (Super Specialization)",
    level: 5,
    region: "Both",
    description: "Further polishing marketing, logistics, or HR analytics in top management schools.",
    children: ["mba-leadership", "mba-consulting", "mba-entrepreneur"]
  },
  "bba-entrepreneurship": { id: "bba-entrepreneurship", title: "Entrepreneurship & Business Launch", level: 5, region: "Both", description: "Launching retail, logistics, franchise networks, or service agencies directly.", children: [] },

  // After BA Outcomes (Level 5/6)
  "ba-ma": { id: "ba-ma", title: "M.A. (Post Graduation)", level: 5, region: "Both", description: "Masters of Arts in History, English, or Public Policy. Excellent base for lecturing.", children: [] },
  "ba-upsc": { id: "ba-upsc", title: "Civil Services (UPSC IAS/IPS)", level: 5, region: "National", description: "Cracking CSE prelims, mains, and interview for IAS, IPS, or IFS commissions.", children: [] },
  "ba-group-services": { id: "ba-group-services", title: "APPSC Group 1 & 2 Officers", level: 5, region: "AP State", description: "Cracking state exams for Deputy Collector, RTO, Municipal Commissioner posts.", children: [] },

  // After Pharmacy Outcomes (Level 5)
  "pharm-mpharm": { id: "pharm-mpharm", title: "M.Pharmacy (Drug Research)", level: 5, region: "Both", description: "Specializing in industrial pharmacy, analysis labs, and pharmacognosy studies.", children: [] },
  "pharm-ind": { id: "pharm-ind", title: "Pharma Industry roles", level: 5, region: "Both", description: "Taking up drug quality analysis, clinical trials, or medical representative posts in pharma zones.", children: [] },

  // After Nursing Outcomes (Level 5)
  "nurse-msc": { id: "nurse-msc", title: "M.Sc Nursing (Specialization)", level: 5, region: "Both", description: "Masters in critical care, pediatrics, or psychiatric nursing methods.", children: [] },
  "nurse-healthcare": { id: "nurse-healthcare", title: "Advanced Healthcare Jobs", level: 5, region: "Both", description: "Working as head nurse in multispecialty units, hospital administrators, or overseas medical personnel.", children: [] },


  // --- LEVEL 7: AFTER POST GRADUATION / MBA / MCA (STEP 5) ---

  // After M.Tech PG Outcomes
  "mtech-phd": {
    id: "mtech-phd",
    title: "PhD Doctoral Research",
    level: 7,
    region: "National",
    description: "Doctor of Philosophy. Deep laboratory studies and paper reviews.",
    children: ["phd-professor", "phd-scientist", "phd-research-fellow"]
  },
  "mtech-scientist": { id: "mtech-scientist", title: "Scientist Posting (ISRO / DRDO)", level: 7, region: "National", description: "Direct senior scientist/engineer postings in central technical boards.", children: [] },
  "mtech-professor": { id: "mtech-professor", title: "Professor / Lecturer in Engineering", level: 7, region: "Both", description: "Teaching engineering disciplines in state or private universities.", children: [] },
  "mtech-research-engineer": { id: "mtech-research-engineer", title: "Research & Development Engineer", level: 7, region: "Both", description: "Specialized tech development tasks in hardware/telecom laboratories.", children: [] },
  "mtech-psu": { id: "mtech-psu", title: "PSU Assistant Manager Posts", level: 7, region: "National", description: "Direct manager recruitments using advanced PG qualifications.", children: [] },
  "mtech-product": { id: "mtech-product", title: "Product Development Companies", level: 7, region: "Both", description: "Senior coding, structural architectures in top tech brands (Google, Amazon).", children: [] },

  // After MBA Outcomes
  "mba-leadership": { id: "mba-leadership", title: "Corporate Leadership (CEO / Director)", level: 7, region: "Both", description: "Leading corporate divisions, setting strategies, managing budgets and teams.", children: [] },
  "mba-consulting": { id: "mba-consulting", title: "Management Consulting", level: 7, region: "Both", description: "Providing advisory solutions to complex corporate tasks (MBB firms).", children: [] },
  "mba-entrepreneur": { id: "mba-entrepreneur", title: "Entrepreneurship & Startup Scale", level: 7, region: "Both", description: "Founding business structures and scaling venture-backed operations.", children: [] },

  // After M.Sc Outcomes
  "msc-research": { id: "msc-research", title: "Research Analyst / Project Lead", level: 7, region: "Both", description: "Spearheading mathematical models or laboratory research projects.", children: [] },
  "msc-phd": {
    id: "msc-phd",
    title: "PhD after M.Sc",
    level: 7,
    region: "National",
    description: "Doctoral research program. Cleared via CSIR NET JRF rank.",
    children: ["phd-professor", "phd-scientist", "phd-research-fellow"]
  },
  "msc-lecturer": { id: "msc-lecturer", title: "Degree College Lecturer", level: 7, region: "Both", description: "Cleared via UGC NET / State SET qualifications for assistant professor posts.", children: [] },

  // After MCA Outcomes
  "mca-architect": { id: "mca-architect", title: "Software Architect", level: 7, region: "Both", description: "Mapping heavy data networks, cloud systems, and structural layouts for code solutions.", children: [] },
  "mca-ai-engineer": { id: "mca-ai-engineer", title: "AI & ML Engineer", level: 7, region: "Both", description: "Designing automatic pipelines, deep learning structures, and scripts.", children: [] },
  "mca-product": { id: "mca-product", title: "Product Company Dev Lead", level: 7, region: "Both", description: "Senior code implementation and product features orchestration.", children: [] },


  // --- LEVEL 8: AFTER PhD (STEP 5 Outcomes) ---
  "phd-professor": { id: "phd-professor", title: "University Professor (Doctorate)", level: 8, region: "Both", description: "Tenure-track professor guiding research scholars and publishing papers in global scientific indexes.", children: [] },
  "phd-scientist": { id: "phd-scientist", title: "Senior Scientist / Principal Investigator", level: 8, region: "National", description: "Directing state research laboratories (e.g. CSIR, ISRO, DRDO) and managing science budgets.", children: [] },
  "phd-research-fellow": { id: "phd-research-fellow", title: "Postdoctoral Research Fellow", level: 8, region: "Both", description: "Global research contracts in elite international labs doing breakthrough discoveries.", children: [] }
};
