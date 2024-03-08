/* =========================== Typing Animation =========================== */
let options = {
  strings: ["Web Developer", "Programmer", "Curious Learner", "Sportsman", "Teacher", "Army Brat"],
  typeSpeed: 60,
  backSpeed: 20,
  loop: true,
};

let typed = new Typed(".typing", options);

const navElems = document.querySelectorAll("ul.nav > li > a");
const asideMenu = document.querySelector(".aside");
const navToggler = document.querySelector(".nav-toggler");

/* =========================== Nav Toggler =========================== */
navToggler.addEventListener("click", () => {
  asideMenu.classList.toggle("nav-hidden");
});

/* =========================== Active Navigators  =========================== */
navElems.forEach((el) => {
  el.addEventListener("click", () => {
    navElems.forEach((e) => {
      if (el != e && e.classList.contains("active")) {
        e.classList.remove("active");
      } else if (el == e && e.classList.contains("active")) {
        e.classList.remove("active");
      } else if (el == e && !e.classList.contains("active")) {
        e.classList.add("active");
      }
    });
    asideMenu.classList.add("nav-hidden");
    if (window.screen.availWidth >= 1199) {
      asideMenu.classList.remove("nav-hidden");
    }
  });
});

/* =========================== Making Navigation Aside Bar Responsive =========================== */
window.addEventListener("resize", (e) => {
  if (e.currentTarget.screen.availWidth >= 1199 && asideMenu.classList.contains("nav-hidden")) {
    asideMenu.classList.remove("nav-hidden");
  }
  if (e.currentTarget.screen.availWidth < 1199 && !asideMenu.classList.contains("nav-hidden")) {
    asideMenu.classList.add("nav-hidden");
  }
});
window.addEventListener("click", (e) => {
  if (window.screen.availWidth < 1199 && e.clientX > 270 && !asideMenu.classList.contains("nav-hidden")) {
    asideMenu.classList.add("nav-hidden");
  }
});
window.addEventListener("load", () => {
  if (window.screen.availWidth < 1199) {
    asideMenu.classList.add("nav-hidden");
  }
});
