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