export type SocialIconName =
  | "linkedin"
  | "github"
  | "youtube"
  | "instagram"
  | "email"
  | "calendar"
  | "external";

export const site = {
  name: "Andrew Mesa",
  shortName: "AM",
  role: "Software Engineer I at Datadog",
  team: "Analytics and Data Platform - Developer Experience",
  location: "New York, NY",
  domain: "https://andrewamesa.com",
  email: "aamesa03@gmail.com",
  calendly: "https://calendly.com/aamesa",
  headline: "Software Engineer at Datadog.",
  summary:
    "I am a Software Engineer at Datadog and a Worcester Polytechnic Institute alumnus with B.S. degrees in Computer Science and Data Science. My experience spans full-stack development, AI-enabled and accessible applications, embedded systems, and engineering automation.",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/community", label: "Community" },
  { href: "/photography", label: "Photography" },
  { href: "/documents", label: "Documents" },
  { href: "/contact", label: "Contact" },
];

export const socials: Array<{
  label: string;
  handle: string;
  href: string;
  icon: SocialIconName;
}> = [
  {
    label: "LinkedIn",
    handle: "andrew-a-mesa",
    href: "https://www.linkedin.com/in/andrew-a-mesa",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    handle: "@AndrewAMesa",
    href: "https://github.com/AndrewAMesa",
    icon: "github",
  },
  {
    label: "YouTube",
    handle: "@Andrew_Table",
    href: "https://www.youtube.com/@Andrew_Table",
    icon: "youtube",
  },
  {
    label: "Instagram",
    handle: "@_table.jpeg",
    href: "https://www.instagram.com/_table.jpeg",
    icon: "instagram",
  },
];

export const focusAreas = [
  {
    title: "Full-stack engineering",
    description:
      "Building product experiences across user interfaces, services, APIs, authentication, and data layers.",
  },
  {
    title: "AI and accessibility",
    description:
      "Developing useful language- and vision-model applications, including tools designed with accessibility in mind.",
  },
  {
    title: "Embedded systems",
    description:
      "Working close to hardware through firmware, memory registers, ASIC data collection, and device-level tooling.",
  },
  {
    title: "Developer infrastructure",
    description:
      "Improving engineering workflows with automation, continuous integration, infrastructure as code, and dependable internal tools.",
  },
  {
    title: "Research and data",
    description:
      "Using mixed-method research, data analysis, modeling, and evaluation to turn technical work into clear recommendations.",
  },
  {
    title: "Photography and physical computing",
    description:
      "Photography and physical-computing projects, including image portfolios and interactive installations.",
  },
];

