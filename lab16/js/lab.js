// Author: Gabriela Rioja grioja@ucsc.edu
// Date: June 4, 2023

$.ajax({
    url: "https://xkcd.com/614/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",


    // Success function prints comicObj variable in console and return title and img
    success: function (comicObj) {
        console.log(comicObj);
        $("#output").html("<p>" + comicObj.title + "</p>");
        // Give img the alt attribute by assinging it the alt of the comiObj
        $("#output").append("<img src =" + comicObj.img + " alt =\"" + comicObj.alt + "\">");
    },

    // Check to see if there is an error in API
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});

