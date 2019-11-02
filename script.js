var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var characters = "~!@#$%^&*+_/?{}|";
var numbers = "0123456789";
var selectedCharacters = "";
var oneOfEachCharacters = [];
var finalPassword = [];
var newArray = [];

var lengthChoice = parseInt(prompt("How many characters do you want in the password?"));
var uppercaseChoice = confirm("Do you want uppercase letters in the password?");
var lowercaseChoice = confirm("Do you want lowercase letters in the password?");
var numberChoice = confirm("Do you want numbers in the password?");
var specialcharactersChoice = confirm("Do you want special characters in the password?");

if (uppercaseChoice) {
    selectedCharacters += uppercase;
    oneOfEachCharacters.push(uppercase.charAt(Math.floor(Math.random() * (uppercase.length))));
    console.log(selectedCharacters);
    console.log(oneOfEachCharacters);

}

if (lowercaseChoice) {
    selectedCharacters += lowercase;
    oneOfEachCharacters.push(lowercase.charAt(Math.floor(Math.random() * (lowercase.length))));
    console.log(selectedCharacters);
    console.log(oneOfEachCharacters);
}

if (numberChoice) {
    selectedCharacters += numbers;
    oneOfEachCharacters.push(numbers.charAt(Math.floor(Math.random() * (numbers.length))));
    console.log(selectedCharacters);
    console.log(oneOfEachCharacters);
}

if (specialcharactersChoice) {
    selectedCharacters += characters;
    oneOfEachCharacters.push(characters.charAt(Math.floor(Math.random() * (characters.length))));
    console.log(selectedCharacters);
    console.log(oneOfEachCharacters);
}

if (lengthChoice >= 8 && lengthChoice <= 128) {
    for (i = +0; i < lengthChoice; i++) {
        finalPassword.push(selectedCharacters[Math.floor(Math.random() * (selectedCharacters.length))])
    }
    console.log(finalPassword)

    // for (z=0; 1; z++) {
    //     finalPassword[z] = oneOfEachCharacters[z];
    // }

    // console.log(finalPassword);
} else {



// Generate password in textbox
function generate() {
    if (lengthChoice >= 8 && lengthChoice <= 128) {
        for (i <= 1; i < lengthChoice; i++) {
            finalPassword.push(selectedCharacters[Math.floor(Math.random() * (selectedCharacters.length))])
        }
        document.getElementById("passwordBox").value = answer;

}

// Copy to clipboard function

function copyPassword() {
    document.getElementById("passwordBox").select();

    document.execCommand("Copy");

    alert("Copied the text");
}}}