// Career Talks Telugu - Entrance Exams Registry Database (Redesigned Step 6)

export const examsRegistry = [
  // --- AP STATE EXAMS ---
  // 1. AP POLYCET
  {
    id: "ap-polycet",
    name: "AP POLYCET",
    fullName: "Andhra Pradesh Polytechnic Common Entrance Test",
    level: "10th",
    scope: "AP State",
    conductingBody: "SBTET, Andhra Pradesh",
    eligibility: "Passed SSC (10th) from AP Board or equivalent with minimum 35% marks.",
    months: "April / May",
    description: "State-level exam for admissions into engineering and non-engineering Diploma courses in government, aided, and private polytechnic institutions across AP.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "120 Questions",
      marking: "+1 Mark for correct answer, No negative marks",
      subjects: [
        { name: "Mathematics", weight: "60 Questions" },
        { name: "Physics", weight: "30 Questions" },
        { name: "Chemistry", weight: "30 Questions" }
      ]
    },
    syllabusOutline: "Class 10 (SSC) AP State Board syllabus for Math, Physics, and Chemistry.",
    prepTips: "Focus on textbook exercise problems. High speed is critical (120 questions in 120 minutes)."
  },
  // 2. APRJC
  {
    id: "aprjc-cet",
    name: "APRJC CET",
    fullName: "AP Residential Junior Colleges Common Entrance Test",
    level: "10th",
    scope: "AP State",
    conductingBody: "APREIS, Government of AP",
    eligibility: "Must have passed SSC (10th) in the current academic year with minimum GPAs.",
    months: "April / May",
    description: "Gateway for securing free residential Intermediate seats (MPC, BiPC, CEC, MEC) with intensive coaching under government monitoring.",
    pattern: {
      duration: "2.5 Hours",
      totalQuestions: "150 Questions",
      marking: "+1 Mark for correct answer, No negative marks",
      subjects: [
        { name: "English", weight: "50 Questions" },
        { name: "Mathematics / Bioscience", weight: "50 Questions" },
        { name: "Physical Science", weight: "50 Questions" }
      ]
    },
    syllabusOutline: "SSC Board AP syllabus for English grammar, Math/Bioscience, and Physical Sciences.",
    prepTips: "English grammar is a major scoring rank decider. Practice previous test papers thoroughly."
  },
  // 3. APREIS
  {
    id: "apreis-cet",
    name: "APREIS Entrance",
    fullName: "AP Residential Educational Institutions Society Entrance Exam",
    level: "10th",
    scope: "AP State",
    conductingBody: "APREIS Board",
    eligibility: "Completed SSC in AP state-recognized schools.",
    months: "May",
    description: "Secures admission into government-managed residential schools and specialty stream intermediate colleges.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "100 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "General Knowledge & Mental Ability", weight: "25 Questions" },
        { name: "SSC Level Core Subjects", weight: "75 Questions" }
      ]
    },
    syllabusOutline: "10th grade AP Board textbooks of Social studies, Sciences, and Basic Aptitude.",
    prepTips: "Revise state board books and track basic general knowledge events."
  },
  // 4. AP EAPCET
  {
    id: "ap-eapcet",
    name: "AP EAPCET",
    fullName: "Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test",
    level: "inter",
    scope: "AP State",
    conductingBody: "JNTU on behalf of APSCHE",
    eligibility: "Passed Intermediate (10+2) with MPC / BiPC subjects, or completed Polytechnic Diploma.",
    months: "May",
    description: "State level gateway to secure convener quota seats in B.Tech, B.Pharmacy, Pharma.D, and B.Sc Agriculture across AP colleges.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "160 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "Mathematics (or Biology for Agro)", weight: "80 Questions" },
        { name: "Physics", weight: "40 Questions" },
        { name: "Chemistry", weight: "40 Questions" }
      ]
    },
    syllabusOutline: "1st and 2nd Year Intermediate syllabus of BIEAP (AP Board).",
    prepTips: "Ensure quick calculation skills. High weightage to Mathematics. Practice computerized mock interfaces."
  },
  // 5. AP ICET
  {
    id: "ap-icet",
    name: "AP ICET",
    fullName: "Andhra Pradesh Integrated Common Entrance Test",
    level: "grad",
    scope: "AP State",
    conductingBody: "APSCHE (conducted by local universities)",
    eligibility: "Bachelor's degree (3 or 4-year) with minimum 50% marks and Mathematics at 10th class level.",
    months: "May",
    description: "State-wide exam for securing seats in MBA and MCA programs in AP universities and affiliated colleges.",
    pattern: {
      duration: "2.5 Hours",
      totalQuestions: "200 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "Analytical Ability (Data Sufficiency/Reasoning)", weight: "75 Questions" },
        { name: "Mathematical Ability", weight: "75 Questions" },
        { name: "Communication Ability (English)", weight: "50 Questions" }
      ]
    },
    syllabusOutline: "Data arrangements, basic computer concepts, and quantitative math up to class 10.",
    prepTips: "Practice Venn diagrams, calendar problems, and improve English reading comprehension."
  },
  // 6. AP ECET
  {
    id: "ap-ecet",
    name: "AP ECET",
    fullName: "Andhra Pradesh Engineering Common Entrance Test",
    level: "inter",
    scope: "AP State",
    conductingBody: "JNTU on behalf of APSCHE",
    eligibility: "Completed 3-year Polytechnic Diploma in Engineering or B.Sc (with Mathematics).",
    months: "May",
    description: "Lateral entry exam for diploma holders to join directly into 2nd year B.Tech classes.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "200 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "Core Engineering Trade subjects", weight: "100 Questions" },
        { name: "Mathematics", weight: "50 Questions" },
        { name: "Physics & Chemistry", weight: "50 Questions" }
      ]
    },
    syllabusOutline: "AP SBTET Diploma curriculum for the respective trade, plus basic sciences.",
    prepTips: "Focus heavily on core branch subjects as they hold 50% of the total score weight."
  },
  // 7. AP LAWCET
  {
    id: "ap-lawcet",
    name: "AP LAWCET",
    fullName: "Andhra Pradesh Law Common Entrance Test",
    level: "inter",
    scope: "AP State",
    conductingBody: "APSCHE",
    eligibility: "Passed Intermediate (for 5-year LL.B) or any Degree graduation (for 3-year LL.B).",
    months: "June",
    description: "Admissions into 3-year and 5-year LL.B law programs in AP law colleges.",
    pattern: {
      duration: "1.5 Hours",
      totalQuestions: "120 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "General Knowledge & Mental Ability", weight: "30 Questions" },
        { name: "Current Affairs", weight: "30 Questions" },
        { name: "Aptitude for the Study of Law", weight: "60 Questions" }
      ]
    },
    syllabusOutline: "Legal terms, Constitution of India principles, and daily current events.",
    prepTips: "Study basic fundamentals of the Indian Constitution, contract acts, and follow newspapers daily."
  },
  // 8. AP PGCET
  {
    id: "ap-pgcet",
    name: "AP PGCET",
    fullName: "Andhra Pradesh Post Graduate Common Entrance Test",
    level: "grad",
    scope: "AP State",
    conductingBody: "APSCHE",
    eligibility: "Completed relevant Bachelor's degree (B.A, B.Sc, B.Com, etc.) with minimum marks.",
    months: "June / July",
    description: "State-wide admissions into post-graduate courses (M.A, M.Sc, M.Com, MCJ, etc.) in AP universities.",
    pattern: {
      duration: "1.5 Hours",
      totalQuestions: "100 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "Core Graduation Subject Paper", weight: "100 Questions" }
      ]
    },
    syllabusOutline: "Respective undergraduate syllabus of the chosen degree subject.",
    prepTips: "Revise graduation notes, key theories, and definitions in your major subject."
  },
  // 9. AP EdCET
  {
    id: "ap-edcet",
    name: "AP EdCET",
    fullName: "Andhra Pradesh Education Common Entrance Test",
    level: "grad",
    scope: "AP State",
    conductingBody: "APSCHE",
    eligibility: "Any Degree graduation with at least 50% marks.",
    months: "June",
    description: "Gateway for entering 2-year B.Ed (Bachelor of Education) teacher training courses in AP.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "150 Questions",
      marking: "+1 Mark, No negative marks",
      subjects: [
        { name: "General English & GK", weight: "50 Questions" },
        { name: "Teaching Methodology", weight: "20 Questions" },
        { name: "Subject Methodology (Maths/Science/Social)", weight: "80 Questions" }
      ]
    },
    syllabusOutline: "Teaching methodologies, child psychology principles, and degree-level subject methodology.",
    prepTips: "Practice basic aptitude questions and study elementary teaching theory guides."
  },
  // 10. AP PECET
  {
    id: "ap-pecet",
    name: "AP PECET",
    fullName: "Andhra Pradesh Physical Education Common Entrance Test",
    level: "inter",
    scope: "AP State",
    conductingBody: "APSCHE",
    eligibility: "Passed Intermediate (for U.G.D.P.Ed) or Degree (for B.P.Ed) in AP.",
    months: "May / June",
    description: "Secures admission into physical education training programs (B.P.Ed & U.G.D.P.Ed).",
    pattern: {
      duration: "Physical Event Tests",
      totalQuestions: "Skill & Fitness Events",
      marking: "Based on physical performance metrics (Running, Jumps, Throws)",
      subjects: [
        { name: "Physical Efficiency Test", weight: "400 Marks" },
        { name: "Skill Test in games", weight: "100 Marks" }
      ]
    },
    syllabusOutline: "Standard athletics events (100m, high jump, shot put) and games skills.",
    prepTips: "Regular physical training and stamina building are mandatory."
  },

  // --- NATIONAL EXAMS ---
  // 11. JEE Main
  {
    id: "jee-main",
    name: "JEE Main",
    fullName: "Joint Entrance Examination - Main",
    level: "inter",
    scope: "National",
    conductingBody: "NTA (National Testing Agency)",
    eligibility: "Passed 10+2 with Physics, Chemistry, and Mathematics (MPC).",
    months: "Session 1 (Jan), Session 2 (April)",
    description: "National entry for NITs, IIITs, CFTIs, and qualifying examination for JEE Advanced.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "90 Questions (Solve 75)",
      marking: "+4 for Correct, -1 for Incorrect (Negative marking applies)",
      subjects: [
        { name: "Mathematics", weight: "25 Questions" },
        { name: "Physics", weight: "25 Questions" },
        { name: "Chemistry", weight: "25 Questions" }
      ]
    },
    syllabusOutline: "NCERT Class 11 and 12 Physics, Chemistry, and Mathematics.",
    prepTips: "Focus heavily on NCERT Chemistry. Solve mock exams strictly under negative marking conditions."
  },
  // 12. JEE Advanced
  {
    id: "jee-advanced",
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination - Advanced",
    level: "inter",
    scope: "National",
    conductingBody: "One of the seven zonal IITs",
    eligibility: "Top ~2,50,000 qualifiers of JEE Main exam.",
    months: "May / June",
    description: "Highly rigorous national exam for securing B.Tech admission in all Indian Institutes of Technology (IITs).",
    pattern: {
      duration: "6 Hours (Two Papers)",
      totalQuestions: "Varies Year-to-Year",
      marking: "Complex marking schemes including partial credits and negative marks",
      subjects: [
        { name: "Paper 1 (Math, Physics, Chem)", weight: "Full weightage" },
        { name: "Paper 2 (Math, Physics, Chem)", weight: "Full weightage" }
      ]
    },
    syllabusOutline: "Deep conceptual and application-based questions in Math, Physics, and Chemistry.",
    prepTips: "Rote memorization will not work. Dedicate time to multi-concept problems and advanced reasoning."
  },
  // 13. BITSAT
  {
    id: "bitsat",
    name: "BITSAT",
    fullName: "Birla Institute of Technology and Science Admission Test",
    level: "inter",
    scope: "National",
    conductingBody: "BITS Pilani",
    eligibility: "Passed 10+2 with MPC, minimum 75% aggregate in PCM.",
    months: "May / June",
    description: "Online test for securing B.E / B.Pharmacy admissions at Pilani, Goa, and Hyderabad BITS campuses.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "130 Questions",
      marking: "+3 for Correct, -1 for Incorrect",
      subjects: [
        { name: "Physics & Chemistry", weight: "60 Questions" },
        { name: "Mathematics / Biology", weight: "40 Questions" },
        { name: "English Proficiency & Logical Reasoning", weight: "30 Questions" }
      ]
    },
    syllabusOutline: "NCERT Class 11 and 12 syllabus plus English and verbal logic.",
    prepTips: "Speed is very important. Speed training is critical since there are bonus questions if you complete all 130."
  },
  // 14. VITEEE
  {
    id: "viteee",
    name: "VITEEE",
    fullName: "Vellore Institute of Technology Engineering Entrance Examination",
    level: "inter",
    scope: "National",
    conductingBody: "VIT University",
    eligibility: "Passed 10+2 with Physics, Chemistry, Maths/Biology with 60% aggregate.",
    months: "April",
    description: "Computer-based entrance exam for admissions to VIT B.Tech campuses (Vellore, Chennai, AP, Bhopal).",
    pattern: {
      duration: "2.5 Hours",
      totalQuestions: "125 Questions",
      marking: "+1 for Correct, No negative marks",
      subjects: [
        { name: "Mathematics / Biology", weight: "40 Questions" },
        { name: "Physics & Chemistry", weight: "70 Questions" },
        { name: "English & Aptitude", weight: "15 Questions" }
      ]
    },
    syllabusOutline: "Class 11 & 12 CBSE level concepts in core sciences.",
    prepTips: "Practice sample question patterns and take advantage of the zero negative marks policy."
  },
  // 15. SRMJEEE
  {
    id: "srmjeee",
    name: "SRMJEEE",
    fullName: "SRM Joint Engineering Entrance Examination",
    level: "inter",
    scope: "National",
    conductingBody: "SRM Institute of Science and Technology",
    eligibility: "Passed 10+2 with PCM/PCB with minimum 50% marks.",
    months: "April / June",
    description: "Online proctored test for securing B.Tech seats at SRM campuses.",
    pattern: {
      duration: "2.5 Hours",
      totalQuestions: "125 Questions",
      marking: "+1 for Correct, No negative marks",
      subjects: [
        { name: "Mathematics / Biology", weight: "45 Questions" },
        { name: "Physics & Chemistry", weight: "70 Questions" },
        { name: "English & Aptitude", weight: "10 Questions" }
      ]
    },
    syllabusOutline: "General NCERT CBSE curriculum of Intermediate science.",
    prepTips: "Solve standard practice worksheets and mock tests to secure high ranks."
  },
  // 16. COMEDK
  {
    id: "comedk",
    name: "COMEDK UGET",
    fullName: "Consortium of Medical, Engineering and Dental Colleges of Karnataka",
    level: "inter",
    scope: "National",
    conductingBody: "COMEDK Board",
    eligibility: "Passed 10+2 with PCM, minimum 45% marks.",
    months: "May",
    description: "National gateway for private engineering college seats in Karnataka (RVCE, MSRIT, BMSCE).",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "180 Questions",
      marking: "+1 for Correct, No negative marks",
      subjects: [
        { name: "Mathematics", weight: "60 Questions" },
        { name: "Physics", weight: "60 Questions" },
        { name: "Chemistry", weight: "60 Questions" }
      ]
    },
    syllabusOutline: "CBSE/NCERT Class 11 and 12 PCM syllabus.",
    prepTips: "Manage time wisely. 180 questions in 180 minutes. No negative marks means you should attempt all questions."
  },
  // 17. NEET
  {
    id: "neet-ug",
    name: "NEET UG",
    fullName: "National Eligibility cum Entrance Test",
    level: "inter",
    scope: "National",
    conductingBody: "NTA (National Testing Agency)",
    eligibility: "Passed 10+2 with Physics, Chemistry, and Biology/Biotechnology with at least 50% aggregate.",
    months: "May",
    description: "Single window entrance test for securing MBBS, BDS, and AYUSH seats across India.",
    pattern: {
      duration: "3.3 Hours",
      totalQuestions: "180 Questions (out of 200)",
      marking: "+4 for Correct, -1 for Incorrect",
      subjects: [
        { name: "Biology (Botany + Zoology)", weight: "90 Questions" },
        { name: "Physics", weight: "45 Questions" },
        { name: "Chemistry", weight: "45 Questions" }
      ]
    },
    syllabusOutline: "Complete NCERT Class 11 & 12 Biology, Physics, and Chemistry.",
    prepTips: "NCERT Biology line-by-line reading is essential. Work on speed and chemistry conceptual clarity."
  },
  // 18. CLAT
  {
    id: "clat-law",
    name: "CLAT",
    fullName: "Common Law Admission Test",
    level: "inter",
    scope: "National",
    conductingBody: "Consortium of National Law Universities (NLUs)",
    eligibility: "Passed 10+2 with minimum 45% marks (40% for SC/ST). No upper age limit.",
    months: "December",
    description: "National entrance for 5-year integrated law programs at premium NLUs in India.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "120 Questions",
      marking: "+1 for Correct, -0.25 for Incorrect",
      subjects: [
        { name: "English Language & Comprehension", weight: "24-28 Questions" },
        { name: "Current Affairs & GK", weight: "28-32 Questions" },
        { name: "Legal & Logical Reasoning", weight: "50-60 Questions" },
        { name: "Quantitative Techniques", weight: "10-14 Questions" }
      ]
    },
    syllabusOutline: "Reading speed, legal arguments comprehension, critical logic, and basic percentages.",
    prepTips: "Practice reading long editorial passages daily. Build high reading comprehension speed."
  },
  // 19. AILET
  {
    id: "ailet",
    name: "AILET",
    fullName: "All India Law Entrance Test",
    level: "inter",
    scope: "National",
    conductingBody: "National Law University, Delhi",
    eligibility: "Passed 10+2 with minimum 45% marks.",
    months: "December",
    description: "Exclusive national exam for securing B.A. LL.B (Hons) seats at NLU Delhi.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "150 Questions",
      marking: "+1 for Correct, -0.25 for Incorrect",
      subjects: [
        { name: "English Language", weight: "50 Questions" },
        { name: "Current Affairs & GK", weight: "30 Questions" },
        { name: "Logical Reasoning", weight: "70 Questions" }
      ]
    },
    syllabusOutline: "Advanced critical reasoning, legal aptitude passages, and English grammar.",
    prepTips: "Solve analytical puzzles. Legal reasoning is embedded in the logical reasoning section."
  },
  // 20. NID
  {
    id: "nid-dat",
    name: "NID DAT",
    fullName: "National Institute of Design - Design Aptitude Test",
    level: "inter",
    scope: "National",
    conductingBody: "National Institute of Design",
    eligibility: "Passed or appearing 10+2 in any stream (Science, Arts, Commerce).",
    months: "Prelims (Dec), Mains (April/May)",
    description: "Prestigious entry for B.Des (Bachelor of Design) programs at NID campuses.",
    pattern: {
      duration: "3 Hours (Prelims)",
      totalQuestions: "Aptitude + Drawing tasks",
      marking: "Evaluation of creative skills, drawing skills, and general awareness",
      subjects: [
        { name: "DAT Prelims (Objective + Creative)", weight: "100 Marks" },
        { name: "DAT Mains (Studio Test)", weight: "Practical Lab" }
      ]
    },
    syllabusOutline: "Visual logic, color rules, drawing rendering, creative perspective sketching.",
    prepTips: "Practice pencil sketching, human figures, and perspective drawings under timed limits."
  },
  // 21. NIFT
  {
    id: "nift-entrance",
    name: "NIFT Exam",
    fullName: "National Institute of Fashion Technology Entrance",
    level: "inter",
    scope: "National",
    conductingBody: "NIFT Board",
    eligibility: "Completed 10+2 in any stream. Age limit is under 24 years.",
    months: "February",
    description: "Gateway for entering premium fashion technology and designing degrees at NIFT.",
    pattern: {
      duration: "3 Hours (GAT + CAT)",
      totalQuestions: "Drawing + Aptitude Papers",
      marking: "CAT evaluates sketching; GAT evaluates general aptitude",
      subjects: [
        { name: "Creative Ability Test (CAT)", weight: "50% Weightage" },
        { name: "General Ability Test (GAT)", weight: "30% Weightage" },
        { name: "Situation Test (Practical model)", weight: "20% Weightage" }
      ]
    },
    syllabusOutline: "Pencil shading, design observation, model crafting, basic English, and Math.",
    prepTips: "Improve material handling (clay, wires) for the Situation Test."
  },
  // 22. UCEED
  {
    id: "uceed",
    name: "UCEED",
    fullName: "Undergraduate Common Entrance Examination for Design",
    level: "inter",
    scope: "National",
    conductingBody: "IIT Bombay",
    eligibility: "Completed 10+2 in any stream. Max 2 attempts allowed.",
    months: "January",
    description: "National entry for B.Des admissions at IIT Bombay, IIT Guwahati, IIT Hyderabad, and IIITDM Jabalpur.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "Part A (Objective) + Part B (Drawing)",
      marking: "Part A has negative marks for MCQs; Part B is evaluated manually",
      subjects: [
        { name: "Part A: Visualization, Spatial Ability", weight: "240 Marks" },
        { name: "Part B: Design & Drawing Sketching", weight: "60 Marks" }
      ]
    },
    syllabusOutline: "3D visualization, pattern logic, observation skills, perspective drawing.",
    prepTips: "Develop strong spatial reasoning and solve past paper drawing tasks."
  },
  // 23. CAT
  {
    id: "cat-mba",
    name: "CAT",
    fullName: "Common Admission Test",
    level: "grad",
    scope: "National",
    conductingBody: "IIMs",
    eligibility: "Bachelor's degree with minimum 50% marks (45% for SC/ST/PwD).",
    months: "November",
    description: "Premier management exam for post-graduate MBA entries at IIMs and other elite B-schools.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "66 Questions",
      marking: "+3 for Correct, -1 for MCQ Incorrect",
      subjects: [
        { name: "Verbal Ability & Reading Comprehension (VARC)", weight: "24 Questions" },
        { name: "Data Interpretation & Logical Reasoning (DILR)", weight: "20 Questions" },
        { name: "Quantitative Ability (QA)", weight: "22 Questions" }
      ]
    },
    syllabusOutline: "Reading speed, complex data arrangements, logical relations, and quantitative mathematics.",
    prepTips: "Develop a strong reading habit to tackle VARC. Focus on conceptual clarity in basic arithmetic and algebra."
  },
  // 24. XAT
  {
    id: "xat-mba",
    name: "XAT",
    fullName: "Xavier Aptitude Test",
    level: "grad",
    scope: "National",
    conductingBody: "XLRI Jamshedpur",
    eligibility: "Completed recognized Bachelor's degree in any discipline.",
    months: "January",
    description: "National level management exam for entering XLRI and other top associate B-schools in India.",
    pattern: {
      duration: "3 Hours 10 Mins",
      totalQuestions: "100 Questions",
      marking: "+1 for Correct, -0.25 for MCQ, -0.10 for unattempted questions (>8)",
      subjects: [
        { name: "Decision Making", weight: "21 Questions" },
        { name: "Verbal & Logical Ability", weight: "26 Questions" },
        { name: "Quantitative Ability & DI", weight: "28 Questions" },
        { name: "GK & Essay Writing", weight: "25 Questions + Essay" }
      ]
    },
    syllabusOutline: "Business decision scenarios, critical logic, higher math, and GK.",
    prepTips: "Practice decision-making sets. Solve business ethics case studies to score high."
  },
  // 25. SNAP
  {
    id: "snap-mba",
    name: "SNAP",
    fullName: "Symbiosis National Aptitude Test",
    level: "grad",
    scope: "National",
    conductingBody: "Symbiosis International University",
    eligibility: "Graduated from recognized university with 50% marks.",
    months: "December",
    description: "Admissions into MBA programs across Symbiosis institutes (SIBM, SCMHRD).",
    pattern: {
      duration: "1 Hour",
      totalQuestions: "60 Questions",
      marking: "+1 for Correct, -0.25 for Incorrect",
      subjects: [
        { name: "General English", weight: "15 Questions" },
        { name: "Analytical & Logical Reasoning", weight: "25 Questions" },
        { name: "Quantitative, Data Interpretation", weight: "20 Questions" }
      ]
    },
    syllabusOutline: "Sentence correction, analytical puzzles, basic arithmetic, and charts.",
    prepTips: "Extremely speed-oriented test. Practice 60-minute full mock schedules regularly."
  },
  // 26. NMAT
  {
    id: "nmat-mba",
    name: "NMAT",
    fullName: "NMAT by GMAC",
    level: "grad",
    scope: "National",
    conductingBody: "GMAC (Graduate Management Admission Council)",
    eligibility: "Completed Bachelor's degree with 50% marks.",
    months: "October - December (Window system)",
    description: "Adaptive national computer test for NMIMS and other leading business management institutions.",
    pattern: {
      duration: "2 Hours",
      totalQuestions: "108 Questions",
      marking: "Scale score (No negative marks, adaptive difficulty)",
      subjects: [
        { name: "Language Skills", weight: "36 Questions" },
        { name: "Quantitative Skills", weight: "36 Questions" },
        { name: "Logical Reasoning", weight: "36 Questions" }
      ]
    },
    syllabusOutline: "Vocabulary, basic arithmetic calculations, and verbal logic patterns.",
    prepTips: "Manage time per section. Adaptive nature means you cannot skip questions without answering."
  },
  // 27. GATE
  {
    id: "gate-pg",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    level: "grad",
    scope: "National",
    conductingBody: "IISc and zonal IITs",
    eligibility: "3rd Year or completed graduate of B.Tech/B.E/B.Pharmacy/M.Sc or equivalent.",
    months: "February",
    description: "Technical competency exam. Unlocks M.Tech admissions at IITs/NITs and high-paying PSU officer jobs.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "65 Questions",
      marking: "+1 or +2; -1/3 for MCQ; No negative for NAT/MSQ",
      subjects: [
        { name: "Core Engineering Paper", weight: "72% Marks" },
        { name: "General Aptitude", weight: "15% Marks" },
        { name: "Engineering Mathematics", weight: "13% Marks" }
      ]
    },
    syllabusOutline: "Core department engineering syllabus, technical mathematics, and analytical reasoning.",
    prepTips: "Prepare Mathematics and General Aptitude first (28 marks guaranteed). Work extensively on Numerical Answer Type (NAT) questions."
  },
  // 28. UGC NET
  {
    id: "ugc-net",
    name: "UGC NET",
    fullName: "University Grants Commission National Eligibility Test",
    level: "grad",
    scope: "National",
    conductingBody: "NTA (National Testing Agency)",
    eligibility: "Master's degree in humanities/social sciences with at least 55% marks.",
    months: "June / December",
    description: "Determines eligibility for Assistant Professor and Junior Research Fellowship (JRF) in Indian universities.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "150 Questions",
      marking: "+2 for Correct, No negative marks",
      subjects: [
        { name: "Paper 1 (General Teaching & Research)", weight: "50 Questions" },
        { name: "Paper 2 (Core Post-grad Subject)", weight: "100 Questions" }
      ]
    },
    syllabusOutline: "Research methods, teaching principles, logic, and comprehensive master's level major subjects.",
    prepTips: "Paper 1 is scoring. Master teaching aptitude and logical reasoning theories."
  },
  // 29. CSIR NET
  {
    id: "csir-net",
    name: "CSIR NET",
    fullName: "Council of Scientific and Industrial Research NET",
    level: "grad",
    scope: "National",
    conductingBody: "NTA on behalf of CSIR",
    eligibility: "Master's degree in science (M.Sc/Integrated BS-MS) with at least 55% marks.",
    months: "June / December",
    description: "Gateway for Junior Research Fellowship (JRF) and Lecturer eligibility in physical, chemical, life, and mathematical sciences.",
    pattern: {
      duration: "3 Hours",
      totalQuestions: "Varies (Part A, B, C structure)",
      marking: "Negative marks apply (typically 25% of question weight)",
      subjects: [
        { name: "Part A (General Aptitude)", weight: "15 Questions" },
        { name: "Part B (Core Science Subject)", weight: "Solve 20-35 Questions" },
        { name: "Part C (Advanced Scientific Application)", weight: "Solve 10-25 Questions" }
      ]
    },
    syllabusOutline: "Logical reasoning, research methods, and advanced core postgraduate sciences.",
    prepTips: "Part C questions have high marks weight. Choose options carefully to avoid heavy negative penalties."
  }
];
