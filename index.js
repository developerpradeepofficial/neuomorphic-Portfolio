const nav = document.getElementById("nav");
const navItems = document.querySelectorAll(".nav li a");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", (e) => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

nav.addEventListener("click", (e) => {
  const target = e.target;
  let childNodes = navItems.childNodes;
  console.log(childNodes);
  navItems.forEach((item) => {
    item.childNodes[0].classList.remove("segment--box");
  });
  target.childNodes[0].classList.add("segment--box");
});

// Theme Switch
const cssLink = document.getElementById("theme");
const themeSwitch = document.getElementById("slider");
themeSwitch.addEventListener("click", (e) => {
  switchTheme(e);
});
function switchTheme(e) {
  if (themeSwitch.checked == true) {
    cssLink.setAttribute("href", "./dark-theme.css");
  } else {
    cssLink.setAttribute("href", "");
  }
}

// Projects Section Toggles
const optionContainer = document.querySelector(".options");
const options = document.querySelectorAll(".options .option");

optionContainer.addEventListener("click", (e) => {
  options.forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
});

//  Scrool Animations
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Load Animation

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.opacity = 0;
    document.querySelector("#loader").style.opacity = 1;
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.opacity = 1;
  }
};
