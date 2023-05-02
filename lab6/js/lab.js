// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 1, 2023

// Define myTransport array
myTransport = ["walk", "car", "bus"];

// Creating myMainRide object
myMainRide = {
  make: "Volkswagen",
  model: "Jetta",
  color: "White",
  year: 2012,
  // Defining function for age
  age: function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("myMainRide: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
