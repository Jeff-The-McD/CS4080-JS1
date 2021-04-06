function add(opr1, opr2) {
    return (opr1+opr2);

}

function sub(opr1, opr2) {
    return (opr1-opr2);

}

function mult(opr1, opr2) {
    return (opr1*opr2);

}

function div(opr1, opr2) {
    return (opr1/opr2);
}

function and(opr1, opr2) {
    return(opr1&&opr2);

}

function or(opr1, opr2) {
    return(opr1||opr2);

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
    console.log("6.And");
    console.log("7.Or");

    while (wrong) {
        var operation = parseInt(prompt('Choose 1-7:'));
        if (operation >=0 || operation <8)
            wrong = false;
    }

    // convert operation only requires 1 operand
    if (operation == 1) {
        var operand1 = parseInt(prompt('Enter the number to convert:'));
        var result = conv(operand1);
        console.log(`This is the binary value ${result}!`);
    } 
    // the rest need 2 operands
    else {
        var operand1 = parseInt(prompt('Enter the first number:'));
        var operand2 = parseInt(prompt('Enter the second number:'));
        console.log(`This is the binary value of operand 1: ${operand1.toString(2)}`);
        console.log(`This is the binary value of operand 2: ${operand2.toString(2)}`);
        switch(operation){
            case 2:
                console.log(`The result is ${add(operand1, operand2)} \nThe binary value is ${add(operand1,operand2).toString(2)}`);
                break;

            case 3:
                console.log(`The result is ${sub(operand1, operand2)} \nThe binary value is ${sub(operand1,operand2).toString(2)}`);
                break;

            case 4:
                console.log(`The result is ${mult(operand1, operand2)} \nThe binary value is ${mult(operand1,operand2).toString(2)}`);
                break;

            case 5:
                console.log(`The result is ${div(operand1, operand2)} \nThe binary value is ${div(operand1,operand2).toString(2)}`);
                break;

            case 6:
                console.log(`The result is ${and(operand1, operand2)} \nThe binary value is ${and(operand1,operand2).toString(2)}`);
                break;

            case 7:
                console.log(`The result is ${or(operand1, operand2)} \nThe binary value is ${or(operand1,operand2).toString(2)}`);
                break;
        }


    }


    var answer = prompt('Are you done?(y/n):');
    if (answer == 'y')
        done = true;
}