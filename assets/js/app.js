// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Hamburger menu function
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
  
  // Close hamburger menu when a link is clicked
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.remove("show");
    })
  );
  