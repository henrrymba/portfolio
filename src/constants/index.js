import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";

const experiences = [
  {
    id: "exp-1",
    company: "Universidad Autónoma de Madrid",
    role: "Bachelor's Degree in Economics",
    period: "September 2020 - June 2022",
    description: [
      "University education in economics and data analysis.",
      "Development of analytical skills and critical thinking.",
      "Study of microeconomics, macroeconomics, and quantitative methods.",
      "Solid foundation in complex problem-solving and decision-making.",
    ],
    color: "#8B5CF6",
    Icon: GraduationCap,
  },
  {
    id: "exp-2",
    company: "ESIC Business & Marketing School",
    role: "Advanced Vocational Diploma in Web Application Development",
    period: "September 2022 - June 2024",
    description: [
      "Web Application Development - Specialized technical training.",
      "Learning frontend technologies (HTML, CSS, JavaScript, modern frameworks).",
      "Backend development with databases, REST APIs, and web architectures.",
      "Practical full stack development projects and professional methodologies.",
    ],
    color: "#3B82F6",
    Icon: GraduationCap,
  },
  {
    id: "exp-3",
    company: "Neoris",
    role: "Frontend Developer (Internship)",
    period: "March 2024 - June 2024",
    description: [
      "Internship as a junior frontend developer at a technology consultancy.",
      "Development of enterprise applications using Angular as the main framework.",
      "Collaboration with development teams using agile methodologies.",
      "Implementation of reusable components and frontend architecture improvements.",
    ],
    color: "#F59E0B",
    Icon: Briefcase,
  },
  {
    id: "exp-4",
    company: "Derepente Madrid",
    role: "Full Stack Developer",
    period: "June 2024 - Present",
    description: [
      "Development of internal and client web solutions at a marketing and advertising agency.",
      "Implementation of applications with Next.js, Tailwind CSS, Node.js, and Express.",
      "Integration of backend services like Appwrite, Supabase, Firebase, and Stripe for payments and authentication.",
      "Collaboration on digital marketing projects with a focus on performance and user experience.",
    ],
    color: "#10B981",
    Icon: Rocket,
  },
];

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "Angular.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/henrrymba",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://henrry.es/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/henrrymb/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/photography-project-group.jpeg",
  },
  {
    id: 2,
    img: "/images/me-street-photo.JPG",
  },
  {
    id: 3,
    img: "/images/gsap-apple.jpeg",
  },
  {
    id: 4,
    img: "memoji.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  experiences,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "GSAP Apple",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[50vh] left-5",
      children: [
        {
          id: 1,
          name: "AppleGSAP_Readme.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "projects.gsap.desc.0",
            "projects.gsap.desc.1",
            "projects.gsap.desc.2",
          ],
        },
        {
          id: 2,
          name: "apple-gsap.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://gsap-apple-iota.vercel.app/",
          position: "top-10 right-10",
        },
        {
          id: 4,
          name: "screenshot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 right-40",
          imageUrl: "/images/gsap_apple.jpeg",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Signalist",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-70",
      children: [
        {
          id: 1,
          name: "Signalist_Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "projects.signalist.desc.0",
            "projects.signalist.desc.1",
            "projects.signalist.desc.2",
          ],
        },
        {
          id: 2,
          name: "signalist.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://signalist-stock-tracker-app-inky.vercel.app/sign-in",
          position: "top-20 left-10",
        },
        {
          id: 4,
          name: "screenshot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-40",
          imageUrl: "/images/signalist.jpeg",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "SnapCast",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[3vh] left-200",
      children: [
        {
          id: 1,
          name: "SnapCast_Concept.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "projects.snapcast.desc.0",
            "projects.snapcast.desc.1",
            "projects.snapcast.desc.2",
          ],
        },
        {
          id: 2,
          name: "snapcast.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://screen-recording-app-ochre.vercel.app/",
          position: "top-10 right-10",
        },
        {
          id: 4,
          name: "screenshot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 right-40",
          imageUrl: "/images/snapcast.jpeg",
        },
      ],
    },

    // ▶ Project 4 (Tourvisto)
    {
      id: 8,
      name: "Tourvisto",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-70",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 1,
          name: "Tourvisto_Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "projects.tourvisto.desc.0",
            "projects.tourvisto.desc.1",
          ],
        },
        {
          id: 2,
          name: "tourvisto.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://travel-agency-dashboard-sigma-hazel.vercel.app/sign-in",
          position: "top-10 right-10",
        },
        {
          id: 4,
          name: "screenshot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 right-40",
          imageUrl: "/images/tourvisto.jpeg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "me-street-photo.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me-street-photo.JPG",
    },
    {
      id: 3,
      name: "photography-project-group.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/photography-project-group.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "about.subtitle",
      description: [
        "about.desc.0",
        "about.desc.1",
        "about.desc.2",
        "about.desc.3",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
