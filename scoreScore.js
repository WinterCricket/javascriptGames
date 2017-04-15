
var pblueButton = document.querySelector("#pblue");
var porangeButton = document.querySelector("#porange");
var resetButton = document.querySelector("#reset");
//
var pblueDisplay = document.querySelector("#pblueDisplay");
var porangeDisplay = document.querySelector("#porangeDisplay");

var pblueScore = 0;
var porangeScore = 0;
var gameEnd = false;//add boolean to limit game run
var victoryScore = 6;


pblueButton.addEventListener("click", function(){
	if(!gameEnd){
		pblueScore++;
		if(pblueScore === victoryScore){
			pblueDisplay.classList.add("winnerBlue");
			gameEnd = true;
		}
		pblueDisplay.textContent = pblueScore;
	}
	
});
porangeButton.addEventListener("click", function(){
	if(!gameEnd){
		porangeScore++;
		if(porangeScore === victoryScore){
			porangeDisplay.classList.add("winnerOrange");
			gameEnd = true;
		}
		porangeDisplay.textContent = porangeScore;
	}
	
});
resetButton.addEventListener("click", function(){
	alert("Clicked!");
});