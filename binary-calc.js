function add() {

}

function sub() {

}

function mult() {

}

function sub() {

}

function and() {

}

function or() {

}

function conv(opr) {
    return opr.toString(2);
}

// for input similar to scanner in java
const prompt = require('prompt-sync')();

var done = false;
// main answer loop
while (!done) {
    var wrong = true;
    console.log("What do you want to do today?");
    console.log("0.Quit");
    console.log("1.Binary Conversion");
    console.log("2.Addition");
    console.log("3.Subtraction");
    console.log("4.Multiplication");
    console.log("5.Division");

    while (wrong) {
        var operation = parseInt(prompt('Choose 1-5:'));
        if (operation >= 1 || operation < 6 || operation == 0)
            wrong = false;
    }

    if (operation == 1) {
        var operand1 = parseInt(prompt('Enter the number to convert:'));
        var result = conv(operand1);
        console.log(`This is the binary value ${result}!`);
    } else {
        var operand1 = parseInt(prompt('Enter the first number:'));
        var operand2 = parseInt(prompt('Enter the second number:'));


    }


    var answer = prompt('Are you done?(y/n):');
    if (answer == 'y')
        done = true;
}