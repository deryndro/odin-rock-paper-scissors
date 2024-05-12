// Utils
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

// Round variable
let round = 1;

// Score variables
let playerScore = 0;
let computerScore = 0;

// Where player and computer choices are stored
let playerChoice = "";

// Utils too
function winAlert(player, computer) {
  document.querySelector(
    ".console-message-display"
  ).textContent = `You win! ${player} beats ${computer}`;
}
function loseAlert(player, computer) {
  document.querySelector(
    ".console-message-display"
  ).textContent = `You lose! ${computer} beats ${player}`;
}
function tieAlert() {
  document.querySelector(".console-message-display").textContent = `TIE`;
}
function clearChoice() {
  playerChoice = "";
}

// Clear score and round
function clearScore() {
  if (playerScore >= 5) {
    document.querySelector(".round-display").textContent = "Player Won!";
    playerScore = 0;
    computerScore = 0;
    round = 0;
  }
  if (computerScore >= 5) {
    document.querySelector(".round-display").textContent = "Computer Won!";
    playerScore = 0;
    computerScore = 0;
    round = 0;
  }
}

// Compare computers choice vs players choice
function winner(playerChoice, getComputerChoice) {
  let computerChoice = getComputerChoice();
  if (computerChoice === playerChoice) {
    playerScore + 0;
    computerScore + 0;
    tieAlert();
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      winAlert(playerChoice, computerChoice);
      playerScore++;
    } else {
      loseAlert(playerChoice, computerChoice);
      computerScore++;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      winAlert(playerChoice, computerChoice);
      playerScore++;
    } else {
      loseAlert(playerChoice, computerChoice);
      computerScore++;
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      winAlert(playerChoice, computerChoice);
      playerScore++;
    } else {
      loseAlert(playerChoice, computerChoice);
      computerScore++;
    }
  }
}

// DOM
function displayHandler() {
  document.querySelector(
    ".player-counter-display"
  ).textContent = `Player: ${playerScore}`;

  document.querySelector(
    ".comp-counter-display"
  ).textContent = `Computer: ${computerScore}`;

  document.querySelector(".round-display").textContent = `Round ${round}`;
}

function clickHandler(val) {
  document.querySelector(`#${val}`).addEventListener("click", function (e) {
    e.preventDefault();
    playerChoice = val;
    winner(playerChoice, getComputerChoice);
    round++;
    clearChoice();
    displayHandler();
    clearScore();
  });
}

clickHandler("rock");
clickHandler("paper");
clickHandler("scissors");

// Array.from({ length: 5 }, () => winner(playerChoice, playerChoice));