export type Experience = {
  period: string;
  role: string;
  organization: string;
  organizationUrl: string;
  location: string;
  workMode?: string;
  team?: string;
  highlights: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    period: "Aug 2025 — Present",
    role: "Software Engineer I",
    organization: "Datadog",
    organizationUrl: "https://www.datadoghq.com/",
    location: "New York, NY",
    workMode: "Full-time · On-site",
    team: "Analytics and Data Platform - Developer Experience",
    highlights: [
      "- Member of Datadog's ADP-DevX team in New York City.",
    ],
    skills: ["Terraform", "Continuous Integration", "Software Engineering", "Developer Experience"],
  },
  {
    period: "May 2024 — Aug 2024",
    role: "Software Engineer Intern",
    organization: "LinkedIn",
    organizationUrl: "https://www.linkedin.com/",
    location: "Sunnyvale, CA",
    workMode: "Internship · On-site",
    highlights: [
      "- Developed the full stack of a feature-flag manager that streamlined configuration values and webpage banners, reducing feature-deployment time and enabling rapid toggling.",
      "- Designed the backend and API with Go and gRPC for efficient communication with a SQL database.",
      "- Created the user interface with React Remix, Ant Design, and TypeScript.",
    ],
    skills: ["Go", "gRPC", "SQL", "React Remix", "TypeScript", "Ant Design", "GitHub Enterprise"],
  },
  {
    period: "May 2023 — Aug 2023",
    role: "Software Engineer Intern",
    organization: "HP Inc.",
    organizationUrl: "https://www.hp.com/",
    location: "Vancouver, WA",
    workMode: "Internship · On-site",
    highlights: [
      "- Improved the operational efficiency of ASIC devices by writing firmware that used circular buffers to collect register data within milliseconds and transfer it into readable logs.",
      "- Developed communication with memory registers and optimized the tool's memory usage using Linux, Visual Studio Code, and C.",
    ],
    skills: ["C", "Embedded Systems", "Firmware", "Linux", "Memory Management"],
  },
  {
    period: "May 2022 — Aug 2022",
    role: "Software Engineer Intern",
    organization: "HP Inc.",
    organizationUrl: "https://www.hp.com/",
    location: "Boise, ID",
    workMode: "Internship · On-site",
    highlights: [
      "- Developed a code interrogator for security logging that automated the collection of hundreds of security-intrusion data points and enabled continuously updated documentation.",
      "- Demonstrated the interrogator to management across HP and documented it so other teams could incorporate it into existing source code.",
      "- Built the tool in Python using Visual Studio Code, Visual Studio 2017, and Git for source control.",
    ],
    skills: ["Python", "Security Logging", "Automation", "Git", "Communication"],
  },
  {
    period: "Jul 2020 — Dec 2020",
    role: "Development Assistant",
    organization: "STEMfinity",
    organizationUrl: "https://stemfinity.com/",
    location: "Boise, ID",
    workMode: "Part-time · Hybrid",
    highlights: [
      "- Improved educational material in the company's application by creating four new asset documents.",
      "- Created a customer-management system in Google Sheets.",
      "- Raised SEO scores across website pages to above 95% using WordPress.",
    ],
    skills: ["WordPress", "SEO", "Google Workspace", "Content Development"],
  },
  {
    period: "Sep 2017 — Dec 2019",
    role: "Assistant Chess Instructor and Tournament Director",
    organization: "Vellotti's Chess School",
    organizationUrl: "https://vellottischessschool.com/",
    location: "Boise, ID",
    workMode: "Part-time",
    highlights: [
      "- Coordinated tournament pairings for approximately 40 participants and served as an arbitrator for match disputes.",
      "- Assisted instruction during chess camps of approximately 30 students through practice tournaments, tactics lessons, and demonstrations of well-known games.",
    ],
    skills: ["Instruction", "Tournament Operations", "Communication", "Conflict Resolution"],
  },
];

export type Education = {
  school: string;
  schoolUrl: string;
  degree: string;
  period: string;
  grade: string;
  distinction?: string;
  activities: string[];
  skills?: string[];
};

export const education: Education[] = [
  {
    school: "Worcester Polytechnic Institute",
    schoolUrl: "https://www.wpi.edu/",
    degree: "B.S. in Computer Science and Data Science",
    period: "Aug 2021 — May 2025",
    grade: "GPA: 3.83",
    distinction: "Bachelor's Degree with High Distinction",
    activities: ["Fencing", "Society of Hispanic Professional Engineers", "Association for Computing Machinery"],
    skills: ["Amazon Web Services", "R", "Computer Science", "Data Science"],
  },
  {
    school: "Capital Senior High School",
    schoolUrl: "https://capital.boiseschools.org/",
    degree: "High School Diploma",
    period: "Aug 2018 — May 2021",
    grade: "GPA: 4.0",
    activities: ["Varsity Tennis", "Student Council", "National Honor Society"],
  },
  {
    school: "Treasure Valley Math and Science Center",
    schoolUrl: "https://tvmsc.boiseschools.org/",
    degree: "High School Diploma, STEM",
    period: "Aug 2015 — May 2021",
    grade: "GPA: 3.93",
    activities: ["FIRST Robotics"],
    skills: ["Robotics"],
  },
];

export const certifications = [
  {
    title: "SOLIDWORKS",
    issuer: "Tangix Design & Development AB",
    issued: "Mar 2023",
    credentialId: "C-U7XLT5ZBAN",
    href: "",
  },
];

export const skillGroups = [
  {
    title: "Programming languages",
    skills: ["Go", "Python", "Java", "C", "C++", "JavaScript", "TypeScript", "R", "SQL", "Assembly"],
  },
  {
    title: "Web and mobile",
    skills: ["React", "Next.js", "React Native", "Android Development", "HTML", "CSS", "REST APIs", "API Development"],
  },
  {
    title: "Backend, cloud, and infrastructure",
    skills: ["AWS", "gRPC", "NoSQL", "Database Design", "Terraform", "Continuous Integration", "Git", "GitHub Enterprise"],
  },
  {
    title: "AI and data",
    skills: ["Artificial Intelligence", "Machine Learning", "Prompt Engineering", "OpenAI API", "Pandas", "Data Mining"],
  },
  {
    title: "Systems and security",
    skills: ["Embedded Systems", "Linux", "Operating Systems", "Computer Networks", "Network and Device Security", "Firmware"],
  },
  {
    title: "Research, design, and collaboration",
    skills: ["Full-Stack Development", "Project Management", "Research", "Leadership", "Communication", "SOLIDWORKS", "Adobe Creative Suite", "WordPress", "Robotics"],
  },
];

