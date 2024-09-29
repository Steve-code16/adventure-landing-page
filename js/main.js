const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
const sliderBtns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const mainText = document.querySelectorAll(".content");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

const sliderNav = (manual) => {
  sliderBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  mainText.forEach((content) => {
    content.classList.remove("active");
  });

  sliderBtns[manual].classList.add("active");
  slides[manual].classList.add("active");
  mainText[manual].classList.add("active");
};

sliderBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
