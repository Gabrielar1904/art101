// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 17, 2023

// Creating button elements through jQuery in each div section
$("#challenge").append("<button type='button' id='but1'>Click to open Challenge!</button>");
$("#problems").append("<button type='button' id='but2'>Click to open Problems!</button>");
$("#results").append("<button type='button' id='but3'>Click to open Results!</button>");

// Button click function for challenge button
$("#but1").click(function() {
    console.log("challenge work");
    $("#challenge").toggleClass("special");
});

// Button click function for problems button
$("#but2").click(function() {
    console.log("problems work");
    $("#problems").toggleClass("special");
});

// Button click function for results button
$("#but3").click(function() {
    console.log("results work");
    $("#results").toggleClass("special");
});
