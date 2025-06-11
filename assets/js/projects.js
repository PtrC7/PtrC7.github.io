function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
}

// Projects page
const projects = [
    {
      id: "chatlingo",
      title: "ChatLingo",
      images: ["assets/images/chatlingo.png"],
      description: `
        Capstone Project where we developed a real-time translation chat application using React Native, Pytorch, and Flask frameworks to ensure seamless integrations.
      `,
      components: `
        <ul>
          <li>React Native</li>
          <li>Pytorch</li>
          <li>Flask</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Real-time translation</li>
          <li>Cross-platform compatibility</li>
        </ul>
      `,
      links: [
        { text: "GitHub", url: "https://github.com/arafi6624/ChatLingo" },
      ],
    },
    {
      id: "stockmarket",
      title: "Stock Market Forecasting",
      images: ["assets/images/stock-market.png"],
      description: `
        A machine learning project using recurrent neural networks to predict stock market trends.
      `,
      components: `
        <ul>
          <li>Python</li>
          <li>Pytorch</li>
          <li>Recurrent Neural Networks</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Accurate predictions based on historical data</li>
          <li>Visualization of stock trends</li>
        </ul>
      `,
    },
    {
      id: "stringmatcher",
      title: "Exact String Matcher",
      images: ["assets/images/stringmatcher.png"],
      description: `
        Final project for my algorithm class. Used React to create a website implementing different string matching algorithms to see which is more efficient.
      `,
      components: `
        <ul>
          <li>React</li>
          <li>JavaScript</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Demo available online</li>
          <li>GitHub repository for source code</li>
        </ul>
      `,
      links: [
        { text: "Demo", url: "https://ccnyalgo.github.io/string-matcher/" },
        { text: "GitHub", url: "https://github.com/CCNYAlgo/string-matcher/" },
      ],
    },
    {
      id: "2fastthumbs",
      title: "2FastThumbs",
      images: ["assets/images/2fastthumbs.png"],
      description: `
        Final project for my software design laboratory class. I worked with 2 other classmates to create an Android texting speed test app.
      `,
      components: `
        <ul>
          <li>Android</li>
          <li>Java</li>
          <li>Kotlin</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Fun and interactive texting speed test</li>
          <li>Available on GitHub</li>
        </ul>
      `,
      links: [
        { text: "GitHub", url: "https://github.com/2FastThumbs/2FastThumbs" },
      ],
    },
    {
      id: "shiftregister",
      title: "CMOS Shift Register",
      images: ["assets/images/shift-register.png"],
      description: `
        Final Lab for my Digital Integrated Circuits class where I designed and simulated a layout and schematic for a CMOS 4-Bit Shift Register using various CAD tools such as Electric, LTSPICE, IRSIM, and Pathwave ADS.
      `,
      components: `
        <ul>
          <li>Electric</li>
          <li>LTSPICE</li>
          <li>IRSIM</li>
          <li>Pathwave ADS</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Accurate simulation of CMOS circuits</li>
          <li>CAD tools for layout and schematic design</li>
        </ul>
      `,
    },
    {
      id: "addersubtractor",
      title: "Adder/Subtractor FPGA Circuit",
      images: ["assets/images/adder-subtractor.png"],
      description: `
        Final Lab for my Computer Organization Class where I utilized LPM modules to design and simulate digital computational circuits on a virtual FPGA board based on Intel API.
      `,
      components: `
        <ul>
          <li>Intel API</li>
          <li>Quartus</li>
          <li>MATLAB</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Efficient FPGA design</li>
          <li>Simulation of computational circuits</li>
        </ul>
      `,
    },
    {
      id: "digitalclock",
      title: "Digital Clock",
      images: [
        "assets/images/digital-clock-1.gif",
        "assets/images/digital-clock-2.png",
        "assets/images/digital-clock-3.png",
      ],
      description: `
        Final Lab for my EE Lab 1 class. Here I designed and implemented a 24-hour
        digital clock on a breadboard using various integrated circuits, seven-segment displays, and logic gates.
      `,
      components: `
        <ul>
          <li>Breadboard to build and test the circuit</li>
          <li>BCD counters to track hours, minutes, and seconds</li>
          <li>BCD to seven-segment drivers to display numerical values</li>
          <li>Seven-segment displays to display hours (0-23), minutes (0-59), and seconds (0-59)</li>
          <li>A function generator to simulate the real-time clock behavior for testing</li>
        </ul>
      `,
      features: `
        <ul>
          <li>By utilizing ripple cascading, we ensure the automatic transitions between seconds, minutes, and hours</li>
          <li>By analyzing the clock's power consumption, we estimated that the clock would run for 5 hours on a 9V battery</li>
        </ul>
      `,
    },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const projectContentImage = document.querySelector(".project-image");
    const projectContentText = document.querySelector(".project-text");
  
    // Function to load project details based on URL parameter
    function loadProjectDetails() {
      const urlParams = new URLSearchParams(window.location.search);
      const projectId = urlParams.get("id");
  
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        // Load images
        projectContentImage.innerHTML = project.images
          .map((img) => `<img src="${img}" alt="${project.title}" loading="lazy">`)
          .join("");
  
        // Load text content
        let linksHTML = "";
        if (project.links) {
          linksHTML = project.links
            .map(
              (link) =>
                `<a href="${link.url}" class="btn" target="_blank">${link.text}</a>`
            )
            .join(" ");
        }
  
        projectContentText.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <h3>Components</h3>
          ${project.components}
          <h3>Features</h3>
          ${project.features}
          ${linksHTML}
          <button class="btn" onclick="goBack()">Back</button>
        `;
      } else {
        projectContentText.innerHTML = `<p>Project not found.</p>`;
      }
    }
  
    // Function to go back to the projects list
    window.goBack = function () {
      window.location.href = "index.html#projects";
    };
  
    // Load project details
    loadProjectDetails();
    loadNavbar();
  });