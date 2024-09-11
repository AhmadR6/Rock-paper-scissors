const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
};
getComputerChoice();
