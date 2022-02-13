gsap.registerPlugin(ScrollTrigger);

if($(window).width()<=2000 && $(window).width()>1280){
  gsap.from(".news-section-first-part", {
    x: -200,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      end: "+=550",
    //   markers: true,
      trigger: ".news-container",
      scrub: true,
      // pin: true,
    },
  });

  gsap.from(".news-section-second-part", {
    x: 200,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=450",
    //   markers: true,
      trigger: ".news-section-second-part",
      scrub: true,
      // pin: true,
    },
  });

  gsap.from(".news-section-third-part", {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
    //   markers: true,
      trigger: ".news-section-third-part",
      scrub: true,
      // pin: true,
    },
  });

  gsap.from(".news-section-fourth-part", {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
    //   markers: true,
      trigger: ".news-section-third-part",
      scrub: true,
      // pin: true,
    },
  });

}else if ($(window).width()<=1280 && $(window).width()>963) {

  var ztl = gsap.timeline();
  ztl.from(".news-section-first-part", {opacity:0, duration:7,xPercent: -2500} )
  ztl.from(".news-section-second-part", {opacity:0, duration:0.6, xPercent: 100} )
  ztl.from(".news-section-third-part", {opacity:0, duration:0.6, xPercent: -100} )

  var ctl = gsap.timeline();
  ctl.from(".news-section-fourth-part", {opacity:0, duration:4, xPercent: -1000} )


}else if ($(window).width()<=963 && $(window).width()>800) {

  gsap.from(".news-section-first-part", {
    x: -200,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      end: "+=550",
    //   markers: true,
      trigger: ".news-container",
      scrub: true,
      // pin: true,
    },
  });

  gsap.from(".news-section-second-part", {
    x: 200,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        end: "+=450",
    //   markers: true,
      trigger: ".news-section-second-part",
      scrub: true,
      // pin: true,
    },
  });

  gsap.from(".news-section-third-part", {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
    //   markers: true,
      trigger: ".news-section-third-part",
      scrub: true,
      // pin: true,
    },
  });

  gsap.from(".news-section-fourth-part", {
    x: -200,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        end: "+=200",
    //   markers: true,
      trigger: ".news-section-third-part",
      scrub: true,
      // pin: true,
    },
  });
  
}else if ($(window).width()<=800 && $(window).width()>0) {

  var ztl = gsap.timeline();
  ztl.from(".news-section-left-part", {opacity:0, duration:6,xPercent: -2500} )
  var ytl = gsap.timeline();
  ytl.from(".news-section-right-part", {opacity:0, duration:6,xPercent: 2500} )

}