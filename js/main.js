const menu = document.getElementById("menu");
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu__btn");
const menuClose = document.getElementById("menu__icon--close");
const menuOpen = document.getElementById("menu__icon--open");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuClose.classList.toggle("active");
  menuOpen.classList.toggle("active");
});
