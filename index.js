
const options = ["Rock", "Paper", "Scissors"]
const choices = document.querySelectorAll (".btn");
let playerSelection;

    

const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")

Rock.addEventListener("click", () => {
    playerSelection = "Rock"
})
Paper.addEventListener("click", () => {
    playerSelection = "Paper"
})
Scissors.addEventListener("click", () => {
    playerSelection = "Scissors"
})

function getComputerChoice () {
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice
}

function playSingleRound (playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a tie, you both chose Rock")
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose, you chose Rock, Computer chose Paper")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win, you chose Rock, Computer chose Scissors")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win, you chose Paper, Computer chose Rock")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose, you chose Scissors, Computer chose Rock")
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("It's a tie, you both chose Paper")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose, you chose Paper, Computer chose Scissors")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win, you chose Scissors, Computer chose Paper")
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("It's a tie, you both chose Scissors")
    } else {
        console.log("Error")
    }
}

playSingleRound(playerSelection, getComputerChoice())
