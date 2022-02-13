gsap.registerPlugin(ScrollTrigger);

if($(window).width()<=2000 && $(window).width()>1025){
  gsap.from(".services-general-header", {
    x: 200,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      end: "+=250",
      // markers: true,
      trigger: ".our-services-title",
      scrub: true,
      // pin: true,
    },
  });
  gsap.from(".general-service-content-subheader-new", {
    x: 200,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      end: "+=250",
      // markers: true,
      trigger: ".our-services-title",
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

}else if ($(window).width()<=1025 && $(window).width()>963) {

  var ztl = gsap.timeline();
  ztl.from(".services-general-header", {opacity:-1, duration:6,xPercent: 1500} )
  ztl.from(".general-service-content-subheader-new", {opacity:0, duration:0.6, xPercent: 50} )
  ztl.from(".service-tile", {opacity:0, duration:0.6,xPercent: 100} )

}else if ($(window).width()<=963 && $(window).width()>0) {
  gsap.from(".services-general-header", {
    x: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      end: "+=700",
      // markers: true,
      trigger: ".our-services-title",
      scrub: true,
      // pin: true,
    },
  });
  gsap.from(".general-service-content-subheader-new", {
    x: 150,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      end: "+=700",
      // markers: true,
      trigger: ".our-services-title",
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
  
}

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