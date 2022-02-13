//TEST
const modalBg = document.getElementsByClassName("modal-bg")[0];
window.addEventListener('resize', () => {
    const activeHeight = window.innerHeight;
    modalBg.style.setProperty('--heightTest', activeHeight );
})

//! bulding lines over and under menu word with help of js and before after css peseude elements
//First we dynamically grab the width of span that contains word menu, then we set that width to css variable in the root. Name of variable is "pseudo-menu-before-after-width".
gsap.registerPlugin( CSSRulePlugin); 
const root = document.querySelector(":root"); //grabbing the root element
// important part below 
const menuSpan =  document.getElementsByClassName("about-menu-icon-container")[0];
var menuSpanWidth = menuSpan.getBoundingClientRect().width;
root.style.setProperty("--pseudo-menu-before-after-width", menuSpanWidth);


//! menu animation on click
const overlay = document.querySelector(".menu-overlay");
let menuIconText = document.querySelector(".about-menu-icon-text");

var tl = gsap.timeline({});
// defaults:{duration:0.5}
tl.paused(true);

var before = CSSRulePlugin.getRule(".menu-icon-container:before"); //get the rule
var after = CSSRulePlugin.getRule(".menu-icon-container:after");
// tl.to(rule, {cssRule: {backgroundColor: "blue"}} )

tl.to(".menu-overlay", {clipPath:'circle(100%)', duration:0.8})

tl.to(before, {cssRule: {opacity:1}, duration:0.4});
tl.to(after, {cssRule: {opacity:1}, duration:0.4},);
tl.to(menuIconText, {opacity:0, duration:0.1},'-=1.1');


tl.from('.menu-li', {opacity:0, y: '-150px', duration:0.2, stagger:0.1});


const windowWith=$(window).width();
// var y=0;

if(windowWith<=2060 && windowWith>1560){
    tl.to(before, {cssRule: {opacity:1, y: "15.5px", rotate: 45, backgroundColor: "#474747"}, duration:0.1},'-=1.3');
    tl.to(after, {cssRule: {opacity:1, y: "-15.5px", rotate: -45, backgroundColor: "#474747"}, duration:0.2},'-=1.2');
}else if (windowWith<=1560 && windowWith>1435) {
    tl.to(before, {cssRule: {opacity:1, y: "12.5px", rotate: 45, backgroundColor: "#474747"}, duration:0.1},'-=1.3');
    tl.to(after, {cssRule: {opacity:1, y: "-12.5px", rotate: -45, backgroundColor: "#474747"}, duration:0.2},'-=1.2');
}else if (windowWith<=1435 && windowWith>1280) {
    tl.to(before, {cssRule: {opacity:1, y: "11.6px", rotate: 45, backgroundColor: "#474747"}, duration:0.1},'-=1.3');
    tl.to(after, {cssRule: {opacity:1, y: "-11.6px", rotate: -45, backgroundColor: "#474747"}, duration:0.2},'-=1.2');
}else if (windowWith<=1280 && windowWith>990) {
    tl.to(before, {cssRule: {opacity:1, y: "10px", rotate: 45, backgroundColor: "#474747"}, duration:0.1},'-=1.3');
    tl.to(after, {cssRule: {opacity:1, y: "-10px", rotate: -45, backgroundColor: "#474747"}, duration:0.2},'-=1.2');
}else if (windowWith<=990 && windowWith>666) {
    tl.to(before, {cssRule: {opacity:1, y: "8.1px", rotate: 45, backgroundColor: "#474747"}, duration:0.1},'-=1.3');
    tl.to(after, {cssRule: {opacity:1, y: "-8.1px", rotate: -45, backgroundColor: "#474747"}, duration:0.2},'-=1.2');
}else if (windowWith<=666 && windowWith>0) {
    tl.to(before, {cssRule: {opacity:1, y: "6.9px", rotate: 45, backgroundColor: "#474747"}, duration:0.1},'-=1.3');
    tl.to(after, {cssRule: {opacity:1, y: "-6.9px", rotate: -45, backgroundColor: "#474747"}, duration:0.2},'-=1.2');
}


//change menu
let menuIconContainer = document.getElementsByClassName("about-menu-icon-container")[0];


// make header unscrollable
let body = document.querySelector("body");
let html = document.querySelector("html");

// select span icon (select with jquery)
let spanIcon=document.querySelector('.search-span > .dash-image');

const menuIconMobile = document.getElementById("menuIcon");

menuIconContainer.addEventListener('click', () => {
    var menuTextOpacity = window.getComputedStyle(menuIconText).getPropertyValue("opacity");
    
    if(menuTextOpacity == 0){

        tl.timeScale(3)
        tl.reverse();
       
        body.style.overflow = "visible";
      
        html.style.overflow = "visible";
        
    } else {
    
    tl.timeScale(1);
    // var currentTimeScale = tl.timeScale(); //gets current timeScale
 
    tl.play();

 
    //disable background scroll
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    } 

    if (windowWith <= 920) {
        document.getElementById("navbar").style.position = "fixed";
        overlay.style.position = "fixed";
        document.body.style.position = "fixed";
        html.style.position = "fixed";
        const cancelBtnMove = document.getElementById("cancelBtnMove");
        cancelBtnMove.style.display = "block";
        cancelBtnMove.style.color = "black";
        
        menuIconMobile.style.display = "none";
    }

});

