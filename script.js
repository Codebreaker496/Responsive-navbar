var tl = gsap.timeline();
tl.to(".overlay", {
    right:0,
    duration:1,
})
tl.from(".overlay h4", {
    x:100,
    duration:.5,
    stagger:.3,
    opacity:0,
})