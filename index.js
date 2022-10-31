const computerSelection = function getComputerChoice() {
  let hands = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
};

// console.log(getComputerChoice());
let playerHand = "scissors";

const playerSelection = function getPlayerSelection() {
  let playerInput = playerHand.toLowerCase();
  return playerInput;
};

// console.log(playerSelection("scissors"));

function playRound() {
  let computer = computerSelection();
  let player = playerSelection();
  let result = ``;
  if (computer === player) {
    result = `its a tie, try again`;
  } else if (computer === "rock" && player === "paper") {
    result = `You win, Paper beates Rock`;
  } else if (computer === "paper" && player === "rock") {
    result = `You Lose! Paper beats Rock`;
  } else if (computer === "scissors" && player === "rock") {
    result = `You Win! Rock beats Scissors`;
  } else if (computer === "rock" && player === "scissors") {
    result = `You Lose, Rock beates Scissors`;
  } else if (computer === "paper" && player === "scissors") {
    result = `You Win, Scissors beates Paper `;
  } else if (computer === "scissors" && player === "paper") {
    result = `You Lose, Scissors beates Paper `;
  }
  // console.log("c", computer, "p", player);
  return result;
}

// console.log(playRound());

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winner = "";

  for (let i = 0; i < 5; i++) {
    playRound();
    if (playRound().includes("Win")) {
      playerScore++;
    } else if (playRound().includes("Lose")) {
      computerScore++;
    }
  }
  console.log("computerScore", computerScore, "playerScore", playerScore);

  if (playerScore > computerScore) {
    winner = "You won !";
  } else if (playerScore < computerScore) {
    winner = "You Lost !";
  } else if (playerScore === computerScore) {
    winner = "its a tie!";
  }
  return winner;
}

console.log(game());
