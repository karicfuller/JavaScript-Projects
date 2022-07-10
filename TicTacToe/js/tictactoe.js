//this variable keeps track of whose turn it is
let activePlayer = 'X';
//this array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//this function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already
    //to see if it conatins the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in the HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be 'X' or 'O' so if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O' the o.png is placed in the HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer anre concatenated together and added to the array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }

        //this function plays placement sound
        audio('./media/place.mp3');
        //this condition checks to see if it is the computer's turn
        if (activePlayer === 'O') {
            disableClick();
            //this function waits 1 second before the computer places an image and enables click.
            setTimeout(function() { computerTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() function to work
        return true;
    }
    //this function results in random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected
            if (placeOOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}