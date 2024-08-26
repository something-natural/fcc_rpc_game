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


// return coputer action using Math.random. don't use Math.Round
function getComputerResult(){
    const options = ["Rock", "Paper", "Scissors"];
    const result = options[Math.floor(Math.random() * options.length)];
    return result;
}


// return who is winner by boolean (true -> player)
function whosWinner(user){
   const resultMsg = ""
   const pc = getComputerResult();
  return ((user === "Rock" && pc === "Scissors") || (user === "Scissors" && pc == "Paper") || (user === "Paper" && pc === "Rock"));
} 

function getResult(user){
   // get element to insert text later
   const playerScore = 0;
   const pcScore = 0;
   const psContainer = document.getElementById('player-score');   
   const pcContainer = document. getElementById('computer-score');
   const winnerMsg = document.getElementById
   

   // ger result
   const result = whosWinner(user);
   if (result){

   }
}


const rockBtn = document.getElementById('rock-btn');
const papBtn = document.getElementById('paper-btn');
const sciBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener("click", function(){getResult("Rock")});
papBtn.addEventListener("click", function(){getResult("Paper")});
sciBtn.addEventListener("click", function(){getResult("Scissors")});


