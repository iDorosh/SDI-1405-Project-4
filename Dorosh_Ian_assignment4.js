// Ian Dorosh
// SDI 1405
// Project 4

var numberSet = [5,3,2,6,7,8,23,554,344,2,1,]
//Functions

//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
// Number function

var roundingNum = function(number) {
	var finalnumber;
	
	finalnumber = number.toFixed(2);
	
	return (number + " is rounded 2 decimal places to " + finalnumber);
	
}


//Find the smallest value in an array that is greater than a given number
//Array Function

var lowestNumber = function(numberSet, givenNumber) {
		
		var bigNumbers = [];
		var smallestNumber;
	
		for(i=0; i < numberSet.length; i++) {
			
			if (nuberSet[i] > givenNumber) {
					bigNumbers.push(numberSet[i]);
			};
		};
		
		smallestNumber = bigNumbers[0];
		
		for (j = 0; j < bigNumbers.length; j++) {
			if (smallestNumber > bigNumbers[j]) {
				smallestNumber = bigNumbers[j];
			};
		};
		
			return(smallestNumber + " is the smallest number that is larger than " + givenNumber + ".")
};






//Main Code
console.log (roundingNum(3.249))
consol.log (lowestNumber(numberSet, 4))
	