export const coursework = [
  { code: "CS 2123", title: "Algorithms" },
  { code: "MIS 4084", title: "Business Intelligence" },
  { code: "BUS 1010", title: "Business Leadership" },
  { code: "CS 3516", title: "Computer Networks" },
  { code: "CS 4445", title: "Data Mining" },
  { code: "DS 3010", title: "Data Science — Computational Data Intelligence" },
  { code: "CS 4432", title: "Database Systems" },
  { code: "CS 4801", title: "Introduction to Cryptography and Communication Security" },
  { code: "CS 4342", title: "Introduction to Artificial Intelligence" },
  { code: "CS 2011", title: "Machine Organization and Assembly Language" },
  { code: "CS 4342", title: "Machine Learning" },
  { code: "CS 3013", title: "Operating Systems" },
  { code: "CS 3733", title: "Software Engineering" },
  { code: "CS 4241", title: "Webware: Computational Technology for Network Information Systems" },
];

export const languages = [
  { language: "English", proficiency: "Primary profile language" },
  { language: "Spanish", proficiency: "Limited working proficiency" },
];

export type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Recognition = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  href: string;
  images?: MediaItem[];
  image?: string;
  imageAlt?: string;
};

export const recognition: Recognition[] = [
  {
    title: "Data Science Outstanding MQP Award",
    issuer: "Worcester Polytechnic Institute",
    date: "May 2025",
    description:
      "Awarded to two undergraduate Major Qualifying Projects in WPI's Data Science Department for outstanding project quality and exceptional performance during Project Presentation Day.",
    href: "https://www.wpi.edu/academics/departments/data-science",
  },
  {
    title: "Dean's List",
    issuer: "Worcester Polytechnic Institute",
    date: "May 2025",
    description:
      "Earned during the fall and spring semesters of sophomore, junior, and senior years under WPI's academic-performance requirements.",
    href: "https://wpi.meritpages.com/stories/Andrew-Mesa-Named-to-Worcester-Polytechnic-Institute-s-Spring-2025-Dean-s-List/160921806",
  },
  {
    title: "HSF Scholar of the Year Finalist",
    issuer: "Hispanic Scholarship Fund",
    date: "Apr 2025",
    description:
      "Selected as one of 20 finalists for academic and professional achievement, leadership within HSF and the Hispanic community, and dedication to meaningful impact.",
    href: "https://www.facebook.com/HispanicScholarshipFund/posts/once-again-congratulations-to-the-2025-hsf-scholar-of-the-year-finalists-we-high/1403886548447040/",
  },
  {
    title: "AP Capstone Diploma",
    issuer: "College Board",
    date: "Jul 2021",
    description:
      "Earned through qualifying scores in AP Seminar, AP Research, and four additional AP examinations.",
    href: "https://apcentral.collegeboard.org/courses/ap-capstone",
  },
  {
    title: "Outstanding Individual Scholastic Award",
    issuer: "Idaho High School Activities Association",
    date: "May 2021",
    description:
      "Recognized for competing on the Capital High School varsity tennis team while maintaining a GPA above 3.75.",
    href: "https://idhsaa.org/",
  },
  {
    title: "Congressional Award — Bronze Medal",
    issuer: "The Congressional Award",
    date: "Nov 2020",
    description:
      "Completed goals in voluntary public service, personal development, physical fitness, and expedition or exploration; also earned Gold, Silver, and Bronze Certificates.",
    href: "https://www.congressionalaward.org/",
  },
  {
    title: "Eagle City Volunteer of the Month",
    issuer: "City of Eagle, Idaho",
    date: "Apr 2018",
    description:
      "Recognized for leading and fundraising Clean Up Eagle and bike-trail cleanup projects.",
    href: "https://www.cityofeagle.org/",
  },
  {
    title: "Eagle Scout Award",
    issuer: "Scouting America",
    date: "Jan 2017",
    description:
      "Earned after planning, leading, and fundraising a serenity-garden service project for the Idaho Humane Society, completing required merit badges, and serving in troop leadership.",
    href: "https://www.scouting.org/about/research/eagle-scouts/",
  },
  {
    title: "Six Eagle Palms",
    issuer: "Scouting America",
    date: "After Eagle Scout",
    description:
      "Earned two Bronze, two Gold, and two Silver Eagle Palms through continued troop involvement and additional merit badges.",
    href: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.scouting.org/wp-content/uploads/2025/12/Eagle-Palms.pdf",
  },
];

