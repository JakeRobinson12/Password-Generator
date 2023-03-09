
var generateBtn = document.querySelector("#generate");


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ".", ",", "/", "<", "?", "[", "]", , "_", "`",];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characterSet;
var passwordLength;
var menuUppercase;
var menuLower;
var menuNumber;
var menuSpecialCharacter;

function writePassword(data) {
   // var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = data;
}

function generatePassword() {
    passwordLength = prompt("Hello, please choose your password length between 8 and 128");
    if (!passwordLength) {
        alert(" You have not selected a value");
    } else if (passwordLength < 8 || passwordLength > 128) {
        characterSet = alert("You have chosen a number outside the numbers specified, please try again");
    } else {
        menuLower = confirm("Do you want to include lower case letters in your password?");
        menuUppercase = confirm("Do you want to inclde upper case letters in your password?");
        menuNumber = confirm("Do you want to include numbers in your password??");
        menuSpecialCharacter = confirm("Do you want to include special characters in your password?");
    };

    if (!menuLower && !menuUppercase && !menuNumber && !menuSpecialCharacter) {
        characterSet = alert("You haven't selected anything");
    }
    else if (menuLower && menuUppercase && menuNumber && menuSpecialCharacter) {
        characterSet = lowercase.concat(uppercase, number, specChar)
    }
    else if (menuLower && menuUppercase && !menuNumber && menuSpecialCharacter) {
        characterSet = lowercase.concat(specChar, uppercase);
    }
    else if (menuLower && menuUppercase && menuNumber && !menuSpecialCharacter) {
        characterSet = lowercase.concat(number, uppercase);
    }
    else if (menuLower && menuUppercase && menuNumber && menuSpecialCharacter) {
        characterSet = lowercase.concat(number, specChar);
    }
    else if (menuLower && menuUppercase && menuNumber && menuSpecialCharacter) {
        characterSet = uppercase.concat(number, specChar);
    }
    else if (menuLower && !menuUppercase && !menuNumber && menuSpecialCharacter) {
        characterSet = lowercase.concat(specChar);
    }
    else if (menuLower && menuUppercase && !menuNumber && !menuSpecialCharacter) {
        characterSet = lowercase.concat(uppercase);
    }
    else if (menuLower && !menuUppercase && menuNumber && !menuSpecialCharacter) {
        characterSet = lowercase.concat(number);
    }
    else if (!menuLower && menuUppercase && menuNumber && !menuSpecialCharacter) {
        characterSet = uppercase.concat(number);
    }
    else if (!menuLower && menuUppercase && !menuNumber && menuSpecialCharacter) {
        characterSet = uppercase.concat(specChar);
    }
    else if (!menuLower && !menuUppercase && menuNumber && menuSpecialCharacter) {
        characterSet = number.concat(specChar);
    }
    else if (menuLower) {
        characterSet = lowercase;
    }
    else if (menuUppercase) {
        characterSet = uppercase;
    }
    else if (menuSpecialCharacter) {
        characterSet = specChar;
    }
    else if (menuNumber) {
        characterSet = number;
    }

    var password = []
    for (var i = 0; i < passwordLength; i++) {
        var randomcharacterSet = characterSet[Math.floor(Math.random() * characterSet.length)];
        password.push(randomcharacterSet);
    }
    console.log(password)
    var password = password.join("");
    writePassword(password)
}


generateBtn.addEventListener('click', generatePassword)