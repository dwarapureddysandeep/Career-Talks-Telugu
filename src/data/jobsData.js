// Career Talks Telugu - Government Jobs Database (Redesigned Step 7)

export const departmentsRegistry = [
  {
    id: "army",
    name: "Indian Army",
    subName: "Defence Forces",
    description: "Defend the nation on land. Offers high honor, adventure, secure postings, medical coverage, and excellent pension schemes.",
    region: "National Wide",
    posts: [
      {
        title: "Soldier GD (Agniveer)",
        workProfile: "Combat soldier guarding land borders, patrolling operational sectors, and maintaining weaponry.",
        qualification: "Class 10th (Matric) with minimum 45% aggregate marks and 33% in each subject.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 to ₹40,000 / month (Agniveer package + Allowances)",
        promotionPath: "Soldier GD -> Naik -> Havildar -> Naib Subedar -> Subedar -> Subedar Major",
        examPattern: "Common Entrance Exam (CEE) online + Physical Fitness Test (PFT) + Medical Test"
      },
      {
        title: "Soldier Technical (Agniveer)",
        workProfile: "Technical upkeep of military weapon systems, communication rigs, radar arrays, and vehicles.",
        qualification: "10+2 (Intermediate) in Science with Physics, Chemistry, Mathematics, and English (min 50% marks).",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 to ₹40,000 / month + Tech allowances",
        promotionPath: "Havildar Tech -> Naib Subedar -> Subedar -> Subedar Major",
        examPattern: "Technical Written Exam (CEE) + Physical & Medical Tests"
      },
      {
        title: "Soldier Clerk (Agniveer)",
        workProfile: "Managing office registers, letters drafting, inventory accounting, and digital administrative records.",
        qualification: "10+2 (Intermediate) in any stream (Commerce, Science, Arts) with 60% aggregate and 50% in each subject.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 to ₹40,000 / month",
        promotionPath: "Clerk -> Havildar -> Naib Subedar -> Subedar -> Subedar Major",
        examPattern: "Written Exam (CEE includes Typing test) + Physical Standard Test"
      },
      {
        title: "Agniveer General",
        workProfile: "Assisting operational units in regular drills, camp operations, and security protocols.",
        qualification: "Class 10th (SSC) pass with at least 35% marks.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 / month (consolidated package)",
        promotionPath: "Eligibility for permanent enrollment up to 25% of batch based on assessment.",
        examPattern: "CEE Written test + Physical fitness test"
      },
      {
        title: "Commissioned Officer",
        workProfile: "Commanding troop platoons, coordinating tactical maneuvers, and leading border defense lines.",
        qualification: "10+2 (Intermediate) for NDA / B.Tech Cadet entries, or Graduate (B.A/B.Sc/B.Tech) for CDS/NCC entries.",
        ageLimit: "19 - 24 Years",
        salary: "₹56,100 - ₹1,77,500 (Level 10 basic pay onwards + special allowances)",
        promotionPath: "Lieutenant -> Captain -> Major -> Lieutenant Colonel -> Colonel -> Brigadier -> Major General -> Lieutenant General",
        examPattern: "UPSC NDA / CDS written exam + 5-day SSB Interview + Special Medical Board"
      }
    ]
  },
  {
    id: "navy",
    name: "Indian Navy",
    subName: "Defence Forces",
    description: "Guard India's maritime zones. Offers exposure to global port networks, submarine postings, and high-tech warship controls.",
    region: "National Wide",
    posts: [
      {
        title: "SSR (Senior Secondary Recruit)",
        workProfile: "Operating high-tech onboard weapon radars, communication grids, and maintaining deck equipment.",
        qualification: "10+2 (Intermediate) with Math, Physics, and Chemistry/Biology/Computer Science.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 to ₹40,000 / month",
        promotionPath: "Agniveer SSR -> Leading Seaman -> Petty Officer -> Chief Petty Officer -> Master Chief Petty Officer",
        examPattern: "Indian Navy Entrance Test (INET) online + Physical Fitness Test (PFT) + Medicals"
      },
      {
        title: "MR (Matric Recruit)",
        workProfile: "Handling galley catering, hosting officer messes, and maintaining sanitation parameters on board.",
        qualification: "Class 10th (SSC) from a recognized board.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹22,000 to ₹30,000 / month",
        promotionPath: "Chef / Steward / Hygienist -> Petty Officer -> Chief Petty Officer -> MCPO",
        examPattern: "Matric Recruit (MR) online CEE + Physical Run & Squats"
      },
      {
        title: "AA (Artificer Apprentice)",
        workProfile: "Core engineering technician tasks on ships, maintaining turbine engines, steam boilers, and automation units.",
        qualification: "10+2 with MPC, min 60% aggregate marks.",
        ageLimit: "17 - 20 Years",
        salary: "₹35,000 - ₹48,000 / month + trade pay",
        promotionPath: "Artificer -> Chief Artificer -> MCPO Artificer",
        examPattern: "Technical INET Test + Practical Technical assessments + Physicals"
      },
      {
        title: "Naval Officer",
        workProfile: "Navigating war vessels, commanding naval units, and managing maritime aviation or submarine systems.",
        qualification: "10+2 MPC (via NDA) or B.E. / B.Tech graduation (via Direct Entry / UES).",
        ageLimit: "19 - 24 Years",
        salary: "₹56,100 - ₹2,05,400 (Lieutenant rank onwards + sea flight allowances)",
        promotionPath: "Sub-Lieutenant -> Lieutenant -> Lieutenant Commander -> Commander -> Captain -> Commodore -> Rear Admiral -> Vice Admiral",
        examPattern: "UPSC NDA/CDS exam or direct application screening + SSB Interview"
      }
    ]
  },
  {
    id: "airforce",
    name: "Indian Air Force",
    subName: "Defence Forces",
    description: "Command the skies. Highly advanced technical environments, radar operations, meteorology sensors, and jet fighters piloting.",
    region: "National Wide",
    posts: [
      {
        title: "Agniveer Vayu (Non-Tech)",
        workProfile: "Assisting air operations, managing logistics records, and providing security patrols for airbases.",
        qualification: "10+2 (Intermediate) in any stream with minimum 50% marks in aggregate and 50% in English.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 to ₹40,000 / month",
        promotionPath: "Agniveer Vayu -> Corporal -> Sergeant -> Junior Warrant Officer -> Warrant Officer -> Master Warrant Officer",
        examPattern: "Online CASB test (English, Reasoning & General Awareness) + Physical test"
      },
      {
        title: "Agniveer Vayu (Technical)",
        workProfile: "Servicing jet engines, testing air defense radars, and configuring aircraft electronics.",
        qualification: "10+2 with Physics, Mathematics, and English (min 50% marks) or 3-year Engineering Diploma.",
        ageLimit: "17.5 - 21 Years",
        salary: "₹30,000 to ₹40,000 / month + technical pay",
        promotionPath: "Corporal Tech -> Sergeant -> JWO -> Warrant Officer -> MWO",
        examPattern: "CASB online test (Physics, Math, English) + Adaptability Test + Physical fitness"
      },
      {
        title: "Flying Branch Officer",
        workProfile: "Flying fighter jets, transport planes, or helicopters in transport, combat, or rescue runs.",
        qualification: "Bachelor's degree in Engineering / B.Sc with Physics and Mathematics at 10+2 level.",
        ageLimit: "20 - 24 Years",
        salary: "₹56,100 - ₹1,77,500 (Basic Level 10 + flying allowances of ~₹25,000)",
        promotionPath: "Flying Officer -> Flight Lieutenant -> Squadron Leader -> Wing Commander -> Group Captain -> Air Commodore -> Air Vice Marshal -> Air Marshal",
        examPattern: "AFCAT national exam or UPSC CDS written test + 5-day AFSB Interview + CPSS (Pilot Aptitude)"
      },
      {
        title: "Ground Duty (Technical / Admin)",
        workProfile: "Controlling air traffic, managing meteorological data, and overseeing logistics supplies.",
        qualification: "Graduate degree in Science, Commerce, Engineering, or MCA/MBA.",
        ageLimit: "20 - 26 Years",
        salary: "₹56,100 - ₹1,77,500 / month",
        promotionPath: "Flying Officer (Ground) -> Flight Lieutenant -> Sqn Leader -> Wing Commander -> Gp Captain",
        examPattern: "AFCAT Written exam + EKT (for Tech branches) + AFSB Interview"
      }
    ]
  },
  {
    id: "ssc",
    name: "Staff Selection Commission",
    subName: "SSC MTS, CHSL & CGL",
    description: "Central government administrative services. Recruits staff for ministries, departments, and public revenue wings across India.",
    region: "National Wide",
    posts: [
      {
        title: "SSC CGL (Group B/C Officers)",
        workProfile: "Auditing corporate profiles, investigating tax compliance, and serving as administrative assistants in ministries.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "18 - 32 Years",
        salary: "₹44,900 - ₹1,51,100 (Pay Level 7/8, Basic ₹44,900 + DA + HRA)",
        promotionPath: "Inspector -> Assistant Commissioner -> Deputy Commissioner -> Joint Commissioner",
        examPattern: "CGL Tier 1 (Objective Aptitude screening) + Tier 2 (Advanced Math, English, Reasoning, Computer)"
      },
      {
        title: "SSC CHSL (Clerks & DEO)",
        workProfile: "Operating databases, updating official memos, drafting letters, and handling general paperwork.",
        qualification: "10+2 (Intermediate) from a recognized board.",
        ageLimit: "18 - 27 Years",
        salary: "₹19,900 - ₹63,200 (Level 2/4 basic pay + local allowances)",
        promotionPath: "Lower Division Clerk (LDC) -> Upper Division Clerk (UDC) -> Assistant Section Officer (ASO)",
        examPattern: "CHSL Tier 1 (Screening) + Tier 2 (Written tests + Typing speed skill test)"
      },
      {
        title: "SSC MTS (Multi-Tasking Staff)",
        workProfile: "Filing and archiving office documentation, managing photocopy services, and maintaining room layouts.",
        qualification: "Class 10th (SSC) from a recognized board.",
        ageLimit: "18 - 25 / 27 Years",
        salary: "₹18,000 - ₹56,900 (Level 1 basic + allowances)",
        promotionPath: "MTS -> Junior Assistant -> Senior Assistant -> Section Officer",
        examPattern: "MTS Computer Based Exam (Numerical, Reasoning, English, General Awareness)"
      },
      {
        title: "SSC CPO (Sub-Inspector)",
        workProfile: "Maintaining law and order, controlling crime, and patrolling under Delhi Police or Central Armed Police Forces (CRPF, BSF, CISF).",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "20 - 25 Years",
        salary: "₹35,400 - ₹1,12,400 (Pay Level 6 basic + uniform allowance)",
        promotionPath: "Sub-Inspector -> Inspector -> Assistant Commissioner of Police (ACP)",
        examPattern: "Paper 1 (Aptitude) + Physical Endurance Test (PET) + Paper 2 (English) + Medicals"
      },
      {
        title: "SSC GD (General Duty Constable)",
        workProfile: "Providing ground security, protecting central borders, and assisting in disaster relief.",
        qualification: "Class 10th (Matriculation) from a recognized board.",
        ageLimit: "18 - 23 Years",
        salary: "₹21,700 - ₹69,100 (Level 3 basic + allowances)",
        promotionPath: "Constable -> Senior Constable -> Head Constable -> Assistant Sub-Inspector",
        examPattern: "Computer Based Exam (CBE) + Physical Efficiency Test (PET) + Medical Exam"
      }
    ]
  },
  {
    id: "railways",
    name: "Indian Railways",
    subName: "Railway Recruitment Board",
    description: "The largest civil transportation network. Rail careers provide unmatched housing, health, and lifetime free travel privileges.",
    region: "National Wide",
    posts: [
      {
        title: "Assistant Loco Pilot (ALP)",
        workProfile: "Operating locomotives, assisting train captains, reading track signals, and inspecting engine logs.",
        qualification: "Class 10th + ITI (Fitter/Electrician/Diesel Mech) or Diploma/B.Tech in Mech/EE/ECE.",
        ageLimit: "18 - 30 Years",
        salary: "₹35,000 - ₹50,000 / month (Basic ₹19,900 + heavy running allowances)",
        promotionPath: "Assistant Loco Pilot -> Senior ALP -> Loco Pilot Passenger -> Loco Pilot Mail Express -> Loco Inspector",
        examPattern: "RRB ALP CBT Stage 1 & 2 + Computer-based Aptitude Test (CBAT) + Medical Class A1"
      },
      {
        title: "Railway Technician",
        workProfile: "Repairing high-voltage electric overhead lines, checking carriage wheels stability, and fixing track joints.",
        qualification: "Class 10th + ITI in relevant trade or 10+2 with Physics and Mathematics.",
        ageLimit: "18 - 33 Years",
        salary: "₹25,000 - ₹35,000 / month",
        promotionPath: "Technician Grade III -> Grade II -> Grade I -> Master Craftsman -> Junior Engineer",
        examPattern: "Single stage CBT (General Science, Math, Reasoning, Trade Knowledge)"
      },
      {
        title: "Junior Engineer (JE)",
        workProfile: "Managing railway construction, signaling layouts maintenance, and supervising technician teams.",
        qualification: "3-year Engineering Diploma or B.Tech in Civil, Mech, Electrical, or Electronics.",
        ageLimit: "18 - 33 Years",
        salary: "₹44,900 - ₹58,000 / month (Level 6 basic pay + allowances)",
        promotionPath: "Junior Engineer (JE) -> Senior Section Engineer (SSE) -> Assistant Divisional Engineer (ADEN)",
        examPattern: "CBT Stage 1 (Screening) + CBT Stage 2 (Technical paper + GK/Math)"
      },
      {
        title: "RRB NTPC (Station Master)",
        workProfile: "Managing train routing signals panel, passenger safety checks, and supervising station staff.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "18 - 33 Years",
        salary: "₹45,000 - ₹58,000 / month (Level 6 basic pay + allowances)",
        promotionPath: "Station Master -> Assistant Operations Manager (AOM) -> Divisional Operations Manager (DOM)",
        examPattern: "NTPC CBT Stage 1 + Stage 2 + Computer-based Aptitude Test + Document Verification"
      },
      {
        title: "Railway Group D (Trackman/Helper)",
        workProfile: "Checking track alignments, changing sleeper plates, and helping technical crews at workshops.",
        qualification: "Class 10th pass or ITI certification.",
        ageLimit: "18 - 33 Years",
        salary: "₹20,000 - ₹26,000 / month",
        promotionPath: "Helper -> Technician Grade III -> Grade II -> Grade I",
        examPattern: "Computer Based Test (CBT) + Physical Efficiency Test (PET - weight lifting and run)"
      }
    ]
  },
  {
    id: "banking",
    name: "Public Sector Banking",
    subName: "SBI, IBPS & RBI",
    description: "Highly structured financial jobs. High annual increments, concessional home/car loans, and comfortable office postings.",
    region: "National Wide",
    posts: [
      {
        title: "SBI / IBPS PO (Probationary Officer)",
        workProfile: "Verifying loan files, auditing daily balances ledger, handling customer disputes, and managing bank branch marketing.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "21 - 30 Years",
        salary: "₹55,000 - ₹65,000 / month",
        promotionPath: "Probationary Officer -> Assistant Manager -> Branch Manager -> Divisional Manager -> General Manager",
        examPattern: "Preliminary Test (MCQ) + Main Exam (Descriptive essay + MCQ) + Group Exercise & Interview"
      },
      {
        title: "SBI / IBPS Clerk (Junior Associate)",
        workProfile: "Receiving customer deposits, paying cash checks, opening savings bank accounts, and updating ledger lists.",
        qualification: "Bachelor's Degree in any discipline. Must read and speak the local language (Telugu for AP).",
        ageLimit: "20 - 28 Years",
        salary: "₹28,000 - ₹35,000 / month",
        promotionPath: "Clerk -> Assistant Manager -> Branch Manager",
        examPattern: "Preliminary online exam + Mains online exam (Quantitative, Reasoning, English, General Finance)"
      },
      {
        title: "RBI Grade B Officer",
        workProfile: "Managing currency circulation policies, auditing regional commercial bank records, and updating financial indexes.",
        qualification: "Bachelor's degree with minimum 60% marks in aggregate (50% for SC/ST).",
        ageLimit: "21 - 30 Years",
        salary: "₹1,08,000 - ₹1,20,000 / month (Basic ₹55,200 + heavy metropolitan allowances)",
        promotionPath: "Grade B Officer -> Assistant General Manager (AGM) -> Deputy General Manager (DGM) -> General Manager -> Executive Director",
        examPattern: "Phase 1 online test + Phase 2 written papers (Economic policies, English, Finance) + Interview"
      }
    ]
  },
  {
    id: "upsc",
    name: "UPSC Civil Services",
    subName: "IAS, IPS, IFS & IRS",
    description: "The peak of Indian administration. Commands entire districts, executes national welfare policies, and offers unmatched administrative powers.",
    region: "National Wide",
    posts: [
      {
        title: "IAS (Indian Administrative Service)",
        workProfile: "Heading district revenue departments, enforcing developmental schemes, and serving as secretaries in ministries.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "21 - 32 Years (Relaxable up to 35 for OBC, 37 for SC/ST; Max 6 attempts for General)",
        salary: "₹56,100 (starting basic) to ₹2,50,000 (Cabinet Secretary) + VIP housing, vehicle, and guards",
        promotionPath: "Sub-Divisional Magistrate (SDM) -> District Magistrate (DM/Collector) -> Divisional Commissioner -> Joint Secretary -> Secretary -> Cabinet Secretary",
        examPattern: "UPSC CSE Prelims (CSAT + GS) + Mains (9 descriptive papers) + Personality Interview"
      },
      {
        title: "IPS (Indian Police Service)",
        workProfile: "Maintaining law and order, leading district police forces, controlling crime rates, and managing VIP security.",
        qualification: "Bachelor's Degree in any discipline (must meet physical height and vision criteria).",
        ageLimit: "21 - 32 Years",
        salary: "₹56,100 (starting basic) to ₹2,25,000 (Director General of Police) + housing & vehicles",
        promotionPath: "Assistant Superintendent (ASP) -> Additional SP -> Superintendent of Police (SP) -> Senior SP -> DIG -> IG -> DGP",
        examPattern: "UPSC CSE Prelims + Mains + Interview + Physical Standards fitness board check"
      },
      {
        title: "IFS (Indian Foreign Service)",
        workProfile: "Representing India at international embassies, negotiating bilateral treaties, and managing global NRI protection panels.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "21 - 32 Years",
        salary: "₹56,100 + special foreign posting allowances (VIP residential compounds overseas)",
        promotionPath: "Under Secretary -> Second Secretary -> First Secretary -> Counsellor -> Minister -> Ambassador / High Commissioner",
        examPattern: "UPSC CSE Prelims + Mains + Interview (high ranks required)"
      },
      {
        title: "IRS (Indian Revenue Service)",
        workProfile: "Managing income tax auditing departments, detecting black money transfers, and managing customs duties collections.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "21 - 32 Years",
        salary: "₹56,100 - ₹2,25,000 / month",
        promotionPath: "Assistant Commissioner -> Deputy Commissioner -> Joint Commissioner -> Commissioner -> Chief Commissioner",
        examPattern: "UPSC CSE Prelims + Mains + Interview"
      }
    ]
  },
  {
    id: "ap-state",
    name: "AP State Government",
    subName: "APPSC & Secretariat",
    description: "Citizen welfare and public works within Andhra Pradesh. Direct connection with Telugu society, administrative status, and local town postings.",
    region: "AP State Wide",
    posts: [
      {
        title: "APPSC Group 1 (Deputy Collector / DSP)",
        workProfile: "Leading revenue divisions, settling block land disputes, managing regional welfare bodies, and directing sub-divisional police teams.",
        qualification: "Bachelor's Degree in any discipline from a recognized university.",
        ageLimit: "18 - 42 Years (DSP has lower max limit of 30)",
        salary: "₹50,200 - ₹1,20,000 (Basic ₹50,200 + state allowances)",
        promotionPath: "Revenue Divisional Officer (RDO) -> Special Grade Deputy Collector -> Joint Collector -> IAS promotion IAS cadre",
        examPattern: "Screening prelims test (MCQ) + Mains Exam (5 descriptive papers in Telugu/English) + Oral Interview"
      },
      {
        title: "APPSC Group 2 (Sub-Registrar / Municipal Comm.)",
        workProfile: "Registering property sales deeds, auditing local municipality budgets, and checking excise taxes.",
        qualification: "Bachelor's Degree in any discipline.",
        ageLimit: "18 - 42 Years",
        salary: "₹37,100 - ₹96,000 (PRC pay scale basic + allowances)",
        promotionPath: "Sub-Registrar Grade II -> Grade I -> District Registrar -> Deputy Inspector General of Registration",
        examPattern: "Group 2 Screening Test (150 Marks MCQ) + Mains Exam (Two papers of 150 Marks each)"
      },
      {
        title: "APPSC Group 3 (Panchayat Secretary)",
        workProfile: "Administering village panchayat funds, registering local certificates, and deploying clean water/roads programs.",
        qualification: "Bachelor's Degree in any discipline.",
        ageLimit: "18 - 42 Years",
        salary: "₹22,400 - ₹72,800 / month",
        promotionPath: "Panchayat Secretary Grade IV -> Grade III -> Grade II -> Grade I -> Mandal Parishad Development Officer (MPDO)",
        examPattern: "Screening test + Mains written test (focusing on Rural Development and AP history)"
      },
      {
        title: "APPSC Group 4 (Junior Assistant)",
        workProfile: "Handling inward/outward letter files, maintaining departmental budgets ledger, and performing computer tasks.",
        qualification: "Degree graduation + computer skills test certification.",
        ageLimit: "18 - 42 Years",
        salary: "₹16,400 - ₹50,000 / month",
        promotionPath: "Junior Assistant -> Senior Assistant -> Superintendent -> Assistant Secretary",
        examPattern: "Written exam Paper 1 (General Studies) + Paper 2 (English & Telugu grammar) + Computer proficiency practicals"
      },
      {
        title: "AP Police Constable",
        workProfile: "Patrolling streets, maintaining public peace, guarding stations, and managing traffic control routes.",
        qualification: "10+2 Intermediate pass (SSC for reserved categories).",
        ageLimit: "18 - 24 Years (Relaxable for state categories)",
        salary: "₹21,700 - ₹69,100 (State PRC scale)",
        promotionPath: "Constable -> Head Constable -> Assistant Sub-Inspector (ASI) -> Sub-Inspector (SI)",
        examPattern: "Preliminary MCQ test + Physical Efficiency Test (PET - Run, Jumps) + Final Written Test"
      },
      {
        title: "AP Forest Guard (Beat Officer)",
        workProfile: "Patrolling forest reserves, preventing timber smuggling, protecting wild animals, and tracking forest fires.",
        qualification: "Passed 10+2 Intermediate from a recognized board.",
        ageLimit: "18 - 30 Years",
        salary: "₹20,000 - ₹35,000 / month",
        promotionPath: "Forest Guard -> Forest Section Officer (FSO) -> Forest Range Officer (FRO)",
        examPattern: "Written exam + Physical walking endurance test (25 km for men, 16 km for women under 4 hours)"
      },
      {
        title: "VRO (Village Revenue Officer)",
        workProfile: "Maintaining village land records (Adangal/1B manuals), tracking crop yields, and collecting land taxes.",
        qualification: "Class 10th / Intermediate with basic survey knowledge.",
        ageLimit: "18 - 42 Years",
        salary: "₹20,000 - ₹28,000 / month",
        promotionPath: "VRO -> Senior Assistant -> Deputy Tahsildar (DT) -> Tahsildar (MRO)",
        examPattern: "VRO Recruitment exam (Math, Local geography, Revenue rules)"
      }
    ]
  },
  {
    id: "teachers",
    name: "Teaching Sector",
    subName: "TET, DSC & Central Schools",
    description: "Shape the next generation. Teaching careers offer excellent school holiday schedules, structured work timings, and high pension options.",
    region: "National / State wide",
    posts: [
      {
        title: "AP DSC School Assistant",
        workProfile: "Teaching respective subjects (Math, Science, English, Telugu) to class 6 to 10 pupils in government schools.",
        qualification: "Degree graduation in relevant subject + B.Ed (Bachelor of Education) degree + qualified in AP TET.",
        ageLimit: "18 - 44 Years",
        salary: "₹35,120 - ₹87,130 (PRC teacher scales + local state DA)",
        promotionPath: "School Assistant -> High School Headmaster -> Mandal Educational Officer (MEO) -> Deputy Educational Officer (DyEO)",
        examPattern: "AP DSC written test (Classroom management, GK, methodology, core subjects)"
      },
      {
        title: "AP TET (Teacher Eligibility Test)",
        workProfile: "Eligibility certification to teach primary and upper primary classes in state government and private schools.",
        qualification: "D.El.Ed / D.Ed (for Paper 1, Class 1-5) or B.Ed (for Paper 2, Class 6-8).",
        ageLimit: "18 - 44 Years",
        salary: "State Teacher scale eligibility",
        promotionPath: "Prerequisite clearance. Enables direct application to state DSC recruitment cycles.",
        examPattern: "Paper 1 (150 Marks MCQ on Child Psychology, Language, Math, Science) / Paper 2 (Core methodology)"
      },
      {
        title: "CTET (Central Teacher Eligibility)",
        workProfile: "Prerequisite national eligibility certification to teach in CBSE central schools (Kendriya Vidyalaya, Navodaya).",
        qualification: "Diploma in Elementary Education or B.Ed degree.",
        ageLimit: "18 Years Minimum, No upper age limit",
        salary: "Central Schools Grade Pay eligibility",
        promotionPath: "Prerequisite clearance. Valid for lifetime to apply in KVS/NVS recruitments.",
        examPattern: "Paper 1 (Primary) and Paper 2 (Upper Primary) MCQ tests based on child development theories"
      },
      {
        title: "KVS / NVS Teacher",
        workProfile: "Teaching primary or secondary classes in premium central residential schools (Jawahar Navodaya Vidyalayas) and Kendriya Vidyalayas.",
        qualification: "Degree/Postgrad graduation in major + B.Ed + qualified in CTET.",
        ageLimit: "30 - 40 Years (varies for PRT, TGT, PGT)",
        salary: "₹47,600 - ₹1,51,100 (Level 8 Central pay scales + residential quarters)",
        promotionPath: "Teacher -> Vice Principal -> School Principal -> Assistant Commissioner (NVS/KVS)",
        examPattern: "Written CBT exam + Classroom Demo + Personality Interview"
      }
    ]
  },
  {
    id: "postal",
    name: "Postal Department",
    subName: "India Post",
    description: "Administrative logistics and local delivery. Offers highly stable careers with central government allowances and options for postings in native home areas.",
    region: "National Wide",
    posts: [
      {
        title: "GDS (Gramin Dak Sevak)",
        workProfile: "Delivering letters, parcels, managing stamp bookings, and registering postal savings accounts in rural branch post offices.",
        qualification: "Class 10th (Matriculation) pass with passing marks in Mathematics, local language, and English.",
        ageLimit: "18 - 40 Years",
        salary: "₹12,000 - ₹24,470 (starting TRCA scale + commissions)",
        promotionPath: "GDS -> Postman -> Postal Assistant -> Inspector of Posts",
        examPattern: "Direct merit-based selection based on Class 10 Board exam GPA/marks (No written exam)"
      },
      {
        title: "Postal Assistant / Postman",
        workProfile: "Sorting letters in head offices, scanning parcel bar codes, handling corporate speed posts, and operating computerized counter desks.",
        qualification: "10+2 Intermediate pass or Graduation with basic computer knowledge.",
        ageLimit: "18 - 27 Years",
        salary: "₹25,500 - ₹81,100 (Pay Level 4 basic pay + central DA)",
        promotionPath: "Postal Assistant -> Higher Selection Grade II -> Grade I -> Postmaster Grade I -> Assistant Superintendent",
        examPattern: "Departmental exam (LGO) or via SSC CHSL/Direct post exams"
      }
    ]
  }
];
