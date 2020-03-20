var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var characters = "~!@#$%^&*+_/?{}|";
var numbers = "0123456789";
var selectedCharacters = "";
var oneOfEachCharacters = [];
var finalPassword = [];
var newArray = [];

function generate() {

    var lengthChoice = parseInt(prompt("How many characters do you want in the password?"));

    // This is where the password length is required to be min 8 and max 128 characters.
    if (lengthChoice > 7 && lengthChoice < 129) {
        alert("Please confirm you want " + lengthChoice + " characters in your password.");
    } else if (Number.isNaN(lengthChoice)) {
        alert("That is not an option.");
        password();
    } else {
        alert("You have not entered a valid password length. You must choose between 8 and 128 characters.");
        password();
    }

    var uppercaseChoice = confirm("Do you want uppercase letters in the password?");

    if (uppercaseChoice) {
        selectedCharacters += uppercase;
        oneOfEachCharacters.push(uppercase.charAt(Math.floor(Math.random() * (uppercase.length))));
        console.log(selectedCharacters);
        console.log(oneOfEachCharacters);
    }

    var lowercaseChoice = confirm("Do you want lowercase letters in the password?");

    if (lowercaseChoice) {
        selectedCharacters += lowercase;
        oneOfEachCharacters.push(lowercase.charAt(Math.floor(Math.random() * (lowercase.length))));
        console.log(selectedCharacters);
        console.log(oneOfEachCharacters);
    }

    var numberChoice = confirm("Do you want numbers in the password?");

    if (numberChoice) {
        selectedCharacters += numbers;
        oneOfEachCharacters.push(numbers.charAt(Math.floor(Math.random() * (numbers.length))));
        console.log(selectedCharacters);
        console.log(oneOfEachCharacters);
    }

    var specialcharactersChoice = confirm("Do you want special characters in the password?");

    if (specialcharactersChoice) {
        selectedCharacters += characters;
        oneOfEachCharacters.push(characters.charAt(Math.floor(Math.random() * (characters.length))));
        console.log(selectedCharacters);
        console.log(oneOfEachCharacters);
    }

    if (lengthChoice > 7 && lengthChoice < 129) {
        for (i = +0; i < lengthChoice; i++) {
            finalPassword.push(selectedCharacters[Math.floor(Math.random() * (selectedCharacters.length))])
        }
        console.log(finalPassword)

        // This displays the generated password in the text area
        if (lengthChoice > 7 && lengthChoice < 129) {
            for (i <= 1; i < lengthChoice; i++) {
                finalPassword.push(selectedCharacters[Math.floor(Math.random() * (selectedCharacters.length))])
            }
            document.getElementById("passwordBox").textContent = finalPassword;
        }
    }
}

// Copy to clipboard function
function copyPassword() {
    var copyText = document.getElementById("passwordBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert("Copied the Text: " + finalPassword);
}
