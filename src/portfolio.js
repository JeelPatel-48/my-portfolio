import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Jeel Patel",
  title: "Hey all, I'm Jeel",
  subTitle: emoji(
    "A final-year CS student and Full Stack Developer skilled in building modern web applications using Java, JavaScript, React.js, Node.js, Express.js, and MongoDB."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qWY3eEq4tCG33NdslDHOH2DSCtUWcFP2/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  Github: "https://github.com/saadpasta",
  Linkedin: "https://www.linkedin.com/in/jeelpatel48/",
  Gmail: "pateljeel4448@gmail.com",
  LeetCode: "https://leetcode.com/u/JeelPatell/",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES BUILDING END-TO-END SOLUTIONS",
  skills: [
    emoji(
      "⚡ Full-stack development of web applications with React.js, Node.js, and Express.js"
    ),
    emoji("⚡ Backend development with Java and Spring Boot"),
    emoji("⚡ RESTful APIs, CRUD operations, and MongoDB/MySQL integration")
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "G H Patel College of Engineering & Technology",
      logo: require("./assets/images/gcetLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "Expected Graduation: 2026",
      descBullets: [
        "Gained strong proficiency in full-stack development, Java, Data Structures, and Web Technologies.",

        "Completed projects like Inventory Management System, Placement Portal, and IoT-based Health Monitoring.",

        "Participated in internships focused on Java, .NET, and Angular development.",
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/gtuLogo.png"),
      subHeader: "Diploma in Computer Engineering ",
      duration: "July 2020 - May 2023",
      descBullets: [
        "Built a strong foundation in programming, databases, computer networks, and hardware fundamentals.",

        "Developed mini-projects and participated in technical events.",

        "Introduced to hands-on coding and logical thinking early on.",
      ]
    },
    {
      schoolName: "Shri KSKP High School",
      logo: require("./assets/images/kskpLogo.png"),
      subHeader: "Diploma in Computer Engineering ",
      duration: "June 2019 - April 2020",
      descBullets: 
      [
        "Focused on core subjects like Mathematics, Science, and English.",

        "Performed well academically and set a solid base for future technical education.",
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Java Development Intern",
      company: "ShadowFox",
      companylogo: require("./assets/images/shadowLogo.png"),
      date: "May 2025 – May 2025",
      desc: "Selected for a Java development internship focused on building and maintaining backend systems.Will gain hands-on experience with Java frameworks such as Spring Boot and tools like Maven and Git."
    },
    {
      role: "Full Stack Developer (.NET & Angular)",
      company: "Tatvasoft",
      companylogo: require("./assets/images/tatvasoftLogo.png"),
      date: "May 2025 – June 2025",
      desc: "Built RESTful APIs, implemented CRUD operations, and integrated front-end with back-end.Gained exposure to Entity Framework and Git version control."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "KEY PROJECTS THAT SHOWCASE MY SKILLS",
  projects: [
    {
      image: require("./assets/images/imsLogo.png"),
      projectName: "Inventory Management System",
      projectDesc:
        "Built a full-stack grocery inventory app with real-time product tracking, stock alerts, user authentication, and CRUD operations.",
      footerLink: []
    },
    {
      image: require("./assets/images/pmsLogo.png"),
      projectName: "Placement Management System",
      projectDesc:
        "Campus platform to manage job postings, student registration, and application status with secure role-based access control.",
      footerLink: []
    },
    {
      image: require("./assets/images/iotLogo.png"),
      projectName: "IoT Based Health Monitoring System",
      projectDesc:
        "Used sensors to collect real-time health data and send it via microcontroller to doctors' dashboards for better health analytics.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications and accomplishments from personal and academic work",
  achievementsCards: [
    {
      title: "Full Stack Web Development",
      subtitle: "Apna College (2025)",
      image: require("./assets/images/acLogo.png"),
      imageAlt: "Apna College Logo",
      footerLink: []
    },
    {
      title: "Generative AI",
      subtitle: "Microsoft (2025)",
      image: require("./assets/images/mLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: []
    },
    {
      title: "Software Engineering",
      subtitle: "Tops Technologies (2020)",
      image: require("./assets/images/tpLogo.png"),
      imageAlt: "Tops Technologies Logo",
      footerLink: []
    },
    {
      title: "IoT360 Event Winner",
      subtitle: "Winner at IoT360 Tech Event",
      image: require("./assets/images/pwaLogo.png"),
      imageAlt: "Trophy",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I occasionally write about development insights, project experiences, and learnings.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I love to share my knowledge with the community"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I enjoy tech discussions and sharing my learning journey",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Got an opportunity or want to collaborate? Let's connect!",
  number: "",
  email_address: "pateljeel4448@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
