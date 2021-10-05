// JavaScript Document
console.log("connection gelukt");

var menubutton = document.querySelector(".menu-button");
var cartbutton = document.querySelector(".cart-button");
var nav = document.querySelector(".navigation");
var navigation = document.querySelector(".navigation-menu-hidden");
var cart = document.querySelector(".navigation-cart-hidden");

menubutton.addEventListener('click', dropMenu);
cartbutton.addEventListener('click', dropCart);

function dropMenu(){
    if(!cart.classList.contains(".navigation-cart")){
        navigation.classList.toggle("navigation-menu");
        cart.classList.remove("navigation-cart");
    }
}

function dropCart(){
    if(!navigation.classList.contains(".navigation-menu")){
        cart.classList.toggle("navigation-cart");
        navigation.classList.remove("navigation-menu");
    }  
}
