import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Financial Research Analyst",
    company_name: "Red McCombs School of Business",
    icon: starbucks,
    iconBg: "white",
    date: "Summer 2020 – Fall 2021",
    points: [
      "Implemented and coded 8 large-scale data processing experiments using STATA to analyze, merge, and produce an econometric database of 1.3M+ observations and 100 variables.",
      "Processed and interpreted 3 economic/financial papers per day to generate new datasets. Resulted in the production of peer-reviewed financial research with Aaron Pancost Ph.D",
      "Led peer meetings with the aim of enhancing the abilities of 5 fellow analysts through instructing on research methodologies and providing quality feedback on data work",
    ],
  },
  {
    title: "Private Equity Analyst",
    company_name: "Castle Hill Partners / The Baupost Group",
    icon: tesla,
    iconBg: "black",
    date: "Spring 2022 - Winter 2022",
    points: [
      "Led the analysis of financial, valuation, and sensitivity models for a portfolio exceeding 20,000 acres of master-planned communities currently in development and Milam and Greene, one of the largest texas whiskey distilleries",
      "Liasoned with The Baupost Group, CHP's parent fund, processing and analyzing local economic data to optimize the financial performance of all equity investments",
      "Spearheaded live due diligence and comps analysis for real estate and whiskey company deals exceeding $130M, producing investment materials for fund investors",
      "Aided in Assembling sales team responsible for the development of 700 high-end residential lots in Austin, Texas, with each lot anticipated to sell for over $1M",
    ],
  },
  {
    title: "Founder",
    company_name: "PocketAnalyst",
    icon: shopify,
    iconBg: "black",
    date: "Winter 2022 - Present",
    points: [
      "Founded and developed PocketAnalyst, an innovative, AI-driven financial analyst mobile application now available on the Apple App Store along with the website and marketing materials using JS, React Native, and React",
      "Steered all aspects of the venture from marketing, software development, backend, frontend, to UI/UX, all while independently sustaining my living expenses in New York using personal savings.",
      "Implemented the App's backend infrastructure using Vercel for the App's custom API, and integrated OpenAI's ChatGPT via API to enhance the app's financial analysis functionality",
      "Currently focusing on model training with Python and Fast.ai to expand the product's capabilities and cater to enterprise-level needs.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "hello",
    description:
      "pepbois",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/",
  },  
  {
    name: "hello",
    description:
      "pepbois",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
