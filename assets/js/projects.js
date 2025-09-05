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
      images: [
        "assets/images/chatlingo-1.png",
        "assets/images/chatlingo-2.png"
      ],
      description: `
        ChatLingo is a real-time translation chat application designed to bridge linguistic gaps and facilitate seamless communication across languages. 
        Built for mobile platforms (iOS and Android), our app empowers users to engage in meaningful conversations, regardless of their native language.
      `,
      components: `
        <ul>
          <li>React Native</li>
          <li>Pytorch</li>
          <li>Flask</li>
          <li>Firebase</li>
          <li>MarianMT</li>
        </ul>
      `,
      features: `
        <ul>
          <li>Real-time translation using MarianMT deep learning model</li>
          <li>Automatic langauge detection and switching</li>
          <li>Cross-platform Chat interface using react native</li>
          <li>Secure and Fast Communication using Firebase backend</li>
          <li>Flask API integration for translation model access</li>
          <li>User Authentication and Cloud Storage</li>
          <li>Clean and Responive UI</li>
        </ul>
      `,
      links: [
        { text: "GitHub", url: "https://github.com/arafi6624/ChatLingo" },
      ],
    },
    {
      id: "stockmarket",
      title: "Stock Market Forecasting",
      images: ["assets/images/stock-market-1.png"],
      description: `
        A machine learning project using recurrent neural networks to predict stock market trends. Compared the predictions of two models to see which would be better in this use case.
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
          <li>Used and compared Long Short-Term Memory and Gated Recurrent Unit models for my predictions</li>
        </ul>
      `,
    },
    {
      id: "stringmatcher",
      title: "Exact String Matcher",
      images: ["assets/images/string-matcher-1.png"],
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
          <li>Built using react to demo the algorithms</li>
          <li>Compared Naive, Rabin-Karp, and Finite Automation string matching algorithms</li>
          <li>Highlighted the pattern and showed the indices they were found at</li>
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
      images: ["assets/images/2fastthumbs-1.png"],
      description: `
        Final project for my software design laboratory class. I worked with 2 other classmates to create an Android texting speed test app. Created algorithms to calculate the words per minute
        and accuracy of the text.
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
          <li>Showed Words per minute based on the amount of characters typed</li>
          <li>Showed your accuracy of how close your text was to the given one</li>
          <li>Didn't let you continue if your text doesn't match</li>
        </ul>
      `,
      links: [
        { text: "GitHub", url: "https://github.com/2FastThumbs/2FastThumbs" },
      ],
    },
    {
      id: "shiftregister",
      title: "CMOS Shift Register",
      images: [
        "assets/images/shift-register-1.png",
        "assets/images/shift-register-2.png",
        "assets/images/shift-register-3.png",
        "assets/images/shift-register-4.png",
        "assets/images/shift-register-5.png"

      ],
      description: `
        Final Lab for my Digital Integrated Circuits class where I designed and simulated a layout and schematic for a CMOS 4-Bit Shift Register using D flip-flops implemented with transmission
        gates. Verified performance through schematic and layout design, extracting parasitics, and analyzing delays, power dissipation, and chip area across multiple CAD tools
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
          <li>Transmission-gate based D flip-flops in master-slave configuration</li>
          <li>Complete 4-bit shift register schematic and layout with DRC checks</li>
          <li>LTSpice and IRSIM simulations for functional verification</li>
          <li>Performance comparison of schematic vs layout (delays, rise/fall times, power)</li>
        </ul>
      `,
    },
    {
      id: "addersubtractor",
      title: "Adder/Subtractor FPGA Circuit",
      images: [
        "assets/images/adder-subtractor-1.png",
        "assets/images/adder-subtractor-2.png",
        "assets/images/adder-subtractor-3.png",
        "assets/images/adder-subtractor-4.png",
        "assets/images/adder-subtractor-5.png"
      ],
      description: `
        Final Lab for my Computer Organization Class where I designed and simulated a digital computational circuit using LPM modules. The design included a 32-bit SRAM and an
        adder/subtractor circuit, tested through ModelSim to demonstrate addition, subtraction, cumulative operations, and overflow detection.
      `,
      components: `
        <ul>
          <li>Intel API</li>
          <li>Quartus</li>
          <li>ModelSim</li>
          <li>MATLAB</li>
        </ul>
      `,
      features: `
        <ul>
          <li>32-bit single-port SRAM with initialization file</li>
          <li>Adder/Subtractor with overflow detection</li>
          <li>Demultiplexer and 2-tooooo-1 Multiplexer integration</li>
          <li>Cumulative addition and subtraction support</li>
          <li>Testbench with waveform simulations</li>
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