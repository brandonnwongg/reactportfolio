export const config = {
  // loadingtitle: "Brandon's Portfolio",
  sections: [
    "Home",
    "Skills",
    "AcademicProjects",
    "PersonalProjects",
    "Contact",
  ],
  Home: {
    Text: "This website was developed with React.js, three-fiber, and framer-motion. For 3D Object Modelling, I used Blender, Avatar using Ready Player Me, and Avatar Animation using Mixamo. Source Code is available on my Personal Project Section :), also check out Wawa Sensei on youtube to learn! ",
  },

  Skills: {
    programmingLanguages: [
      { name: "JavaScript", level: 90, icon: "devicon-javascript-plain" },
      { name: "Python", level: 80, icon: "devicon-python-plain" },
      { name: "Java", level: 100, icon: "devicon-java-plain" },
      { name: "C#", level: 100, icon: "devicon-csharp-plain" },
      { name: "SQL", level: 70, icon: "devicon-mysql-plain" },
    ],
    tech: [
      { name: "Git", level: 100, icon: "devicon-git-plain" },
      { name: "Unity", level: 100, icon: "devicon-unity-plain" },
      { name: "Blender", level: 60, icon: "devicon-blender-original" },
      { name: "LaTex", level: 40, icon: "devicon-latex-original" },
      { name: "PyCharm", level: 80, icon: "devicon-pycharm-plain" },
      {
        name: "Visual Studio Code",
        level: 100,
        icon: "devicon-vscode-plain",
      },
    ],
    frameworksAndLibraries: [
      { name: "React", level: 100, icon: "devicon-react-original" },
      { name: "Node.js", level: 80, icon: "devicon-nodejs-plain" },
      { name: "Express", level: 80, icon: "devicon-express-original" },
      { name: "Three.js", level: 80, icon: "devicon-threejs-original" },
      { name: "three-fiber", level: 90, icon: "devicon-react-original" },
      { name: "Jupyter", level: 70, icon: "devicon-jupyter-plain" },
    ],
    languages: [
      { name: "English", level: 100 },
      { name: "Malay", level: 100 },
      { name: "German", level: 80 },
      { name: "Mandarin", level: 30 },
    ],
  },

  AcademicProjects: [
    {
      title: "Immersive VR Sketch",
      image: "images/projektstudium.png",
      clip: "clips/projektstudium.mp4",
      module: "Projektstudium",
      description:
        "VR multiplayer sketching tool with hand gesture input for immersive 3D drawing and collaboration.",
      link: "https://gitlab.rz.htw-berlin.de/s0583275/movement-based-interfaces",
    },
    {
      title: "Nosepad",
      image: "images/nui.png",
      clip: "clips/nui.mp4",
      module: "Natural User Interfaces",
      description:
        "Hands-Free Drawing Application that uses facial tracking for drawing and voice commands for button execution.",
      link: "https://github.com/buayanil/NosePad",
    },
    {
      title: "Covid Data Visualizer",
      image: "images/computergrafik.png",
      clip: "clips/computergrafik.mp4",
      module: "Computergrafik",
      description:
        "Visualized global COVID-19 data in 3D using Three.js and public APIs for real-time case tracking.",
      link: "https://github.com/brandonnwongg/CGKurteil",
    },
    {
      title: "Mitosis Identification",
      image: "images/bildverarbeitung.png",
      clip: "images/bildverarbeitung.png",
      module: "Medizinische Bildverarbeitung",
      description:
        "Cell mitosis detection algorithm in Jupyter Notebook for medical image analysis using preprocessing and classification",
      link: null,
    },
    {
      title: "improveBerlin",
      image: "images/webentwicklung.png",
      clip: "images/webentwicklung.png",
      module: "Webentwicklung",
      description:
        "Full-Stack Web Development with MERN for reporting places in Berlin that requires improvement.",
      link: "https://github.com/brandonnwongg/brandawid-WAD",
    },
    {
      title: "Heal Link",
      image: "images/sozialer.png",
      clips: "images/sozialer.png",
      module: "Entwicklung sozialer Anwendungen",
      description:
        "Social Media PLatform where users can share their health journeys.",
      link: "https://github.com/Abodx9/heal_link",
    },
    {
      title: "HouseTourVR",
      image: "images/emergingtechnologies.png",
      clip: "clips/emergingtechnologies.mp4",
      module: "Emerging Technologies",
      description:
        "Multiplayer VR experience enabling users to remotely tour and customize virtual home layouts in real time.",
      link: "https://github.com/brandonnwongg/housetourVR",
    },
    {
      title: "Mastermind",
      image: "images/se2.png",
      clip: "images/se2.png",
      module: "Software Engineering 2",
      description:
        "Mastermind console game with Python, with the focus on TTD and Quality Assurance.",
      link: "https://gitlab.rz.htw-berlin.de/s0580634/wise24-25_superhirn_22",
    },
  ],

  PersonalProjects: [
    {
      ptitle: "Portfolio",
      pdescription: "The project you are currently viewing!",
      pref: "https://github.com/brandonnwongg/reactportfolio",
      plink: "https://github.com/brandonnwongg/reactportfolio",
    },
    {
      ptitle: "(Currently in Development) ",
      pdescription:
        "A music recommendation tool that analyzes the tempo and energy of a given track to generate a curated playlist of songs with a similar vibe. ",
      pref: null,
      plink: null,
    },
  ],

  Contact: {
    contactname: "Brandon Wong",
    address: "Berlin, Germany",
    socials: {
      linkedin: "https://www.linkedin.com/in/wong-brandon1998/",
      github: "https://github.com/brandonnwongg",
      insta: "https://www.instagram.com/brandonnwongg/",
      cv: null,
    },
    mail: "wong_brandon@outlook.com",
  },
};
