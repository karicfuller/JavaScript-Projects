//switch method

function food_Function() {
    var pick_food;
    var food = document.getElementById("food_Choice").value;
    var food_Output = " is an awesome choice!";
    switch (food) {
        case "Pasta":
            pick_food = "Pasta" + food_Output;
        break;
        case "Pizza":
            pick_food = "Pizza" + food_Output;
        break;
        case "Steak":
            pick_food = "Steak" + food_Output;
        break;
        case "Sea Food":
            pick_food = "Sea Food" + food_Output;
        break;
        default:
            pick_food = "Please enter your food choice exactly as it's written in the list."; 
    }
    document.getElementById("Output").innerHTML = pick_food;
}

//getElementByClassName()

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//<canvas> Element

var c = document.getElementById("my_Canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200, 100);
ctx.stroke();

//canvas createLinearGradient() method

var c = document.getElementById("theCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);