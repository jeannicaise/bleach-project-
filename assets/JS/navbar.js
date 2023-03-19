const burger = document.querySelector(".menuBurger")
const navLinks = document.querySelector(".navLinks")

burger.addEventListener("click", function () {
    navLinks.classList.toggle("menu-mobile");
})

// au click: 
// - navLinks se ferme 
// - on se dirige directement vers la section souhaitée

const accueil = document.querySelector("#home")
const bio = document.querySelector("#bio")
const technic = document.querySelector("#technic")
const trans = document.querySelector("#trans")
const questions = document.querySelector("#questions")
const menuMobile = document.querySelector(".menu-mobile") 

accueil.addEventListener("click", function () {
    console.log("ok");
})