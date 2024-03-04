import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "VS",
  title: "Hi all, I'm Viral Savani",
  description:
    "Welcome to my portfolio! I'm Viral Savani, a dedicated UI/UX designer committed to creating intuitive and visually stunning digital experiences. With a background in web development and software engineering, I bring a unique blend of technical expertise and creative flair to every project. Explore my work below and discover how I combine user-centric design principles with cutting-edge technology to deliver impactful solutions.",
  resumeLink: "/Viral_Savani_Resume.pdf",
};

export const openSource = {
  githubUserName: "viralsavani3",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:gabaniviral3@gmail.com",
  linkedin: "https://www.linkedin.com/in/viralsavani3/",
  github: "https://github.com/viralsavani3",
  instagram: "https://www.instagram.com/vini_savani",
  facebook: "https://www.facebook.com/gabani.viral",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle:
    "Dedicated UI/UX Designer with a Passion for Crafting Engaging Digital Experiences",
  data: [
    {
      title: "UI/UX Design",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Creating intuitive and visually appealing user interfaces"),
        emoji("⚡ Conducting user research to inform design decisions"),
        emoji("⚡ Wireframing and prototyping interactive experiences"),
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          iconifyTag: "logos:adobe-xd",
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "Sketch",
          iconifyTag: "vscode-icons:file-type-sketch",
        },
        {
          skillName: "InVision",
          iconifyTag: "logos:invision-icon",
        },
        {
          skillName: "Zeplin",
          iconifyTag: "logos:zeplin",
        },
        {
          skillName: "HTML5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "UI/UX Design",
    progressPercentage: "85",
  },
  {
    Stack: "Frontend Development",
    progressPercentage: "75",
  },
  {
    Stack: "Backend Development",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Conestoga College",
    subHeader: "Post Graduate in Web Development",
    duration: "August 2023",
    desc: "Kitchener, ON",
    grade: "",
    descBullets: [
      "Completed Post Graduate Program in Web Development",
      "Focused on advanced web development techniques and emerging technologies",
      "Dissertation: Chatting Application in Trello software",
    ],
  },
  {
    schoolName: "Sarvepalli Radhakrishnan University",
    subHeader: "Bachelor of Computer Application",
    duration: "May 2018",
    desc: "Bhopal, India",
    grade: "",
    descBullets: [
      "Bachelor's degree with a focus on computer applications",
      "Developed foundational skills in programming, database management, and software development",
    ],
  },
  {
    schoolName: "Indian Institution of Engineers",
    subHeader: "Diploma in Computer Science Engineering",
    duration: "June 2014",
    desc: "New Delhi, India",
    grade: "",
    descBullets: [
      "Diploma program emphasizing computer science engineering principles",
      "Studied topics such as computer architecture, data structures, and programming languages",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Developer",
    company: "Actosoft",
    companyLogo: "/img/icons/common/Actosoft.png",
    date: "January 2022 - April 2022",
    desc: "Developed web-based solutions using HTML, CSS, JavaScript, and jQuery. Collaborated with team members to analyze user requirements.",
    descBullets: [
      "Created and maintained web applications.",
      "Provided technical support for debugging and troubleshooting issues.",
    ],
  },
  {
    role: "Jr. Software Developer",
    company: "ActoScript | A Right Click",
    companyLogo: "/img/icons/common/ActoScript.png",
    date: "September 2018 - May 2021",
    desc: "Implemented Agile development practices. Troubleshot, debugged, and resolved technical issues with existing software applications.",
    descBullets: [
      "Analyzed customer requirements to design and implement new features.",
      "Collaborated with QA, UI/UX Designers, and Project Managers.",
    ],
  },
  {
    role: "Computer Operator & Data Entry",
    company: "ABC Computer Education",
    companyLogo: "/img/icons/common/ABC Computer Education.png",
    date: "November 2014 - June 2015",
    desc: "Performed data entry tasks and maintained computer hardware and software systems.",
    descBullets: [
      "Installed and configured computer systems.",
      "Provided user support for system applications and hardware components.",
    ],
  },
  {
    role: "Production Team Member to Quality Inspector",
    company: "TG Minto Corporation",
    companyLogo: "/img/icons/common/TG Minto Corporation.webp",
    date: "May 2023 - December 2023",
    desc: "Operated moulding machines and conducted measurements and testing.",
    descBullets: [
      "Completed inspection reports and collected data for quality assurance.",
      "Demonstrated attention to detail and commitment to maintaining high-quality standards.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Coffee Shop Website",
    desc: "Designed and developed a responsive website for a coffee shop using modern web technologies. Implemented features such as menu display, online ordering, and contact forms to enhance the customer experience.",
    github: "#",
    link: "#",
  },
  {
    name: "Restaurant Website",
    desc: "Created a dynamic and visually appealing website for a restaurant, featuring menu management, online reservations, and customer reviews. Ensured seamless navigation and optimized performance for all devices.",
    github: "#",
    link: "#",
  },
  {
    name: "E-commerce Website",
    desc: "Developed an e-commerce website with a user-friendly interface, secure payment gateway integration, and product management functionalities. Implemented features such as product search, cart management, and order tracking.",
    github: "#",
    link: "#",
  },
  {
    name: "Shopping Android App",
    desc: "Designed and built a shopping Android app with a sleek and intuitive user interface. Implemented features such as product browsing, wishlist management, and secure checkout to enhance the shopping experience for users.",
    github: "#",
    link: "#",
  },
  {
    name: "Full Stack Employee Management System",
    desc: "Developed a comprehensive employee management system with role-based access control, attendance tracking, and performance evaluation modules. Built using modern web technologies for efficient performance and scalability.",
    github: "#",
    link: "#",
  },
  {
    name: "UI/UX for Travel Website",
    desc: "Designed the user interface and experience for a travel website, focusing on intuitive navigation, stunning visuals, and seamless booking functionality. Ensured a memorable and engaging experience for travelers.",
    github: "#",
    link: "#",
  },
  {
    name: "Library Management System",
    desc: "Developed a robust library management system with features such as book cataloging, member management, and transaction tracking. Implemented using PHP/.NET for efficient data management and user interaction.",
    github: "#",
    link: "#",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Viral Savani",
  description: greetings.description,
  author: "Viral Savani",
  image: "",
  url: "",
  keywords: ["Viral Savani"],
};
