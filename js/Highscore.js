let HighScoreAnzeige = document.querySelector(".HighScore");
let score_High = localStorage.getItem("HighScore");
HighScoreAnzeige.textContent = "Highscore: " + score_High + " Punkte";
