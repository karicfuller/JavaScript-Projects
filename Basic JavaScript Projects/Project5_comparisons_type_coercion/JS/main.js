function a_coercion(){
document.write("11" + 5); //coercion assignment, result should be 115
}

function nan() { //NaN challenge, result should be NaN
    document.getElementById("NaN").innerHTML = 0/0;
}

function is_true() { //result should be true - NaN
    document.getElementById("True").innerHTML = isNaN('This is a string');
}

function is_false() { //result should be false - is a number
    document.getElementById("False").innerHTML = isNaN('0008');
}

function infinite() { //positive infinite
    document.getElementById("Infinity").innerHTML = (6E465);
}

function negative() { //negative infinite
    document.getElementById("Neg_Infinity").innerHTML = (-6E465);
}

function bool_true() { //boolean answer is true
    document.getElementById("B_True").innerHTML = [100>5];
}

function bool_false() { //boolean answer is false
    document.getElementById("B_False").innerHTML = [100<5];
}

console.log(4+5); //9 should show in console

console.log(10>30); //false should show in console

function e_true() { //should return true
    document.getElementById("Equal_True").innerHTML = [200==200];
}

function e_false() { //should return false
    document.getElementById("Equal_False").innerHTML = [300==400];
}

// ===

x === 50;
y === 50;
document.write(x===y); //result should be true

document.write("<br>"); //line break

x = 100;
y = "10";
document.write(x===y); //result should be false, data type don't match, value doesn't match

document.write("<br>"); //line break

x = "ten"; //result should be false, data types don't match
y = 10;
document.write(x===y);

document.write("<br>"); //line break

x = "5"; //result should be false, values don't match
x = "10";
document.write(x===y); //result should be false

document.write("<br>");

// &&

document.write(4>2 && 8>5); //result should be true, both are true

document.write("<br>");

document.write(9<4 && 8<3); //result should be false, both are not true

document.write("<br>");

// ||

document.write(9>4 || 8>9); //result should be true, one is true

document.write("<br>");

document.write(2>4 || 5>9); //result would be false, neither are true