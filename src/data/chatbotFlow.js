// Career Talks Telugu - AI Career Buddy Dialog Flow Data

export const chatbotTree = {
  start: {
    id: "start",
    text: "నమస్తే! I am your AI Career Buddy. 🎯 I am here to help you choose the best career path according to your strengths and interests. Let's start with your current education stage. What is your highest qualification?",
    options: [
      { label: "Passed 10th Class", nextNode: "stage-10th", userResponse: "I have passed 10th Class." },
      { label: "Passed Intermediate (10+2)", nextNode: "stage-inter", userResponse: "I have passed Intermediate." },
      { label: "B.Tech / Engineering Graduate", nextNode: "stage-btech", userResponse: "I am a B.Tech graduate." },
      { label: "Degree Graduate (B.Sc/B.Com/BA)", nextNode: "stage-degree", userResponse: "I have completed a general degree." }
    ]
  },

  // --- STAGE 10TH BRANCH ---
  "stage-10th": {
    id: "stage-10th",
    text: "Excellent! Finishing 10th class is the first major milestone. What area or domain interests you the most for your next step?",
    options: [
      { label: "Science & Engineering (MPC)", nextNode: "result-10th-mpc", userResponse: "I want to go for Science & Engineering paths (MPC)." },
      { label: "Medicine & Life Sciences (BiPC)", nextNode: "result-10th-bipc", userResponse: "I am interested in Medical & Life Sciences (BiPC)." },
      { label: "Business, Finance & CA (CEC/MEC)", nextNode: "result-10th-cec", userResponse: "I like Business, Accounting, and Mathematics." },
      { label: "Practical Skills (Polytechnic / ITI)", nextNode: "result-10th-tech", userResponse: "I prefer practical technical workshops (Polytechnic or ITI)." },
      { label: "Quick Jobs / Government Services", nextNode: "result-10th-jobs", userResponse: "I want to prepare for immediate job selections." }
    ]
  },

  "result-10th-mpc": {
    id: "result-10th-mpc",
    text: "Great choice! Since you are interested in Science & Engineering, you should enroll in **Intermediate MPC** (2 Years). After Intermediate:\n\n1. **Engineering (B.Tech)**: Take JEE Main (National) or AP EAPCET (State) to enter CSE, ECE, EEE, Civil, or Mech engineering.\n2. **Architecture**: Take NATA or JEE Paper 2 for B.Arch.\n3. **National Defence**: Attempt the UPSC NDA exam in your 2nd year of Intermediate to join the Army, Navy, or Air Force as a Lieutenant.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-10th-bipc": {
    id: "result-10th-bipc",
    text: "A noble path! For Medicine and Life Sciences, enroll in **Intermediate BiPC** (2 Years). After Intermediate:\n\n1. **Medical Degree (MBBS/BDS/AYUSH)**: You must qualify in the national-level NEET exam. High score lands a secure medical career.\n2. **Allied Health**: Explore B.Pharm (Pharmacy), B.Sc Nursing, or Physiotherapy (BPT) via AP EAPCET (Agri/Pharma stream).\n3. **Agriculture**: B.Sc in Agriculture or Horticulture is highly valued in state government extension officer recruitments.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-10th-cec": {
    id: "result-10th-cec",
    text: "A very lucrative sector! If you like business and accounting, choose **Intermediate CEC or MEC** (2 Years). MEC includes Math which is highly recommended. After Intermediate:\n\n1. **Chartered Accountancy (CA)**: Register with ICAI and clear the CA Foundation exam. A premium corporate path.\n2. **Management / Finance**: Secure BBA or B.Com (Computers/Honors) at top degree colleges. Unlocks corporate analyst positions.\n3. **Integrated Law**: Write CLAT or AP LAWCET to enter 5-Year Integrated Law courses (BA LLB / B.Com LLB).",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-10th-tech": {
    id: "result-10th-tech",
    text: "Very practical! If you want hands-on training, you have two amazing options:\n\n1. **Polytechnic Diploma (3 Years)**: Take the AP POLYCET exam. Choose CME, ECE, EEE, DME, or DCE. After Diploma, you can write the AP ECET exam to join B.Tech directly in the 2nd Year (lateral entry).\n2. **ITI Trade (1-2 Years)**: Choose Fitter, Electrician, or Diesel Mechanic. Offers immediate jobs in Railways (ALP), State Power Grids (Lineman), or private workshops.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-10th-jobs": {
    id: "result-10th-jobs",
    text: "For quick job security directly after 10th class, focus on these openings:\n\n1. **Staff Selection Commission (SSC MTS)**: Entry-level clerk posts in central ministries. Salary ₹22,000+.\n2. **Indian Navy (MR Sailor)**: Direct sailor posts as Chef or Steward. Excellent starting salary and naval travel benefits.\n3. **AP Village Secretariats**: Keep tracking local village volunteer or support staff notifications.\n4. **Post Office**: India Post GDS (Gramin Dak Sevak) selections based directly on your 10th GPA score.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },

  // --- STAGE INTER BRANCH ---
  "stage-inter": {
    id: "stage-inter",
    text: "Excellent! Completing 12th (Intermediate) opens direct entry into undergraduate degrees. Which stream did you complete?",
    options: [
      { label: "MPC (Maths, Physics, Chem)", nextNode: "result-inter-mpc", userResponse: "I completed MPC." },
      { label: "BiPC (Biology, Physics, Chem)", nextNode: "result-inter-bipc", userResponse: "I completed BiPC." },
      { label: "CEC / MEC (Commerce/Math/Civics)", nextNode: "result-inter-cec", userResponse: "I completed CEC/MEC." },
      { label: "HEC (History, Economics, Civics)", nextNode: "result-inter-hec", userResponse: "I completed HEC." }
    ]
  },

  "result-inter-mpc": {
    id: "result-inter-mpc",
    text: "Brilliant! MPC opens technical paths:\n\n1. **Engineering (B.Tech)**: Take JEE Main (National) or AP EAPCET (State) to enter CSE, ECE, EEE, Civil, or Mech engineering.\n2. **Defense**: Write the UPSC NDA written exam for commissioning as an Officer in the Armed Forces.\n3. **Applied Degrees**: BCA (Computer Applications) or B.Sc (Computer Science) if you want a 3-Year coding path.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-inter-bipc": {
    id: "result-inter-bipc",
    text: "Wonderful! BiPC opens lifescience channels:\n\n1. **Medicine (MBBS/BDS/AYUSH)**: Write NEET. Securing a government medical college seat guarantees a premium healthcare career.\n2. **Pharmacy**: B.Pharmacy or Pharm.D (Doctor of Pharmacy) via AP EAPCET. High demand in private research labs.\n3. **Nursing & Allied Sciences**: B.Sc Nursing, Physiotherapy (BPT), and Medical Lab Technology (MLT). Fast-growing hospital sectors.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-inter-cec": {
    id: "result-inter-cec",
    text: "Great! CEC/MEC opens business and trade lanes:\n\n1. **Chartered Accountancy (CA)**: Write CA Foundation. Highly prestigious and highly paid audit career.\n2. **B.Com (Computers/Finance)**: Offers quick entry into corporate data tracking, banking clerk roles, and private sector sales.\n3. **Business Administration (BBA)**: Excellent management foundation. Prepare for CAT/ICET to get an MBA later.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-inter-hec": {
    id: "result-inter-hec",
    text: "Excellent! HEC is a strong path for humanities and administration:\n\n1. **BA Degree**: Choose Economics, Public Admin, or History. Highly recommended for candidates targeting UPSC Civil Services (IAS/IPS) or APPSC Group examinations.\n2. **Law (LLB)**: Write CLAT or LAWCET to enter 5-Year BA LLB programs. Highly lucrative corporate and litigation career.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },

  // --- STAGE BTECH BRANCH ---
  "stage-btech": {
    id: "stage-btech",
    text: "Outstanding! You are a B.Tech graduate. Engineering graduates have high capability to pivot into multiple tech and admin domains. What was your department group?",
    options: [
      { label: "Computer Science (CSE/IT)", nextNode: "result-btech-cse", userResponse: "I am from CSE / IT branch." },
      { label: "Electronics (ECE/EEE)", nextNode: "result-btech-ece", userResponse: "I am from ECE / EEE branch." },
      { label: "Mechanical / Civil Engineering", nextNode: "result-btech-core", userResponse: "I am from Mech / Civil branch." }
    ]
  },

  "result-btech-cse": {
    id: "result-btech-cse",
    text: "Awesome! B.Tech CSE is in high demand globally. Your best paths are:\n\n1. **MNC Placements**: Focus on coding skills (Data Structures, Algorithms) and build web/app projects to join corporations like TCS, Infosys, Google, Microsoft.\n2. **Post Graduation**: Take the national **GATE** exam to enter M.Tech at IITs/IISc, or write **GRE/IELTS** for MS Abroad.\n3. **Management**: Write **CAT** or **AP ICET** to join MBA programs, steering into product manager roles.\n4. **Freelancing**: Develop skills like full-stack development, mobile coding, or UI/UX and work on Upwork/Fiverr.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-btech-ece": {
    id: "result-btech-ece",
    text: "Great! ECE/EEE graduates can pivot to both hardware and software domains:\n\n1. **Core Hardware (VLSI/Embedded)**: High paying hardware design jobs (Intel, NVIDIA, Qualcomm). Target M.Tech in VLSI via GATE.\n2. **Software Placements**: Learn Web Development, Java/Python, and databases to crack software MNC jobs.\n3. **Public Sectors**: Take the GATE exam to enter PSUs (Power Grid, NTPC, BHEL) as an engineering officer.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-btech-core": {
    id: "result-btech-core",
    text: "Core branches hold excellent stability:\n\n1. **Government Engineers**: Write exams for Assistant Executive Engineer (AEE) in AP state departments, or RRB Junior Engineer (JE).\n2. **Public Sectors**: High percentile GATE score offers direct officer jobs in IOCL, ONGC, NTPC, and Vizag Steel.\n3. **Engineering Services (IES)**: Prepare for the UPSC IES exam, commanding engineering services at National Railways and CPWD.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },

  // --- STAGE DEGREE BRANCH ---
  "stage-degree": {
    id: "stage-degree",
    text: "Great! Completing a general Degree opens doors to advanced professional studies and public admin posts. Which degree did you complete?",
    options: [
      { label: "B.Sc (Science / Computers)", nextNode: "result-degree-bsc", userResponse: "I completed B.Sc." },
      { label: "B.Com / BBA (Commerce / Admin)", nextNode: "result-degree-bcom", userResponse: "I completed B.Com/BBA." },
      { label: "BA (Arts / Humanities)", nextNode: "result-degree-ba", userResponse: "I completed BA." }
    ]
  },

  "result-degree-bsc": {
    id: "result-degree-bsc",
    text: "Excellent! For B.Sc graduates:\n\n1. **Software Sector (MCA)**: Write AP ICET or NIMCET to enter Master of Computer Applications (MCA). This converts your degree into full-scale software career eligibility.\n2. **Government Administration**: Prepare for SSC CGL (Income Tax/GST Inspector) or Bank PO (SBI/IBPS). B.Sc graduates do highly well in logical banking papers.\n3. **Scientific Academics**: Write IIT JAM to do M.Sc at IITs, followed by CSIR NET for Junior Research Fellowships (JRF).",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-degree-bcom": {
    id: "result-degree-bcom",
    text: "Very commercial! B.Com/BBA graduates have deep finance scopes:\n\n1. **Banking Officer**: Prepare for Bank PO/Clerk exams (SBI, IBPS, RBI). Your core accountancy skills are highly useful in banking exams.\n2. **Corporate Administration (MBA)**: Clear CAT or AP ICET to get an MBA. Highly useful for getting marketing, HR, or finance positions in corporations.\n3. **Professional Auditing**: Pursue CA (Chartered Accountancy) via direct entry route after graduation.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  },
  "result-degree-ba": {
    id: "result-degree-ba",
    text: "Excellent! BA graduates have high suitability for public sector policy and civil administration:\n\n1. **Civil Services (IAS / IPS)**: Your core knowledge in History, Geography, and Economics provides a strong headstart in UPSC Civil Services Mains.\n2. **State Administrative Jobs**: Focus on APPSC Group 2 (Sub-Registrar, Municipal Comm.) or Group 1 (Deputy Collector, DSP) exams.\n3. **Legal Profession**: Write LAWCET to enter 3-Year LLB programs, building a litigation or corporate law advisory career.",
    options: [
      { label: "Explore a different stage", nextNode: "start", userResponse: "I want to check other stages." }
    ]
  }
};
