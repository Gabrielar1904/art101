// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 10, 2023

// Creating new element for new1El
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");

// Changing div with id "output" to a <p> tag
outputEl.appendChild(new1El);
outputEl.innerHTML = "Slay! This is a p tag!";

// Creating new element for new2El
var outputEl2 = document.getElementById("output2");
var new2El = document.createElement("p");

// Changing div with id "output2" to a <p> tag
outputEl2.appendChild(new2El);
outputEl2.innerHTML = "Another slay! This a different p tag!";

// Changing CSS features with HTML DOM Javascript
var newH1 = document.getElementById("header1");
newH1.style.fontFamily = "Trirong";
newH1.style.color = "#97bf75";

var newBody = document.getElementById("body");
newBody.style.backgroundColor = "#edb245";