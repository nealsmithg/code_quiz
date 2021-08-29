var highscores = [];
var startbutton = document.getElementById("start");

var timeEl = document.getElementById("timer");
var mainPage = document.getElementById("mainbody");
var secondsLeft = 45;
var quizEl = document.getElementById("quiz");
var questions = [
    question1 = "blah"
];

startbutton.onclick = function(){
    mainPage.style.display = "none";
    timer();

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
    var curentQuestion
}