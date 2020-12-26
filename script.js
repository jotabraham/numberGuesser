let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates number to be guessed
const generateTarget = () => Math.floor(Math.random() * 10);

// Compares guesses and returns boolean value
const compareGuesses = (userChoice, compChoice, num) => {
    let userDiff = Math.abs(num - userChoice);
    let compDiff = Math.abs(num - compChoice);
    if (userDiff === compDiff || compDiff > userDiff) {
        return true;
    } else if (compDiff < userDiff) {
        return false;
    }
};

console.log(generateTarget());
console.log(compareGuesses(1,1,1));
console.log(compareGuesses(3,9,4));
console.log(compareGuesses(9,3,1));

// Updates scores
const updateScore = winner => {

}
