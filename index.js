function getComputerChoice() {
  let hands = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
}

console.log(getComputerChoice());

function playerSelection(input) {
  let playerInput = input.toLowerCase();
  return playerInput;
}

console.log(playerSelection("scissors"));
