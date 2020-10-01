const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-element");
const headerBg = document.querySelector(".header-bg");
const profileTransition = document.querySelector(".profile-left");
const profileTransitionInfo = document.querySelector(".profile-info");
const tl = gsap.timeline({ defaults: { ease: "powe1.out" } });

navToggle.addEventListener("click", (event) => {
  console.log(event);
  nav.classList.toggle("nav--visible");
  headerBg.classList.toggle("header-bg--visible");
});

// Move profile picture section in view from the left
tl.fromTo(".profile-left", { x: "-100%" }, { x: "0%", duration: 1.6 });
// Move profile info section in view from the right, at the same time as profile image
tl.fromTo(".profile-info", { x: "100%" }, { x: "0%", duration: 1.6 }, "-=1.6");
// Animate the header text
tl.fromTo(".profile-info-header", { fontSize: "2rem", y: "200%" }, { fontSize: "1.3rem", y: "0%", duration: 1 });
// Animate hr opacity
tl.fromTo(".profile-info hr", { opacity: "0" }, { opacity: "1", duration: 0.5 });
// Animate profile info text to come up into view
tl.fromTo(".tl-text", { y: "100%", opacity: "0" }, { y: "0%", opacity: "1", duration: 1 });
// Animate buttons opacity
tl.fromTo(".btn", { opacity: "0" }, { opacity: "1", duration: 1 });

// window.onload = (event) => {
//   console.log(event);
// profileTransition.classList.toggle("profile-left--start");
//   profileTransitionInfo.classList.toggle("profile-info--start");
// };

// profileTransition.classList.toggle("profile-left--start");
// profileTransitionInfo.classList.toggle("profile-info--start");
