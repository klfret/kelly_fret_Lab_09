// alert("Lab 9 - JavaScript works! - 23 September 2014");

// Kelly L. Fret
// SDI 1409
// Lab 9 - Math, Number and Date Objects
// 23 September 2014


// ***** Problem 1 - Format a number *****
// globla variables

// var number1 = 567.1671983;
// var number2 = 2;
// 
// var formatNumber = function(num1, num2) {
// 	
	// // format num1 to 2 decimal places and assign formatted number to num1 and return value
	// num1 = num1.toFixed(num2);
// 	
	// return num1;
// };
// 
// newNumber = formatNumber(number1, number2);
// 
// console.log("The formatted number is now: " + newNumber);


// **************************************************************************************************************************

// ***** Problem 2 - Number vs. String *****
// global variables

var myNumber = "617";

// if argument passed is a number, convert to a number and return value
var numberString = function(string) {
	
	var numStr;
	
	if (!isNaN(string)) {
		numStr = parseFloat(string);
	} else {
		numStr = "not a number";
	}
	
	return numStr;
};

returnedValue = numberString(myNumber);
console.log("The value is: " + returnedValue);











