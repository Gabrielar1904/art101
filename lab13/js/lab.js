// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 24, 2023

// Creating string variable
var str;
// Adding event listener for new button element
var button = document.getElementById("button");
button.addEventListener("click", function () {
    // Loop from numbers 1 to 200
    for (var i=1; i<200; i++) {
        str = "";
        // If a number is a multiple of 3, make string value "Fizz"
        if (i % 3 == 0) {
            str += "Fizz";
        }
        // If a number is a multiple of 5, make string value "Buzz"
        if (i % 5 == 0) {
            str += "Buzz";
        }
        // If a number is a multiple of 7, make string value "Boom"
        if (i % 7 == 0) {
            str += "Boom";
        }
        // If a number is a multiple of neither and string value is empty, make string value a number
        if (str == "") {
            str = i;
        }
        // Creates a list of the string value outputs from loop in output div
        $("#output").append("<li>" + str);
    }
})

