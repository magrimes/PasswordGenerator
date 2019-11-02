var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var characters = "~!@#$%^&*+_/?{}|";
var numbers = "0123456789";
var selectedCharacters = "";
var oneOfEachCharacters = [];
var finalPassword = [];
var newArray = [];


function generate() {
    var lengthChoice = prompt("How many characters do you want in the password?");
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

    if (lengthChoice >= 8 || lengthChoice <= 128) {
        for (i=0; i < lengthChoice; i++) {
            finalPassword.push(selectedCharacters[Math.floor(Math.random() * (selectedCharacters.length))])
        }
        console.log(finalPassword)
        
        for (z=0; 1; z++) {
            finalPassword[z] = oneOfEachCharacters[z];
        }

        console.log(finalPassword);
    } else {
        
    }



}





// function generate() {


//     












//     alert("The desired character number must be between 8 and 128.");

//     if (question1 < 8 || question1 > 128) {
//         var alert = alert("The desired character number must be between 8 and 128.");
//     }

//     if (question1 >= 8 || question1 <= 128) {
//         
//         if (question2 == true) {
//             selectedCharacters += uppercase;
//         }
//     }
//     else if (question1 < 8 || question1 > 128) {
//         var alert = alert("The desired character number must be between 8 and 128.");
//     }
//     if (question1 >= 8 || question1 <= 128) {
//         
//         if (question3 == true) {
//             selectedCharacters += lowercase;
//         }
//     } else if (question1 < 8 || question1 > 128) {
//         var alert = alert("The desired character number must be between 8 and 128.");
//     }
//     if (question1 >= 8 || question1 <= 128) {
//         
//         if (question4 == true) {
//             selectedCharacters += numbers;
//         }
//     } else if (question1 < 8 || question1 > 128) {
//         var alert = alert("The desired character number must be between 8 and 128.");
//     }
//     if (question1 >= 8 || question1 <= 128) {
//         
//         if (question5 == true) {
//             selectedCharacters += numbers;
//         }
//     } else if (question1 < 8 || question1 > 128) {
//         var alert = alert("The desired character number must be between 8 and 128.");
//     }










//     function generatePwd() {
//         var password = "";
//         for (i = 1; i <= pwdLength; i++) {
//             password += selectedCharacters.);
//         }
//         // Add password to the generate button
//         document.getElementById("displayPwd").value = password;
//     }
//     // Function copy password
//     function copyFunction() {
//         document.getElementById("displayPwd").select();
//         document.execCommand("copy");
//     }

//     function myFunction() {
//         var copyText = document.getElementById("passwordBox");
//         copyText.select();
//         document.execCommand("copy");
//         alert("Copied the text: " + copyText.value);
//     }
// }