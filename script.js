document.addEventListener("DOMContentLoaded", function () {
    var startElm = document.querySelector("#startButton");
    var nextElm = document.querySelector("#next-button");
    var questionsCont = document.querySelector("#questions-container");
    var optionsCont = document.querySelector("#options-container");
    var resultsCont = document.querySelector("#results-container");
    var timer = document.querySelector("#time");
    var initialsInput = document.createElement("input");
    var saveButton = document.createElement("button");
    var highScoresButton = document.querySelector("#highScoresButton");

    let currentQuestionIndex = 0;
    let score = 0;
    let timeRemaining = 60;


    const questions = [
        {
            question: "Which HTML tag (< >) is used to link an external CSS file?",
            choices: ["style", "link", "css", "script"],
            correctAnswer: "link",
        },
        {
            question: "What does the typeof operator in JavaScript return for the data type of null?",
            choices: ["undefined", "null", "object", "string"],
            correctAnswer: "object",
        },
        {
            question: "In the context of frontend development, what does the term 'DOM' stand for?",
            choices: ["Document Objext Model", "Data Object Model", "Document Oriented Model", "Design Object Model"],
            correctAnswer: "Document Object Model",
        },
        {
            question: "Which command is used to clone a Git repository from a remote URL?",
            choices: ["git clone", "git pull", "git push", "git fetch"],
            correctAnswer: "git clone",
        },
        {
            question: "In a Node.js applications, what module is commonly used for handling asynchronous operations?",
            choices: ["fs", "http", "async", "events"],
            correctAnswer: "async"
        },
        {
            question: "Which SQL clause is used to filter the results of a SELECT statement?",
            choices: ["WHERE", "HAVING", "FILTER", "SELECT"],
            correctAnswer: "WHERE",
        },
        {
            question: "What does the CSS property 'margin:auto;' do?",
            choices: ["Adds equal margins on all sides of an element", "Centers the element horizontally", "Centers the element vertically", "Removes all margina from the element"],
            correctAnswer: "Centers the element horizontally",
        },
        {
            question: "What is the purpose of the CSS 'z-index' property?",
            choices: ["It sets the background color of an element", "It controls the order of positioning of stacked elements", "It adjusts the transparency of an element", "It defines the font size of an element"],
            correctAnswer: "It controls the order of positioning of stacked elements",
        },
        {
            question: "What is the difference between let, const, and var in JavaScript for declaring variables?",
            choices: ["They are interchangeable and can be used in any context", "let is block-scoped, const is used for constants, and var is function-scoped", "var is block-scoped, let is function-scoped, and const is globally scoped", "const is block-scoped, let is globally scoped, and var is function-scoped"],
            correctAnswer: "let is block-scoped, const is used for constants, and var is function-scoped",
        },
        {
            question: "What is the difference between let, const, and var in JavaScript for declaring variables?",
            choices: ["They are interchangeable and can be used in any context", "let is block-scoped, const is used for constants, and var is function-scoped", "var is block-scoped, let is function-scoped, and const is globally scoped", "const is block-scoped, let is globally scoped, and var is function-scoped"],
            correctAnswer: "let is block-scoped, const is used for constants, and var is function-scoped",
        },
        {
            question: "Explain the concept of event delegation JavaScript.",
            choices: ["It refers to the process of handling events using inline event handlers", "It involves assigning multiple events to a single element.", "It is a technique where a single event listener is used to manage all the events for a group of child elements.", "It is the practice of delaying the execution of certain events."],
            correctAnswer: "It is a technique where a single event listener is used to manage all the events for a group of child elements.",
        }
    ]

    function startQuiz() {
        startElm.style.display = "none";
        nextElm.style.display = "block";
        showQuestion(currentQuestionIndex);
        startTimer();
    }

    function showQuestion(index) {
        var currentQuestion = questions[index];
        questionsCont.textContent = currentQuestion.question;
        optionsCont.innerHTML = "";
        currentQuestion.choices.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => {
                checkAnswer(option, currentQuestion.correctAnswer);
            });
            optionsCont.appendChild(button);
        });
    }

    function checkAnswer(selectedOption, correctAnswer) {
        if (selectedOption === correctAnswer) {
            score++;
            resultsCont.textContent = "Correct!";
        } else {
            timeRemaining -= 10;
            resultsCont.textContent = "Incorrect!";
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    function startTimer() {
        const countdown = setInterval(function () {
            if (timeRemaining <= 0 || currentQuestionIndex === questions.length) {
                clearInterval(countdown);
                endQuiz();
            } else {
                timer.textContent = timeRemaining;
                timeRemaining--;
            }
        }, 1000);
    }

    function endQuiz() {
        nextElm.style.display = "none";
        highScoresButton.style.display = "block";
        resultsCont.textContent = `Game Over! Your score is ${score}.`;

        initialsInput.setAttribute("placeholder", "Enter your initials");
        initialsInput.setAttribute("id", "initialsInput");
        saveButton.textContent = "Save Score";
        saveButton.addEventListener("click", saveScore);

        resultsCont.appendChild(initialsInput);
        resultsCont.appendChild(saveButton);
    }

    function saveScore() {
        
        var initials = document.querySelector("#initialsInput").value;
    
        resultsCont.textContent = `Score saved for ${initials}.`;
    }

    function viewHighScores() {
        var highScores = localStorage.getItem("highScore");
        if (highScores) {
            highScores = JSON.parse(highScores);
            resultsCont.innerHTML = "<h2>High Scores</h2>";
            highScores.forEach((hs) => {
                var scoreItem = document.createElement("div");
                scoreItem.textContent = `${hs.initials}: ${hs.score}`;
                resultsCont.appendChild(scoreItem);
            });
        } else {
            resultsCont.textContent = "No high scores available.";
        }
    }

    startElm.addEventListener('click', startQuiz);
    highScoresButton.addEventListener('click', viewHighScores);
});