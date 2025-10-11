import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  meta,
  news,
  starbucks,
  ehsPrints,
  outbox,
  qompass,
  tesla,
  shopify,
  youtube,
  blog,
  // threejs,
  nextjs,
  express,
  firebase,
  jenkins,
  postgresql,
  aws,
  thinkspace,
  estateEdge
  // kubernetes
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "Full Stack Web Developer", icon: web },
  { title: "Frontend Developer (React / Next.js)", icon: mobile },
  { title: "Backend Developer (Node.js / Express)", icon: backend },
  { title: "DevOps & CI/CD Engineer", icon: creator },
];


const technologies = [
  {
    name: "JavaScript (ES6+)",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  // {
  //   name: "Kubernetes",
  //   icon: kubernetes,
  // },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Jenkins / GitHub Actions",
    icon: jenkins,
  },
  {
    name: "AWS",
    icon: aws,
  },
];


const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "EHS Prints",
    icon: ehsPrints,
    iconBg: "#E6DEDD",
    date: "March 2024 - July 2024",
    points: [
      "Developed and maintained dynamic web applications using React.js, Node.js, and related modern technologies.",
      "Rebuilt the company website from the ground up, improving average page load speed from 4.2s to 2.5s (40% faster).",
      "Revamped the UX/UI design, increasing average session duration by 150% and driving a 5x growth in client acquisition.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing manual deployment efforts by 80% and improving release consistency.",
    ],

  },
  {
    title: "Frontend Developer Intern",
    company_name: "OutBox Technologies Pvt. Ltd.",
    icon: outbox,
    iconBg: "#383E56",
    date: "July 2024 - Jan 2025",
    points: [
      "Developed the company's website from the ground up, ensuring a modern and scalable architecture.",
      "Led a team of 5 developers to deliver high-performance React.js applications, reducing page load times by 30%.",
      "Implemented 10+ pixel-perfect UIs from Figma designs, achieving 100% responsiveness across all devices.",
      "Enhanced API integration workflows, reducing data fetch times by 40% and increasing user retention significantly.",
    ],

  },
  {
    title: "Software Developer",
    company_name: "Array Ventures Private Limited",
    icon: qompass,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Migrated 100+ APIs from Laravel to the MERN stack, improving scalability and reducing bug reports by 25%.",
      "Integrated secure payment workflows and third-party services such as Cashfree to enhance transaction reliability.",
      "Optimized backend queries in Node.js and Express.js, cutting average response time by 35%.",
      "Automated deployments using Docker and Jenkins, reducing the release cycle from 3 days to just 1 day.",
    ],

  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bank-Assist",
    description:
      "Bank-Assist is an intelligent banking assistive platform that lets users securely check balances, report lost/stolen cards, and access FAQs — all via a conversational flow. I built a fault-tolerant API-driven backend and integrated voice/text-based interactions so users can transact seamlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    live_link: "https://bank-assist.vercel.app/sign-in",
    source_code_link: "https://github.com/yuvrajgohil24/Bank-Assist.git",
  },
  {
    name: "ThinkSpace",
    description:
      "ThinkSpace is a real-time collaborative whiteboard that enables teams to brainstorm and visualize ideas on an infinite canvas. It features live cursor presence, synchronized drawing, and smooth zoom interactions powered by WebSockets. Built for performance and scalability, it supports seamless multi-user collaboration with low latency and persistent sessions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "liveblocks",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
    ],
    image: thinkspace,
    live_link: "https://think-space-drab.vercel.app/",
    source_code_link: "https://github.com/yuvrajgohil24/ThinkSpace.git",
  },
  {
    name: "Estate-Edge",
    description:
      "Estate-Edge is a property marketplace platform that empowers users to explore listings, connect with agents, and share feedback through a smooth, intuitive UI/UX. It features advanced search filters, real-time chat, and a feedback rating system to enhance trust and engagement.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: estateEdge,
    live_link: "https://estate-edge-delta.vercel.app/",
    source_code_link: "https://github.com/yuvrajgohil24/Estate-Edge.git",
  },
];

// const projects = [
//   {
//     name: "Bank-Assist - SaaS Finance Platform",
//     description:
//       "A **SaaS Finance Platform** enabling multi-bank account connection, **real-time transaction processing**, and peer-to-peer transfers[cite: 35, 36]. Built with **Next.js**, **Plaid API** integration, and **Appwrite** for integrated financial management workflows[cite: 37]. Showcases proficiency in modern **Full Stack development** and **FinTech solutions**.",
//     technologies: ["Next.js", "Plaid API", "Appwrite", "Financial Management", "Real-Time Transactions"],
//     // Placeholder image and link, replace with actual if available. Resume states "Live Site" [cite: 35]
//     image: "bank_assist_image",
//     source_code_link: "https://bank-assist.vercel.app/",
//   },
//   {
//     name: "Estate-Edge - Real Estate Platform",
//     description:
//       "A comprehensive **Full-Stack Real Estate platform** developed using the **MERN stack** (**React.js, Node.js, Express, MongoDB**) for finding optimal properties[cite: 38, 39]. Implements secure **JWT authentication**, **role-based access control**, **Socket.io chat** for instant communication, and **real-time property updates**[cite: 40]. Demonstrates skills in **API development** and **security implementation**.",
//     technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Socket.io", "Real-Time Updates"],
//     // Placeholder image and link, replace with actual if available. Resume states "Live Site" [cite: 38]
//     image: "estate_edge_image",
//     source_code_link: "https://estate-edge-delta.vercel.app/",
//   },
//   {
//     name: "ThinkSpace - Real-Time Whiteboard App (In-Progress)",
//     description:
//       "A collaborative, **real-time whiteboard tool** for multi-user drawing, annotation, and brainstorming[cite: 41, 42]. Features include an **infinite canvas**, **cursor presence tracking**, and seamless **multi-user collaboration**[cite: 43]. Highlights skills in **real-time web technologies** and complex **front-end state management**.",
//     technologies: ["Real-Time Collaboration", "Infinite Canvas", "Multi-User Features", "Front-end Development"],
//     // Placeholder image and link, replace with actual if available. Resume states "(In-Progress)" [cite: 41]
//     image: "thinkspace_image",
//     source_code_link: "GitHub Link (If Available)",
//   },
// ];

export { services, technologies, experiences, testimonials, projects };