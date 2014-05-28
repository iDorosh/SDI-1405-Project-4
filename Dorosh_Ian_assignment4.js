// Ian Dorosh
// SDI 1405
// Project 4

//Functions

//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
// Number function

var roundingNum = function(number) {
	var finalnumber;
	
	finalnumber = number.toFixed(2);
	
	return (number + " is rounded 2 decimal places to " + finalnumber);
	
}


console.log (roundingNum(45.45644))
	