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
  excel,
  openai,
  pptx,
  python,
  stata,
  aaron,
  board,
  excelmodel,
  misty,
  pastore,
  pawebsite,
  pptpresentation,
  video,
  headshot,
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
    title: "Speaker and Researcher",
    icon: creator,
    link: "https://youtu.be/czviZdB6Bnc",
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
    link: "https://apps.apple.com/us/app/pocketanalyst/id6447647744",
  },
  {
    title: "Web Developer",
    icon: web,
    link: "https://www.pocketanalyst.app/",
  },
  {
    title: "Financial Analyst",
    icon: backend,
    link: "https://drive.google.com/drive/folders/1fn-i2bpGxO2rBHTv8W8eWZd-KsCYMGnL?usp=sharing",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "openai",
    icon: openai,
  },
  {
    name: "excel",
    icon: excel,
  },
  {
    name: "pptx",
    icon: pptx,
  },
  {
    name: "stata",
    icon: stata,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
];

const experiences = [
  {
    title: "Financial Research Analyst",
    company_name: "Red McCombs School of Business",
    icon: starbucks,
    iconBg: "white",
    date: "Summer 2020 – Fall 2021",
    points: [
      "Designed and implemented eight large-scale data processing experiments using STATA.",
      "Analyzed and merged data to create a comprehensive database of 1.3M+ observations and 100 variables.",
      "Reviewed and interpreted 3 economic/financial papers daily, generating new datasets and aiding in the production of peer-reviewed financial research with Aaron Pancost, Ph.D contributing to significant advancements in measurement error.",
      "Led peer meetings to enhance the abilities of 5 fellow analysts, providing instruction on research methodologies and constructive feedback. This improved the team's data analysis skills, increasing accuracy by 20%.",
    ],
  },
  {
    title: "Private Equity Analyst",
    company_name: "Castle Hill Partners / The Baupost Group",
    icon: tesla,
    iconBg: "black",
    date: "Spring 2022 - Winter 2022",
    points: [
      "Served as liason with The Baupost Group, CHP's parent fund, processing and analyzing local economic data to optimize the financial performance of all equity investments",
      "Led due diligence and comps analysis for real estate and whiskey company deals exceeding $130M, creating investment materials that secured funding from key investors.",
      "Led the analysis of financial, valuation, and sensitivity models for a portfolio exceeding 20,000 acres of master-planned communities and one of Texas' largest whiskey distilleries, Milam and Greene, contributing to effective strategic planning and financing.",
      "Contributed to assembling a sales team that successfully developed 700 high-end residential lots in Austin, Texas, with each lot projected to generate over $1M in revenue.",
    ],
  },
  {
    title: "Founder",
    company_name: "PocketAnalyst",
    icon: shopify,
    iconBg: "black",
    date: "Winter 2022 - Present",
    points: [
      "Founded and developed PocketAnalyst, an AI-driven mobile application available on the Apple App Store that transforms the financial analysis process. Built the app, website, and marketing materials using JS, React Native, and React.",
      "Focusing on model training with Python and Fast.ai to broaden the product's capabilities, aiming to cater to enterprise-level needs and increase the app's market reach.",
      "Single-handedly steered all facets of the venture, from marketing and software development to UI/UX, while independently funding my living expenses in New York. This hands-on approach resulted in learning multiple programming lenguages, creating the mobile application and gaining competency in artificial intelligence.",
      "Engineered the app's backend using Vercel for the custom API and integrated OpenAI's ChatGPT, significantly enhancing the app's financial analysis capabilities.",
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
    name: "PocketAnalyst",
    description:
      "PocketAnalyst is an innovative mobile application, leveraging the power of artificial intelligence to transform complex financial data into accessible, personalized insights, making institutional-grade investment analysis available at your fingertips. From cryptocurrency to traditional asset classes, it offers an increasingly tailored, comprehensive, and efficient investment analysis solution, acting as your personal financial analyst.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "chatgptapi",
        color: "orange-text-gradient ",
      },
      {
        name: "coingeckoapi",
        color: "green-text-gradient",
      },
      {
        name: "ios",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: pastore,
    source_code_link:
      "https://apps.apple.com/us/app/pocketanalyst/id6447647744",
    check: reactjs,
  },
  {
    name: "PocketAnalyst Website",
    description:
      "Showcasing a streamlined design implemented with Tailwind CSS, the PocketAnalyst promotional website serves as the gateway to the app. The site effectively highlights the mobile app's impressive capabilities of delivering investment research in a mobile app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: pawebsite,
    source_code_link:
      "https://apps.apple.com/us/app/pocketanalyst/id6447647744",
    check: reactjs,
  },
  {
    name: "Private Equity Excel Model",
    description:
      "Financial analysis is one of the most important aspects of my job as a private equity analyst. I've created a comprehensive excel model that allows me to analyze the financial performance of a real estate investment and determine its viability. The model is fully customizable and can be used to analyze any real estate investment.",
    tags: [
      {
        name: "excel",
        color: "green-text-gradient",
      },
    ],
    image: excelmodel,
    source_code_link:
      "https://docs.google.com/spreadsheets/d/1cXS--6TAGUi8J43Du2dlvBn65MliGKqF/edit?usp=sharing&ouid=112954166408836832152&rtpof=true&sd=true",
    check: excel,
  },
  {
    name: "Economic Research",
    description:
      "Econometric research about the role of credit availability on small, informal business growth in Mexico. We find that having access to credit, being educated, and gender do have an impact on both income and the ability to start a business. These findings provide evidence on the higher marginal utility and profits of credit to the less educated and impoverished.",
    tags: [
      {
        name: "STATA",
        color: "orange-text-gradient",
      },
      {
        name: "excel",
        color: "green-text-gradient",
      },
    ],
    image: video,
    source_code_link:
      "https://www.youtube.com/watch?v=czviZdB6Bnc&t=77s&ab_channel=PatricioDieck",
    check: stata,
  },
  {
    name: "Job Losses From Covid-19",
    description:
      "This PowerPoint presentation delves into the profound transformations observed in the labor force in the wake of the pandemic. Starting with a comparative analysis of labor force composition pre- and post-pandemic, it dives into the demographics of those who exited the workforce, examining early retirements and changes in female participation. The presentation also explores labor demand in relation to immigration and birth rates.",
    tags: [
      {
        name: "pptx",
        color: "blue-text-gradient",
      },
    ],
    image: pptpresentation,
    source_code_link:
      "https://docs.google.com/presentation/d/1LD9u_4pKcwnMI3QqyVq8pw8s854dLi9J/edit?usp=sharing&ouid=112954166408836832152&rtpof=true&sd=true",
    check: pptx,
  },
  {
    name: "Musical Life",
    description:
      'I love music. It is a passion of mine- it breathes joy and life into me. Here is a video of me playing "Misty" by Erroll Garner. Feel free to browse the YouTube channel.',
    tags: [
      {
        name: "logicpro",
        color: "pink-text-gradient",
      },
      {
        name: "piano",
        color: "orange-text-gradient ",
      },
      {
        name: "contentcreation",
        color: "green-text-gradient",
      },
    ],
    image: misty,
    source_code_link:
      "https://docs.google.com/presentation/d/1LD9u_4pKcwnMI3QqyVq8pw8s854dLi9J/edit?usp=sharing&ouid=112954166408836832152&rtpof=true&sd=true",
    check: headshot,
  },
];

export { services, technologies, experiences, testimonials, projects };
