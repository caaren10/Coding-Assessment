var startElm = document.querySelector("#startButton");
var questions = [
    {
        question: "Which HTML tag (< >) is used to link an external CSS file?"
        choices: "style", "link","css", "script"
    }
    {

    }
]

startElm.addEventListener('click', startQuiz)


function displayQuestion(place){
//     <!-- <div id="one">
//     <h2> Which HTML tag (< >) is used to link an external CSS file?</h2>
//     <h4><button class = "incorrectButton" class="A">A</button> ' style '</h4>
//     <h4><button class = "correctButton" class="B">B</button> ' link ' </h4>
//     <h4><button class = "incorrectButton" class="C">C</button> ' css '</h4>
//     <h4><button class = "incorrectButton" class="D">D</button> ' script '</h4>   
// </div>
    var divElm = document.createElement('div');
    var h2Elm = document.createElement('h2');
    var buttonElm =document.createElement('button');


    // add questions to elements
    h2Elm.innerText(questions.question[place])

}

function startQuiz(){
    // timer starts - doesnt need to be a dunction 
    // start button gets deleted - not a function
    // first question is showed
    displayQuestion
}



// var ElstartButton = document.querySelector("#startButton");
// var EltimeLeft =  document.querySelector(".timeLeft");
// var ElallDone = document.querySelector(".allDone");
// var ElhighScores = document.querySelector(".highScores");
// var ElquestionContainer = document.querySelector(".question-container");
// var ElScore = document.querySelector(".score");
// var initialsInput =document.querySelector(".initials");
// var ElHighScorespage = document.querySelector(".highScoresPage")

// let currentQuestionIndex = 0;
// let EltimeLeft = 60;
// let score = 0;

// let timerInterval;

// ElstartButton.addEventListener("click", startQuiz);

// ElhighScores.addEventListener("click", showHighScores);

// function startQuiz(event) {
//     event.preventDefault();
//     ElstartButton.computedStyleMap.display="none";
//     displayQuestion();
//     startTimer();
// }

// function displayQuestion(){


// }

// function startTimer(){
//     timerInterval = setInterval(function (){
//         if(EltimeLeft>0) {
//             EltimeLeft --;
//             EltimeLeftElement.textContent = EltimeLeft;
//         }
//         else {
//             clearInterval(timerInterval);
//             endQuiz();
//         }
//     }, 1000);
// }

// function endQuiz(){
//     hideQuestions();
//     questionContainers[questionContainers.length -1].style.display = "block";
//     ElScore.textContent = score;
//     initialsInput.style.display = "block";
// }

// function showHighScores(){
//     ElHighScorespage.innerHTML = "High Scores Page";
// }