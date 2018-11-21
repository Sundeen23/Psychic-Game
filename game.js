
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessChoices = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var userGuessesText = document.getElementById("userGuesses-text");

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    
     
    if(userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessChoices = [];
    }
        else {
        guessesLeft--;
        guessChoices.push(userGuess);

        }
        if (guessesLeft === 0) {
            losses++;
            guessesLeft =10;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessChoices = [];
    }
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "losses: " + losses;
     guessesLeftText.textContent = "Guesses left: " + guessesLeft;
     userGuessesText.textContent = "Your guesses so far: " + guessChoices.join(",");

}
    
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "losses: " + losses;
     guessesLeftText.textContent = "Guesses left: " + guessesLeft;
     userGuessesText.textContent = "Your guesses so far: " + userGuess;
    
    
