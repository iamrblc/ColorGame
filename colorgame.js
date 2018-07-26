var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected"); 
	easyButton.classList.add("selected"); 
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected"); 
	easyButton.classList.remove("selected"); 
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate random colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of the squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";

})
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//Add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	//Add click listners to the squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
};

function changeColors(color) {
	//loop throuh all squares
	for(var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to the array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick "red" from 0 to 255
	var randomRed = Math.floor(Math.random() * 256);
	//pick "green" from 0 to 255
	var randomGreen = Math.floor(Math.random() * 256);
	//pick "blue" from 0 to 255
	var randomBlue = Math.floor(Math.random() * 256);
	return "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
};