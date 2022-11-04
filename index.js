/// random selection for the computer
function computerPlay() {
  let hands = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
}

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const message = document.getElementsByClassName("message")[0];

const pSelection = document.getElementsByClassName("pSelection")[0];
const cSelection = document.getElementsByClassName("cSelection")[0];
const playerScoreElemnt = document.getElementsByClassName("playerScore")[0];
const computerScoreElemnt = document.getElementsByClassName("computerScore")[0];
const finalResult = document.getElementsByClassName("result")[0];
const options = document.querySelectorAll(".playBtn");

function playRound(player, computer) {
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
      finalResult.textContent = "Game Over :It's a tie :P";
    } else if (computerScore > playerScore) {
      finalResult.textContent = "Game Over :You lost the Game !";
    } else {
      finalResult.textContent = "Game Over : You are the winner 🎉 🎉 🎉 !!! ";
    }
    return true;
  }
  return false;
}

/// Playing 5 rounds

function game() {
  options.forEach((option) =>
    option.addEventListener("click", () => {
      const computerSelection = computerPlay();
      const playerSelection = option.value;

      finalResult.textContent = "";
      playRound(playerSelection, computerSelection);
      updateScore(playerSelection, computerSelection);
      rounds++;
      if (checkWinner()) {
        rounds = computerScore = playerScore = 0;
        updateScore(playerSelection, computerSelection);
      }
    })
  );
}

game();
