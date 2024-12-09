

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


var tl = gsap.timeline();

tl.to(".page1", {
    duration: 0,
    y: "100vh",
    scale: 0.4
})

tl.to(".page1", {
    y: "30vh",
    duration: 1,
    delay: 0.7
})

tl.to(".page1",{
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.9
})