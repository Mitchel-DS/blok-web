// JavaScript Document
// check for connection with script
console.log("connection successful.");

var menubutton = document.querySelector(".menu-button");
var cartbutton = document.querySelector(".cart-button");

var navbar = document.querySelector(".navigation");
var navigation = document.querySelector(".navigation-menu-hidden");
var cart = document.querySelector(".navigation-cart-hidden");

var storeWelcome = document.querySelector(".store-welcome");

var main = document.querySelector(".store");

menubutton.addEventListener('click', dropMenu);
cartbutton.addEventListener('click', dropCart);

function dropMenu(){
        navigation.classList.toggle("navigation-menu");
        cart.classList.remove("navigation-cart");
        navbar.classList.toggle("navigation-menu-shown");
}

function dropCart(){
        cart.classList.toggle("navigation-cart");
        navigation.classList.remove("navigation-menu");
        main.classList.toggle("cart-background");
}

function changeWelcomeColor(){
        storeWelcome.classList.add("store-welcome-color");
}

setTimeout(changeWelcomeColor, 1000);
