import logos from "./logos";

type ProjectName =
  | "thisWebsite"
  | "tripAdvisor"
  | "ecommerceDashboard"
  | "disneyClone"
  | "MatrixDAO";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  thisWebsite: {
    title: "Portfolio-V2",
    description: [
      "My portfolio website build with **React** using **Next.js** framework.",
      "The source code is writtin in **100% TypeScript** and the project is easy to maintain with the **type safety** provided by Typescript. The source code is very **moduler** allowing easy **debugging.**",
      "Styling is done using **Material-UI**, the website comes with two **themes, dark and light.**",
      "Animations are done using two libraries, **react-spring** for the bouncy logo animations, and **framer-motion** for page transitions.",
      "**next/image** which is a new Next.js 10 feature is being used to automatically resize images according to display and also **prevent html elements shifting** from slow loading images.",
      "This description is typed as **markdown** in source code, the Project component takes in props for links, icons, title, images, etc; nothing is hard coded.",
    ],
    links: {
      live: "https://brucewang.site",
      github: "https://github.com/BruceWangyq/Bruce-Portfolio-V2",
    },
    stack: [
      logos.typescript,
      logos.nextjs,
      logos.react,
      logos.materialui,
      logos.reactSpring,
      logos.framerMotion,
    ],
    images: {
      main: {
        link: "/project/portfolio/main.jpg",
        width: 859,
        height: 509,
      },
    },
  },

  MatrixDAO: {
    title: "MatrixDAO",
    description: [
      "MatrixDAO is a Decentralized Autonomous Organization which built for Matrix movie lovers which deployed on Ethereum Rinkeby Test Network.",
      "People can log in with their metamask wallet and mint their membership NFT for MatrixDAO, and people can receive MatrixDAO governance token **MTX** from airdroping. People can vote their proposal to utilize their treasury.",
      "Built  MatrixDAO with **thirdweb.js** and **ethers.js** and smart contracts.",
      "The frontend is built using **React JS** and styled using **Tailwindcss** .",
      "If you wish to test this project, please feel free to login in with your metamask on Rinkeby, no gas fee will be needed.",
    ],
    stack: [logos.react, logos.ethers, logos.solidity],
    links: {
      github: "https://github.com/BruceWangyq/MatrixDao",
      live: "https://buildspace-dao-starter.brucewang9.repl.co/",
    },
    images: {
      poster: "/project/matrixdao/matrixdao.jpg",
      mp4: "/project/matrixdao/disneyclonemp4.mp4",
      webm: "/project/matrixdao/matrixdaowebm.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },

  disneyClone: {
    title: "Disney+ Clone",
    description: [
      "Built Disney+ Clone with **TMDB API** wtih **Google account's Sign-in** feature",
      "The frontend is built using **Next JS** and styled using **Tailwindcss** .",
      "The app is integrated TMDB's Popular Movies and Shows, Top Rated Movies and Shows. You can also check every movies or shows' trailer. ",
      "If you wish to test this project, please feel free to login in with your google account, no privacy information will be shared.",
    ],
    stack: [logos.nextjs, logos.tailwindcss, logos.firebase, logos.redux],
    links: {
      github: "https://github.com/BruceWangyq/disney-clone",
      live: "https://disney-clone-pied.vercel.app",
    },
    images: {
      poster: "/project/disney-clone/disneyclone.jpg",
      mp4: "/project/disney-clone/disneyclonemp4.mp4",
      webm: "/project/disney-clone/disneyclonewebm.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  tripAdvisor: {
    title: "Trip Advisor App",
    description: [
      "Built and deployed an advanced Travel Companion Application which user can search restaurants, hotels and attractions anywhere on the world with **React JS** and **Material UI**. ",
      "Integrated with **Google Maps API**, **Geolocation**, **Trip Advisor API**, Searching for places, .",
      "Fetched restaurants, hotels and attractions data based on location from specialized **Rapid APIs**, **data filtering**. ",
    ],
    stack: [logos.react, logos.materialui, logos.sass],
    links: {
      github: "https://github.com/BruceWangyq/trip-advisor",
      live: "https://ecstatic-curran-d1b270.netlify.app/",
    },
    images: {
      poster: "/project/trip-advisor/trip-advisor.jpg",
      mp4: "/project/trip-advisor/trip-advisor-mp4.mp4",
      webm: "/project/dtrip-advisor/trip-advisor-mp4.webm",
      vidHeight: 958,
      vidWidth: 1916,
    },
  },
  ecommerceDashboard: {
    title: "E-commerce Dashboard",
    description: [
      "Created a fully responsive dashboard website with great styled and reusable UI components. ",
      "Built by **React JS**, **React Hooks**, **React Router** and **Material UI**.",
    ],
    stack: [logos.react, logos.materialui, logos.sass],
    links: {
      github: "https://github.com/BruceWangyq/Bruce-Dashboard",
      live: "https://bruce-dashboard.netlify.app/",
    },
    images: {
      main: {
        link: "/project/ecommerce-dashboard/post.jpg",
        width: 1273,
        height: 673,
      },
    },
  },
};

export default projects;
