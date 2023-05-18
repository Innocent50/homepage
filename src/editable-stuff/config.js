// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Innocent ",
  middleName: "",
  lastName: "Nzimenyera",
  message: "Helping organizations in creating tailored data solutions that meet their specific requirements.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Innocent50",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/innocent-nzimenyera/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/INzimenyera1",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.png"),
  imageSize: 375,
  message:
    "My name is Innocent Nzimenyera, a data scientist currently pursuing a Masters of Information Technology with a specialization in Applied Machine Learning and Data Science at Carnegie Mellon University.I am passionate about embracing challenges and tackling projects that push the boundaries of my comfort zone and skill set. I am constantly learning new skills and development techniques, which benefit my growth and contribute to the organization's success. My proactive and innovative approach and self-motivation enable me to work effectively with minimal supervision.",
  resume: "https://drive.google.com/file/d/1C4vy09zT2mn-xtNGC-Bw_jBFUw3Q85I3/view",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Global Green Growth Institute, Data Analyst and Python Programmer Consultant',// Here Add Company Name
      companylogo: require('../assets/img/gggi.png'),
      date: 'June 2021 – Present',
    },
    {
      role: 'Rwanda Ministry of ICT and Innovation, Digital Ambassador',
      companylogo: require('../assets/img/minict3.png'),
      date: 'Sept 2019 – June 2021',
    },
    {
      role: 'National Bank of Rwanda, Intern',
      companylogo: require('../assets/img/bank.png'),
      date: 'Jun 2018 – Oct 2018',
    },
  ]
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Innocent50", //i.e."johnDoe12Gh"
  reposLength:4,
  specificRepos:["Anticipe ", "Learn-Python-for-ML", "Tesla-Price-prediction-", "indexsim-backup"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    {name: "R", value: 60 },
    { name: "Machine learning", value: 80 },
    { name: "Data Visualization", value: 75 },
    { name: "Data Wrangling and Preprocessing", value: 75 },
    { name: "Big Data Technologies", value: 65 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 60 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Continuous Learning", value: 90 },
    { name: "Communication and Collaboration", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:

    "If you have any inquiries, please don't hesitate to reach out to me via email at",
    email: "innocentnzime42@gmail.com"
};
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about,experiences,repos,skills, leadership, getInTouch};
