 function Dice(sides) {
  this.sides = sides;
 }
  
 /*Creates random number*/
 Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  };

var dice = new Dice(6); /*Determines number of sides*/

/*Add number to HTML*/
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

/*Add dots to HTML*/
function printDiv(dots) {
	var dotBox = document.getElementById("dotBox");
	dotBox.innerHTML = dots;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll(); /*Random Number*/
  var resultHTML = result;
  /*Creates a dot box for every count*/
  resultHTML += '<div id="dotbox">';
  	for (var i = 0; i < result; i ++) {
  	resultHTML += '<div id="dot"></div>';
  	}
  resultHTML += '</div>';
  printNumber(resultHTML); /*Sends to innerHTML function*/
};/*End Click*/