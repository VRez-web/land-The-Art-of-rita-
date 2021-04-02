// фаил со всеми основными переменными
const bgItems = document.querySelectorAll(".slide-bg__link"),
  imageSlides = document.querySelectorAll(".slide-bg__inner"),
  shapes = document.querySelectorAll(".shapes__content"),
  shapeSlides = document.querySelectorAll(".shapes__item"),
  helperInput = document.querySelector("#helper-input"),
  mouse = document.querySelector(".mouse"),
  slideBg = document.querySelector(".slide-bg"),
  links = document.querySelectorAll("a"),
  mainSection = document.querySelector('.main-section')
  slideCount = 5,
  easing = BezierEasing(0.77, 0.125, 0.265, 1.04),
  startComplete = () => {
    imageSlides.forEach((el) => (el.style.opacity = 1));
    shapeSlides.forEach((el) => (el.style.opacity = 1));
  },
  startingTl = gsap.timeline({
    default: { ease: easing },
    onComplete: startComplete,
  });

let slideCounter = 1;
