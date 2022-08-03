/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=========== GSAP ================ */
/*=========== ENTRADA ============= */
const tl = gsap.timeline({ paused: true });

tl.to(".panels .panel:first-child, .panels .panel:last-child", {
  scaleY: 1,
  duration: 1,
})
  .to(
    ".panels .panel:not(:first-child):not(:last-child)",
    { scaleY: 1 },
    "-=0.5"
  )
  .to(".panels .panel", {
    scaleY: 0,
    duration: 0.5,
    stagger: 0.05,
  })
  .to(".panels", {
    clipPath: "circle(0%)",
    skewX: 0,
    duration: 1,
  });

//console.log(tl.duration());

window.addEventListener("load", function () {
  tl.play();
});

/*============= CURSOR ================*/
let mouseCursor = document.querySelector(".cursor");
let textR = document.querySelector(".text");
let title = document.querySelectorAll(".titles");
let image = document.querySelectorAll(".work__contain");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

title.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-grow");
    link.classList.remove("hovered-text");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-grow");
    link.classList.add("hovered-text");
  });
});

image.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-img");
    textR.classList.remove("text-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-img");
    textR.classList.add("text-grow");
  });
});

const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
  )
  .join("");
