const tl = gsap.timeline()
tl.from("nav", {
    opacity: 0,
    delay: 0.3
})

tl.from("nav a", {
    y: -80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
})

tl.from(".left h1", {

    x: 500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from(".right img", {
    scale: 0.5,
    delay: 0.1,
    opacity: 0,
    duration: 0.5,

})


gsap.from("#page2 .box", {
    x:-100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:3,
        
       


    }

})