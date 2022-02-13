gsap.registerPlugin(ScrollTrigger);

const timeLine = gsap.timeline();
// window.addEventListener('resize', ()=> {
if($(window).width()<=2000 && $(window).width()>1025){
    gsap.from(".whois-subheader", {
      x: -100,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        // markers: true,
        // start: "+=100",
        end: "+=200",
        trigger: ".whois-content-container",
        scrub: true,
        // pin: true,
      },
    });
    gsap.from(".text-syle", {
      x: -500,
      opacity: -1,
      stagger: 0.3,
      scrollTrigger: {
        // markers: true,
        // start: "+=400",
        end: "+=250",
        trigger: ".whois-content-container",
        scrub: true,
      },
    });
    gsap.from(".whois-description", {
      x: -400,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        end: "+=400",
        // markers: true,
        trigger: ".whois-content-container",
        scrub: true,
        // pin: true,
      },
    });

  }else if ($(window).width()<=1025 && $(window).width()>963) {
  
    var ztl = gsap.timeline();
    ztl.from(".whois-subheader", {opacity:0, duration:5,xPercent: -1000} )
    ztl.from(".text-syle", {opacity:0, duration:0.8, xPercent: -100} )
    ztl.from(".whois-description", {opacity:0, duration:0.6,xPercent: -100} )
    ztl.from(".more-details-one", {opacity:0, duration:0.3, ease:"power0", xPercent: -80} )

    // var ltl = gsap.timeline();
    // ltl.from(".whois-img-up", {opacity:0, duration:5, xPercent: 1000} )
  
  }else if ($(window).width()<=963 && $(window).width()>800) {
    
    gsap.from(".whois-subheader", {
      x: -100,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        // markers: true,
        // start: "+=100",
        end: "+=200",
        trigger: ".whois-content-container",
        scrub: true,
        // pin: true,
      },
    });
    gsap.from(".text-syle", {
      x: -500,
      opacity: -1,
      stagger: 0.3,
      scrollTrigger: {
        // markers: true,
        // start: "+=400",
        end: "+=250",
        trigger: ".whois-content-container",
        scrub: true,
      },
    });
    gsap.from(".whois-description", {
      x: -400,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        end: "+=400",
        // markers: true,
        trigger: ".whois-content-container",
        scrub: true,
        // pin: true,
      },
    });
  }else if ($(window).width()<=800 && $(window).width()>0) {

    var ztl = gsap.timeline();
    ztl.from(".whois-subheader", {opacity:0, duration:5,xPercent: -1000} )
    ztl.from(".text-syle", {opacity:0, duration:0.8, xPercent: -100} )
    ztl.from(".whois-description", {opacity:0, duration:0.6,xPercent: -100} )
    ztl.from(".more-details-one", {opacity:0, duration:0.3, ease:"power0", xPercent: -80} )
  
}
// })

gsap.from(".whois-img-up", {
  x: 200,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: 'top top',
    end: "+=300",
    // markers: true,
    trigger: ".whois-img-up",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".whois-img-down", {
  x: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: 'top top',
    end: "+=300",
    // markers: true,
    trigger: ".whois-img-down",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".content-header-main", {
  x: -500,
  opacity: -1,
  stagger: 0.3,
  scrollTrigger: {
    // start: 'top top',
    end: "+=200",
    // markers: true,
    trigger: ".content-header-main",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".content-description-main", {
  x: -300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: 'top top',
    end: "+=150",
    // markers: true,
    trigger: ".content-description-main",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".whois2-image", {
  x: 200,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: 'top top',
    end: "+=250",
    // markers: true,
    trigger: ".whois2-content-container",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".whois3-image-new", {
  x: -200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    // start: 'top top',
    end: "+=200",
    // markers: true,
    trigger: ".whois3-image-new",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".content-header-first", {
  x: -200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    // start: 'top top',
    end: "+=150",
    // markers: true,
    trigger: ".content-header-first",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".content-description-first", {
  x: -200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    // start: 'top top',
    end: "+=200",
    // markers: true,
    trigger: ".content-description-first",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".whois3-image-second", {
  x: -200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    // start: 'top top',
    end: "+=200",
    // markers: true,
    trigger: ".whois3-image-second",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".content-header-second", {
  x: -200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    // start: 'top top',
    end: "+=150",
    // markers: true,
    trigger: ".content-header-second",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".content-description-second", {
  x: -200,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    // start: 'top top',
    end: "+=200",
    // markers: true,
    trigger: ".content-description-second",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".whois3-illustration-image", {
  x: 200,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    // start: '+=700',
    end : "+=400",
    // markers: true,
    trigger: ".whois3-illustration-image",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".service-tile-one",{
  x: -400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: '+=200',
    end: "+=300",
    // markers: true,
    trigger: ".service-tile-one",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".service-tile-two",{
  x: -200,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: '+=200',
    end: "+=300",
    // markers: true,
    trigger: ".service-tile-two",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".service-tile-three",{
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: '+=200',
    end: "+=300",
    // markers: true,
    trigger: ".service-tile-three",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".service-tile-four",{
  x: -400,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: '+=200',
    end: "+=250",
    // markers: true,
    trigger: ".service-tile-four",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".service-tile-five",{
  x: -200,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: '+=200',
    end: "+=250",
    // markers: true,
    trigger: ".service-tile-five",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".service-tile-sixth",{
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    // start: '+=200',
    end: "+=250",
    // markers: true,
    trigger: ".service-tile-sixth",
    scrub: true,
    // pin: true,
  },
});

gsap.from(".news-header-title", {
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    end: "+=150",
  //   markers: true,
    trigger: ".news-header-title",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".news-header-description", {
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    end: "+=150",
    // markers: true,
    trigger: ".news-header-description",
    scrub: true,
    // pin: true,
  },
});
gsap.from(".news-block", {
  x: 250,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    end: "+=650",
  //   markers: true,
    trigger: ".news-block",
    scrub: true,
    // pin: true,
  },
});