export const organizations = [
  {
    name: "Hispanic Scholarship Fund",
    href: "https://www.hsf.net/",
    period: "Jun 2021 — Present",
    roles: ["Advisory Council Member (2026 — Present)", "Alumnus (2025 — Present)", "Volunteer Lead (2026)", "Mentor-in-Training (2024)", "Scholar (2021 — 2025)"],
    description:
      "Selected as an HSF Scholar in 2021 from a large national applicant pool and reselected in 2022, 2023, and 2024 for academic and extracurricular achievement.",
  },
  {
    name: "Society of Hispanic Professional Engineers",
    href: "https://shpe.org/",
    period: "Aug 2021 — Present",
    roles: ["WPI Chapter Alumnus (2025 — Present)", "Member (2021 — 2025)"],
    description: "Alumnus of Worcester Polytechnic Institute's SHPE chapter.",
  },
  {
    name: "FIRST Robotics",
    href: "https://www.firstinspires.org/robotics/frc",
    period: "Oct 2018 — Aug 2021",
    roles: ["Member", "Mentor"],
    description:
      "Developed and tested code for a fifth-place World Championship competition robot, mentored new programmers, and participated in fundraising events.",
  },
  {
    name: "Scouting America",
    href: "https://www.scouting.org/",
    period: "Apr 2014 — Jan 2021",
    roles: ["Senior Patrol Leader", "Patrol Leader", "Troop Guide", "Crew Leader"],
    description:
      "Served in elected and appointed leadership roles in Troop 77, including 18 months as a troop guide and leadership of a Sea Base crew in 2018.",
  },
  {
    name: "ColorStack",
    href: "https://www.colorstack.org/",
    period: "October 2024 — Present",
    roles: ["Alumnus (2025 — Present)", "Member (2024 — 2025)"],
    description:
      "Served as an active member of ColorStack throughout college and am now a ColorStack alumnus.",
  },
];

export const volunteering = [
  {
    role: "Volunteer Lead",
    organization: "Hispanic Scholarship Fund",
    href: "https://www.hsf.net/",
    period: "Jul 2026",
    cause: "Education and professional development",
    highlights: [
      "- Welcomed and guided newly selected scholars during the HSF scholar celebration.",
      "- Answered questions and offered support to newly admitted HSF scholars and their families.",
    ],
  },
  {
    role: "Mentor-in-Training",
    organization: "Hispanic Scholarship Fund",
    href: "https://www.hsf.net/",
    period: "Sep 2024",
    cause: "Education and professional development",
    highlights: [
      "- Guided and connected with scholars throughout the STEM Summit, supporting their professional and personal growth.",
      "- Reviewed LinkedIn profiles during the career expo and provided feedback to strengthen scholars' professional presence.",
      "- Worked with the group's mentor to support scholars throughout the summit.",
    ],
  },
  {
    role: "Eagle Scout, Senior Patrol Leader, and Troop Guide",
    organization: "Scouting America",
    href: "https://www.scouting.org/",
    period: "Apr 2014 — Jan 2021",
    cause: "Environment and community service",
    highlights: [
      "- Coordinated fundraising, volunteer support, and trail-maintenance crews for the Eagle Sports Complex.",
      "- Organized cleanup teams and routes for Clean Up Eagle.",
      "- Planned, led, and fundraised the construction of a serenity garden for the Idaho Humane Society.",
    ],
  },
  {
    role: "Software Programming Instructor for Rookie Teams",
    organization: "FIRST Robotics",
    href: "https://www.firstinspires.org/robotics/frc",
    period: "Oct 2020 — Jan 2021",
    cause: "Science and technology",
    highlights: [
      "- Instructed new Idaho rookie teams in Java programming, FIRST Robotics code frameworks, and robot bring-up.",
      "- Developed example code and slides, taught live sessions, and recorded training materials.",
    ],
  },
];

