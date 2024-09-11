const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  return computerChoice;
};

const getHumanChoice = () => {
  const humanChoice = prompt(
    "Your choice (rock, paper, scissors): "
  ).toLowerCase();

  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("Its a tie");
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissor");
    humanScore += 1;
    return;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! scissors beats paper");
    humanScore += 1;
    return;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! paper beats rock");
    humanScore += 1;
    return;
  } else {
    console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
  }
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
