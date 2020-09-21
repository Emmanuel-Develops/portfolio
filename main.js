const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-element");
const headerBg = document.querySelector(".header-bg");
const profileTransition = document.querySelector(".profile-left");
const profileTransitionInfo = document.querySelector(".profile-info");

navToggle.addEventListener("click", (event) => {
  console.log(event);
  nav.classList.toggle("nav--visible");
  headerBg.classList.toggle("header-bg--visible");
});

window.onload = (event) => {
  console.log(event);
  profileTransition.classList.toggle("profile-left--start");
  profileTransitionInfo.classList.toggle("profile-info--start");
};

// profileTransition.classList.toggle("profile-left--start");
// profileTransitionInfo.classList.toggle("profile-info--start");
