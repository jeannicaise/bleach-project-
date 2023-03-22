
window.addEventListener('load', () => {
    buttonlistener();
    initSlider();
}) 

let slideIndex = 0
let slides = document.querySelectorAll('.slide');
const TIME = 8000;

var prev = document.getElementById("prev")
var next = document.getElementById("next")

 //--------- fonction contenant les évènements des boutons "next" et "previous" -------------
var buttonFonction = {
    prevSlide: () => {
        let index = slideIndex - 1
        showSlide(index)
    },
     nextSlide: () => {
        let index = slideIndex + 1
        showSlide(index)
    },
} 
// ------------------on active les boutons avec les methodes de la fonction précédente---------------
let buttonlistener = () => {

     prev.addEventListener('click', buttonFonction.prevSlide);
     next.addEventListener('click', buttonFonction.nextSlide);
};



// apparition des boutons lors la souris passe sur le carousel

const carousel = document.querySelector(".slides-container")
const buttonsCar= document.getElementById("buttons")

carousel.addEventListener("mouseout", function(){
    buttonsCar.classList.toggle("hiddenBtn");
})

carousel.addEventListener("mouseover", function(){
    buttonsCar.classList.remove("hiddenBtn");
})



//-------------- cacher l'ensemble des slides sauf la 1ère ( à partir de l'index 1)-------------
let hideSlide = () => {
    displayDot()
    for (let i = 1; i < slides.length; i++) {
        const slide = slides[i];
        slide.style.display = "none"
    }
}

let initSlider = () => {
    hideSlide()
}
//----------------Création des boutons selectionneur sur chaque slide ---------------------------

let displayDot = () => {
    for (let i = 0; i < slides.length; i++) {
        let span = document.createElement("span")

        span.addEventListener("click", () => showSlide(i)) 
        span.className= 'dot';
        if(i === 0){
            span.classList.add("active")
        }
        document.getElementById('dots').appendChild(span)
    }
}
// -------------------faire apparaitre chacune des slides ------------------------------------ 

let showSlide = (index) =>{

    let lastSlideIndex = slideIndex

    // utilisation du modulo pour que le carrousel puisse défiler en boucle en prenant en compte la totalité de sa taille

    index = ((index % slides.length) + slides.length) % slides.length;

    slideIndex = index

    // Cacher la slide précédente
   slides[lastSlideIndex].style.display = "none";
    // Affichage du slide correspondant à l'indice reçu en paramètre
  slides[slideIndex].style.display = "block"

   setActiveSlide(lastSlideIndex, slideIndex);
}  
// -----------------------------------changer la slide-----------------------------------------
let changeSlide = () =>{
    let index = slideIndex +1
    showSlide(index)
}
// ----------rendre actif le selecteur  (bouton du bas) lorsque la slide change------------------

let setActiveSlide = (lastIndex, currentIndex) =>{
    let dots = document.querySelectorAll(".dots span");

    dots[lastIndex] ? dots[lastIndex].classList.remove("active") : null

    dots[currentIndex] ? dots[currentIndex].classList.add("active") : null
}
//------- on active le défilement automatique des slides au bout de 6 sec --------------------------

let intervalSlide = setInterval(changeSlide,TIME)


