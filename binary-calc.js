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

// Decimal -> Binary
function convDecimal(opr) {
	return opr.toString(2);
}

// Binary -> Decimal
function convBinary(opr) {
    return parseInt(opr.toString(), 2);
}

// for input similar to scanner in java
const prompt = require('prompt-sync')();

var done = false;
// main answer loop
while (!done) {
    var wrong = true;
    console.log("What do you want to do today?");
    console.log("0.Quit");
    console.log("1.Binary to Decimal Conversion");
    console.log("2.Decimal to Binary Conversion")
    console.log("3.Addition");
    console.log("4.Subtraction");
    console.log("5.Multiplication");
    console.log("6.Division");
    console.log("7.And");
    console.log("8.Or");

    while (wrong) {
        var operation = parseInt(prompt('Choose 1-8:'));
        if (operation >=0 || operation <8)
            wrong = false;
    }

    // convert operation only requires 1 operand
    if (operation == 1) {
        var operand1 = parseInt(prompt('Enter the binary number to convert:'));
        var result = convBinary(operand1);
        console.log(`This is the decimal value ${result}!`);
    }
    else if (operation == 2) {
        var operand1 = parseInt(prompt('Enter the decimal number to convert: '))
        var result = convDecimal(operand1);
        console.log(`This is the binary value ${result}!`);
    } 
    // the rest need 2 operands
	else {
		var basechoice = parseInt(prompt('Is this a binary(1) or decimal(2) number?'));
        // Input validation
		while (basechoice != 1 && basechoice != 2) {
			console.log("Enter 1 or 2!");
            basechoice = parseInt(prompt('Is this a binary(1) or decimal(2) number?'));
        }
        var operand1 = parseInt(prompt('Enter the first number:'));
        var operand2 = parseInt(prompt('Enter the second number:'));
		if (basechoice == 1) {
			operand1 = convBinary(operand1);
            operand2 = convBinary(operand2);
        }
        console.log(`This is the binary value of operand 1: ${operand1.toString(2)}`);
        console.log(`This is the binary value of operand 2: ${operand2.toString(2)}`);
        switch(operation){
            case 3:
                console.log(`The result is ${add(operand1, operand2)} \nThe binary value is ${add(operand1,operand2).toString(2)}`);
                break;

            case 4:
                console.log(`The result is ${sub(operand1, operand2)} \nThe binary value is ${sub(operand1,operand2).toString(2)}`);
                break;

            case 5:
                console.log(`The result is ${mult(operand1, operand2)} \nThe binary value is ${mult(operand1,operand2).toString(2)}`);
                break;

            case 6:
                console.log(`The result is ${div(operand1, operand2)} \nThe binary value is ${div(operand1,operand2).toString(2)}`);
                break;

            case 7:
                console.log(`The result is ${and(operand1, operand2)} \nThe binary value is ${and(operand1,operand2).toString(2)}`);
                break;

            case 8:
                console.log(`The result is ${or(operand1, operand2)} \nThe binary value is ${or(operand1,operand2).toString(2)}`);
                break;
        }
    }

    var answer = prompt('Are you done?(y/n):');
    if (answer == 'y')
        done = true;
}