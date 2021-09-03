var clearbtn = document.getElementById("clear");
var highscores = [];
var table = document.getElementById("highScoreDisplay")

function init(){
    highscores = JSON.parse(localStorage.getItem("highscores"));
    if (highscores.length == 0){
        table.textContent = "";
    }
    for(var i = 0; i < Object.keys(highscores).length; i++){
        var tr = document.createElement("tr");
        var tablePlace = document.createElement("td");
        tablePlace.textContent = i + 1;
        var tableName = document.createElement("td");
        tableName.textContent = highscores[i].player;
        var tableScore = document.createElement("td");
        tableScore.textContent = highscores[i].score;
        tr.appendChild(tablePlace);
        tr.appendChild(tableName);
        tr.appendChild(tableScore);
        table.appendChild(tr);
    };
};

init();

clearbtn.onclick = function(){
    highscores = [];
    localStorage.setItem("highscores", JSON.stringify(highscores));
    init();
};