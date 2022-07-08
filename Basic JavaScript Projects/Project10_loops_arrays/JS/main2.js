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

//string length property

function get_Length() {
    var words = "How Are You?";
    var how_many = words.length;
    document.getElementById("Length").innerHTML = how_many;
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

//const keyword

function constant_function() {
    const the_car = {make: "Honda", model: "Accord", color: "dark green"};
    the_car.color = "red";
    the_car.price = "$25,000";
    the_car.year = 2004;
    document.getElementById("Constant").innerHTML = "The car was a " + the_car.year + ", " + the_car.model + " and was the color " + the_car.color + ".";
}

//let keyword

let a = 82;
{
    let a = 33;
}
document.getElementById("let_Key").innerHTML = a;

//return statement

function myFunction() {
    return Math.PI;
}
document.getElementById("PI").innerHTML = Math.PI;

//object assignment

let him = {
    firstName: "Oscar ",
    lastName: "Prado ",
    age: 46 ,
    description : function() {
        return "My friend's name and age is " + this.firstName + this.lastName + this.age; 
    } 
};
document.getElementById("my_Friend").innerHTML = him.description();

//break statement

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number " + i + "<br>";
}
document.getElementById("the_Break").innerHTML= text;


