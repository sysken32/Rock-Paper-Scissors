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
    document.getElementById('computerSelectionText').innerHTML = "Computer Selection: " + computerClick;
    return computerClick;
}

const compareRound = function(playerClick, computerClick) {
    //removing highlights from computer btns
    let cBtnRock = document.getElementById('cBtnRock');
    let cBtnPaper = document.getElementById('cBtnPaper');
    let cBtnScissors = document.getElementById('cBtnScissors');

    cBtnRock.classList.remove('highlightComputer');
    cBtnPaper.classList.remove('highlightComputer');
    cBtnScissors.classList.remove('highlightComputer');

    if(computerClick === 'rock'){
        cBtnRock.classList.add('highlightComputer');
    }
    else if(computerClick === 'paper'){
        cBtnPaper.classList.add('highlightComputer');
    }
    else if (computerClick === 'scissors'){
        cBtnScissors.classList.add('highlightComputer');
    }

    if (playerClick === computerClick) {
        console.log("You tied! Play another round.");
    } else if (
        (playerClick === "rock" && computerClick === "scissors") ||
        (playerClick === "paper" && computerClick === "rock") ||
        (playerClick === "scissors" & computerClick === "paper")
    ) {
        console.log("You won! Play another round.");
        playerScore++;
    } else {
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
    console.log(event.target.parentNode); //Used to test the return value upon button clic.

    let playerClick = event.target.parentNode.id;
    let computerClick = computerChoice();

    document.getElementById("playerSelectionText").innerHTML = "Player Selection: " + playerClick;

    console.log("User Choice: " + playerClick);
    compareRound(playerClick, computerClick);

    let playerSelectFlash = event.target.parentNode;
    playerSelectFlash.classList.add('flash-animation');

    setTimeout(function(){
        playerSelectFlash.classList.remove('flash-animation');
    },1000);

    document.getElementById('scoreBoardPlayer').innerHTML = "Player score: " + playerScore;
    document.getElementById('scoreBoardComputer').innerHTML = "Computer score: " + computerScore;


    if (playerScore === winningScore) {
        console.log("You beat the computer!");
        document.getElementById("winnerText").innerHTML = "You beat the computer! Scores have been reset. Play again!";
        resetGame();


        setTimeout(function(){
            document.getElementById("winnerText").innerHTML = "";
        }, 3000);

    } else if (computerScore === winningScore) {
        console.log("The computer won!");
        document.getElementById("winnerText").innerHTML = "The computer won. Scores have been reset. Play again!";
        resetGame();

        setTimeout(function(){
            document.getElementById("winnerText").innerHTML = "";
        }, 5500);
    }
}

let resetGame = function() {
    playerScore = 0;
    computerScore = 0;
    console.log("Scores are reset to zero. Play again!");

    setTimeout(function(){
        document.getElementById("winnerText").innerHTML = "";
    }, 3000);
    document.getElementById('scoreBoardPlayer').innerHTML = "Player Score: ";
    document.getElementById('scoreBoardComputer').innerHTML = "Computer Score: ";

}
