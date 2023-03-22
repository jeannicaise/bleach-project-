
const answers = document.getElementsByName("answerQuiz1");
for (let i = 0; i < answers.length; i++) {
	answers[i].addEventListener("click", function() {
		for (let j = 0; j < answers.length; j++) {
			if (j != i) {
				answers[j].disabled = true;

			}
		}
	});
}


const answersQuiz2 = document.getElementsByName("answerQuiz2");
for (let i = 0; i < answersQuiz2.length; i++) {
	answersQuiz2[i].addEventListener("click", function() {
		for (let j = 0; j < answersQuiz2.length; j++) {
			if (j != i) {
				answersQuiz2[j].disabled = true;

			}
		}
	});
}

const answerQuiz3 = document.getElementsByName("answerQuiz3");
for (let i = 0; i < answerQuiz3.length; i++) {
	answerQuiz3[i].addEventListener("click", function() {
		for (let j = 0; j < answerQuiz3.length; j++) {
			if (j != i) {
				answerQuiz3[j].disabled = true;

			}
		}
	});
}

const answerQuiz4 = document.getElementsByName("answerQuiz4");
for (let i = 0; i < answerQuiz4.length; i++) {
	answerQuiz4[i].addEventListener("click", function() {
		for (let j = 0; j < answerQuiz4.length; j++) {
			if (j != i) {
				answerQuiz4[j].disabled = true;

			}
		}
	});
}

const answerQuiz5 = document.getElementsByName("answerQuiz5");
for (let i = 0; i < answerQuiz5.length; i++) {
	answerQuiz5[i].addEventListener("click", function() {
		for (let j = 0; j < answerQuiz5.length; j++) {
			if (j != i) {
				answerQuiz5[j].disabled = true;

			}
		}
	});
}

// Calcul du score 

function calculScore() {
    var score = 0;
    var q1 = document.querySelector('input[name="answerQuiz1"]:checked').value;
    var q2 = document.querySelector('input[name="answerQuiz2"]:checked').value;
    var q3 = document.querySelector('input[name="answerQuiz3"]:checked').value;
    var q4 = document.querySelector('input[name="answerQuiz4"]:checked').value;
    var q5 = document.querySelector('input[name="answerQuiz5"]:checked').value;

    if (q1 == "a") {
        score += 1;
    }
    if (q2 == "a") {
        score += 1;
    }
    if (q3 == "c") {
        score += 1;
    }
    if (q4 == "c") {
        score += 1;
    }
    if (q5 == "b") {
        score += 1;
    }
   
    document.getElementById("score").innerHTML = "Score: " + score + " /5";
}

// Audio sur le boutton score

const buttons = document.querySelector("#buttonScore");
const audio = new Audio("https://www.myinstants.com/media/sounds/bankai3-0.mp3");
buttons.addEventListener("click", () => { audio.play(); });
