let ScoreAnzeige = document.querySelector(".Score");
let HighScoreAnzeige = document.querySelector(".HighScore");
let score_e = localStorage.getItem("gameover_score");
let score_High = localStorage.getItem("HighScore");
ScoreAnzeige.textContent = "Du hast " + score_e + " Punkte Gesammelt";
HighScoreAnzeige.textContent = "HighScore: " + score_High + " Punkte";
