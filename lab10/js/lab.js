// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 15, 2023

// Creating public variable by finding HTML buttoin by its ID
var myButton = document.getElementById('my-button');

// The Function used from lab7
function sortedUserName() {
    // Grabs the input value from the input tag that has ID 'user-name'
    var userInput = document.getElementById('user-name').value;
    var arrayInput = userInput.split('');
    var sortInput = arrayInput.sort();
    var newInput = sortInput.join('');
    // Replaces the div with ID output with p elememt
    var outputEl = document.getElementById('output');
    var newEl = document.createElement('p');
    outputEl.appendChild(newEl);
    outputEl.innerHTML = newInput;
}

// When buttion is clicked, it calls for sortedUserName() function
myButton.addEventListener('click', sortedUserName);
