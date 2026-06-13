import {
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Film,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Map,
  MonitorSmartphone,
  PackageOpen,
  Server,
  Smartphone,
  Table2,
  Terminal,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Mihika Sharma',
  heroTitle: "Hi, I'm Mihika.",
  role: 'Software Engineer',
  subtitle: 'Building systems that solve real problems.',
  email: 'mihikasharma004@gmail.com',
  phone: '765-714-7121',
  linkedin: 'https://www.linkedin.com/in/mihika0916',
  github: 'https://github.com/mihika0916',
  resume: '/Mihika_Sharma_Resume_2026.pdf',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  intro:
    'I’m a software engineer and Purdue CS graduate with experience across enterprise software, AI systems, full-stack development, and human-centered products. I like building things that are scalable, useful, and visually thoughtful.',
};

export const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java', icon: Code2 },
      { name: 'Python', icon: Terminal },
      { name: 'C', icon: Braces },
      { name: 'C++', icon: Cpu },
      { name: 'Swift', icon: Smartphone },
      { name: 'SQL', icon: Database },
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'HTML/CSS', icon: Globe2 },
      { name: 'R', icon: Braces },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'React', icon: Layers3 },
      { name: 'Flask', icon: Server },
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Workflow },
      { name: 'Spring Boot', icon: Code2 },
      { name: 'SwiftUI', icon: Smartphone },
      { name: 'Firebase', icon: Cloud },
    ],
  },
  {
    label: 'Technologies',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Tableau', icon: Table2 },
      { name: 'Google Cloud', icon: Cloud },
      { name: 'SSIS', icon: Workflow },
      { name: 'Postman', icon: Globe2 },
      { name: 'Docker', icon: Server },
      { name: 'Pandas', icon: Table2 },
      { name: 'NumPy', icon: BrainCircuit },
      { name: 'Prophet', icon: BrainCircuit },
      { name: 'PyTorch', icon: BrainCircuit },
      { name: 'REST APIs', icon: Workflow },
      { name: 'Google Maps API', icon: Map },
      { name: 'Oculus SDK', icon: Cpu },
    ],
  },
];

