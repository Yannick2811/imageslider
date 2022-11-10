const buttons = document.querySelectorAll("[data-button");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const baloon = document.querySelector("#baloon");
const orb = document.querySelector("#orb");
const tower = document.querySelector("#tower");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let offset = button.dataset.button === "next" ? 1 : -1;
    let slides = button
      .closest("[data-container]")
      .querySelector("[data-pic-container]");

    let activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    let points = document.querySelector("#slide-points");
    let activePoint = points.querySelector("[data-active]");
    let newIndexPoints = [...points.children].indexOf(activePoint) + offset;
    if (newIndexPoints < 0) newIndexPoints = points.children.length - 1;
    if (newIndexPoints >= points.children.length) newIndexPoints = 0;

    points.children[newIndexPoints].dataset.active = true;
    delete activePoint.dataset.active;
  });
});

one.addEventListener("click", () => {
  let slides = document.querySelector("[data-pic-container]");
  let activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide);

  if (newIndex == "0") {
    return;
  } else {
    newIndex = "0";
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  let points = document.querySelector("#slide-points");
  let activePoint = points.querySelector("[data-active]");
  let newIndexPoints = [...points.children].indexOf(activePoint);

  if (newIndexPoints == "0") {
    return;
  } else {
    newIndexPoints = "0";
  }

  points.children[newIndexPoints].dataset.active = true;
  delete activePoint.dataset.active;
});

two.addEventListener("click", () => {
  let slides = document.querySelector("[data-pic-container]");
  let activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide);

  if (newIndex == "1") {
    return;
  } else {
    newIndex = "1";
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  let points = document.querySelector("#slide-points");
  let activePoint = points.querySelector("[data-active]");
  let newIndexPoints = [...points.children].indexOf(activePoint);

  if (newIndexPoints == "1") {
    return;
  } else {
    newIndexPoints = "1";
  }

  points.children[newIndexPoints].dataset.active = true;
  delete activePoint.dataset.active;
});

three.addEventListener("click", () => {
  let slides = document.querySelector("[data-pic-container]");
  let activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide);

  if (newIndex == "2") {
    return;
  } else {
    newIndex = "2";
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  let points = document.querySelector("#slide-points");
  let activePoint = points.querySelector("[data-active]");
  let newIndexPoints = [...points.children].indexOf(activePoint);

  if (newIndexPoints == "2") {
    return;
  } else {
    newIndexPoints = "2";
  }

  points.children[newIndexPoints].dataset.active = true;
  delete activePoint.dataset.active;
});
