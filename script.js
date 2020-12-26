let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userChoice, compChoice, num) => {
    let userDiff = Math.abs(num, userChoice);
    let compDiff = Math.abs(num, compChoice);
    if (userDiff === compDiff || compDiff > userDiff) {
        return true;
    } else if (compDiff < userDiff) {
        return false;
    }
};
