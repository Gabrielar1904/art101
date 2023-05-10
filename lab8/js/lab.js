// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 9, 2023

// Function multiplies number input for x
function isMultiplied(x) {
    var results = x * 2;
    return results;
}

// Displays output in console to check if function is working
console.log("What is 6 multiplied by 2? ", isMultiplied(6));
console.log("What is 50 multiplied by 2? ", isMultiplied(50));

// Creating an array of number inputs
numArray = [57, 98, 454, 890, 19, 69]
console.log("My number array is: ", numArray);

// Creating new variable that prints the output of the array inputs in isMultiplied(x) function
var firstResult = numArray.map(isMultiplied);
console.log("To test out if all the numbers in the array are multiplied: ", firstResult);

// Creating the second variable that prints out the output of the array inputs with a new operation
var newResult = numArray.map(function(x) {
    var results = x + 4;
    return results;
})

console.log("Numbers in the array are added by 4: ", newResult);