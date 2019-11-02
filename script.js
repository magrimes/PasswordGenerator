function generate() {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var characters = "~!@#$%^&*+_/?{}|";
    var numbers = "0123456789";
    var allCharacters = "";

    var question1 = prompt("How many characters do you want in the password?");
    var alert = alert("The desired character number must be between 8 and 128.");

    if (question1 < 8 || question1 > 128) {
        var alert = alert("The desired character number must be between 8 and 128.");
    }

    if (question1 >= 8 || question1 <= 128) {
        var question2 = confirm("Do you want uppercase letters in the password?");
        if (question2 == true) {
            allCharacters += uppercase;
        }
    }
    else if (question1 < 8 || question1 > 128) {
        var alert = alert("The desired character number must be between 8 and 128.");
    }
    if (question1 >= 8 || question1 <= 128) {
        var question3 = confirm("Do you want lowercase letters in the password?");
        if (question3 == true) {
            allCharacters += lowercase;
        }
    } else if (question1 < 8 || question1 > 128) {
        var alert = alert("The desired character number must be between 8 and 128.");
    }
    if (question1 >= 8 || question1 <= 128) {
        var question4 = confirm("Do you want numbers in the password?");
        if (question4 == true) {
            allCharacters += numbers;
        }
    } else if (question1 < 8 || question1 > 128) {
        var alert = alert("The desired character number must be between 8 and 128.");
    }
    if (question1 >= 8 || question1 <= 128) {
        var question5 = confirm("Do you want special characters in the password?");
        if (question5 == true) {
            allCharacters += numbers;
        }
    } else if (question1 < 8 || question1 > 128) {
        var alert = alert("The desired character number must be between 8 and 128.");
    }

    function generatePwd() {
        var password = "";
        for (i = 1; i <= pwdLength; i++) {
            password += allCharacters.charAt(Math.floor(Math.random() * (allCharacters.length)));
        }
        // Add password to the generate button
        document.getElementById("displayPwd").value = password;
    }
    // Function copy password
    function copyFunction() {
        document.getElementById("displayPwd").select();
        document.execCommand("copy");
    }
    
    function myFunction() {
        var copyText = document.getElementById("passwordBox");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }
}