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

const education = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Carnegie Mellon University, Msc of Science in Information Technology specialization in Applied Machine Learning and Data Science',// Here Add Company Name
      companylogo: require('../assets/img/cmu.png'),
      date: 'Aug 2022 – Jun 2024',
    },
    {
      role: 'University of Rwanda, Bsc of Science in Computer Science',
      companylogo: require('../assets/img/unrwanda.png'),
      date: 'Sept 2015 – Nov 2019',
    },
  ]
}


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
  specificRepos:[],
};

//Leadership SECTION
const leadership = {
  show: true,
  heading: "Portfolio",
  message:
    "With expertise spanning data visualization to state-of-the-art machine learning modeling, I possess a comprehensive skill set that encompasses the entire data science pipeline. I invite you to explore some public examples of data science projects I have undertaken in recent years. Simply click on the respective image to delve deeper into each project and learn more about its details.",
  images: [
    { 
      img: require("../editable-stuff/ggindex.png"), 
      link: "https://gggi-simtool-demo.herokuapp.com/",
      paragraph: "Global Green Growth Index and Simulation tools." 
    },
    { 
      img: require("../editable-stuff/zambiaindex.png"), 
      link: "https://zambia-greengrowthindex.gggi.org/",
      label: "Second slide label", 
      paragraph: "Zambia Green Growth Index" 
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// Render the leadership object
const renderedImages = leadership.images.map((image) => `
  <a href="${image.link}" target="_blank">
    <img src="${image.img}" alt="${image.label}" width="${leadership.imageSize.width}" height="${leadership.imageSize.height}">
  </a>
  <p>${image.paragraph}</p>
`).join("");

const renderedLeadership = `
  <div>
    <h2>${leadership.heading}</h2>
    <p>${leadership.message}</p>
    ${renderedImages}
  </div>
`;

console.log(renderedLeadership);


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

export { navBar, mainBody, about,education,experiences,repos,skills,leadership,getInTouch,renderedLeadership};
