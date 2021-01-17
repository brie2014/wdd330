function displayData() {
    const data = document.getElementById("data").value;
    document.getElementById("dataDiv").innerHTML = "You entered " + data + ".";
}

function sumDataUp(data2) {
    // Get the number from the input
    const dataSum = document.getElementById("numberToSum").value;

    let sumUp = 0;
    // Loop the number
    // 0, 1, 2, 3, 4...
    for (i = 0; i <= dataSum; i++) {
        //Make the sum
        sumUp += i;
    }
    document.getElementById("sumUp").innerHTML = "The sum of the numbers up to yours is " + sumUp + ".";
}
function sum() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);
    let total = 0;
    total = n1 + n2;
    document.getElementById("sum").innerHTML = number1 + " + " + number2 + " = " + total;
}
//Arrow Function for Addition
const addition = (n1, n2) => n1 + n2;

// Function Expression for Subtraction
const subtraction = function (n1, n2) {
    return n1 - n2;
}
// Function Declaration for Multiplication
function multiplication(n1, n2) {
    return n1 * n2;
}
// Function Declaration for Division
function division(n1, n2) {
    return n1 / n2;
}

// Callback Function
function calculator(operation) {
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
        parseFloat(document.getElementById("n1").value),
        parseFloat(document.getElementById("n2").value))
    result(total);
}
// Print Result
function result(value) {
    document.getElementById("answer").innerHTML = "Answer: " + value;
}