export const experienceItems = [
  {
    slug: 'union-pacific-2025-aug',
    type: 'experience',
    company: 'Union Pacific Railroad',
    logo: 'UP',
    logoImage: '/union-pacific-logo.png',
    role: 'Software Engineer Intern',
    start: '2025-08-01',
    end: '2026-05-01',
    location: 'Hybrid',
    summary:
      'Built executive reporting automation and Tableau write-back tooling for internal operational workflows.',
    solvedFor:
      'How can internal teams replace fragile manual workflows with reliable tools that make operational data easier to access and act on?',
    bullets: [
      'Built a Python and Tableau tabcmd backup pipeline to automate daily executive report delivery and reduce dependency on a failure-prone UiPath workflow.',
      'Developed a Tableau write-back extension in Python Flask and JavaScript to migrate legacy ColdFusion operational workflows directly into Tableau dashboards used by internal teams.',
      'Implemented role-based permissions, session management, auto-login authentication, audit logging, configurable SQL actions, and automatic dashboard refresh after write operations.',
    ],
    skills: ['Python', 'Flask', 'JavaScript', 'Tableau', 'SQL', 'Authentication'],
  },
  {
    slug: 'data-mine-ta-2025',
    type: 'experience',
    company: 'Purdue University: The Data Mine',
    logo: 'DM',
    logoImage: '/data-mine-logo.jpeg',
    role: 'Teaching Assistant',
    start: '2025-08-01',
    end: '2026-05-01',
    location: 'West Lafayette, IN',
    summary:
      'Supported 300-level Data Mine seminar students through grading, feedback, and weekly project review.',
    solvedFor:
      'How can I best support students looking to further their skills in data visualization, machine learning, and deep learning?',
    bullets: [
      'Graded weekly projects for 100+ students across 300-level Data Mine seminar attendees at Purdue and the National Data Mine Network.',
    ],
    skills: ['Data Science', 'Teaching', 'Project Review', 'Communication'],
  },
  {
    slug: 'union-pacific-2025-may',
    type: 'experience',
    company: 'Union Pacific Railroad',
    logo: 'UP',
    logoImage: '/union-pacific-logo.png',
    role: 'Software Engineer Intern',
    start: '2025-05-01',
    end: '2025-08-01',
    location: 'Omaha, NE',
    summary:
      'Built location intelligence pipelines for facility matching, caching, enrichment, and revenue lead scoring.',
    solvedFor:
      'How can Union Pacific identify new revenue opportunities post-merger by uncovering previously unknown rail-served businesses hidden across internal and external data sources?',
    bullets: [
      'Built an ETL pipeline to ingest and geolocate-match 88K+ external facilities against internal Teradata using fuzzy spatial logic via external APIs.',
      'Built a caching system in SQL Server + T-SQL to avoid redundant processing across data exports, reducing run time by 48% and external API calls by 60%.',
      'Uncovered 30+ new leads worth $750k in projected revenue, and delivered results to stakeholders via ArcGIS + Tableau dashboards.',
    ],
    skills: ['SQL Server', 'T-SQL', 'ETL', 'APIs', 'ArcGIS', 'Tableau'],
  },
  {
    slug: 'ios-ta-2025',
    type: 'experience',
    company: 'Purdue University',
    logo: 'PU',
    logoImage: '/purdue-logo.png',
    role: 'Teaching Assistant, iOS Development in Swift',
    start: '2025-01-01',
    end: '2025-05-01',
    location: 'West Lafayette, IN',
    summary:
      'Supported students learning Swift, Xcode, and the fundamentals of building iOS apps with Storyboard.',
    solvedFor:
      'How can students build enough confidence with Swift, Xcode, and iOS fundamentals to turn app ideas into working prototypes?',
    bullets: [
      'Conducted office hours and assisted in lectures and labs for 15 students.',
      'Covered Swift fundamentals, Xcode, and basics required to create an iOS app using the Storyboard interface.',
    ],
    skills: ['Swift', 'Xcode', 'iOS Development', 'Teaching', 'Storyboard'],
  },
  {
    slug: 'gains-ai-2024',
    type: 'experience',
    company: 'GAINS AI',
    logo: 'GA',
    logoImage: '/vip-logo.jpeg',
    role: 'Software Developer',
    start: '2024-08-01',
    end: '2025-12-01',
    location: 'West Lafayette, IN',
    summary:
      'Built Unreal Engine simulation tools for public-space pedestrian flow and AI-driven crowd behavior.',
    solvedFor:
      'How can urban planners and researchers simulate realistic human movement within physical spaces before those spaces are built?',
    bullets: [
      'Built an Unreal Engine simulation tool that enables urban planners to test pedestrian flow in public space designs.',
      'Used Environmental Query Systems and Behavior Trees to simulate crowds of 200+ AI-driven NPCs with dynamic traits like cone of vision, sun preference, and crowd affinity.',
      'Wrote C++ scripts to log and export 10K+ NPC movement data points for GIS-based heatmap analysis.',
    ],
    skills: ['C++', 'Unreal Engine', 'AI Simulation', 'Behavior Trees', 'GIS', 'Data Export'],
    media: [
      {
        title: 'Fall 2024 Research Poster',
        type: 'PDF poster',
        preview: '/gains-fall-2024-poster.png',
        href: '/gains-fall-2024-poster.pdf',
      },
      {
        title: 'Spring 2025 Research Poster',
        type: 'PDF poster',
        preview: '/gains-spring-2025-poster.png',
        href: '/gains-spring-2025-poster.pdf',
      },
      {
        title: 'Fall 2025 Research Poster',
        type: 'PDF poster',
        preview: '/gains-fall-2025-poster.png',
        href: '/gains-fall-2025-poster.pdf',
      },
    ],
  },
  {
    slug: 'saarathi-2024',
    type: 'experience',
    company: 'Saarathi.ai',
    logo: 'SA',
    logoImage: '/saarathi-logo.jpeg',
    role: 'Software Engineer Intern',
    start: '2024-07-01',
    end: '2024-08-01',
    location: 'Delhi, India',
    summary:
      'Redesigned digital lending workflows and built backend APIs for partner data sync and onboarding.',
    solvedFor:
      'How can we uphold the promise of a sub-10-minute loan application experience while reducing friction, manual effort, and abandonment throughout the customer journey?',
    bullets: [
      'Led the redesign of a digital lending platform to reduce user journey completion time from 30+ min to ~10 min.',
      'Implemented 5 RESTful APIs in Java Spring Boot to enable partner data sync and seamless customer onboarding.',
      'Collaborated across product and engineering teams to design new user flow wireframes in Figma and conducted time-efficiency analysis to secure stakeholder approval for production deployment.',
    ],
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Figma', 'Product Thinking', 'UX Analysis'],
  },
  {
    slug: 'bechtel-iot-2024',
    type: 'experience',
    company: 'Bechtel IoT',
    logo: 'VIP',
    logoImage: '/vip-logo.jpeg',
    role: 'Machine Learning Developer',
    start: '2024-01-01',
    end: '2024-05-01',
    location: 'West Lafayette, IN',
    summary:
      'Built anomaly detection and forecasting systems for sensor-based safety monitoring.',
    solvedFor:
      "How can sensor data be used to detect abnormal conditions early and improve the reliability and safety of critical systems at Purdue's Design and Innovation Centre?",
    bullets: [
      'Built an anomaly detection system using Keras, achieving an 85% accuracy rate in identifying deviations from established environmental safety thresholds.',
      'Engineered a time series forecasting model using data from 11 environmental sensors to improve real-time safety monitoring at the Bechtel Innovation and Design Center.',
      'Designed an OSHA-compliant error reporting system, boosting incident traceability and system reliability.',
    ],
    skills: ['Python', 'Keras', 'Time Series', 'Machine Learning', 'Sensors', 'OSHA Compliance'],
    media: [
      {
        title: 'Bechtel IoT Research Poster',
        type: 'Poster',
        preview: '/bechtel-iot-poster.jpg',
        href: '/bechtel-iot-poster.jpg',
      },
    ],
  },
  {
    slug: 'purdue-cs',
    type: 'education',
    company: 'Purdue University',
    logo: 'PU',
    logoImage: '/purdue-logo.png',
    role: 'B.S. in Computer Science',
    start: '2022-08-01',
    end: '2026-05-01',
    location: 'West Lafayette, IN',
    summary:
      'Bachelor of Science in Computer Science with a certificate in Applications of Data Science.',
    solvedFor: '',
    bullets: [
      'Specialized in Software Engineering.',
      'Earned a Certificate in Applications of Data Science.',
    ],
    skills: [
      'Data Structures and Algorithms',
      'Algorithmic Design',
      'Computer Architecture',
      'Operating Systems',
      'Information Systems',
      'Discrete Mathematics',
      'Linear Algebra',
      'Artificial Intelligence',
      'Systems Programming',
      'iOS Development',
    ],
  },
  {
    slug: 'doris-2022',
    type: 'experience',
    company: 'Purdue University: The Data Mine, DORIS',
    logo: 'DO',
    logoImage: '/doris-logo.png',
    role: 'Data Science Researcher',
    start: '2022-08-01',
    end: '2023-05-01',
    location: 'West Lafayette, IN',
    summary:
      'Analyzed post-COVID workspace utilization and produced visualizations for occupancy and resource usage.',
    solvedFor:
      'How can organizations better understand how physical workspaces are being used in order to make data-driven decisions about layout, occupancy, and resource allocation?',
    bullets: [
      'Analyzed post-COVID workspace utilization data using Pandas, NumPy, and Matplotlib.',
      'Produced data visualizations that identified patterns in workspace occupancy and resource usage.',
      'Co-authored a comprehensive report on COVID-19’s impact on workspace dynamics.',
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Visualization', 'Research'],
  },
  {
    slug: 'milestone-born',
    type: 'milestone',
    title: 'Born',
    date: '2004-09',
    description: 'The beginning.',
    href: null,
  },
  {
    slug: 'milestone-graduated',
    type: 'milestone',
    title: 'Graduated',
    date: '2026-05',
    description: 'B.S. Computer Science, Purdue University.',
    href: null,
  },
];

const archivedProjects = [
  {
    slug: 'customer-location-insights',
    title: 'Customer Location Insights',
    folderIcon: Map,
    description:
      'Enterprise geospatial analytics platform.',
    tags: ['Enterprise', 'Data', 'Maps'],
    tools: [
      { name: 'Python', icon: Terminal },
      { name: 'SQL', icon: Database },
      { name: 'Tableau', icon: Table2 },
      { name: 'Maps', icon: Map },
    ],
    links: {},
    overview:
      'A data-driven platform for understanding customer movement, location patterns, and operational opportunities.',
    problem:
      'Teams needed a clearer way to connect external location data with internal business records and identify high-value opportunities.',
    built:
      'I built a data pipeline and enrichment flow that matched facilities, scored opportunities, and supported location-based decision-making.',
    contributions: [
      'Designed the ingestion and geolocation-matching workflow.',
      'Implemented caching logic to reduce repeated processing.',
      'Built scoring logic for opportunity discovery.',
    ],
    challenges:
      'Handling imperfect facility records required fuzzy spatial logic, careful caching, and clear confidence signals.',
    results: [
      'Matched 88K+ external facilities against internal records.',
      'Reduced run time by 48% and external API calls by 60%.',
      'Uncovered 30+ leads worth $750K in projected revenue.',
    ],
    lessons:
      'The most useful analytics systems make uncertainty visible and make repeated workflows cheaper over time.',
    media: [
      { title: 'Movement Heatmap', type: 'Map Study', icon: Map },
      { title: 'Scoring Dashboard', type: 'Dashboard', icon: Table2 },
      { title: 'ETL Flow', type: 'Architecture', icon: Workflow },
    ],
    resources: [],
  },
  {
    slug: 'gains-ai-simulation',
    title: 'GAINS AI Simulation',
    folderIcon: BrainCircuit,
    description:
      'Agent simulation research system.',
    tags: ['AI', 'Simulation', 'Research'],
    tools: [
      { name: 'Unreal Engine', icon: Cpu },
      { name: 'C++', icon: Cpu },
      { name: 'AI', icon: BrainCircuit },
      { name: 'GIS', icon: Map },
    ],
    links: {},
    overview:
      'Simulation research tooling for modeling intelligent agent behavior and interpreting system-level outcomes.',
    problem:
      'Urban planning teams need ways to test how design choices influence pedestrian flow before building physical spaces.',
    built:
      'I built Unreal Engine simulation tooling for AI-driven NPC movement, dynamic traits, and GIS-ready movement exports.',
    contributions: [
      'Implemented AI behavior using Environmental Query Systems and Behavior Trees.',
      'Built C++ logging scripts for movement data export.',
      'Helped translate simulation outputs into heatmap-ready datasets.',
    ],
    challenges:
      'Balancing believable agent behavior with exportable, analyzable data required both simulation logic and data pipeline thinking.',
    results: [
      'Simulated 200+ AI-driven NPCs.',
      'Exported 10K+ movement data points for spatial analysis.',
      'Created a tool urban planners could use to test public-space designs.',
    ],
    lessons:
      'Research tools become more valuable when their outputs are easy to inspect, export, and challenge.',
    media: [
      { title: 'Agent Behavior', type: 'Simulation', icon: BrainCircuit },
      { title: 'Movement Export', type: 'Dataset', icon: Database },
      { title: 'Heatmap Analysis', type: 'GIS', icon: Map },
    ],
    resources: [],
  },
  {
    slug: 'avert',
    title: 'Avert',
    folderIcon: Smartphone,
    description:
      'Human-centered iOS safety app.',
    tags: ['iOS', 'Product', 'Safety'],
    tools: [
      { name: 'SwiftUI', icon: Smartphone },
      { name: 'Firebase', icon: Cloud },
      { name: 'iOS', icon: MonitorSmartphone },
    ],
    links: {},
    overview:
      'A human-centered product concept focused on safety, fast decision support, and accessible mobile experiences.',
    problem:
      'Safety tools often ask users to make too many decisions during moments when speed and clarity matter most.',
    built:
      'I designed a mobile-first safety experience centered on fast flows, low-friction decision support, and calm visual hierarchy.',
    contributions: [
      'Mapped core safety flows and interaction states.',
      'Designed mobile UI patterns with accessibility in mind.',
      'Explored backend support for user and event data.',
    ],
    challenges:
      'The key challenge was keeping the product useful without making the interface feel alarming or overloaded.',
    results: [
      'Created a focused iOS product direction.',
      'Defined flows that prioritize clarity and speed.',
    ],
    lessons:
      'Sensitive product categories need restraint: the interface has to feel trustworthy before it can feel powerful.',
    media: [
      { title: 'Mobile Flow', type: 'Prototype', icon: Smartphone },
      { title: 'State Map', type: 'UX System', icon: Workflow },
    ],
    resources: [],
  },
  {
    slug: 'cinerank',
    title: 'CineRank',
    folderIcon: Film,
    description:
      'Movie ranking and discovery experience.',
    tags: ['Full Stack', 'Ranking', 'UX'],
    tools: [
      { name: 'React', icon: Layers3 },
      { name: 'Ranking', icon: BrainCircuit },
      { name: 'UX', icon: MonitorSmartphone },
    ],
    links: {},
    overview:
      'A movie ranking experience that blends clean discovery flows with recommendation-style thinking.',
    problem:
      'Movie discovery can become noisy quickly; users need a lightweight way to compare, rank, and revisit preferences.',
    built:
      'I built a ranking-focused interface that supports comparison, preference capture, and clean browsing flows.',
    contributions: [
      'Designed the ranking interaction model.',
      'Built reusable UI patterns for browsing and comparison.',
      'Structured project state around fast preference updates.',
    ],
    challenges:
      'Ranking interfaces need to avoid feeling tedious, especially when users are comparing many items.',
    results: ['Created a cleaner way to browse and compare movie preferences.'],
    lessons:
      'Good recommendation UX depends as much on interaction design as it does on ranking logic.',
    media: [
      { title: 'Ranking Flow', type: 'Interface', icon: Film },
      { title: 'Preference Model', type: 'System', icon: BrainCircuit },
    ],
    resources: [],
  },
  {
    slug: 'boilertrack',
    title: 'BoilerTrack',
    folderIcon: PackageOpen,
    description:
      'Purdue-focused lost-and-found system.',
    tags: ['React', 'Flask', 'SQLite'],
    tools: [
      { name: 'React', icon: Layers3 },
      { name: 'Flask', icon: Server },
      { name: 'SQLite', icon: Database },
      { name: 'Python', icon: Terminal },
    ],
    links: {},
    overview:
      'A centralized lost-and-found system featuring item matching, QR code-based claims, and real-time tracking.',
    problem:
      'Campus lost-and-found workflows are often fragmented, making it hard to match found items with owners quickly.',
    built:
      'I built a full-stack tracking system with item records, matching logic, and QR-code-based claim support.',
    contributions: [
      'Designed the full-stack app architecture.',
      'Built backend routes for item management.',
      'Implemented matching and claim flows.',
    ],
    challenges:
      'The product needed to balance simple reporting with enough structure to support reliable matching.',
    results: [
      'Created a centralized workflow for lost-and-found tracking.',
      'Supported item matching and QR-based claims.',
    ],
    lessons:
      'Operational tools work best when they reduce ambiguity at each handoff.',
    media: [],
    resources: [],
  },
];

export const projects = [
  {
    slug: 'smoothroute',
    title: 'SmoothRoute',
    date: '2026',
    folderIcon: Map,
    description:
      'Route-planning and algorithm comparison tool for delivery routing with time windows.',
    tags: ['Routing', 'Algorithms', 'Maps'],
    tools: [
      { name: 'React', icon: Layers3 },
      { name: 'Vite', icon: Cpu },
      { name: 'Leaflet', icon: Map },
      { name: 'Recharts', icon: Table2 },
      { name: 'Python', icon: Terminal },
      { name: 'FastAPI', icon: Server },
      { name: 'SQLite', icon: Database },
      { name: 'OR-Tools', icon: Workflow },
      { name: 'OSRM', icon: Map },
    ],
    links: {
      github: 'https://github.com/mihika0916/smoothRoute',
      live: 'https://smooth-route.vercel.app',
      liveLabel: 'Live App',
    },
    overview:
      'A personal routing research project for testing how different algorithms handle delivery schedules when orders have time windows and the number of available drivers changes.',
    problem:
      'A friend is exploring a breakfast-to-go subscription business and was thinking about hiring independent delivery drivers instead of relying on third-party delivery apps. That made me curious: if every order has a specific delivery window, how should we schedule drivers, and how do the routes change when there are two drivers versus five? SmoothRoute became a way for me to explore that question before building a real delivery scheduler.',
    challenges:
      'I started with Haversine distance because it was simple, but it quickly felt too idealized. In a real city, straight-line distance ignores roads, one-way streets, and even non-traversable areas like the forest near where I live. Adding OSRM made the routes more grounded in actual road travel while still keeping Haversine as a fallback when road data is unavailable.',
    features: [
      'Create a delivery scenario by choosing a depot, adding stops manually, or generating random orders.',
      'Set delivery windows, driver count, service time, routing mode, road snapping, and simulation runs.',
      'Compare Greedy Earliest Deadline + Nearest Neighbor, Clarke-Wright Savings with time-window repair, and Google OR-Tools VRPTW.',
      'Review distance, lateness, on-time rate, compute time, route shape, charts, and winner badges.',
      'Play routes back over simulated time to see how each driver moves through their assigned stops.',
      'Use OSRM for road-aware stop snapping and route geometry, with Haversine distance as a fallback.',
    ],
    built: '',
    contributions: [],
    results: [],
    lessons: '',
    media: [],
    resources: [],
  },
  {
    slug: 'mazefindvr',
    title: 'MazeFindVR',
    date: 'May 2025 - Dec. 2025',
    folderIcon: MonitorSmartphone,
    description:
      'VR maze training system for embodied spatial memory, configurable maze runs, and performance logging.',
    tags: ['VR', 'Unity', 'Research'],
    tools: [
      { name: 'Unity', icon: Cpu },
      { name: 'C#', icon: Code2 },
      { name: 'VR Development', icon: MonitorSmartphone },
      { name: 'Oculus SDK', icon: Cpu },
    ],
    links: {},
    overview:
      'A VR maze-training system for testing spatial memory through embodied navigation instead of flat, pattern-based puzzles.',
    problem:
      'Many brain-training maze tasks are flat, stationary pattern exercises. This project explores whether immersive 3D navigation can better support spatial memory and cognitive map formation.',
    challenges:
      'The system had to generate fresh mazes without breaking reachability, keep each run controlled, and record consistent results across repeated games.',
    features: [
      'Configurable game series with run count, maze size scaling, difficulty scaling, time limit, and preview duration.',
      'Procedural maze pipeline with maze settings, loader, generator, instantiator, and reachable start/end placement.',
      'Top-down preview mode before each run, followed by first-person navigation in VR.',
      'Timer, goal detection, timeout handling, HUD updates, and CSV result logging.',
    ],
    featureMedia: [
      {
        title: 'Game Series and Run Flow',
        type: 'System diagram',
        preview: '/mazefindvr-system-flow.png',
      },
      {
        title: 'Maze Generation Pipeline',
        type: 'Architecture diagram',
        preview: '/mazefindvr-maze-generation.png',
      },
    ],
    built:
      '',
    contributions: [
      'Built a Game Series Manager that accepts run count, maze size scaling, difficulty scaling, time limit, and preview duration.',
      'Connected the Maze Generator, Maze Loader, Maze Settings, and End Point Processor so each run creates a reachable maze with valid start and end placement.',
      'Implemented the MazeIntroPreview flow that temporarily places the player in a top-down preview, then returns them to first-person navigation.',
      'Added Maze Game Controller, Maze Timer, goal detection, timeout handling, HUD updates, and Maze Run Logger output to `maze_results.csv`.',
    ],
    challenges:
      'The hardest part was keeping the experiment controlled while still allowing each run to feel fresh: maze settings had to scale automatically, randomization had to stay solvable, and logging had to remain consistent across repeated games.',
    results: [
      'Completed customizable maze generation, size and difficulty controls, timer logic, game series automation, randomization, result logging, and goal detection.',
      'Built a repeatable run loop that can generate a new maze, preview it, run the timed challenge, log the result, and advance the series.',
    ],
    lessons:
      'The most useful research tools are not just playable; they make experimental parameters explicit and produce clean data for analysis afterward.',
    media: [],
    resources: [],
  },
  {
    slug: 'inqueue',
    title: 'InQueue',
    date: 'May 2025 - Dec. 2025',
    folderIcon: Map,
    description:
      'Full-stack virtual queue management platform with real-time queue tracking, location-based queue discovery and business analytics for high-wait environments.',
    tags: ['Full Stack', 'Maps', 'Firebase'],
    tools: [
      { name: 'React', icon: Layers3 },
      { name: 'Flask', icon: Server },
      { name: 'Firebase', icon: Cloud },
      { name: 'Firestore', icon: Database },
      { name: 'Google Maps API', icon: Map },
    ],
    links: { github: 'https://github.com/mihika0916/InQueue' },
    overview:
      'A full-stack virtual queue platform that lets customers join, track, and manage service queues without being physically tied to a waiting area.',
    problem:
      'People using high-wait services need a simpler way to join queues without staying physically tied to one location. Businesses need the same queue to move efficiently, with fewer disputes, less confusion, and clearer visibility into who should be served next.',
    challenges:
      'The queue flow needed guardrails so one person could not stall service, join several nearby queues at once, or create confusion by missing their turn. Live updates, turn windows, feedback, and dispute routes had to make the process easier, not more painful.',
    features: [
      'Real-time queue joining, tracking, and position updates for customers.',
      'Location-based queue discovery using Google Maps API.',
      'Queue manager tools for businesses to monitor and move service lines.',
      'Safeguards against duplicate nearby queues, stalled turns, and unclear customer status.',
      'Feedback and dispute-resolution paths for smoother service handoffs.',
      'Business analytics for high-wait environments.',
    ],
    built:
      'I built a full-stack queue platform with live queue state, location-based discovery, and analytics support.',
    contributions: [
      'Built frontend queue discovery and tracking flows.',
      'Integrated Firebase and Firestore-backed real-time data.',
      'Connected location-aware discovery through Google Maps API.',
    ],
    results: [
      'Created real-time queue tracking for high-wait environments.',
      'Supported location-based queue discovery and business analytics.',
    ],
    lessons:
      'Operational products are strongest when customer clarity and business insight are designed together.',
    media: [],
    resources: [],
  },
  {
    slug: 'sfsl-inventory',
    title: 'SFSL Inventory',
    date: 'Aug. 2024 - May 2025',
    folderIcon: PackageOpen,
    description:
      'Full-stack inventory management dashboard for a non-profit food bank with Prophet-based demand forecasting.',
    tags: ['Inventory', 'Forecasting', 'Full Stack'],
    tools: [
      { name: 'MongoDB', icon: Database },
      { name: 'Express.js', icon: Workflow },
      { name: 'React', icon: Layers3 },
      { name: 'Node.js', icon: Server },
      { name: 'Prophet', icon: BrainCircuit },
    ],
    links: {},
    overview:
      'An inventory dashboard for Share Food Share Love Pantry that replaces handwritten tracking with clearer stock visibility, restock planning, and demand forecasting.',
    problem:
      'Share Food Share Love Pantry serves 15 villages and about 600 households, but handwritten inventory made records inconsistent and demand hard to understand. The pantry needed a clearer way to track stock, identify low-supply items, and plan future restocks.',
    challenges:
      'The dashboard had to be simple enough for pantry workflows while still supporting inventory edits, historical trends, forecasted restock quantities, and reports. Forecasting also had to be tested against a baseline so the team could choose a useful prediction approach.',
    features: [
      'Dashboard cards for weekly visits, units distributed, and items needing restock.',
      'Inventory views for current quantity, predicted quantity, stock level, and edit history.',
      'Most-distributed item charts and previous restock history.',
      'Recommended restock list with forecasted quantities and one-click order creation.',
      'Reports for inventory patterns, neighbor demographics, and pantry usage trends.',
      'Dummy-data testing and model comparison using Mean Average Precision.',
    ],
    links: { live: 'https://www.sharefoodsharelove.org', liveLabel: 'SFSL Website' },
    built:
      'I built an inventory dashboard that combined item management views with forecasting support.',
    contributions: [
      'Built dashboard surfaces for inventory monitoring.',
      'Structured full-stack data flows across the MERN stack.',
      'Integrated Prophet-based demand forecasting concepts.',
    ],
    results: [
      'Created a full-stack inventory management dashboard.',
      'Added forecasting support for supply and demand planning.',
    ],
    lessons:
      'Non-profit tools have to prioritize clarity, maintainability, and operational usefulness over feature volume.',
    media: [
      { title: 'SFSL Demo Video', type: 'Dashboard walkthrough', video: '/sfsl-demo.mov', videoType: 'video/quicktime' },
    ],
    resources: [],
  },
  {
    slug: 'boilertrack',
    title: 'BoilerTrack',
    date: 'Aug. 2024 - Dec. 2024',
    folderIcon: PackageOpen,
    description:
      'Centralized lost and found system featuring item matching, QR code-based claims, and real-time tracking.',
    tags: ['React', 'Flask', 'SQLite'],
    tools: [
      { name: 'React', icon: Layers3 },
      { name: 'Flask', icon: Server },
      { name: 'SQLite', icon: Database },
      { name: 'Python', icon: Terminal },
      { name: 'JavaScript', icon: FileCode2 },
      { name: 'Git', icon: GitBranch },
    ],
    links: { github: 'https://github.com/daivikghosh/BoilerTrack' },
    overview:
      'Centralized lost and found system featuring item matching, QR code-based claims, and real-time tracking.',
    problem:
      'Campus lost-and-found workflows are often fragmented, making it hard to match found items with owners quickly.',
    challenges:
      'The system needed enough structure to support matching and claims while keeping reporting fast for everyday campus use.',
    features: [
      'Central item database for found and missing items.',
      'Item matching flow to connect likely owners with found belongings.',
      'QR code-based claim process.',
      'Real-time status tracking across reports and claims.',
      'React, Flask, SQLite, Python, and JavaScript full-stack implementation.',
    ],
    built:
      'I built a full-stack tracking system with item records, matching logic, and QR-code-based claim support.',
    contributions: [
      'Designed the full-stack app architecture.',
      'Built backend routes for item management.',
      'Implemented matching and QR-code claim flows.',
    ],
    challenges:
      'The product needed to balance simple reporting with enough structure to support reliable matching.',
    results: [
      'Created a centralized workflow for lost-and-found tracking.',
      'Supported item matching, QR-based claims, and real-time status updates.',
    ],
    lessons:
      'Operational tools work best when they reduce ambiguity at each handoff.',
    media: [],
    resources: [],
  },
];

export const writing = [
  {
    date: 'Update',
    title: 'Designing tools people can trust',
    excerpt:
      'A short reflection on why reliability, clarity, and visual hierarchy matter in technical products.',
  },
  {
    date: 'Research Note',
    title: 'What simulation teaches software teams',
    excerpt:
      'Thinking through agent behavior, model assumptions, and how research ideas translate into working systems.',
  },
  {
    date: 'Build Log',
    title: 'From idea to interface',
    excerpt:
      'Notes on moving from rough product sketches to usable flows without losing the original problem.',
  },
];

export const contact = {
  email: profile.email,
  linkedin: profile.linkedin,
  github: profile.github,
};
