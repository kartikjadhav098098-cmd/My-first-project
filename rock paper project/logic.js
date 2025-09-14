let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "game was draw. play again.";
    
};
const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green ";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "you lose.";
        msg.style.backgroundColor = "red ";
    }
};

const playGame = (userChoice) =>{
    
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            compChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", choice);
        playGame(userChoice);
    });
});

