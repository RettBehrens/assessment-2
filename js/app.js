//confirms html and js are linked.
console.log("linked");

//keydown eventListener and console.log reflecting keydown.
/*document.onkeydown = function(key){
	if (key.which === 39) {
		console.log("right arrow keydown event");
	}
	if (key.which === 90) {
		console.log("Z keydown event");
	}
};*/

//identify/create the characters in the race for the computer.
window.onload = function() {
	racers = {
		hare: {
			div: document.getElementById("hare"),
			name: "The Hare"
		},
		tortoise: {
			div: document.getElementById("tortoise"),
			name: "The Tortoise"
		}
	};
	racersReady();
};

//define racers globally.
var racers = {};

//make the start-race button register a click and start the race.
function racersReady() {
	document.getElementById("start").onclick = function () {
		startRace(racers);
	};
};

//starting the race positions both racers at 0.
function startRace(racers) {
	racers.hare.div.style.left = 0;
	racers.tortoise.div.style.left = 0;

	document.onkeydown = function(key) {
		racers.hare.position = parseInt(racers.hare.div.style.left, 10);
		racers.tortoise.position = parseInt(racers.tortoise.div.style.left, 10);
		checkWinner();
		runRacer(key);
	};
};

//check to see if the racer divs have crossed the width of the page
function checkWinner() {
	if (racers.hare.position + racers.hare.div.offsetWidth >= window.innerWidth - 150) {
		setWinState(racers.hare, racers);
	};
	if (racers.tortoise.position + racers.tortoise.div.offsetWidth >= window.innerWidth - 150) {
		setWinState(racers.tortoise, racers);
	};
};

//each time the corresponding key is pressed, move racers 40px
function runRacer(key) {
	switch(key.which) {
		case 90:
			var hop = racers.hare.position += 40;
			racers.hare.div.style.left = hop + "px";
			break;
		case 39:
			var inchForward = racers.tortoise.position += 40;
			racers.tortoise.div.style.left = inchForward + "px";
			break;
	};
};

//when the race is over, stop key actions and announce winner
function setWinState(winner, racers) {
	document.onkeydown = null;
	document.getElementsByTagName("h1")[0].innerText = winner.name + " Wins the race!";
};

