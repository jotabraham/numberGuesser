let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates number to be guessed
const generateTarget = () => Math.floor(Math.random() * 10);

// No CHEATS
const alert = userChoice => {
    if (userChoice < 0 || userChoice > 9) {
        alert();
    }
};

// Func omitting Math.abs within compareGuesses
const getAbsoluteDistance = (num1, num2) => {
    let absDist = num1 - num2;
    if (absDist < 0) {
        return absDist * -1;
    } else {
        return absDist;
    }
};

// Compares guesses and returns boolean value
const compareGuesses = (userChoice, compChoice, num) => {
    let userDiff = getAbsoluteDistance(num, userChoice);
    let compDiff = getAbsoluteDistance(num, compChoice);
    if (userDiff === compDiff || compDiff > userDiff) {
        return true;
    } else if (compDiff < userDiff) {
        return false;
    }
};

// Updates scores
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

// Adds to round count
const advanceRound = () => currentRoundNumber++;