export type ProjectCategory = "Applications" | "AI & Data" | "Research" | "Creative" | "Service";

export type ProjectVisual = {
  label: string;
  detail: string;
  variant: "sapphire" | "teal" | "emerald" | "gold" | "plum";
};

export type Project = {
  title: string;
  category: ProjectCategory;
  period: string;
  featured?: boolean;
  associatedWith?: string;
  description: string;
  highlights?: string[];
  images?: MediaItem[];
  image?: string;
  imageAlt?: string;
  visual?: ProjectVisual;
  tags: string[];
  links: Array<{ label: string; href: string }>;
};

export const projects: Project[] = [
  {
    title: "Dual-Mode Language-Model Mobile Assistant",
    category: "AI & Data",
    period: "Aug 2024 — May 2025",
    featured: true,
    associatedWith: "Worcester Polytechnic Institute",
    visual: {
      label: "Accessible mobile intelligence",
      detail: "Online and offline language-model workflows integrated with smart glasses.",
      variant: "sapphire",
    },
    description:
      "A multilingual, dual-mode assistive navigation application integrated with InnoSpire smart glasses for visually impaired and blind users.",
    highlights: [
      "- Built a cross-platform React Native application supporting object recognition, obstacle awareness, and transit guidance.",
      "- Implemented switching between an online GPT-4o workflow and offline Phi-3-mini and YOLOv5 workflows based on connectivity.",
      "- Evaluated performance with image datasets and multilingual surveys involving visually impaired, blind, and sighted participants.",
    ],
    tags: ["React Native", "GPT-4o", "Phi-3-mini", "YOLOv5", "TensorFlow.js", "Accessibility"],
    links: [
      { label: "WPI project page", href: "https://digital.wpi.edu/show/8p58pj03v" },
    ],
  },
  {
    title: "Boston Freedom Trail Walking Guide",
    category: "Applications",
    period: "Jan 2025 — Mar 2025",
    featured: true,
    associatedWith: "Worcester Polytechnic Institute",
    visual: {
      label: "Location-aware city guide",
      detail: "Live location, historic landmarks, user progress, and business listings.",
      variant: "teal",
    },
    description:
      "A mobile-optimized guide that makes exploring Boston's Freedom Trail more interactive through live location, historic information, user accounts, and progress badges.",
    highlights: [
      "- Built with Next.js and MongoDB and deployed on Vercel.",
      "- Implemented Google OAuth and encrypted local authentication, backend logic for location nodes and badges, and Nodemailer workflows for password resets and business-account requests.",
      "- Supported business listings, persistent user progress, and nearby points of interest.",
    ],
    tags: ["Next.js", "MongoDB", "NextAuth", "Leaflet", "Nodemailer", "Vercel"],
    links: [
      { label: "Live application", href: "https://freedom-trail-tour.vercel.app" },
      { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Freedom-Trail-Tour" },
    ],
  },
  {
    title: "AI Travel Itinerary and Booking Assistant",
    category: "AI & Data",
    period: "Aug 2024 — Mar 2025",
    featured: true,
    associatedWith: "Worcester Polytechnic Institute",
    visual: {
      label: "Hybrid travel assistant",
      detail: "Itineraries and booking data powered by large and small language models.",
      variant: "emerald",
    },
    description:
      "A hybrid travel assistant that generated itineraries and surfaced flight and hotel listings using large and small language models.",
    highlights: [
      "- Developed and prompt-engineered the assistant in a team of five using Llama and Phi models.",
      "- Integrated the Amadeus API for real-time flight and hotel data.",
      "- Built fallback logic with the Phi small language model to support offline functionality and presented a functional prototype.",
    ],
    tags: ["Python", "Llama", "Phi", "Amadeus API", "Prompt Engineering"],
    links: [{ label: "Demo video", href: "https://www.youtube.com/watch?v=k-zb7RJcJvw" }],
  },
  {
    title: "Improving Brand Recognition and Association for Poetry Organizations",
    category: "Research",
    period: "Jan 2024 — May 2024",
    featured: true,
    associatedWith: "Worcester Polytechnic Institute · Berlin Project Center",
    visual: {
      label: "Brand research in Berlin",
      detail: "Mixed-method analysis and recommendations for Haus für Poesie.",
      variant: "gold",
    },
    description:
      "A mixed-method research project for Haus für Poesie examining brand association across the organization and its subsidiaries.",
    highlights: [
      "- Identified a potential gap in brand association through research and user feedback.",
      "- Recommended website and logo updates, stronger integration of subsidiary information, and backend website optimization.",
      "- Served as project manager for a four-person team and coordinated milestones in Notion.",
    ],
    tags: ["Mixed-Method Research", "Python", "Data Analysis", "Project Management", "Notion"],
    links: [
      { label: "WPI project page", href: "https://digital.wpi.edu/show/m039k912r" },
      { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Brand-Usage-And-Awareness" },
      { label: "Haus für Poesie", href: "https://www.haus-fuer-poesie.org/en/" },
    ],
  },
  {
    title: "Seats4U Ticketing Application",
    category: "Applications",
    period: "Oct 2023 — Dec 2023",
    associatedWith: "Worcester Polytechnic Institute",
    description:
      "A scalable ticketing application developed by a four-person software-engineering team using an AWS backend and React frontend.",
    highlights: [
      "- Planned the application with use cases and UML diagrams.",
      "- Implemented REST-based communication and a SQL database for venues, shows, and tickets.",
    ],
    tags: ["AWS", "React", "JavaScript", "SQL", "REST APIs", "UML"],
    links: [{ label: "GitHub repository", href: "https://github.com/AndrewAMesa/Seats4U" }],
  },
  {
    title: "Seasonal LED Tree Sculpture",
    category: "Creative",
    period: "Aug 2023 — Oct 2023",
    associatedWith: "Worcester Polytechnic Institute",
    description:
      "A PVC tree sculpture with 300 individually addressable LEDs and programmed animations that reflect the changing seasons.",
    highlights: [
      "- Used a Pixelblaze Wi-Fi LED controller to drive the sculpture.",
      "- Wrote JavaScript animation code that runs the seasonal cycle whenever the sculpture is powered on.",
    ],
    tags: ["JavaScript", "Pixelblaze", "LEDs", "Physical Computing"],
    links: [
      { label: "Project documentation", href: "https://www.joshuarosenstock.com/teaching/lightart-a23/aamesa/final-documentation-andrew-mesa/" },
      { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Tree-Sculpture" }],
  },
  {
    title: "Permanent Housing in Mindoro, Philippines",
    category: "Research",
    period: "Aug 2021 — Dec 2021",
    associatedWith: "Worcester Polytechnic Institute · Shelter the World",
    description:
      "A low-cost housing-complex proposal designed to improve resistance to flooding and typhoons in Mindoro, Philippines.",
    highlights: [
      "- Developed multiple design iterations in a four-person team.",
      "- Documented the housing design, background, and construction timeline in a research paper and poster.",
      "- Received the Shelter the World poster award from project judges.",
    ],
    tags: ["Research", "Design", "Resilient Housing", "Teamwork"],
    links: [{ label: "WPI project page", href: "https://digital.wpi.edu/concern/student_works/p8418r61f?locale=en" }],
  },
  {
    title: "Assessing Elderly Well-Being Through Plant Care",
    category: "Research",
    period: "Aug 2020 — May 2021",
    associatedWith: "Treasure Valley Math and Science Center · AP Capstone",
    description:
      "An AP Research study examining how the difficulty of caring for a succulent versus a Jester's Crown fern affected the mental-health benefits experienced by elderly caretakers.",
    highlights: [
      "- Recruited participants, designed and executed the experiment, and produced a research paper and presentation.",
    ],
    tags: ["AP Research", "Experimental Design", "Participant Recruitment", "Academic Writing"],
    links: [{ label: "Research paper", href: "https://docs.google.com/document/d/1Jh5QwGUpWQuS7lRmZgdmHF72N69ff_Pz8jctEjzKxUU/edit?tab=t.0" }],
  },
  {
    title: "FIRST Robotics Rookie Team Training",
    category: "Service",
    period: "Oct 2020 — Jan 2021",
    description:
      "Programming training that helped six new Idaho FIRST Robotics teams bring up their robots and establish a reusable Java code framework.",
    highlights: [
      "- Developed example code and presentation slides, taught live sessions, and recorded training materials for future use.",
    ],
    tags: ["Java", "FIRST Robotics", "Teaching", "Mentorship"],
    links: [],
  },
  {
    title: "Idaho Humane Society Serenity Garden",
    category: "Service",
    period: "May 2016 — Sep 2016",
    description:
      "An Eagle Scout service project that created a serenity garden for Idaho Humane Society employees and animals.",
    highlights: [
      "- Fundraised through GoFundMe and donations from local stores.",
      "- Directed approximately 30 Scouts and Scout leaders in building a pergola, installing a stone path and plants, and restoring outdoor furniture.",
    ],
    tags: ["Leadership", "Fundraising", "Volunteer Coordination", "Project Planning"],
    links: [{ label: "Eagle Scout project post", href: "https://eagleprojects.scoutlife.org/idaho-humane-society-serenity-garden/" }],
  },
  {
    title: "Task Tracking Website",
    category: "Applications",
    period: "2025",
    description:
      "A task manager with create, update, delete, authentication, and priority-based sorting functionality.",
    tags: ["Next.js", "Tailwind CSS", "NextAuth", "TypeScript"],
    links: [{label: "Live application", href: "https://a4-andrew-a-mesa.vercel.app/"},
            { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Task-Tracking-Website" },],
  },
  {
    title: "Build a Board Game",
    category: "AI & Data",
    period: "2024",
    description:
      "A data-science project that modeled board-game ratings and used local-search algorithms to generate game concepts predicted to receive strong ratings.",
    tags: ["Python", "Regression", "Local Search", "Jupyter"],
    links: [{ label: "GitHub repository", href: "https://github.com/AndrewAMesa/Build-A-Board-Game" }],
  },
  {
    title: "Analyzing Car Sales",
    category: "AI & Data",
    period: "2024",
    description: "An exploratory analysis of car-sales data using Python and Pandas.",
    tags: ["Python", "Pandas", "Data Analysis"],
    links: [{ label: "GitHub repository", href: "https://github.com/AndrewAMesa/Analyzing-Car-Sales" }],
  },
  {
    title: "Square Push",
    category: "Creative",
    period: "High school",
    description: "A browser-based game created while learning React, JavaScript, HTML, and CSS.",
    tags: ["React", "JavaScript", "HTML", "CSS", "Game Development"],
    links: [{label: "Live application", href: "https://andrewamesa.github.io/Square-Push/"},
            { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Square-Push" }],
  },
  {
    title: "Platformer",
    category: "Creative",
    period: "High school",
    description: "A platform game created while learning Python and Pygame.",
    tags: ["Python", "Pygame", "Game Development"],
    links: [{label: "Live application", href: "https://andrewamesa.github.io/Platformer/"},
            { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Platformer" }],
  },
  {
    title: "Roguelike",
    category: "Creative",
    period: "High school",
    description: "A roguelike game created while learning Python, Pygame, and procedural generation.",
    tags: ["Python", "Pygame", "Procedural Generation"],
    links: [{label: "Live application", href: "https://andrewamesa.github.io/Roguelike/"},
      { label: "GitHub repository", href: "https://github.com/AndrewAMesa/Roguelike" }],
  },
];

export const documents: Array<{
  title: string;
  type: string;
  description: string;
  href: string;
  external: boolean;
}> = [
  {
    title: "Dual-Mode Language-Model Mobile Assistant",
    type: "WPI project page",
    description:
      "The official Digital WPI page for the multilingual smart-glasses capstone, including the project report and associated materials.",
    href: "https://digital.wpi.edu/show/8p58pj03v",
    external: true,
  },
  {
    title: "Computer Science Project Presentation Day",
    type: "2025 program",
    description:
      "WPI's Computer Science presentation-day program featuring the Major Qualifying Project.",
    href: "https://www.wpi.edu/sites/default/files/2025-04/Computer-Science_ProjectPresentationDay_2025.pdf",
    external: true,
  },
  {
    title: "Improving Brand Recognition and Association for Poetry Organizations",
    type: "Interactive Qualifying Project",
    description:
      "The official WPI project page with the final project booklet, recommendations, supplementary materials, and presentation materials.",
    href: "https://digital.wpi.edu/show/m039k912r",
    external: true,
  },
  {
    title: "Permanent Housing in Mindoro, Philippines",
    type: "Research poster",
    description:
      "The WPI Great Problems Seminar poster for the award-recognized resilient-housing proposal.",
    href: "https://digital.wpi.edu/concern/student_works/p8418r61f?locale=en",
    external: true,
  },
  {
    title: "AP Capstone Research Paper",
    type: "Research Paper",
    description:
      "Research paper examining elderly well-being and factors that influence healthy aging and quality of life.",
    href: "https://docs.google.com/document/d/1Jh5QwGUpWQuS7lRmZgdmHF72N69ff_Pz8jctEjzKxUU/edit?usp=sharing",
    external: true,
  },
  {
    title: "Resume",
    type: "Resume",
    description:
      "A summary of my work, projects, and accomplishments within the fields of Computer Science and Data Science.",
    href: "https://www.linkedin.com/in/andrew-a-mesa/overlay/1751941295097/single-media-viewer/?profileId=ACoAADbHmCsBXUZzROfU2IGodb6QNq5qkStuprs",
    external: true,
  },
];

export type Photograph = {
  title: string;
  category: "Landscape" | "City" | "Animal" | "People" | "Nature" | "Landmarks" | "Architecture" | "Other";
  location: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape" | "square";
};

export const photographs: Photograph[] = [
  {
    title: "Neighborhood Watch",
    category: "Animal",
    location: "Sarajevo, Bosnia and Herzegovina",
    src: "/photography/Bosnia_Cat_Sunset.jpg",
    alt: "A local cat keeping an eye on the neighborhood during golden hour.",
    orientation: "landscape",
  },
    {
    title: "Over Sarajevo",
    category: "Landscape",
    location: "Sarajevo, Bosnia and Herzegovina",
    src: "/photography/Sarajevo_Fort.jpg",
    alt: "A panoramic view overlooking Sarajevo from the Yellow Fortress.",
    orientation: "landscape",
  },
  {
    title: "Dubrovnik",
    category: "City",
    location: "Dubrovnik, Croatia",
    src: "/photography/Dubrovnik.jpg",
    alt: "A scenic view of Dubrovnik's old town and coastline.",
    orientation: "landscape",
  },
  {
    title: "Perched",
    category: "Animal",
    location: "The Cloisters, New York, USA",
    src: "/photography/Cloisters_Bird.JPG",
    alt: "A bird perched peacefully among the gardens of The Cloisters.",
    orientation: "landscape",
  },
  // {
  //   title: "By the Cliffside",
  //   category: "Nature",
  //   location: "Bosnia and Herzegovina",
  //   src: "/photography/Brooklyn_Transit_Museum.jpg",
  //   alt: "A charming house in Bosnia.",
  //   orientation: "portrait",
  // },
  {
    title: "In Prayer",
    category: "Other",
    location: "The Metropolitan Museum of Art, New York, USA",
    src: "/photography/Met_Praying_statues.JPG",
    alt: "Prayerful statues displayed inside the Metropolitan Museum of Art.",
    orientation: "landscape",
  },
  {
    title: "By the Harbor",
    category: "City",
    location: "Dubrovnik, Croatia",
    src: "/photography/Dubrovnik_Dock.jpg",
    alt: "Boats resting along Dubrovnik's historic waterfront.",
    orientation: "landscape",
  },
  // {
  //   title: "Minute Man",
  //   category: "Landmarks",
  //   location: "Lexington and Concord, Massachusetts, USA",
  //   src: "/photography/Minute_Man_Statue_Boston.JPG",
  //   alt: "The Minute Man statue standing proudly in Boston.",
  //   orientation: "portrait",
  // },
  {
    title: "Old Bridge",
    category: "Landmarks",
    location: "Mostar, Bosnia and Herzegovina",
    src: "/photography/Mostar_Bridge.jpg",
    alt: "The historic Stari Most bridge spanning the Neretva River in Mostar.",
    orientation: "landscape",
  },
  {
    title: "Royal Visitor",
    category: "Animal",
    location: "Croatia",
    src: "/photography/Peacocks_Croatia.jpg",
    alt: "A colorful peacock wandering through a park in Croatia.",
    orientation: "landscape",
  },
  {
    title: "By the Cliffside",
    category: "Nature",
    location: "Bosnia and Herzegovina",
    src: "/photography/Sarajevo_House.jpg",
    alt: "A charming house in Bosnia.",
    orientation: "landscape",
  },
];
