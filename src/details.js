// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import VRIAOLogo from './assets/company_logo/vraio-logo-01.svg';

// Education Section Logo's
import school from './assets/education_logo/school_profile.webp';
import collage from './assets/education_logo/collage.png';
import diploma from './assets/education_logo/diploma.png';
import engineering from './assets/education_logo/mite-logo.svg';

// Project Section Logo's
import taskmanagement from './assets/work_logo/taskmanagement.png';
import codeEditor from './assets/work_logo/codeEditor.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    //   { name: 'TypeScript', logo: typescriptLogo },
    //   { name: 'Python', logo: pythonLogo },
    //   { name: 'C', logo: cLogo },
    //   { name: 'C++', logo: cppLogo },
    //   { name: 'Java', logo: javaLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: VRIAOLogo,
      role: "Web Developer",
      company: "Vraio Software Solution",
      date: "Feb 2025 - May 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling  frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: engineering,
      school: "Mangalore Institute of Technology & Engineering",
      date: "Feb 2022 - May 2025",
      grade: "6.7 CGPA",
      desc: "I have completed my Bachelor's degree in Computer Science and Engineering (CSE) from MITE College. During my time at MITE, I gained a strong foundation in computer science principles, software development, and problem-solving techniques. I studied courses such as Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Web Technologies, and Software Engineering. Alongside academics, I actively participated in workshops, technical fests, and coding events, which helped me sharpen my practical skills and expand my knowledge. My experience at MITE College has been crucial in building my technical expertise and preparing me for a successful professional career.",
      degree: "Bachelor of Computer Science and Engineering - BE",
    },
    {
      id: 1,
      img: diploma,
      school: "R.N.Shetty Rural Polytechnic, Murudeshwar",
      date: "Sept 2018 - Aug 2021",
      grade: "56%",
      desc: "I have completed my Diploma in Electrical and Electronics Engineering (EEE) from R.N. Shetty Rural Polytechnic, Murudeshwar. During my time at R.N. Shetty, I developed a solid foundation in electrical circuits, electronics, and engineering principles. I studied courses such as Electrical Machines, Power Systems, Control Systems, Digital Electronics, and Microprocessors. Along with academics, I actively engaged in practical lab sessions and technical activities that strengthened my problem-solving and analytical skills. My diploma journey at R.N. Shetty Rural Polytechnic played a vital role in building my technical knowledge and laid the groundwork for my further studies and professional growth.",
      degree: "Diploma in Electrical and Electronics Engineering- EEE ",
    },
    {
      id: 2,
      img: collage,
      school: "Siddhartha Pre-University College Bhatkal",
      date: "Apr 2015- March 2017",
      grade: "55%",
      desc: "I completed my class 12 education from Siddhartha Pre-University College Bhatkal, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science ",
    },
    {
      id: 3,
      img: school,
      school: "Janata Vidhyalaya School murudeshawra, Bhatkal",
      date: "Apr 2014 - March 2015",
      grade: "68.16%",
      desc: "I completed my class 10 education from Janata Vidhyalaya School, murudeshawra, under the CBSE board.",
      degree: "CBSE-10th",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Employee Task Management System",
      description:
        "A robust React.js Employee Task Management System featuring separate dashboards for Admin and Employees. Admins can create and assign tasks, track progress, and monitor completed, pending, or failed tasks. Employees can view and update their tasks seamlessly, ensuring efficient task management and clear accountability. DEMO--(ADMIN-LOG->admin@123.com(pass-123) and USER-LOG->amit@123.com(pass-123)",
      image: taskmanagement,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Tailwind"],
      github: "https://github.com/Ganeshmurdeshwarr/Employee-Task-Management-System",
      webapp: "http://employeetaskmanagementsystem.vercel.app",
    },
  
    {
      id: 1,
      title: "Code Editor",
      description:
        "A simple web-based code editor built with React, CodeMirror 6, TailwindCSS, and Vite.It allows you to write HTML, CSS, and JavaScript in separate editor panels and preview the live output in real-time inside an iframe (with a 500ms debounce to avoid excessive refresh).",
      image: codeEditor,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Tailwind","Codemirror6"],
      github: "https://github.com/Ganeshmurdeshwarr/Code-Edditer",
      webapp: "http://jscode-editor.vercel.app",
    },
  
  ];  