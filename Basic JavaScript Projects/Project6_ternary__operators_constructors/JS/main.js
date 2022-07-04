function vote_age() {
    var Age, Can_vote;
    Age = document.getElementById("the_age").value;
    Can_vote = (Age >= 18) ? "You are of age":"You are too young";
    document.getElementById("old_enough").innerHTML = Can_vote +  " to vote.";
}