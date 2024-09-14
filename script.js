const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const results = document.getElementById("results");
const scores = document.getElementById("scores");

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
    results.innerText = "Its a tie";
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    results.innerText = "You win! Rock beats scissor";
    humanScore += 1;
    return;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    results.innerText = "You win! scissors beats paper";
    humanScore += 1;
    return;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    results.innerText = "You win! paper beats rock";
    humanScore += 1;
    return;
  } else {
    results.innerText = `you lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
  }
  updateScore();
  declareWinner();
};
const updateScore = () => {
  scores.innerText = `Your score: ${humanScore}, Computer score: ${computerScore} `;
};

rockBtn.addEventListener("click", () => {
  const humanChoice = "rock";
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
paperBtn.addEventListener("click", () => {
  const humanChoice = "paper";
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
scissorsBtn.addEventListener("click", () => {
  const humanChoice = "scissors";
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

const declareWinner = () => {
  if (humanScore >= 5) {
    results.innerText = `You Win! Your score: ${humanScore}, Computer score: ${computerScore} `;
  }
  if (computerScore >= 5) {
    results.innerText = `You Lose! Your score: ${humanScore}, Computer score: ${computerScore} `;
  }
};
