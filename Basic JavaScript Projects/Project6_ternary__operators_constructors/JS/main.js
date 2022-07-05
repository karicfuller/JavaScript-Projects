function vote_age() { //named function "vote_age"
    var Age, Can_vote;
    Age = document.getElementById("the_age").value;
    Can_vote = (Age >= 18) ? "You are of age":"You are too young"; //can vote if age 18 or older
    document.getElementById("old_enough").innerHTML = Can_vote +  " to vote.";
}

///////////////////

function Friend(Hair, Eyes, Age, Race) { //named function "Friend"
    this.Friend_Hair = Hair; //hair color
    this.Friend_Eyes = Eyes; //eye color
    this.Friend_Age = Age;
    this.Friend_Race = Race;
}

var Oscar = new Friend("black", "brown", 46, "Native American"); //black hair, brown eyes, age 46, Native American
var Matt = new Friend("brown", "blue", 38, "White");
var Jay = new Friend("brown", "green", 57, "Hispanic");
function myFunction() { //named function "myFunction"
    document.getElementById("New_and_This").innerHTML = 
    "Oscar's hair color is " + Oscar.Friend_Hair + ", his eyes are " + Oscar.Friend_Eyes + 
    ", he is " + Oscar.Friend_Age + " years old, and he is " + Oscar.Friend_Race;
}

////////////////////

function age_Function() {
    document.getElementById("Age").innerHTML = theAge();
    function theAge() {
        var yourAge = 10;
        function addTwo() {yourAge +=2;}
        addTwo();
        return yourAge;
    }
}