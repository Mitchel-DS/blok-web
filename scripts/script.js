// JavaScript Document
console.log("connection gelukt");

var menubutton = document.querySelector(".menu-button");
var cartbutton = document.querySelector(".cart-button");
var navigation = document.querySelector(".navigation-menu-hidden");

menubutton.addEventListener('click', dropMenu);
cartbutton.addEventListener('click', dropCart);

function dropMenu(){
    navigation.classList.toggle("navigation-menu");
}
