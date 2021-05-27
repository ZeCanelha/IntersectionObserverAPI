const header = document.querySelector("header");
const button = document.querySelector(".top-btn");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      button.classList.add("visible");
    } else {
      header.classList.remove("nav-scrolled");
      button.classList.remove("visible");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const video = document.querySelector("video");
const videoOptions = {
  threshold: 1,
};
let isPaused = false;

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio != 1 && !video.paused) {
      video.pause();
      isPaused = true;
    } else if (isPaused) {
      video.play();
      isPaused = false;
    }
  });
}, videoOptions);

videoObserver.observe(video);
