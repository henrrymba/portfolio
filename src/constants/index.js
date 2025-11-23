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

export { navLinks, navIcons, dockApps, techStack };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 (Fake Data)
    {
      id: 5,
      name: "Fake Social Media App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "FakeApp_Readme.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is a dummy social media application. It doesn't do anything real.",
            "It's built with imaginary technologies and designed for fictional users.",
            "Features include posting fake updates and connecting with non-existent friends.",
            "Just pretend it's awesome!",
          ],
        },
        {
          id: 2,
          name: "fakeapp.io",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Rick Astley for fake URL
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "fake_screenshot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/image.png", // Using a generic image
        },
        {
          id: 5,
          name: "FakeDesign.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/file/fake-design-link",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2 (Fake Data)
    {
      id: 6,
      name: "Placeholder E-commerce Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Shop_Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A pretend e-commerce site for selling imaginary products.",
            "It boasts features like a non-functional shopping cart and fake payment processing.",
            "Built with 'React-ish' and 'Node-ish' technologies for demonstration purposes.",
            "Warning: No actual transactions will occur.",
          ],
        },
        {
          id: 2,
          name: "buynothing.store",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://example.com/not-a-real-shop",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "shop_display.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/image.png", // Using a generic image
        },
        {
          id: 5,
          name: "ShopWireframe.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/file/fake-ecommerce-design",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3 (Fake Data)
    {
      id: 7,
      name: "Mockup Portfolio Site",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Portfolio_Concept.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is a theoretical portfolio site, showcasing projects that don't exist.",
            "It's designed to look professional, but all content is purely illustrative.",
            "Features include dummy project galleries and a non-responsive contact form.",
            "Made with 'HTML-like' and 'CSS-like' code.",
          ],
        },
        {
          id: 2,
          name: "myfakeportfolio.dev",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.google.com/search?q=fake+portfolio",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "portfolio_hero.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/image.png", // Using a generic image
        },
        {
          id: 5,
          name: "PortfolioSketch.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/file/fake-portfolio-wireframe",
          position: "top-60 right-20",
        },
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
