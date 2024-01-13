let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options=["Rock","Paper","Scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) =>{
    console.log("User Choice = ",userChoice);
    //Generate Computer Choice
    const compChoice=genCompChoice();
    console.log("Comp Choice = ",compChoice);

    if(userChoice===compChoice){
        msg.innerText="Game was drawn.Try again!!";
        msg.style.backgroundColor="#081b31";
    } else {
        let userWin=true;
        if(userChoice === "Rock"){
            userWin=compChoice ==="Paper" ? false : true;
        }else if(userChoice === "Paper"){
            userWin=compChoice ==="Scissor" ? false : true;
        } else {
            userWin=compChoice==="Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});