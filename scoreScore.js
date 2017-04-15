
var pblueButton = document.querySelector("#pblue");
var porangeButton = document.querySelector("#porange");
var resetButton = document.querySelector("#reset");
//
var pblueDisplay = document.querySelector("#pblueDisplay");
var porangeDisplay = document.querySelector("#porangeDisplay");

var pblueScore = 0;
var porangeScore = 0;
var gameEnd = false;//add boolean to limit game run


pblueButton.addEventListener("click", function(){
	pblueScore++;
	
	pblueDisplay.textContent = pblueScore;
});
porangeButton.addEventListener("click", function(){
	porangeScore++;
	
	porangeDisplay.textContent = porangeScore;
});
resetButton.addEventListener("click", function(){
	alert("Clicked!");
});