/// random selection for the computer
const computerSelection = function getComputerChoice() {
  let hands = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
};

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const message = document.getElementsByClassName("message");
const pSelection = document.getElementsByClassName("pSelection");
const cSelection = document.getElementsByClassName("cSelection");
const playerScoreElemnt = document.getElementsByClassName("playerScore");
const computerScoreElemnt = document.getElementsByClassName("computerScore");
const finalResult = document.getElementsByClassName("result");

function playRound() {
  let computer = computerSelection;
  let player = playerSelection;
  let result = ``;
  if (computer === player) {
    message.textContent = "its a tie !";
  } else if (computer === "rock" && player === "paper") {
    message.textContent = `You win, Paper beates Rock`;
    playerScore++;
  } else if (computer === "paper" && player === "rock") {
    message.textContent = `You Lose! Paper beats Rock`;
    computerScore++;
  } else if (computer === "scissors" && player === "rock") {
    message.textContent = `You Win! Rock beats Scissors`;
    playerScore++;
  } else if (computer === "rock" && player === "scissors") {
    message.textContent = `You Lose, Rock beates Scissors`;
    computerScore++;
  } else if (computer === "paper" && player === "scissors") {
    message.textContent = `You Win, Scissors beates Paper `;
    playerScore++;
  } else if (computer === "scissors" && player === "paper") {
    message.textContent = `You Lose, Scissors beates Paper `;
    computerScore++;
  }
  // console.log("c", computer, "p", player);
  return result;
}

// to update score

function updateScore(playerSelection, computerSelection) {
  pSelection.textContent = playerSelection;
  cSelection.textContent = computerSelection;
  playerScoreElemnt.textContent = playerScore;
  computerScoreElemnt.textContent = computerScore;
}

// to check the winner

function checkWinner() {
  if (rounds === 5) {
    if (computerScore === playerScore) {
      finalResult.textContent = "It's a tie :P";
    } else if (computerScore > playerScore) {
      finalResult.textContent = "You lost the Game !";
    } else {
      finalResult.textContent = "You are the winner !!! !";
    }
  }
}

let playerHand = document.querySelectorAll(".playBtn");

playerHand.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
  });
});

let result = document.getElementsByClassName(".result");
result;

const playerSelection = function getPlayerSelection() {
  let playerInput = playerHand.toLowerCase();
  return playerInput;
};

// console.log(playerSelection("scissors"));

// console.log(playRound());

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let winner = "";

//   for (let i = 0; i < 5; i++) {
//     playRound();
//     if (playRound().includes("Win")) {
//       playerScore++;
//     } else if (playRound().includes("Lose")) {
//       computerScore++;
//     }
//   }
//   console.log("computerScore", computerScore, "playerScore", playerScore);

//   if (playerScore > computerScore) {
//     winner = "You won !";
//   } else if (playerScore < computerScore) {
//     winner = "You Lost !";
//   } else if (playerScore === computerScore) {
//     winner = "its a tie!";
//   }
//   return winner;
// }

// console.log(game());

// use propmpt to get user input
