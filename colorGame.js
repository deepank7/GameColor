var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", () => {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", () => {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	var numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", () => {
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick a new color from the array
	pickedColor = pickColor();
	// chanege pickedColor to match display
	colorDisplay.textContent = pickedColor;
	// change colors of the square
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background="steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function () {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	// loop through all sqaures
	for (var i = 0; i < squares.length; i++) {
		// change each color to match the correct color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}
	//return that array
	return arr;
}

function randomColors() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}