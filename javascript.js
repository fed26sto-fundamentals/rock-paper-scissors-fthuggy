// Log to check if the file is working
console.log('Hello, the script is running!');

// Variables to keep track of the score
let playerScore = 0;
let computerScore = 0;
const winningScore = 5; // Set the score limit to 5

// Function to update the displayed score
function updateScore() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// Function to reset the game when someone reaches the winning score
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

// Function to check if someone has reached the winning score
function checkForWinner() {
    if (playerScore === winningScore) {
        alert('Congratulations! You won the game.');
        resetGame();  // Reset the game when the player wins
    } else if (computerScore === winningScore) {
        alert('Loser! The computer won the game ;)');
        resetGame();  // Reset the game when the computer wins
    }
}

// Function to determine the winner of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Oh no! It's a tie!";
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;  // Increment player's score
        updateScore();   // Update the displayed score
        checkForWinner(); // Check if the player has won
        return "Great job, you won!";
    } else {
        computerScore++;  // Increment computer's score
        updateScore();    // Update the displayed score
        checkForWinner(); // Check if the computer has won
        return "Oh no, The computer won!";
    }
}

// Function to randomly choose the computer's option
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Main function to handle a round of the game
function game(playerChoice) {
    const computerChoice = getComputerChoice();  // Get computer's choice
    const result = playRound(playerChoice, computerChoice);  // Play a round
    console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}`);
    setTimeout(() => alert(result), 0);  // Use setTimeout to ensure alert displays after the game logic
}

// Add event listeners for the player's buttons
document.getElementById('rock').addEventListener('click', () => game('rock'));
document.getElementById('paper').addEventListener('click', () => game('paper'));
document.getElementById('scissors').addEventListener('click', () => game('scissors'));