if(windowWith<=920){
    function mobileCancel() {
    
        tl.reverse(0.4);

        document.getElementById("navbar").style.position = "absolute";
        document.body.style.overflow = "visible";
        html.style.overflow = "visible";
        document.body.style.position = "static";
        html.style.position = "static";

        menuIconMobile.style.display="block";
        spanIcon.src = "assets/img/search-icon.svg";
    }
}

// ! animating navigation
var ntl = gsap.timeline();
ntl.from(".logo-container", {duration:1, opacity:-1.5, y:-80})
ntl.from(".nav-contacts", {duration:0.3, opacity:-1.5, y:-70})
ntl.from(".lang-menu-container", {duration:0.3, opacity:-1.5, y:-70})
ntl.from(".search-span-copy", {duration:0.3, opacity:-1.5, y:-70})

ntl.from(".animation-subheader", {opacity:0, duration:0.6,xPercent: -100} )
ntl.from(".animation-header", {opacity:0, duration:0.6, xPercent: -100} )
ntl.from(".animation-description", {opacity:-2, duration:0.6,xPercent: -100} )
ntl.from(".animation-links", {opacity:0, duration:0.3, ease:"power0", xPercent: -100} )


// ! search modal
var desktopBtn = document.querySelector(".search-span-desktop");
var mobileButton = document.querySelector(".search-span-mobile");
var closeBtn = document.querySelector(".modal-close");


var stl = gsap.timeline({});
stl.to(".modal-bg", {clipPath:'circle(100%)', visibility:'visible', zIndex:999, duration:0.7 });
stl.paused(true);


desktopBtn.addEventListener('click', function(){
    document.body.style['overflow'] = 'hidden';
    stl.play();
});

closeBtn.addEventListener('click', function(){
    stl.reverse();
    window.setTimeout(()=>{
        document.body.style['overflow'] = 'visible';
        document.body.style.position = 'static';
    }, 500);
});

mobileButton.addEventListener('click', function(){
    document.body.style.position = 'fixed';
    document.body.style['overflow'] = 'hidden';
    stl.play();
});


function addMargin(e) {     
    e.classList.remove("pseMan");

    // ! get sroll bar width
    function getScrollbarWidth() {
        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);
        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);
        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);
        e.classList.add("pseMan");
        return scrollbarWidth; 
    }
      
    const widthScroll=getScrollbarWidth();
     if(widthScroll==16){
        // window.setTimeout(()=>{
            body.style.marginRight=widthScroll+"px";
        // }, 200);
        
     }else{
        // window.setTimeout(()=>{
            body.style.marginRight= 0;
        // }, 100);
        
     }
      return getScrollbarWidth();
    }


    $('.service-tile').mouseover(function(){
        $(this).css(
            'transform', 'scale(1.02)'
        );
        $(this).css(
            'box-shadow', '0px 0px 100px 15px rgb(214, 218, 215)'
        );
        $(this).css(
            '-webkit-box-shadow', '1px 1px 29px 4px rgb(214, 218, 215)'
        );
        $(this).css(
            '-moz-box-shadow', '1px 1px 29px 4px rgb(214, 218, 215)'
        );
        $(this).css(
            'transition', 'all 0.4s ease-in-out'
        )
    });
     
      
    $('.service-tile').mouseout(function(){
        $(this).css(
            'transform', 'scale(1)'
        );
        $(this).css(
            'box-shadow', '1px 3px 9px rgb(214, 218, 215)'
        );
        $(this).css(
            '-webkit-box-shadow', 'rgb(214, 218, 215)'
        );
        $(this).css(
            '-moz-box-shadow', 'rgb(214, 218, 215)'
        );
    });
    
    
    

/*Drop Down List slider*/

$( ".about4-plus-icon" ).click(function(){
    
   var a= $(this).parent().parent().parent().prev().show(700);
    $(this).next(".about4-minus-icon").show(700);
    $(this).hide(700);
});


$( ".about4-minus-icon" ).click(function(){
    var a= $(this).parent().parent().parent().prev().hide(700);
    $(this).prev(".about4-plus-icon").show(700);
    $(this).hide(700);
  
});

   // copy email
   document.querySelector('.email a').onclick = function(e){
    if (document.selection) {
        const range = document.body.createTextRange();
        range.moveToElementText(this);
        range.select();
    } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNode(this);
        window.getSelection().addRange(range);
    }
    document.execCommand('copy');
    return false;
  }

document.querySelector('.email .footer-contact-links').onclick = function(e){
    if (document.selection) {
        const range = document.body.createTextRange();
        range.moveToElementText(this);
        range.select();
    } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNode(this);
        window.getSelection().addRange(range);
    }
    document.execCommand('copy');
    return false;
}