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

// Updates scores
const updateScore = winner => {
    switch (winner) {
        case 'human':
            return humanScore++;
        case 'computer':
            return computerScore++;
    }
};

// Moves on to next round
const advanceRound = () => currentRoundNumber++;
