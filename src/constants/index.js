export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Golang",
    ],
  },
  {
    category: "Libraries & Tools",
    skills: [
      "Docker",
      "Pydantic AI",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "REST APIs",
      "gRPC",
      "GraphQL",
      "Git",
      "Expo",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Kafka", "AWS", "GCP", "Kubernetes", "CI/CD"],
  },
  {
    category: "AI / GenAI",
    skills: [
      "LLM Integration",
      "RAG",
      "Harness Engineering",
      "Self-Improving Agents",
      "DSPy",
      "Embeddings",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Chroma",
      "Pinecone",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "System Design",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Microservices",
      "DB Indexing",
      "API Design",
    ],
  },
  {
    category: "Development",
    skills: [
      "Node.js",
      "React.js",
      "React Native",
      "Next.js",
      "MongoDB",
      "SQL",
      "Prisma",
      "WebSockets",
      "WebRTC",
    ],
  },
];

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "SmartPDF",
    desc: "SmartPDF is an innovative AI-powered tool that revolutionizes PDF management and analysis. It offers intelligent features like text extraction, content summarization, and advanced search capabilities, making document handling more efficient than ever.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, LLM and OpenAI API, SmartPDF is designed for optimal performance and scalability.",
    href: "https://chat-with-g1nlz27gn-luckyshardas-projects.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Talk-A-Tive",
    desc: "Talk-A-Tive is a powerful real-time chat application that enables seamless communication between users. It supports instant messaging, group chats, and multimedia sharing, ensuring that every conversation is dynamic and engaging.",
    subdesc:
      "Built with cutting-edge technologies like Socket.io for real-time communication and MongoDB for efficient data storage, Talk-A-Tive offers a smooth and responsive chatting experience.",
    href: "https://talk-a-tive-7fgq.onrender.com/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Movix",
    desc: "Movix is a dynamic movie recommendation website that helps users discover new films tailored to their preferences. It offers personalized suggestions based on user ratings, viewing history, and genre preferences, making it easy to find your next favorite movie.",
    subdesc:
      "Built with React.js and powered by the TMDB API, Movix provides a seamless browsing experience with features like movie search, detailed information, and user reviews. It also includes a responsive design for optimal viewing on any device.",
    href: "https://moviflix-fth8.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/project/project4.mp4",
  //   logo: "/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Fonix technologies",
    pos: "React Native Developer",
    duration: "2025 - Present",
    title:
      "As a React Native Developer at Fonix Technologies, I played a key role in designing and developing a cross-platform educational mobile application aimed at enhancing learning experiences for students. I was responsible for building responsive user interfaces, integrating RESTful APIs, and optimizing app performance across both Android and iOS devices. The app included interactive lessons, progress tracking, push notifications, and offline capabilities to support learning anytime, anywhere. Collaborated closely with UI/UX designers, backend developers, and QA teams to ensure a seamless and engaging user experience.",
    icon: "/assets/clogo.png",
    animation: "salute",
  },
  {
    id: 2,
    name: "Dotspace technologies",
    pos: "Frontend Developer",
    duration: "2024 - 2025",
    title:
      "As a React Developer at Dotspace, I was responsible for developing an informative and responsive website that effectively communicated the company’s services and vision. Using modern React practices, I created dynamic components, implemented smooth navigation with React Router, and ensured optimal performance across devices. The project involved close collaboration with designers to bring visually engaging layouts to life, while also integrating third-party APIs and content management tools to streamline content updates. The end result was a fast, accessible, and user-friendly platform that enhanced the company’s online presence.",
    icon: "/assets/dlogo.png",
    animation: "victory",
  },
  {
    id: 3,
    name: "Zidio Development PVT. LTD",
    pos: "Software Developer",
    location: "Bengaluru, Karnataka",
    duration: "2023 - 2024",
    title:
      "Drove end-to-end performance, reliability and developer-velocity wins across the nextGen-web platform.",
    bullets: [
      "Architected and led development of the nextGen-web platform using React/Next.js with SSR and code-splitting, reducing initial page load time by 45% and improving Lighthouse performance scores from 62 to 94.",
      "Optimized backend APIs through Redis caching, query indexing, and lazy-loading strategies, decreasing average API response time by 55% and cutting server infrastructure costs by 30%.",
      "Implemented CI/CD pipelines with automated unit and E2E testing (Jest, Playwright), increasing deployment frequency by 70% and reducing production defects by 40%.",
      "Refactored legacy monolithic modules into a micro-frontend architecture, improving build time by 65% and boosting team development velocity by 40%.",
      "Mentored a team of 5 engineers and established code-review and TypeScript standards, reducing post-release bug reports by 50% and improving code-maintainability scores by 35%.",
    ],
    icon: "/assets/zidio.png",
    animation: "clapping",
  },
];
