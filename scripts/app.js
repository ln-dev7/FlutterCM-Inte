// Menu burger
const headerMenu = document.querySelector(".header-menu");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const headerOverlay = document.querySelector(".header-overlay");

menuOpen.addEventListener("click", function () {
  setTimeout(function () {
    headerMenu.classList.add("show");
  }, 100);
  headerOverlay.classList.add("show");
});
menuClose.addEventListener("click", function () {
  headerMenu.classList.remove("show");
  setTimeout(function () {
    headerOverlay.classList.remove("show");
  }, 300);
});

// Animation au scroll

const ratio = 0.1;
var options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

var observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
