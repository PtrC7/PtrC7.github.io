// navbar
function loadNavbar() {
  fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar').innerHTML = data;
      });
}

// Skills
const skills = [
  { name: "Java", icon: "assets/icons/icons8-java.svg" },
  { name: "C++", icon: "assets/icons/icons8-c++.svg" },
  { name: "Python", icon: "assets/icons/icons8-python.svg" },
  { name: "Android", icon: "assets/icons/icons8-android-os.svg" },
  { name: "HTML5", icon: "assets/icons/icons8-html-5.svg" },
  { name: "CSS3", icon: "assets/icons/icons8-css3.svg" },
  { name: "JavaScript", icon: "assets/icons/icons8-javascript.svg" },
  { name: "React", icon: "assets/icons/icons8-react-js.svg" },
  { name: "Git", icon: "assets/icons/icons8-git.svg" },
];

function loadSkills() {

  const skillsWrapper = document.querySelector(".skills-wrapper");

  skills.forEach((skill) => {
    const skillIcon = document.createElement("img");
    skillIcon.src = skill.icon;
    skillIcon.alt = skill.name;
    skillIcon.loading = "lazy";
    skillIcon.classList.add("icon", "icon-card");

    skillsWrapper.appendChild(skillIcon);
  });
};

// Projects
const projects = [
  {
    id: "chatlingo",
    title: "ChatLingo",
    image: "assets/images/chatlingo.png",
    description: "React Native, Pytorch, Flask",
    links: [
      { text: "GitHub", url: "https://github.com/arafi6624/ChatLingo" },
    ],
  },
  {
    id: "stockmarket",
    title: "Stock Market Forecasting",
    image: "assets/images/stock-market.png",
    description: "Pytorch, Recurrent Neural Networks",
    links: [
      { text: "GitHub", url: "https://github.com/PtrC7/stock_market_forecasting", },
    ],
  },
  {
    id: "stringmatcher",
    title: "Exact String Matcher",
    image: "assets/images/stringmatcher.png",
    description: "React, JavaScript",
    links: [
      { text: "Demo", url: "https://ccnyalgo.github.io/string-matcher/" },
      { text: "GitHub", url: "https://github.com/CCNYAlgo/string-matcher/" },
    ],
  },
  {
    id: "2fastthumbs",
    title: "2FastThumbs",
    image: "assets/images/2fastthumbs.png",
    description: "Android, Java, Kotlin",
    links: [
      { text: "GitHub", url: "https://github.com/2FastThumbs/2FastThumbs" },
    ],
  },
  {
    id: "shiftregister",
    title: "CMOS Shift Register",
    image: "assets/images/shift-register.png",
    description:
      "Electric, LTSPICE, IRSIM, Pathwave ADS",
    links: [],
  },
  {
    id: "addersubtractor",
    title: "Adder Subtractor FPGA Circuit",
    image: "assets/images/adder-subtractor.png",
    description: "Intel API, Quartus, MATLAB",
    links: [],
  },
  {
    id: "digitalclock",
    title: "Digital Clock",
    image: "assets/images/digital-clock-1.gif",
    description: "Integrated Circuits, Logic Gates, Arduino",
    links: [],
  },
];

function loadProjects() {

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-container", "project-card");

    let linksHTML = "";
    project.links.forEach((link) => {
      linksHTML += `<a href="${link.url}" class="btn">${link.text}</a> `;
    });

    projectCard.innerHTML = `
      <a href="projects.html?id=${project.id}">
        <img src="${project.image}" alt="${project.title}" loading="lazy" class="project-pic">
        <h3 class="project-title">${project.title}</h3>
        <hr class="project-separator">
      </a>
      <p class="project-details">
        <b>Made With:</b> ${project.description}<br>
        ${linksHTML}
      </p>
    `;

    projectsContainer.appendChild(projectCard);
  });
};


// dynamic loading of navbar and projects
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  loadSkills();
  loadProjects();
});


