let spieler = document.querySelector(".player");
spieler.style.left = "50%";
let spielfeld = document.querySelector(".playground");
let punkteAnzeige = document.querySelector(".punkte");
let HealthAnzeige = document.querySelector(".heal");
let ScoreAnzeige = document.querySelector(".score");
let score = 0;
let Health = 5;
let Geschwindikeit = 5;

let timer = new Timer(20);

let timer2 = new Timer(1);

function move_object(objects) {
	for (let object of objects) {
		object.style.top = parseInt(object.style.top) + Geschwindikeit + "px";
		if (parseInt(object.style.top) > 2000) {
			object.parentNode.removeChild(object);
		}
	}
}

function minus_health(item, menge) {
	if (anyCollision(spieler, item)) {
		Health = Health - menge;
		HealthAnzeige.textContent = Health + " Leben";
		let collisions = allCollisions(spieler, item);
		for (let collision of collisions) {
			collision.parentNode.removeChild(collision);
		}
		if (Health <= 0) {
			localStorage.setItem("gameover_score", score);
			location.replace("gameover.html");
		}
	}
}

function plus_coin(item, menge) {
	if (anyCollision(spieler, item)) {
		score = score + menge;
		punkteAnzeige.textContent = score + " Punkte";
		localStorage.setItem("gameover_score", score);

		if (score == 100) {
			Geschwindikeit = 10;
		} else if (score == 200) {
			Geschwindikeit = 20;
		}

		console.log(score);

		let collisions = allCollisions(spieler, item);

		for (let collision of collisions) {
			collision.parentNode.removeChild(collision);
		}
		if (score > localStorage.getItem("HighScore")) {
			localStorage.setItem("HighScore", score);
		}
	}
}

function Key_Control() {
	if (keyboard(39)) {
		// Right (➡️)
		spieler.style.left = parseInt(spieler.style.left) + 1 + "%";
	}
	if (keyboard(37)) {
		// Left (⬅️)
		spieler.style.left = parseInt(spieler.style.left) - 1 + "%";
	}
	if (keyboard(68)) {
		// Right (a)
		spieler.style.left = parseInt(spieler.style.left) + 1 + "%";
	}
	if (keyboard(65)) {
		// Left (d)
		spieler.style.left = parseInt(spieler.style.left) - 1 + "%";
	}
	if (keyboard(27)) {
		// Exit (Esc)
		location.assign("index.html");
	}
}

function Create_Item() {
	if (timer.ready()) {
		let h = document.createElement("div");

		let aitem = Math.round(Math.random() * 10);
		if (aitem == 1) {
			h.classList.add("item1p");
		} else if (aitem == 2) {
			h.classList.add("item2p");
		} else if (aitem == 3) {
			h.classList.add("item3p");
		} else if (aitem == 4) {
			h.classList.add("item1n");
		} else if (aitem == 5) {
			h.classList.add("item2n");
		} else if (aitem == 6) {
			h.classList.add("item3n");
		} else if (aitem == 7) {
			h.classList.add("item4p");
		} else if (aitem == 8) {
			h.classList.add("item5p");
		}

		h.style.top = "-" + (Math.floor(Math.random() * 10) + "px");
		h.style.left = Math.floor(Math.random() * 100) + "%";

		spielfeld.appendChild(h);
	}
}

function loop() {
	Key_Control();

	Create_Item();

	const posplayer = spieler.style.left;

	// Links durchlaufen nach rechts
	if (parseInt(posplayer) == 0) {
		spieler.style.left = "99%";
	}
	// Rechts durchlaufen nach links
	if (parseInt(posplayer) == 100) {
		spieler.style.left = "1%";
	}

	// selektiert die Items
	let item1p = document.querySelectorAll(".item1p");
	move_object(item1p);

	let item2p = document.querySelectorAll(".item2p");
	move_object(item2p);

	let item3p = document.querySelectorAll(".item3p");
	move_object(item3p);

	let item4p = document.querySelectorAll(".item4p");
	move_object(item4p);

	let item5p = document.querySelectorAll(".item5p");
	move_object(item5p);

	let item1n = document.querySelectorAll(".item1n");
	move_object(item1n);

	let item2n = document.querySelectorAll(".item2n");
	move_object(item2n);

	let item3n = document.querySelectorAll(".item3n");
	move_object(item3n);

	plus_coin(item1p, 20);
	plus_coin(item2p, 10);
	plus_coin(item3p, 25);
	plus_coin(item4p, 10);
	plus_coin(item5p, 20);
	minus_health(item1n, 1);
	minus_health(item2n, 1);
	minus_health(item3n, 1);

	// Reload all (Loop)
	window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
