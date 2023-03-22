var tableSlideIndex = 0;
showTableSlides();


// fonction qui va permettre de masquer les slides non actives et d'activer la premier en faisant tout le tableau d'images 
function showTableSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-table");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  tableSlideIndex++;

  if (tableSlideIndex > slides.length) {
    tableSlideIndex = 1
} 

  slides[tableSlideIndex-1].style.display = "block";

  // on programme le changement d'image a 2 sec
  setTimeout(showTableSlides, 2000); 
}
