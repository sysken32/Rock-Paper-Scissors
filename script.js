
let playerScore = 0,
    computerScore = 0,
    winningScore = 5; //defined opening scores + the score it takes to win the game.


let rockBtn = document.getElementById('rock');
rockBtn.addEventListener("click", (event) => playerChoice(event));
let paperBtn = document.getElementById('paper');
paperBtn.addEventListener("click", (event) => playerChoice(event));
let scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener("click", (event) => playerChoice(event)); //adding click events for all player buttons.

let computerChoice = function() { //function for the computer to choose an item from the array
    const choice = ['rock', 'paper', 'scissors'];
    let computerClick = choice[Math.floor(Math.random() * choice.length)];
    console.log("computer choice: " + computerClick); //logging into console to test working status
    return computerClick;
}

const compareRound = function(playerClick, computerClick) {
    if (playerClick === computerClick){
        console.log("You tied! Play another round.");
    }
    else if(
        (playerClick === "rock" && computerClick === "scissors") ||
        (playerClick === "paper" && computerClick === "rock") ||
        (playerClick === "scissors" & computerClick === "paper")
    ){
        console.log("You won! Play another round.");
        playerScore++;
    }else{
        console.log("The computer won. Play another round.");
        computerScore++;
    }
    console.log("Player Score: ", playerScore);
    console.log("Computer Score: ", computerScore);
}

function playerChoice(event) {
    if (!event || !event.target) {
        console.error("Invalid event object or missing target property.");
        return;
    }

    let playerClick = event.target.id;
    let computerClick = computerChoice();

    console.log("User Choice: " + playerClick);
    compareRound(playerClick, computerClick);
    
    if (playerScore === winningScore) {
        console.log("You beat the computer!");
        resetGame();
    } else if (computerScore === winningScore) {
        console.log("The computer won!");
        resetGame();
    }
}

let resetGame = function(){
    playerScore = 0;
    computerScore = 0;
    console.log("Scores are reset to zero. Play again!");
}
