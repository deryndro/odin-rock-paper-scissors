let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function getPlayerChoice() {
  const input = prompt("Rock, paper, scissors?").toLowerCase();
  switch (input) {
    case "rock":
      return input;
    case "paper":
      return input;
    case "scissors":
      return input;
    default:
      alert("WRONG INPUT");
  }
}

function winAlert(player, computer) {
  console.log(`You win! ${player} beats ${computer}`);
}
function loseAlert(player, computer) {
  console.log(`You lose! ${computer} beats ${player}`);
}

// Compare computers choice vs players choice
function winner(getComputerChoice, getPlayerChoice) {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  if (computerChoice === playerChoice) {
    playerScore + 0;
    computerScore + 0;
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
  console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
}

Array.from({ length: 5 }, () => winner(getComputerChoice, getPlayerChoice));
