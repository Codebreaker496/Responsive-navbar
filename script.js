var menu = document.querySelector("#nav i");
var close = document.querySelector(".overlay i");


var tl = gsap.timeline();
tl.to(".overlay", {
    right:0,
    ease: "back.in(1.2)",
    duration:1,
})
tl.from(".overlay h4", {
    x:100,
    duration:.5,
    stagger:.3,
    opacity:0,
})

tl.pause();
// Functionality for open menu & close menu.

menu.addEventListener("click", () => {
    tl.play();
})

close.addEventListener("click", () => {
    tl.reverse();
})

// hide menu on clicking outside of it.

document.addEventListener("click", (e) => {
    if(e.target !== menu && e.target !== close){
        tl.reverse();
    }
})