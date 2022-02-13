//! bulding lines over and under menu word with help of js and before after css peseude elements
//First we dynamically grab the width of span that contains word menu, then we set that width to css variable in the root. Name of variable is "pseudo-menu-before-after-width".

gsap.registerPlugin(CSSRulePlugin); 
const root = document.querySelector(":root"); //grabbing the root element
// important part below 
const menuSpan =  document.getElementsByClassName("menu-icon-container")[0];
var menuSpanWidth = menuSpan.getBoundingClientRect().width;
root.style.setProperty("--pseudo-menu-before-after-width", menuSpanWidth);


//! menu animation on click
const overlay = document.querySelector(".menu-overlay");
let nav = document.querySelector("nav");
let menuIconText = document.querySelector(".menu-icon-text");

var tl = gsap.timeline({});
// defaults:{duration:0.5}
tl.paused(true);




var before = CSSRulePlugin.getRule(".menu-icon-container::before"); //get the rule
var after = CSSRulePlugin.getRule(".menu-icon-container::after");
// tl.to(rule, {cssRule: {backgroundColor: "blue"}} )


tl.to(nav,{ duration:0.1 }); 
tl.to(".menu-overlay", {clipPath:'circle(100%)', duration:0.8});

tl.to(before, {cssRule: {opacity:1}, duration:0.4});
tl.to(after, {cssRule: {opacity:1}, duration:0.4});
tl.to(menuIconText, {opacity:0, duration:0.1},'-=1.1');

tl.from('.menu-li', {opacity:0, y: '-200px', duration:0.4, stagger:0.1},'-=0.6');


var windowWith=$(window).width();


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


//change dash image
let dashImages = document.getElementsByClassName("dash-image");
//change nav contacts

let navContactLinks=$(".nav-contacts").children().children();
let langMenu=$(".lang-menu-container").children().children();

const navContactsId = document.getElementById("nav-contacts-id");
const langMenuContainerId = document.getElementById("lang-menu-container-id")

//change logo
let logo = document.getElementsByClassName("logo-image")[0];
//change menu
let menuIconContainer = document.getElementsByClassName("menu-icon-container")[0];
// make header unscrollable
let body = document.querySelector("body");
let html = document.querySelector("html");

// select image of menu icon container
let exit = document.querySelector(".exit");
// select text of menu icon container

// select span icon (select with jquery)
let spanIcon=document.querySelector('.search-span > .dash-image');
let spanIconCopy=document.querySelector('.search-span-copy .search-span > .dash-image');



menuIconContainer.addEventListener('click', () => {

    navContactsId.classList.toggle("nav-contacts-black");
    langMenuContainerId.classList.toggle("lang-menu-container-black");

    var menuTextOpacity = window.getComputedStyle(menuIconText).getPropertyValue("opacity");
    
    if(menuTextOpacity == 0){

        tl.timeScale(3) 
        tl.reverse();

        window.setTimeout(()=>{
            for(let i=0; i<dashImages.length-1; i++){
                dashImages[i].src = "../../assets/img/dash-white.svg";
            }
        }, 300);
        
        body.style.overflow = "visible";
       
        window.setTimeout(()=>{
            html.style.overflow = "visible";

            if (windowWith<=920) {
                spanIconCopy.src = "../../assets/img/search-icon.svg";
            }else {
                spanIcon.src= "../../assets/img/search-icon.svg";
                dashImages[0].src= "../../assets/img/dash-white.svg";
                dashImages[1].src= "../../assets/img/dash-white.svg";
            }
            // nav.style.color = "#FAFAFA"; 
            navContactLinks.css("color" , "#FAFAFA");
            langMenu.css("color" , "#FAFAFA");
            logo.src = "../../assets/img/AlyansGroup-white.svg";
        }, 300);
        
    } else {
        
        tl.timeScale(1);
        // var currentTimeScale = tl.timeScale(); //gets current timeScale
     
        tl.play();
        
        window.setTimeout(()=>{
            for(let i=0; i<dashImages.length-2; i++){
                dashImages[i].src = "../../assets/img/dash-black.svg";
            }
            // nav.style.color = "#474747"; 
            navContactLinks.css("color" , "#474747");
            langMenu.css("color" , "#474747");
            logo.src = "../../assets/img/AlyansGroup-black.svg";
            if (windowWith<=920){
                spanIconCopy.src="../../assets/img/search-icon-black.svg";
            }else {
                spanIcon.src= "../../assets/img/search-icon-black.svg";
            }


        }, 244);

        //disable background scroll
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
    }
    
}); 

// ! animating navigation
var ntl = gsap.timeline();
ntl.from(".logo-container", {duration:1, opacity:-1.5, y:-80})
ntl.from(".nav-contacts", {duration:0.6, opacity:-1.5, y:-70})
ntl.from(".lang-menu-container", {duration:0.6, opacity:-1.5, y:-70})
ntl.from(".search-span-copy", {duration:0.5, opacity:-1.5, y:-70})

// ! main content animation
var mtl = gsap.timeline();
mtl.from(".main-aim", {opacity:0, duration:1.3,xPercent: -100} )
mtl.from(".main-header", {opacity:0, duration:0.8, xPercent: -100} )
mtl.from(".main-description", {opacity:0, duration:0.7,xPercent: -100} )
mtl.from(".main-links", {opacity:0, duration:0.3, ease:"power0", xPercent: -100} )



// ! search modal
var desktopBtn = document.querySelector(".search-span-desktop");
var mobileButton = document.querySelector(".search-span-mobile");
var modal = document.querySelector(".modal-bg");
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
    }, 500);
});

mobileButton.addEventListener('click', function(){
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
            body.style.marginRight="0";
        // }, 100);
        
    }
    return getScrollbarWidth();
}


$('.service-tile').mouseover(function(){
    $(this).css(
        'transform', 'scale(1.1)'
    );
    $(this).css(
        'box-shadow', '1px 1px 29px 4px rgba(69,69,69,0.3)'
    );
    $(this).css(
        '-webkit-box-shadow', '1px 1px 29px 4px rgba(69,69,69,0.3)'
    );
    $(this).css(
        '-moz-box-shadow', '1px 1px 29px 4px rgba(69,69,69,0.3)'
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
        'box-shadow', '1px 3px 9px #00000029'
    );
    $(this).css(
        '-webkit-box-shadow', '1px 3px 9px #00000029'
    );
    $(this).css(
        '-moz-box-shadow', '1px 3px 9px #00000029'
    );
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



document.querySelector('.email .footer-contact-links').onclick = function() {
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