function adding() { //named function "adding"
    var add = 3 + 3; //named variable "add" and gave it a value of 3+3
    document.getElementById("math").innerHTML = "3+3 = " + add; //should come out to "3+3=6"
}

function subtracting() { //named function "subtracting"
    var sub = 3 - 3; //named variable "sub" and gave it a value of 3-3
    document.getElementById("math2").innerHTML = "3-3 = " + sub; //result should be 3-3=0
}

function multiplying() { //named function "multiplying"
    var mult = 3 * 3; //named variable "mult" and gave it a value of 3*3
    document.getElementById("math3").innerHTML = "3*3 = " + mult; //result should be 3*3=9
}

function dividing() { //named function
    var divide = 3 / 3; // named variable "divide"
    document.getElementById("math4").innerHTML = "3/3 = " + divide; //should come out to "3/3 = 1"
}

function modulus() { // named function "modulus"
    var oper = 10 % 3; 
    document.getElementById("math5").innerHTML = "When you divide 10 by 3 you have a remainder of: " + oper; //result should be 1
}

function negation() { //named function "negation"
    var x = 15; //made variable x value 15
    document.getElementById("math6").innerHTML = -x; //result should be -15
}

function increment() { //named function "increment"
    var x = 10; //named variable "x" and gave it a value of 10
    x++;
    document.getElementById("math7").innerHTML = x++; //result should be 11
}

function decrement() { //named function "decrement"
    var x = 10; //named variable "x" and set value to 10
    x--; 
    document.getElementById("math8").innerHTML = x--; //should result in 9
}

function random() { //named function "random"
    document.getElementById("math9").innerHTML = Math.random(); //result should be a random number

}

function object() { //named function "object"
    document.getElementById("math10").innerHTML = Math.PI; //should result in what PI is equal to
}
