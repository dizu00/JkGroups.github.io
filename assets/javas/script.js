'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



function vaim(){
 
  var div = document.getElementById("hello");
  var forms = document.getElementById("hello");
  var second = document.getElementById("home");
  second.classList.add('hero2');
  div.style.visibility = "visible";
  forms.scrollIntoView();

  

}


function redirectToDialpad(number) {
  var dialpadUrl = "tel:" + number;
  window.location.href = dialpadUrl;
}


function dial(){
  var button = document.getElementById("dial");
  var phoneNumber = "8127378652"; 
  redirectToDialpad(phoneNumber);
}


function vaim2(){
 
  var div = document.getElementById("hello");
  var headerss = document.getElementById("tops");
  var second = document.getElementById("home");
  second.classList.remove('hero2');
  second.classList.add('hero');
  headerss.scr;
  div.style.visibility = "hidden";

}


/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 
