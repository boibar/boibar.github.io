/*================= START ======================*/
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

/*============== WE HAVE A PROBLEM =============*/
const scrollSection = document.querySelector(".title");
const scrollEls = scrollSection.querySelectorAll("p");
let reverse = false;

gsap.to(scrollSection, {
  scrollTrigger: {
    trigger: scrollSection,
    scrub: 2,
  },
});

scrollEls.forEach((el) => {
  let scrollTl = gsap.timeline();
  xValue = reverse ? 10 : -100;
  scrollTl.to(el, {
    xPercent: xValue,
    scrollTrigger: {
      trigger: scrollSection,
      markers: false,
      scrub: 0.1,
      pin: true,
    },
  });
  reverse = !reverse;
});
/*==================================================*/

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".text__problem1",
      start: "center center", //Animation start at this point
      end: "bottom top", //Animation end at this point
      markers: false,
      scrub: true,
      pin: true,
    },
  })
  .from(".text__problem1", { x: innerWidth * -1 });

/*=============== IMAGES ===========================*/
let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: 100,
    ease: Power2.out,
  });
  tl.from(image, 1.5, {
    xPercent: -1,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out,
  });
});
/*================================================*/

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".text__problem2",
      start: "center center", //Animation start at this point
      end: "bottom top", //Animation end at this point
      markers: false,
      scrub: true,
      pin: true,
    },
  })
  .from(".text__problem2", { x: innerWidth * -1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".text__problem3",
      start: "center center", //Animation start at this point
      end: "bottom top", //Animation end at this point
      markers: false,
      scrub: true,
      pin: true,
    },
  })
  .from(".text__problem3", { x: innerWidth * 1 });
