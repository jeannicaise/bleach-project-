// PARTIE QUIZ
window.onload = () =>{
    setupListeners()
}

var listenerFunctions = {
 
    showAccordeonContent: (ev) =>{
        let element = ev.target;
        if(element.className){
            // accordeon-title
            if(element.className === "accordeon-title")
            {
                element = element.parentNode
            }
        }else{
            // H2
            element = (element.parentNode).parentNode
        }
        var accordeon_content = element.children[1]
        if(window.getComputedStyle(accordeon_content).display){
           
            if( window.getComputedStyle(accordeon_content).display == "block"){
                accordeon_content.style.display = "none"
            }else{
                accordeon_content.style.display = "block"
            }
            
        }else{
            accordeon_content.style.display = "block"
        }
        element.classList.toggle('active')
    }
}

//  Fonction qui réalise les abonnements 
const setupListeners = () => {

    const accordeon_items = document.querySelectorAll('.accordeon-item')

    for (let index = 0; index < accordeon_items.length; index++) {
        const accordeon_item = accordeon_items[index];
        accordeon_item.onclick = listenerFunctions.showAccordeonContent
        
    }
}


function analyseScore(monScore)
{
    const afficheGood = document.querySelector('.bonne') 
    const afficheBad = document.querySelector('.mauvaise') 
    const quiz1 = document.querySelectorAll('.quiz1')

            if (monScore == "a" ){
                    quiz1[0].style.backgroundColor = "red";
                    quiz1[1].style.backgroundColor = "green";
                    afficheBad.style.display = "block";
                    
                }

            if (monScore == "b") {
                quiz1[1].style.backgroundColor = "green";
                afficheGood.style.display = "block";} 

            if (monScore == "c" ){
                    quiz1[2].style.backgroundColor = "red";
                    quiz1[1].style.backgroundColor = "green";
                    afficheBad.style.display = "block";} 
    };


function analyseScore2(monScore2) {
const afficheGood = document.querySelector('.bonneQ2') 
const afficheBad = document.querySelector('.mauvaiseQ2') 
const quiz2 = document.querySelectorAll('.quiz2')
              // Question 2

        if (monScore2 == "a" ){
            quiz2[0].style.backgroundColor = "green"
            afficheGood.style.display = "block"}
    
     if (monScore2 == "b") {
        quiz2[1].style.backgroundColor = "red";
        quiz2[0].style.backgroundColor = "green";
        afficheBad.style.display = "block";} 
    
     if (monScore2 == "c" ){
            quiz2[2].style.backgroundColor = "red";
            quiz2[0].style.backgroundColor = "green";
            afficheBad.style.display = "block";} 
        };
    

// Audio sur le boutton score
const audio = new Audio("https://www.myinstants.com/media/sounds/bankai3-0.mp3");

const buttons = document.querySelector("#buttonScore");

  buttons.addEventListener("click", () => {
    audio.play(); });

// Calcul du score 

function calculScore() {
    var score = 0;
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var q4 = document.querySelector('input[name="q4"]:checked').value;
    var q5 = document.querySelector('input[name="q5"]:checked').value;
    var q6 = document.querySelector('input[name="q6"]:checked').value;
    var q7 = document.querySelector('input[name="q7"]:checked').value;
    var q8 = document.querySelector('input[name="q8"]:checked').value;
    var q9 = document.querySelector('input[name="q9"]:checked').value;
    var q10 = document.querySelector('input[name="q10"]:checked').value;


    if (q1 == "b") {
        score += 1;
    }
    if (q2 == "a") {
        score += 1;
    }
    if (q3 == "a") {
        score += 1;
    }
    if (q4 == "c") {
        score += 1;
    }
    if (q5 == "c") {
        score += 1;
    }
    if (q6 == "a") {
        score += 1;
    }
    if (q7 == "b") {
        score += 1;
    }
    if (q8 == "a") {
        score += 1;
    }
    if (q9 == "b") {
        score += 1;
    }
    if (q10 == "b") {
        score += 1;
    }
    document.getElementById("score").innerHTML = "Score: " + score + " /10";
}
