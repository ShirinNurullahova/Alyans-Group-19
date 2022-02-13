gsap.registerPlugin(ScrollTrigger);
if($(window).width()<=2000 && $(window).width()>1024){
    gsap.from(".text-container-service-first", {
        x: 1000,
        opacity: -1,
        stagger: 0.3,
        scrollTrigger: {
        end: "+=400",
        //   markers: true,
          trigger: ".text-container-service-first",
          scrub: true,
          // pin: true,
        },
    });

    }else if ($(window).width()<=1024 && $(window).width()>360) {
    
        var wtl = gsap.timeline();
        wtl.from(".text-container-service-first", {opacity:-2, duration:7,xPercent: 2500} )
    
    }else if ($(window).width()<=360 && $(window).width()>0) {
    gsap.from(".text-container-service-first", {
        x: 400,
        opacity: -1,
        stagger: 0.3,
        scrollTrigger: {
        end: "+=400",
        //   markers: true,
          trigger: ".text-container-service-first",
          scrub: true,
          // pin: true,
        },
    });
    
}

var wtl = gsap.timeline();
wtl.from(".service-subheader-animation", {opacity:0, duration:2.5,xPercent: -300} )
wtl.from(".service-header-animation", {opacity:0, duration:0.6, xPercent: -50} )
wtl.from(".service-description-animation", {opacity:-2, duration:0.6,xPercent: -100} )
wtl.from(".single-service-container-title", {opacity:-1, duration:0.6,xPercent: 100} )
wtl.from(".service-page-title-anim", {opacity:0, duration:0.6,xPercent: 100, xPercent: -100} )
wtl.from(".text-container-service-main", {opacity:-2, duration:0.6,xPercent: 200} )

gsap.from(".animation-description-one", {
    x: -100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=150",
        trigger: ".animation-description-one",
        scrub: true
    }
})

gsap.from(".text-container-service-second", {
    x: 800,
    opacity: -1,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=500",
        trigger: ".text-container-service-second",
        scrub: true
    }
})

gsap.from(".animation-description-two", {
    x: -100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=150",
        trigger: ".animation-description-two",
        scrub: true
    }
})

gsap.from(".text-container-service-third", {
    x: 800,
    opacity: -1,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=400",
        trigger: ".text-container-service-third",
        scrub: true
    }
})