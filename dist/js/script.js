//hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//navbar
window.onscroll = function () {
  const head = document.querySelector("header");
  const fixedNav = head.offsetTop;

  if (window.pageYOffset > fixedNav) {
    head.classList.add("navbar-fixed");
  } else {
    head.classList.remove("navbar-fixed");
  }
};
