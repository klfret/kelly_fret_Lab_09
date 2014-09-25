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

// var myNumber = "617";
// 
// // if argument passed is a number, convert to a number and return value
// var numberString = function(string) {
// 	
	// var numStr;
// 	
	// if (!isNaN(string)) {
		// numStr = parseFloat(string);
	// } else {
		// numStr = "not a number";
	// }
// 	
	// return numStr;
// };
// 
// returnedValue = numberString(myNumber);
// console.log("The value is: " + returnedValue);


// **************************************************************************************************************************

// ***** Problem 3 - Date Differences *****
// global variables

var firstDate = "05/30/2014";
var secondDate = "05/10/2014";
var string3;
var strDay;

// function - compare two dates and return the difference
var dateDifferences = function(dateArg1, dateArg2, strAgr3) {
	
	// local variables
	var date1;
	var date2;
	
	// convert dates, perform subtraction and assign value to dateDiff
	date1 = new Date(dateArg1);
	date2 = new Date(dateArg2);
	dateDiff = date1 - date2;

	
// if user enters hours, calculate for hours
if (strAgr3 === "hours") {
	dateDiff = Math.abs(dateDiff/1000/60/60);
}

// if user enters days, calculate for days
else if (strAgr3 === "days") {
	dateDiff = Math.abs(dateDiff/1000/60/60/24);
}

// return dateDiff's value
return dateDiff;
	
};

// MAIN CODE
// prompt user for input
string3 = prompt("Do you want the difference returned in:  \n\n \"hours\" or \"days\"? ", "hours");

// call function and assign returned value to returnedValue
returnedValue = dateDifferences(firstDate, secondDate, string3);

if (string3 === "days" && returnedValue === 1) {
	strDay = "day";
	console.log("The difference between the two dates is: " + returnedValue + " " + strDay);
} 
else if (string3 === "days" && returnedValue > 1) {
	strDay = "days";
	console.log("The difference between the two dates is: " + returnedValue + " " + strDay);
}
else if (string3 === "hours") {
	console.log("The difference between the two dates is: " + returnedValue + " " + string3);
}


