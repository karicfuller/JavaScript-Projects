//while loop

function Call_Loop() {
    var digit = "";
    var x = 1;
    while (x < 5) {
        digit += "<br>" + x;
        x++
    }
    document.getElementById("Loop").innerHTML = digit;
}

//for loop

var the_Instruments = ["Bass", "Drums", "Cymbal", "Bongo Drums", "Triangle"];
var Play = "";
var x;
function for_Loop() {
    for (x = 0; x < the_Instruments.length; x++) {
        Play += the_Instruments[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Play;
}

//document.getElementByID().innerHTML

function array_Function() {
    var activity = [];
    activity [1] = "wake up";
    activity [2] = "get dressed";
    activity [3] = "eat breakfast";
    activity [4] = "study";
    activity [5] = "go to work";
    document.getElementById("Array").innerHTML = "I love to " + activity[3] + "!";
}

//let keyword

let a = 82;
{
    let a = 33;
}
document.getElementById("let_Key").innerHTML = a;


