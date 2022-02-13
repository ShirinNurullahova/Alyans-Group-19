gsap.registerPlugin(ScrollTrigger);
if($(window).width()<=2000 && $(window).width()>1200){
    gsap.from(".new-content-desc", {
        x: -150,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
        end: "+=200",
        //   markers: true,
          trigger: ".whois2-main",
          scrub: true,
          // pin: true,
        },
    });
    
    gsap.from(".about2-content-description", {
        x: 200,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            end: "+=500",
            trigger: ".about2-article-content-container",
            scrub: true
        }
    })
    
    gsap.from(".about2-svg-container", {
        x: -200,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            end: "+=200",
            trigger: ".about2-svg-container",
            scrub: true
        }
    })

  }else if ($(window).width()<=1200 && $(window).width()>963) {
  
    var ztl = gsap.timeline();
    ztl.from(".new-content-desc", {opacity:0, duration:6,xPercent: -2000} )
    ztl.from(".about2-svg-container", {opacity:0, duration:0.6, xPercent: -100} )

    var ltl = gsap.timeline();
    ltl.from(".about2-content-description", {opacity:0, duration:6, xPercent: 2000} )
  
  }else if ($(window).width()<=963 && $(window).width()>800) {
    gsap.from(".new-content-desc", {
        x: -150,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
        end: "+=200",
        //   markers: true,
          trigger: ".whois2-main",
          scrub: true,
          // pin: true,
        },
    });
    
    gsap.from(".about2-content-description", {
        x: 200,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            end: "+=500",
            trigger: ".about2-article-content-container",
            scrub: true
        }
    })
    
    gsap.from(".about2-svg-container", {
        x: -200,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            end: "+=200",
            trigger: ".about2-svg-container",
            scrub: true
        }
    })
    
  }else if ($(window).width()<=800 && $(window).width()>602) {

    var ztl = gsap.timeline();
    ztl.from(".new-content-desc", {opacity:0, duration:6,xPercent: -2000} )
    ztl.from(".about2-svg-container", {opacity:0, duration:0.6, xPercent: -100} )

    var ltl = gsap.timeline();
    ltl.from(".about2-content-description", {opacity:0, duration:6, xPercent: 2000} )
  
}else if ($(window).width()<=601 && $(window).width()>360) {

    var ztl = gsap.timeline();
    ztl.from(".new-content-desc", {opacity:0, duration:6,xPercent: 1300} )
    ztl.from(".about2-content-description", {opacity:0, duration:6, xPercent: -1000} )
  
}
else if ($(window).width()<=360 && $(window).width()>0) {

    var ztl = gsap.timeline();
    ztl.from(".new-content-desc", {opacity:0, duration:6,xPercent: 1000} )

    gsap.from(".about2-content-description", {
        x: 200,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            // end: "+=550",
            trigger: ".about2-article-content-container",
            scrub: 1.5
        }
    })
    gsap.from(".about2-svg-container", {
        x: -250,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            end: "+=600",
            trigger: ".about2-svg-container",
            scrub: true
        }
    })
  
}

gsap.from(".story-header-new", {
    x: -200,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=200",
        trigger: ".about3-header-and-subheader",
        scrub: true
    }
})

gsap.from(".general-content-subheader-title", {
    x: -300,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".about3-header-and-subheader",
        scrub: true
    }
})

gsap.from(".about3-article-container-animation", {
    x: 250,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=800",
        trigger: ".about3-article-container-animation",
        scrub: true
    }
})

gsap.from(".about3-article-container-with-icon", {
    x: -350,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        end: "+=250",
        trigger: ".about3-article-container-last",
        scrub: true
    }
})

gsap.from(".story-header-last", {
    x: -150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=200",
        trigger: ".about4-first-section-container",
        scrub: true
    }
})

gsap.from(".general-content-subheader-chance", {
    x: -250,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=200",
        trigger: ".about4-first-section-container",
        scrub: true
    }
})

gsap.from(".general-content-description-main-construction", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-description-main-construction",
        scrub: true
    }
})

gsap.from(".general-content-description-main-production", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-description-main-production",
        scrub: true
    }
})

gsap.from(".general-content-description-main-trade", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-description-main-trade",
        scrub: true
    }
})

gsap.from(".general-content-description-main-service", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-description-main-service",
        scrub: true
    }
})

gsap.from(".general-content-description-main-health", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-description-main-health",
        scrub: true
    }
})

gsap.from(".general-content-description-main-logistics", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-description-main-logistics",
        scrub: true
    }
})


gsap.from(".general-content-subheader-construction p", {
    y: 40,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        end: "+=500",
        trigger: ".general-content-subheader-construction p",
        scrub: true
    }
})

gsap.from(".general-content-subheader-production p", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=100",
        trigger: ".general-content-subheader-production p",
        scrub: true
    }
})

gsap.from(".general-content-subheader-trade p", {
    y: 30,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        end: "+=200",
        trigger: ".general-content-subheader-trade p",
        scrub: true
    }
})

gsap.from(".general-content-subheader-service p", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=150",
        trigger: ".general-content-subheader-service p",
        scrub: true
    }
})

gsap.from(".general-content-subheader-health p", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=100",
        trigger: ".general-content-subheader-health p",
        scrub: true
    }
})

gsap.from(".general-content-subheader-logistics p", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=50",
        trigger: ".general-content-subheader-logistics p",
        scrub: true
    }
})