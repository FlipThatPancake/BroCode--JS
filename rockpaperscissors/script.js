

// ROCK PAPER SCISSORS GAME

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('user-choice');
const computerDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;


document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    outcome = "";

    if (playerChoice === computerChoice) {
        outcome = "It's a tie!";
    } else {
        switch (playerChoice) {
            case 'rock':
                outcome = (computerChoice === 'scissors') ? "You win!" : "You lose!";
                break;
            case 'paper':
                outcome = (computerChoice === 'rock') ? "You win!" : "You lose!";
                break;
            case 'scissors':
                outcome = (computerChoice === 'paper') ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `You chose: ${playerChoice}`;
    computerDisplay.textContent = `Computer chose: ${computerChoice}`;
    outcomeDisplay.textContent = outcome;

    outcomeDisplay.classList.remove('greenText', 'redText');
    switch (outcome) {
        case "You win!":
            outcomeDisplay.classList.add('greenText');
            playerScore++;
            userScoreDisplay.textContent = `${playerScore}`;
            break;
        case "It's a tie!":
            break;
        case "You lose!":
            outcomeDisplay.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            break;
    }

}