//DOM structure for title flexbox
const flexboxTitle = document.querySelector('#flexboxTitle');
const titleHeader = document.createElement('h1');
titleHeader.classList.add('tileText');
titleHeader.textContent = 'Rock, Paper, Scissors!';
//adding style to flexboxTitle and titleHeader containers
flexboxTitle.setAttribute('style', 'display: flex; justify-content: center; align-items: center;');
titleHeader.setAttribute('style', 'height: auto');
//pushing childs
flexboxTitle.appendChild(titleHeader);
//concludes title section

const flexboxBody = document.querySelector('#flexboxBody');
flexboxBody.setAttribute('style', 'display: flex; justify-content: center;');

//possibly leave this and add a src to each 
for(i=0; i<4; i++){
    const imagesDiv = document.createElement('img');
    imagesDiv.classList.add('card');
    flexboxBody.appendChild(imagesDiv);
}

//pushing childs

let playerScore = 0,
    computerScore = 0;

function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    let computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return computerSelection;
}

function getUserChoice() {
    let userChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    let playerSelection = userChoice.charAt(0).toUpperCase(0) + userChoice.substring(1);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        let result = "You tied! play again next round.";
        return result;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        let result = "You lost! Play again next round.";
        computerScore++;
        return result;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        let result = "You won! Play again next round.";
        playerScore++;
        return result;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        let result = "You lost! Play again next round.";
        computerScore++;
        return result;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        let result = "You won! Play again next round.";
        playerScore++;
        return result;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        let result = "You won! Play again next round.";
        playerScore++;
        return result;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        let result = "You lost! Play again next round.";
        computerScore++;
        return result;
    }

}

/* function game() {
    do {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        if(playerScore === 5)
        {
            console.log("You beat the computer!");
            break;
        }
        else if (computerScore === 5)
        {
            console.log("The computer won. Try again next time!");
            break;
        }
    } while(playerScore || computerScore <6);
}

game();
*/