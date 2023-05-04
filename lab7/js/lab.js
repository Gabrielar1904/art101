// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 3, 2023

//Function sortedUserName declares userName variable as user input and sorts the Letters.
function sortedUserName() {
    var userName = window.prompt("What is your name?");
    // variable nameArray converts userName to array.
    var nameArray = userName.split('');
    // Sort the array
    var nameArraySort = nameArray.sort();
    // array is joined back to a string
    var nameSorted = nameArraySort.join('');
    return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ", sortedUserName(), "</br>");