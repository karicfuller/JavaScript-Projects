//concatenate() method

function sentence_Concat() {
    var first_part = "This is";
    var second_part = " an example";
    var third_part = " of a sentence";
    var fourth_part = " that has been concatenated.";
    var entire_sentence = first_part.concat(second_part, third_part, fourth_part);
    document.getElementById("concat").innerHTML = entire_sentence;
}

//slice() method

function method_Slice() {
    var sentence = "Let's test the slice method."
    var section = sentence.slice(15,27);
    document.getElementById("to_slice").innerHTML = section;
}

//toUpperCase() method

function upper_Case() {
    var word = "this should be all uppercase letters";
    var sentence = word.toUpperCase();
    document.getElementById("upper").innerHTML = sentence;
}

//search() method

function do_Search() {
    var word = "This is a search";
    var space = word.search("a");
    document.getElementById("search").innerHTML = space;
}

//toString() method

function a_String() {
    var x = 200;
    document.getElementById("string").innerHTML = x.toString();
}

//toPrecision() method

function precision_Number() {
    var x = 19393.0389883;
    document.getElementById("precision").innerHTML = x.toPrecision(5);
}

//toFixed() method

function decimal_Fixed() {
    var x = 5.9898;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}

//valueOf() method

function value_String() {
    var words = "Hello World!";
    var result = words.valueOf();
    document.getElementById("value").innerHTML = result;
}