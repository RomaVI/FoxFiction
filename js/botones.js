document.querySelector(".bot_menu").addEventListener("click", menu);

var line1__bars = document.querySelector(".line1_menu");
var line2__bars = document.querySelector(".line2_menu");
var line3__bars = document.querySelector(".line3_menu");
let logo = document.querySelector(".logo");
let nav = document.querySelector("#nav");
let main = document.querySelector(".main");
let banner = document.querySelector(".banner");
let cont_menu = document.querySelector(".cont_menu");
let body = document.querySelector(".body");


function menu(){
    line1__bars.classList.toggle("activeline1_menu");
    line2__bars.classList.toggle("activeline2_menu");
    line3__bars.classList.toggle("activeline3_menu");
    logo.classList.toggle("active");
    nav.classList.toggle("active");
    main.classList.toggle("active");
    banner.classList.toggle("active");
    body.classList.toggle("active");
}

