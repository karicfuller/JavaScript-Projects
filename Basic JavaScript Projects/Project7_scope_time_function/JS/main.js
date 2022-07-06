//Global Variable

var x = 10; //named variable "x" with value 10
function Numbers_added_1() { //named function
    document.write(35 + x + "<br>"); //result should be 45
}
function Numbers_added_2() { //named function
    document.write(x+100); //result should bee 110
}
Numbers_added_1();
Numbers_added_2();

//Local Variable

function Numbers_to_add1() { 
    var x = 25;
    document.write(30 + x + "<br>");
}
function Numbers_to_add2() {
    var y = 30;
    document.write(y + 20);
}
Numbers_to_add1();
Numbers_to_add2();

//////////////////////////////////////////

function the_Date() {
    if (new Date().getHours() < 20) {
        document.getElementById("condition").innerHTML = "Good day!";
    }
}


//if/else Statements

function The_Age() {
    Age = document.getElementById("Years_Old").value;
    if (Age >= 21) {
        Drink = "What do you want to drink?";
    }
    else {
        Drink = "You are not old enough to drink. Nice try!"
    }
    document.getElementById("Your_Age").innerHTML = Drink;
}