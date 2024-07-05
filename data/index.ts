import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Decentralised community service for Artists",
    description: "Keeping updated;",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SplitSmarty",
    des: "A one-stop web application for managing group expenses like bill splitting",
    img: "/images/splitsmarty.png",
    iconLists: ["/re.svg", "/sequelize.svg", "/nodejs.svg", "/express.svg"],
    link: "https://github.com/komalgt13/SplitSmarty",
  },
  {
    id: 2,
    title: "CogniCare",
    des: "Early stage Alzheimer's Detection using NLP and Speech transcripts.",
    img: "/images/cognicare.png",
    iconLists: ["/re.svg", "/py.svg", "/scikitlearn.svg", "/ai.svg"],
    link: "https://github.com/42bismuth/Alzheimer-Detection",
  },
  {
    id: 3,
    title: "enCrypto",
    des: "A cryptocurrency marketplace to visualise and compare the coin market",
    img: "/images/encrypt.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.svg", "/nodejs.svg"],
    link: "https://github.com/sanjana-19o8/enCrypt-ReactApp",
  },
  {
    id: 4,
    title: "FarmDidi",
    des: "Ethereum integrated supply-chain managment app for mango farmers",
    img: "/images/farmdidi.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/solidity.svg", "hardhat.svg"],
    link: "https://github.com/sanjana-19o8",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Design",
    className: "md:col-span-2",
    desc: "Designing websites that are visually appealing and user-friendly. I aim to create layouts that enhance user experience and communicate your brand’s message effectively.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web3/Smart Contract Development",
    className: "md:col-span-2",
    desc: "Developing secure and efficient smart contracts for blockchain applications. I look to ensure seamless integration and reliable performance on your blockchain platform.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Development",
    className: "md:col-span-2",
    desc: "Creating solid and scalable backend systems for your applications. I focus on providing backend solutions that improve performance, security, and reliability.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Development",
    desc: "Developing software solutions tailored to your needs. I work on creating applications that are scalable, secure, and perform well, helping to support your business goals.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const skills = [
  {
    id: 1,
    name: "ReactJs",
    img: "/re.svg",
    nameImg: "",
  },
  {
    id: 2,
    name: "NextJS",
    img: "/next.svg",
    nameImg: "",
  },
  {
    id: 3,
    name: "MaterialUI",
    img: "/mui.svg",
    nameImg: "",
  },
  {
    id: 4,
    name: "NodeJs",
    img: "/nodejs.svg",
    nameImg: "/nodejsName.svg",
  },
  {
    id: 5,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "",
  },
  {
    id: 6,
    name: "SequelizeORM",
    img: "/sequelize.svg",
    nameImg: "",
  },
  {
    id: 7,
    name: "Prisma",
    img: "/prisma.svg",
    nameImg: "",
  },
  {
    id: 8,
    name: "SQL",
    img: "/mysql.svg",
    nameImg: "/mysqlName.svg",
  },
  {
    id: 9,
    name: "Solidity",
    img: "/solidity.svg",
    nameImg: "",
  },
  {
    id: 10,
    name: "HardHat",
    img: "/hardhat.svg",
    nameImg: "",
  },
  {
    id: 11,
    name: "Mocha",
    img: "/mocha.svg",
    nameImg: "",
  },
  {
    id: 12,
    name: "Redux",
    img: "/redux.svg",
    nameImg: "",
  },
  {
    id: 13,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 14,
    name: "Google Cloud",
    img: "/gcp.svg",
    nameImg: "",
  },
  {
    id: 15,
    name: "FastAPI",
    img: "/fastapi.svg",
    nameImg: "",
  },
  {
    id: 15,
    name: "Firebase",
    img: "/firebase.svg",
    nameImg: "",
  },
  {
    id: 16,
    name: "Figma",
    img: "/figma.svg",
    nameImg: "",
  },
  {
    id: 17,
    name: "Canva",
    img: "/canva.svg",
    nameImg: "",
  },
];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Engineer Intern",
//     desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//   },
// ];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sanjana-19o8",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/sanjanaTww",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanjana-vajr",
  },
];