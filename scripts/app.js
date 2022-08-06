// ----------------------------------------------------------------------------
const loader = document.querySelector("#loader");
window.addEventListener("load", () => {
  loader.classList.add("loaded");
});
// ----------------------------------------------------------------------------
const menuClose = document.querySelector(".menu-close");
const menuOpen = document.querySelector(".header-left-menu");
const menu = document.querySelector(".menu");

menuOpen.addEventListener("click", () => {
  menu.classList.add("menu-open");
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
// ----------------------------------------------------------------------------
