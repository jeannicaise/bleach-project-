/* menu burger version mobile */

const burger = document.querySelector(".menuBurger")
const navLinks = document.querySelector(".navLinks")


burger.addEventListener("click", function () {
    navLinks.classList.toggle("menu-mobile");
})

// au click: 
// - navLinks se ferme 
// - on se dirige directement vers la section souhaitée

const menuMobile = document.getElementsByClassName(".navLinks.menu-mobile")
const menuItems = document.querySelectorAll(".menuItems")

function menuHidden() {
    if (navLinks.classList.contains("menu-mobile"))
    navLinks.classList.remove("menu-mobile")
}

/* au clique de chaque li, la classe s'enlève => le menu disparait*/
menuItems.forEach(
    function (menuItems) {
        menuItems.addEventListener("click", menuHidden)
    }
)

/* boutton scroll top qui n'apparait qu'en fonction d'une valeur y du scroll vers le bas*/

const hiddenBtn = document.getElementById(`hiddenButton`)

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        hiddenBtn.classList.add('scrollTopButton');
    }else{
        hiddenBtn.classList.remove('scrollTopButton');
    }
})
