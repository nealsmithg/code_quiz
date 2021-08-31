var highscores = [];
var startbutton = document.getElementById("start");

var timeEl = document.getElementById("timer");
var mainPage = document.getElementById("mainbody");
var secondsLeft = 45;
var quizEl = document.getElementById("quiz");
var questions = [
    {
    question: "Who invented Javascript",
    answers: {
        a: "d",
        b: "s",
        c: "b"
    },
    correctAnswer: "c"
    }
];


startbutton.onclick = function(){
    mainPage.style.display = "none";
    timer();
    getQuestion();
};

function timer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "seconds left.";
        
        

        if(secondsLeft === 0){
            clearInterval(timerInterval);

        };
    },1000);
};

function getQuestion(){
    var curentQuestion = questions[0].question;
    quizEl.textContent = curentQuestion;
    var answerA = document.createElement("button");
    answerA.textContent = "A:" + questions[0].answers["a"];
    answerA.setAttribute("data-letter", "a");
    answerA.onclick = checkAnswer("a");
    quizEl.appendChild(answerA);
    var answerB = document.createElement("button");
    answerB.textContent = "B:" + questions[0].answers["b"];
    answerB.setAttribute("data-letter", "b");
    quizEl.appendChild(answerB);
    var answerC = document.createElement("button");
    answerC.textContent = "C:" + questions[0].answers["c"];
    answerC.setAttribute("data-letter", "c");
    quizEl.appendChild(answerC);
    var answerD = document.createElement("button");
    answerD.textContent = "D:" + questions[0].answers["d"];
    answerD.setAttribute("data-letter", "d");
    quizEl.appendChild(answerD);
    console.log(curentQuestion, questions);
}

