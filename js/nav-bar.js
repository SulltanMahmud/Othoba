// Navbar jump
const navbar = document.getElementById("nav-container");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.top = "-90px";
    }
    setTimeout(function () {
      navbar.style.top = "0px";
      scrolled = true;
    }, 150);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
