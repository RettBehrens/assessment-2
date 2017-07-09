//confirms html and js are linked.
console.log("linked");

//identifies the moving pieces as variables.
var movingPieces = {
	hare: {
		div: document.getElementById("hare"),
		name: "The Hare"
	},
	tortoise: {
		div: document.getElementById("tortoise"),
		name: "The Tortoise"
	},
	riboon: {
		div: document.getElementById("ribbon")
	}
};

//keydown eventListener and console.log reflecting keydown.
document.onkeydown = function(key){
	if (key.which === 39) {
		console.log("right arrow keydown event");
	}
	if (key.which === 90) {
		console.log("Z keydown event");
	}
};