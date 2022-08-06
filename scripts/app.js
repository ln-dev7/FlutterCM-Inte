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
