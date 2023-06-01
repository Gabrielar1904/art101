// Author: Gabriela Rioja grioja@ucsc.edu
// Date: May 31, 2023

function getStuff() {
    console.log("Clicked!");
    $.ajax({
        url: "https://swapi.dev/api/starships/9/",
        type: "GET",
        data: {},
    })

    .done(function(data) {
        console.log(data);
        $("#output").html("<p>" + data.name);
    })
}

$("button").click(getStuff);
