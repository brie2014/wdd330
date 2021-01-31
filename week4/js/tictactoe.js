//Function to Reset
function resetGame() {
    document.getElementById('b1').innerHTML = '';
    document.getElementById("b2").innerHTML = '';
    document.getElementById("b3").innerHTML = '';
    document.getElementById("b4").innerHTML = '';
    document.getElementById("b5").innerHTML = '';
    document.getElementById("b6").innerHTML = '';
    document.getElementById("b7").innerHTML = '';
    document.getElementById("b8").innerHTML = '';
    document.getElementById("b9").innerHTML = '';

}

//Function to handle click of each cell
player = 1;
function blockOne() {
    if (player == 1) {
        document.getElementById("b1").innerHTML = "X";
        document.getElementById("b1").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b1").innerHTML = "O";
        document.getElementById("b1").disabled = true;
        player = 1;
    }
}

function blockTwo() {
    if (player == 1) {
        document.getElementById("b2").innerHTML = "X";
        document.getElementById("b2").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b2").innerHTML = "O";
        document.getElementById("b2").disabled = true;
        player = 1;
    }
}
function blockThree() {
    if (player == 1) {
        document.getElementById("b3").innerHTML = "X";
        document.getElementById("b3").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b3").innerHTML = "O";
        document.getElementById("b3").disabled = true;
        player = 1;
    }
}
function blockFour() {
    if (player == 1) {
        document.getElementById("b4").innerHTML = "X";
        document.getElementById("b4").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b4").innerHTML = "O";
        document.getElementById("b4").disabled = true;
        player = 1;
    }
}
function blockFive() {
    if (player == 1) {
        document.getElementById("b5").innerHTML = "X";
        document.getElementById("b5").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b5").innerHTML = "O";
        document.getElementById("b5").disabled = true;
        player = 1;
    }
}
function blockSix() {
    if (player == 1) {
        document.getElementById("b6").innerHTML = "X";
        document.getElementById("b6").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b6").innerHTML = "O";
        document.getElementById("b6").disabled = true;
        player = 1;
    }
}
function blockSeven() {
    if (player == 1) {
        document.getElementById("b7").innerHTML = "X";
        document.getElementById("b7").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b7").innerHTML = "O";
        document.getElementById("b7").disabled = true;
        player = 1;
    }
}
function blockEight() {
    if (player == 1) {
        document.getElementById("b8").innerHTML = "X";
        document.getElementById("b8").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b8").innerHTML = "O";
        document.getElementById("b8").disabled = true;
        player = 1;
    }
}
function blockNine() {
    if (player == 1) {
        document.getElementById("b9").innerHTML = "X";
        document.getElementById("b9").disabled = true;
        player = 0;
    }
    else {
        document.getElementById("b9").innerHTML = "O";
        document.getElementById("b9").disabled = true;
        player = 1;
    }
}

//Checking for winning combos, ties, and player turn
function mainGame() {

    //DOM to get access to all divs
    const b1 = document.getElementById("b1").innerHTML;
    const b2 = document.getElementById("b2").innerHTML;
    const b3 = document.getElementById("b3").innerHTML;
    const b4 = document.getElementById("b4").innerHTML;
    const b5 = document.getElementById("b5").innerHTML;
    const b6 = document.getElementById("b6").innerHTML;
    const b7 = document.getElementById("b7").innerHTML;
    const b8 = document.getElementById("b8").innerHTML;
    const b9 = document.getElementById("b9").innerHTML;



    // Checking if Player X won
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');
    }
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');

    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');
    }
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');
    }
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');

    }
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');

    }
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');

    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won!";
            window.alert('Player X Won!');

    }

    // Checking if Player O wins after turn 
    else if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');
    }
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won!";
            window.alert('Player O Won!');

    }

    // Here, Checking for Tie 
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');

    }
    else {

        //Printing Player Turn 
        if (player == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player O Turn";
        }
    }
} 