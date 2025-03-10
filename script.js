const menuToggle = document.querySelector(".menu__toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    nav.classList.remove("active");
  }
});
