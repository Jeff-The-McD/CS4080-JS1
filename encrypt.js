console.log("Welcome to encrpytion!");
const prompt = require('prompt-sync')();

// encrption algo 1 - AES Symmetric Encryption Algorithm
function AES(str) {
    console.log("In AES");
    console.log(str.length);
}

// encrption algo 2 - DES Symmetric Encryption Algorithm
function DES(str) {
    console.log("In DES");
    console.log(str.length);

}

// encrption algo 3 - 3DES Symmetric Encryption Algorithm
function ThreeDES(str) {
    console.log("In 3DES")
    console.log(str.length);
}

done = false;

// main loop
while (!done) {
    var plainText = prompt('Enter a string of letters:');
    console.log(plainText);
    AES(plainText);
    DES(plainText);
    ThreeDES(plainText);


    var repeat = prompt('Are you done?(y/n):');
    if (repeat == 'y')
        done = true;

}