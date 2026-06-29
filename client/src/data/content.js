import CSED from "../assets/CSED.png";
import groksblog from "../assets/GroksBlog.png";

export const projectsData = [
  {
    id: "csed",
    title: "CSED Placement Portal",
    description: "Official portal for the Computer Science and Engineering Department at IET Lucknow.",
    tags: ["React", "Node.js", "MongoDB", "OAuth"],
    image: `${CSED}`,
    links: { github: "https://github.com/Prajitsingh1105/csed_site", live: "https://csed.placement.ietlucknow.ac.in/" }
  },
  {
    id: "NewsForge",
    title: "GroksBlog",
    description: "Developed during my internship, this full-stack, production-ready news platform is built with Next.js and MongoDB, featuring a custom admin CMS.",
    tags: ["Next.js", "Tailwind", "Express"],
    image: `${groksblog}`,
    links: { github: "https://github.com/Prajitsingh1105/NewsForge", live: "https://www.groksblog.com/" }
  },
  {
    id: "taskmaster",
    title: "TaskMaster Pro",
    description: "A sleek project management tool with Kanban boards, real-time collaboration, and time tracking. Designed with a dark-mode first approach.",
    tags: ["Vue.js", "Firebase", "Vuex"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmni944qZvt55mRcGl9P55ySn5CDCqtegbDaNtmBvFDn2NPBxmtp2xO3znqR-TLjsjKexGDQfQr2OdmaaqVPLt6DahkrCRLInuxjhtnxATyaP-HGIWGqegqdc9FQZwLx9BbXsn7moOqiY7Smi7SKp3LdMcs72x1TsWSgyoUvC6xGsCdxPU7CmVHUyW8pPbIILRbNgj4rzfK_LuWrwUCoD0g3J5glT0I5iA5oUeouaBRCL6A6vDNNFSveupPP0mp1uR1asaSvwaabvC",
    links: { github: "#", live: "#" }
  },
  {
    id: "weatherapp",
    title: "Aura Weather",
    description: "A beautiful, minimalist weather application providing detailed forecasts, radar maps, and severe weather alerts. Features a dynamic UI that changes based on the weather.",
    tags: ["React Native", "Weather API", "Expo"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPNtcgkmrXy7ltAhVUewRBahjgV2sUh8_L3CnOIo2H1aFxNKCsGFGl1CGuo6wCI0GvaMb1F60LByvQ2AFxbnCoTIX_3ncFgm2jmDlJVsRlcV36iEneIcCYJ84oqDRU2qoV9s9tF6sqF1h5gFrqPitUSQoQkuHn9B95bKcsXHH3vfhvs57jTd7VtdIX8XwKkyTm1rlj2d4wToachI7SYIeuyYM-SnFXPiZVDcET6GZa6HcfWpvdImUACq_Gu3QztFbKguTl7A7Y0s7G",
    links: { github: "#", live: "#" }
  },
  {
    id: "crypto-dash",
    title: "CryptoDash",
    description: "Cryptocurrency dashboard tracking market trends in real-time. Incorporates complex charting libraries and web socket connections for live price updates.",
    tags: ["React", "Chart.js", "WebSockets"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsbVvqMqRNtC-AlTLHtLCzTMXuGoJWpL1lg1NhNN6NAmNuKZ913-QK-jgFajWXIgTGPYcHVpZ4D8MM5q5xpHxijI_NObFTw8wfZyToniElKuGmS0lxqHH3LHpxargalfpi-SfBvC6eiDyPMzqN66KHHmbipdMC1VJRLGlslZIpd0YSvmC3lTr09YTImm3o9TRi-yhZFrzWu-AusvBkPAeGnLE5GgatI6Pjtap_oerxGcY_f3QogWcWUQ8giCg3sR9tUBNhRvY3ywZE",
    links: { github: "#", live: "#" }
  }
];

export const timelineData = [
  {
    year: "Expected 2026",
    title: "T&P Portal Architecture",
    description: "Leading the backend architecture for the Training & Placement portal, focusing on C++ data handling and scalable MERN microservices."
  },
  {
    year: "Expected 2026",
    title: "Kalakriti Apparel",
    description: "Developing an immersive e-commerce platform blending high-end fashion with minimal, glassmorphic UI design patterns."
  },
  {
    year: "2025",
    title: "College Magazine UI",
    description: "Designed and implemented a digital editorial experience, focusing on asymmetrical layouts and typography hierarchy."
  },
  {
    year: "2024",
    title: "Frontend Developer Intern at TechCorp",
    description: "Worked on building responsive user interfaces for enterprise clients, improving performance by 30% through code splitting and lazy loading."
  },
  {
    year: "2023",
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript. Built several small projects and learned the fundamentals of React."
  }
];

export const blogData = [
  {
    id: 1,
    title: "The Caching Debate: JSON vs. HSET",
    date: "June 26, 2026",
    summary: "An architectural analysis reveals significant differences between managing session data with stringified JSON versus Redis Hashes (HSET)",
    readTime: "5 min read",
    link: "https://prajit-dev.hashnode.dev/the-caching-debate-json-vs-hset"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Secure Password Resets in Express.js (with Nodemailer)",
    date: "June 24, 2026",
    summary: "Break down the entire password reset architecture using Express.js, Mongoose (MongoDB), and Nodemailer.",
    readTime: "5 min read",
    link: "https://prajit-dev.hashnode.dev/the-ultimate-guide-to-secure-password-resets-in-express-js-with-nodemailer"
  },
];