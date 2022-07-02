function a_dictionary() { //named function "a_dictionary"
    var My_Car = { //named variable "My_Car"
        Make:"Honda", //KVP
        Model:"CRV", //KVP
        Year:2019, //KVP
        Color:"Dark Green", //KVP
        Feature:"AWD" //KVP
    };
    document.getElementById("Dictionary").innerHTML = My_Car.Model; //calling for the Model of My-Car
}

function the_dictionary() { //named function "the_dictionary"
    var My_Car = { //named variable My_Car
        Make:"Honda", //KVP
        Model:"CRV", // KVP
        Year:2019, //KVP
        Color:"Dark Green", //KVP
        Feature:"AWD" //KVP
    };
    delete My_Car.Model; //deleting Model key
    document.getElementById("Dictionary2").innerHTML = My_Car.Model; //result should be undefined as key has been deleted
}