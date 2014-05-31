// Ian Dorosh
// SDI 1405
// Project 4

var numberSet = [5,3,2,6,7,8,23,554,344,2,1,];

//Functions

//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
// Number function

var roundingNum = function(number) {
	var finalNumber;
	
	finalNumber = number.toFixed(2);
	
	return (number + " is rounded 2 decimal places to " + finalNumber);
	
};


//Find the smallest value in an array that is greater than a given number
//Array Function

var lowestNumber = function(numberSet, givenNumber) {
		
		var bigNumbers = [];
		var smallestNumber;
	
		for(i=0; i < numberSet.length; i++) {
			
			if (numberSet[i] > givenNumber) {
					bigNumbers.push(numberSet[i]);
			};
		};
		
		smallestNumber = bigNumbers[0];
		
		for (j = 0; j < bigNumbers.length; j++) {
			if (smallestNumber > bigNumbers[j]) {
				smallestNumber = bigNumbers[j];
			};
		};
		
			return(smallestNumber + " is the smallest number that is larger than " + givenNumber + ".");
};

//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
// Number Function

var convertNumber = function (string){
	
	var number = parseInt(string);
	return (number);
};	
	
//Title-case a string (split into words, then uppercase the first letter of each word).
//String Function
var splitWords = function(inputString){
	var seperateWords;
	var finalString;
	
	var seperateWords = (inputString.split (/\b\s+(?!$)/));
	
		for (i = 0; i < seperateWords.length; i++) {
			seperateWords[i] = seperateWords[i].charAt(0).toUpperCase() + seperateWords[i].substr(1);
		}
			var finalString = (seperateWords.join(" "));
			return finalString;
};

//Does a string follow a 123-456-7890 pattern like a phone number?
//String Function
var validNum = function(phoneNum){
		var format;
		format = /^\(?([0-9]{3})\)?[-]([0-9]{3})?[-]([0-9]{4})$/;
			if (format.test(phoneNum)) {
				return true;
			} else {
				return false;
				};
};

// Does a string follow an aaa\@bbb.ccc pattern like an email address? 
// String Function
var validEmail = function(email){
		var format;
		format = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;
			if (format.test(email)) {
				return true;
			} else {
				return false;
				};
};


//Main Code
console.log (roundingNum(3.249));

console.log (lowestNumber(numberSet, 4));

console.log (convertNumber("567"));

console.log (splitWords("hi my name is ian dorosh"));

console.log (validNum("847-438-4756"));
console.log (validNum("45-345-3232"));

console.log (validEmail("iDorosh@fullsail.edu"));
console.log (validEmail("iDoroshfullsail.edu"));