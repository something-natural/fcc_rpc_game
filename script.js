/*
1. every time you push one of "rock paper scissor" buttons, 
   a get a random result for computer
   b with results, pick winner
   c print result : div class result-container, p id results-msg
   d update and print score (player, computer) : div class core-container, span  id="player-score, span id computer-score

2. if someones score reaches 3
   a display final winner
   b display "play again" button
   
3. if you click "play again" button
   a. reset 1c 1d 2a
   b. hide 2b
*/

function getComputerResult(){
    const options = ["Rock", "Paper", "Scissors"];
    const result = options[Math.floor(Math.random() * options.length)];
    return result;
}

function whosWinner(user){
  const pc = getComputerResult();
  return ((user === "Rock" && pc === "Scissors") || (user === "Scissors" && pc == "Paper") || (user === "Paper" && pc === "Rock"));
} 

function getResult(user){
   const result = whosWinner(user);
   console.log(result);
}


const rockBtn = document.getElementById('rock-btn');
const papBtn = document.getElementById('paper-btn');
const sciBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener("click", function(){getResult("Rock")});
papBtn.addEventListener("click", function(){getResult("Paper")});
sciBtn.addEventListener("click", function(){getResult("Scissors")});


