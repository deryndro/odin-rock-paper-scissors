function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

const playerChoice = prompt("Rock, paper, scissors?").toLowerCase();

// Check if player input is correct

// Compare computers choice vs players choice
