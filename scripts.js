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

// Compare computers choice vs players choice
function winner(getComputerChoice, getPlayerChoice) {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  if (computerChoice === playerChoice) {
    alert("TIE");
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      alert("YOU WIN");
    } else {
      alert("YOU LOST");
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      alert("YOU WIN");
    } else {
      alert("YOU LOST");
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      alert("YOU WIN");
    } else {
      alert("YOU LOST");
    }
  }
}

winner(getComputerChoice, getPlayerChoice);
