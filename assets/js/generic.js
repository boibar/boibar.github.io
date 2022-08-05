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