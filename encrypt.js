console.log("Welcome to encrpytion!");
const prompt = require('prompt-sync')();

class CaesarCipher{
    constructor(key){
        this.key = key;
        this.map = new Map();
        var i;
        for (i = 0; i < 26; i++) { 
            this.map.set(i, String.fromCharCode(97+i));
        }
    }


    encrypt(word){
        word = word.toLowerCase();
        let encrypted_word = ""; 
        for (var i = 0; i < word.length; ++i){
            if (word.charAt(i) === " "){
                encrypted_word += " ";
                continue;
            }
            encrypted_word += this.map.get((word.charCodeAt(i) + this.key - 97)% 26)
        }
        return encrypted_word;
    }

    decrypt(word){
        word = word.toLowerCase();
        let decrypted_word = "";
        for (var i = 0; i < word.length; ++i){
            if (word.charAt(i) === " "){
                decrypted_word += " ";
                continue;
            }
            decrypted_word += this.map.get((word.charCodeAt(i) - this.key - 97)% 26)
        }
        return decrypted_word;
    }
}

// encrption algo 2 - RSA 
function RSA(str) {

}


done = false;

// main loop
while (!done) {
    var plainText = prompt('Enter a string of letters:');
    console.log(plainText);
    

    var repeat = prompt('Are you done?(y/n):');
    if (repeat == 'y')
        done = true;

}