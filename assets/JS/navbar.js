const burger = document.querySelector(".menuBurger")
const navLinks = document.querySelector(".navLinks")

burger.addEventListener("click", function () {
    navLinks.classList.toggle("menu-mobile");
})

// au click: 
// - navLinks se ferme 
// - on se dirige directement vers la section souhaitée

const menuMobile = document.getElementsByClassName(".navLinks.menu-mobile")

// si je clique sur un li => navLinks se ferme (remove menu-mobile)

const menuItems = document.querySelectorAll(".menuItems")

function menuHidden() {
    if (navLinks.classList.contains("menu-mobile"))
    navLinks.classList.remove("menu-mobile")
}

menuItems.forEach(
    function (menuItems) {
        menuItems.addEventListener("click", menuHidden)
    }
)
