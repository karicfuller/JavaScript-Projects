//Global Variable

var x = 10; //named variable "x" with value 10
function Numbers_added_1() { //named function
    document.write(35 + x + "<br>"); //result 45
}
function Numbers_added_2() { //named function
    document.write(x + 100 + "<br>"); //result 110
}
Numbers_added_1();
Numbers_added_2();


//Local Variable

function Numbers_to_add1() { 
    var x = 25;
    document.write(x + 30 + "<br>"); //result 55
}
function Numbers_to_add2() {
    var y = 30;
    document.write(y + 20 + "<br>"); //result 50
}
Numbers_to_add1();
Numbers_to_add2();


//Local Variable w/error

function Added_Numbers1() {
    var x = 30;
    document.write(x + 10 + "<br>") //result 40
}
function Added_Numbers2() {
    console.log(x + 10); //nothing, error no variable value
}
Added_Numbers1();
Added_Numbers2();


//Conditional Statements

function the_Date() {
    if (new Date().getHours() < 20) {
        document.getElementById("condition").innerHTML = "Good day!";
    }
}


//if/else Statements

function The_Age() { //named function "The_Age"
    Age = document.getElementById("Years_Old").value;
    if (Age >= 21) { //if 21 or older
        Drink = "What do you want to drink?";
    }
    else { //else too young
        Drink = "You are not old enough to drink. Nice try!"
    }
    document.getElementById("Your_Age").innerHTML = Drink;
}


//else/if Statements

function Time_function () { 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
