console.log("Welcome to rock-paper-scissors");

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

function getHumanChoice() {
  let choice = prompt(
    "Please enter your choice, rock, paper, scissors:",
    "rock"
  );
  res = choice.toLowerCase();
  return res;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 0;
  } else if (humanChoice === "rock") {
    if (computerChoice == "scissors") return 1;
    return -1;
  } else if (humanChoice === "scissors") {
    if (computerChoice == "paper") return 1;
    return -1;
  } else if (humanChoice === "paper") {
    if (computerChoice == "rock") return 1;
    return -1;
  }
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;
  console.log("We will play 5 rounds");
  for (let round = 1; round <= 5; round = round + 1) {
    console.log(`Round ${round}`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Human - ${humanChoice} vs Computer - ${computerChoice}`);
    let id = playRound(humanChoice, computerChoice);
    if (id === 1) {
      humanScore = humanScore + 1;
    } else if (id === -1) {
      computerScore = computerScore + 1;
    }
  }
  if (humanScore > computerScore) {
    console.log("You win");
  } else if (humanScore === computerScore) {
    console.log("Draw");
  } else {
    console.log("You loose");
  }
}

playGame();
