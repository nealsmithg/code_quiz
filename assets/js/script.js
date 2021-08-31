var highscores = [];
var startbutton = document.getElementById("start");

var timeEl = document.getElementById("timer");
var mainPage = document.getElementById("mainbody");
var secondsLeft = 45;
var quizEl = document.getElementById("quiz");
var questions = [
    {
    question: "Which built-in method reverses the order of the elements of and array?",
    answers: {
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above"
    },
    correctAnswer: "b"
    },
    {
    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
    answers: {
        a: "add()",
        b: "merge()",
        c: "concat()",
        d: "append()"
    },
    correctAnswer: "c"
    },
    {
    question: "Which of the fallowing function of String object splits a String object into an array of strings by separating the string into substrings?",
    answers: {
        a: "slice()",
        b: "split()",
        c: "replace()",
        d: "search()"
    },
    correctAnswer: "b"
    },
    {
    question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
    answers: {
        a: "anchor()",
        b: "big()",
        c: "blink()",
        d: "italics()"
    },
    correctAnswer: "b"
    },
    {
    question: "the 'function' and 'var' both are known as:",
    answers: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes"
    },
    correctAnswer: "c"
    },
    {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answers: {
        a: "Global variable",
        b: "Local variable",
        c: "both",
        d: "neither"
    },
    correctAnswer: "b"
    },
    {
    question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
    answers: {
        a: "slice()",
        b: "split()",
        c: "substr()",
        d: "search()"
    },
    correctAnswer: "c"
    },
    {
    question: "In JavaScript the x===y statement implies that:",
    answers: {
        a: "Both x and y are equal in calue, type and reference address as well",
        b: "Both are x and y are equal in value only",
        c: "Both are equal in the value and data type",
        d: "Both are not same at all"
    },
    correctAnswer: "c"
    },
    {
    question: "Which of the following is not JavaScript Data Types?",
    answers: {
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "Float"
    },
    correctAnswer: "d"
    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
        a: "<script>",
        b: "<head>",
        c: "<meta>",
        d: "<style>"
    },
    correctAnswer: "b"
    }
];
var wrong = 0;
var correct = 0;
var questionNumber = 0;

var questionOrder = [];
function makeQuestionOrder() {
    for(let i = 0; i < questions.length; i++){
        questionOrder.push(i);
    }
    console.log(questionOrder);
    for (var i = questionOrder.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questionOrder[i];
        questionOrder[i] = questionOrder[j];
        questionOrder[j] = temp;
    }
};
makeQuestionOrder();

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
    var curentQuestion = questions[questionNumber].question;
    quizEl.textContent = curentQuestion;
    var answerA = document.createElement("button");
    answerA.textContent = "A:" + questions[questionNumber].answers["a"];
    answerA.setAttribute("data-letter", "a");
    quizEl.appendChild(answerA);
    var answerB = document.createElement("button");
    answerB.textContent = "B:" + questions[questionNumber].answers["b"];
    answerB.setAttribute("data-letter", "b");
    quizEl.appendChild(answerB);
    var answerC = document.createElement("button");
    answerC.textContent = "C:" + questions[questionNumber].answers["c"];
    answerC.setAttribute("data-letter", "c");
    quizEl.appendChild(answerC);
    var answerD = document.createElement("button");
    answerD.textContent = "D:" + questions[questionNumber].answers["d"];
    answerD.setAttribute("data-letter", "d");
    quizEl.appendChild(answerD);
}

quizEl.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true){
        var guess = element.getAttribute("data-letter");
        if (guess === questions[questionNumber].correctAnswer){
            correct++;
        }else{
            wrong++;
            secondsLeft = secondsLeft - 5;
        }
        questionNumber++;
        console.log(correct, wrong)
        getQuestion();
    }
});