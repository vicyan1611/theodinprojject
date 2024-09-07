console.log("Welcome to rock-paper-scissors");

let computerScore = 0;
let playerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let num = getRandomInt(3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function handleChoices(playerChoice, computerChoice) {
  let descriptionText = document.querySelector(".description-text");
  let headingText = document.querySelector(".heading-text");

  if (playerChoice === computerChoice) {
    headingText.textContent = "It's a draw";
    descriptionText.textContent = `${playerChoice} ties with ${computerChoice}`;
    return;
  } else if (playerChoice === "rock") {
    if (computerChoice == "scissors") {
      headingText.textContent = "You won";
      descriptionText.textContent = `${playerChoice} beats ${computerChoice}`;
      playerScore++;
      return;
    }
    headingText.textContent = "You lost";
    descriptionText.textContent = `${playerChoice} is beaten by ${computerChoice}`;
    computerScore++;
    return;
  } else if (playerChoice === "scissors") {
    if (computerChoice == "paper") {
      headingText.textContent = "You won";
      descriptionText.textContent = `${playerChoice} beats ${computerChoice}`;
      playerScore++;
      return;
    }
    headingText.textContent = "You lost";
    descriptionText.textContent = `${playerChoice} is beaten by ${computerChoice}`;
    computerScore++;
    return;
  } else if (playerChoice === "paper") {
    if (computerChoice == "rock") {
      headingText.textContent = "You won";
      descriptionText.textContent = `${playerChoice} beats ${computerChoice}`;
      playerScore++;
      return;
    }
    headingText.textContent = "You lost";
    descriptionText.textContent = `${playerChoice} is beaten by ${computerChoice}`;
    computerScore++;
    return;
  }
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let computer_img = document.querySelector("#computer-img");
  let player_img = document.querySelector("#player-img");
  computer_img.src = `./assets/${computerChoice}.png`;
  player_img.src = `./assets/${playerChoice}.png`;
  handleChoices(playerChoice, computerChoice);

  let e_playerScore = document.querySelector("#player-score");
  let e_computerScore = document.querySelector("#computer-score");
  e_playerScore.textContent = `Player: ${playerScore}`;
  e_computerScore.textContent = `Computer: ${computerScore}`;
}

const select_panel = document.querySelector(".select-panel");
select_panel.addEventListener("mouseup", (e) => {
  if (e.target.className === "select-panel") return;
  console.log(e.target);
  e.target.style.backgroundColor = "#4a4f57";
  console.log(e.target.id);
  playRound(e.target.id);
});
select_panel.addEventListener("mousedown", (e) => {
  if (e.target.className === "select-panel") return;
  e.target.style.backgroundColor = "#5b5f68";
});
