const logotext = 'N';
const meta = {
  title: 'Naveen R',
  description:
    "I'm Naveen, a technologist, technophile and MERN stack developer.",
};

const introdata = {
  title: "Hi, I'm Naveen",
  animated: {
    first: 'Technologist',
    second: 'Technophile',
    third: 'Web Developer',
    fourth: 'MERN stack developer',
    fifth: 'Cross Platform Developer',
    sixth: 'Programer',
    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    'An inquisitive mind surfing the waves of technology, blending creativity and curiosity to paint a unique portrait of the digital future.',
  your_img_url: 'https://i.ibb.co/WpNPxDr/me-removebg.webp',
};

const dataabout = {
  title: 'Who am I?',
  aboutme:
    'A dynamic Full Stack and Cross Platform Developer with expertise in MERN stack, React Native, Next.js, JavaScript, SQL, Git, Python,HTML, and CSS. Passionate about continuous learning and technology integration, I excel in creating robust, scalable applications with seamless user experiences. Proficient in server-side rendering, mobile development, and version control, I bring a versatile skill set to foster innovation. Committed to staying abreast of emerging technologies, I am poised to contribute to dynamic projects, leveraging technical and analytical skills to drive excellence and create impactful solutions.',
};
const worktimeline = [
  {
    jobtitle: 'Junior Software Developer',
    where: 'Inspire Clean Energy, Chennai',
    date: 'November 2023 – Present',
  },
  {
    jobtitle: 'Full Stack Web Developer Intern',
    where: 'EnterOT, Coimbatore',
    date: 'July 2023 – October 2023',
  },
  {
    jobtitle: 'VLSI Design and Verification - Internship',
    where: 'TESSOLVE, Coimbatore',
    date: 'December 2022 – June 2023',
  },
];

const skills = [
  // Programming Languages
  {
    group: 'Languages',
    name: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    group: 'Languages',
    name: 'TypeScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    group: 'Languages',
    name: 'Go',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
  {
    group: 'Languages',
    name: 'Python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  // Frontend Technologies
  {
    group: 'Frontend',
    name: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    group: 'Frontend',
    name: 'React Native',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    group: 'Frontend',
    name: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    group: 'Frontend',
    name: 'Angular',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  },
  {
    group: 'Frontend',
    name: 'Flutter',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    group: 'Frontend',
    name: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    group: 'Frontend',
    name: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },

  // Backend Technologies
  {
    group: 'Backend',
    name: 'EXPRESS.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    group: 'Backend',
    name: 'Nest.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  },
  // JavaScript Runtime
  {
    group: 'Backend',
    name: 'Node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    group: 'Backend',
    name: 'Bun',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg',
  },

  // Databases
  {
    group: 'Databases',
    name: 'PostgreSQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    group: 'Databases',
    name: 'MongoDB',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },

  // DevOps & Tools
  {
    group: 'DevOps & Tools',
    name: 'Docker',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    group: 'DevOps & Tools',
    name: 'Git',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    group: 'DevOps & Tools',
    name: 'Nginx',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
  {
    group: 'DevOps & Tools',
    name: 'Redis',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },

  // APIs & Communication
  {
    group: 'APIs & Communication',
    name: 'GraphQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    group: 'APIs & Communication',
    name: 'RabbitMQ',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
  },
  {
    group: 'APIs & Communication',
    name: 'Firebase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    group: 'APIs & Communication',
    name: 'Swagger',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
  },

  // Testing & Development Tools
  {
    group: 'Testing & Development Tools',
    name: 'Jest',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
];

const skillsGroups = [
  {
    name: 'Languages',
    skills: skills.filter((skill) => skill.group === 'Languages'),
  },
  {
    name: 'Frontend',
    skills: skills.filter((skill) => skill.group === 'Frontend'),
  },
  {
    name: 'Backend',
    skills: skills.filter((skill) => skill.group === 'Backend'),
  },
  {
    name: 'Databases',
    skills: skills.filter((skill) => skill.group === 'Databases'),
  },
  {
    name: 'DevOps & Tools',
    skills: skills.filter((skill) => skill.group === 'DevOps & Tools'),
  },
  {
    name: 'APIs & Communication',
    skills: skills.filter((skill) => skill.group === 'APIs & Communication'),
  },
  {
    name: 'Testing & Development Tools',
    skills: skills.filter(
      (skill) => skill.group === 'Testing & Development Tools'
    ),
  },
];
console.log(skillsGroups);

const dataportfolio = [
  {
    img: 'https://cdn.pixabay.com/photo/2014/10/17/11/53/blog-492184_640.jpg',
    description:
      'A tech blog built using Next.js where data is stored in Markdown format, created as part of a Next.js learning journey. Hosted using vercel and every new post has to be updated as markdown file .',
    link: 'https://blog-proj-eta.vercel.app/',
  },
  {
    img: 'https://img.freepik.com/free-photo/high-angle-indian-food-assortment_23-2148747704.jpg?t=st=1713268099~exp=1713271699~hmac=cd7f94f44b06cb631777c795258e66ab99f79c22391e3267dd5810663b1e1fcb&w=740',
    description:
      'A foodie community site hosted using vercel and built using Next.js and SQLite. This is part of a learning project built during my Next.js learning journey.',
    link: 'https://next-recipe-nine.vercel.app/',
  },
  {
    img: 'https://img.freepik.com/free-vector/erp-enterprise-resource-planning-isometric-poster-productivity-improvement-system-data-analysis-business-integration-concept-business-people-working-office-scenes-3d-line-art-banner_107791-5691.jpg?size=626&ext=jpg&ga=GA1.1.1558771660.1701606651&semt=sph',
    description:
      'A custom ERP built by EnterOT for a customer in the jewelry industry. It is used for data management and sales management.',
    link: '',
  },
  {
    img: 'https://img.freepik.com/free-vector/data-network-businessman_24908-57814.jpg?size=626&ext=jpg&ga=GA1.1.1558771660.1701606651&semt=ais',
    description:
      "Sam's Corner is a React application featuring a blog section and a weather application.",
    link: 'https://sams-corner-react.onrender.com/',
  },
  {
    img: 'https://img.freepik.com/free-vector/colorful-modern-resume-template_1152-117.jpg?size=626&ext=jpg&ga=GA1.1.1558771660.1701606651&semt=ais',
    description:
      'My Resume is a Capstone project showcasing the resume built using HTML, CSS, and JavaScript.',
    link: 'https://naveen2070.github.io/resume/',
  },
  {
    img: 'https://img.freepik.com/free-photo/ripening-fresh-leafy-greens-sustainable-crop-cultivation-certified-naturally-sprouted-up-locally-harvested-healthy-food-grown-as-organic-nutrient-vegan-source-rural-horticulture-greenhouse_482257-65983.jpg?size=626&ext=jpg&ga=GA1.1.1558771660.1701606651&semt=ais',
    description:
      'An IoT-based smart drip irrigation system using soil moisture and atmospheric temperature for automatic plant watering. It utilizes LoRa for short-range communication and Blynk for data visualization and long-range transmission.',
    link: '',
  },
  {
    img: 'https://img.freepik.com/free-vector/human-internal-organ-with-lungs_1308-108856.jpg?size=626&ext=jpg&ga=GA1.1.1558771660.1701606651&semt=ais',
    description:
      'LCDS is a CAD system used for detecting lung cancer using CT scans. It employs a Deep Learning-based classification method, with RESNET 50 as the classification model and Tkinter library for the GUI.',
    link: '',
  },
  {
    img: 'https://img.freepik.com/free-vector/phishing-account-concept_23-2148532228.jpg?size=626&ext=jpg&ga=GA1.1.1558771660.1701606651&semt=sph',
    description:
      'PHISTRAP is a web application for detecting phishing websites using Machine Learning. It utilizes the Random Forest algorithm for classification based on 16 features of a URL.',
    link: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'OERET is a mini project involving a bot built to monitor the ocean environment and act as an emergency transposer for shipwreck crews.',
    link: '',
  },
];

const contactConfig = {
  YOUR_EMAIL: 'naveenrameshcud@gmail.com',
  description: 'Looking forward to hearing from you!',
  YOUR_SERVICE_ID: 'service_04lb2r9',
  YOUR_TEMPLATE_ID: 'template_nvonvpl',
  YOUR_USER_ID: 'ErUJqSHmC_GNgt8v1',
};

const socialprofils = {
  github: 'https://github.com/Naveen2070',
  linkedin: 'https://www.linkedin.com/in/naveen-r-cud',
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skillsGroups,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
