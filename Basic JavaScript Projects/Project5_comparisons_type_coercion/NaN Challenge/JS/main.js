function nan() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function is_true() {
    document.getElementById("True").innerHTML = isNaN('This is a string');
}

function is_false() {
    document.getElementById("False").innerHTML = isNaN('0008');
}

function infinite() {
    document.getElementById("Infinity").innerHTML = (5E245);
}

function negative() {
    document.getElementById("Neg_Infinity").innerHTML = (-5E245);
}