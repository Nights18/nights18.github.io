// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
var humanScore = 0;
var computerScore = 0;
var humanBestofThreeScore = 0;
var computerBestofThreeScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!
function checkBestofThree (){
  if (humanBestofThreeScore === 2){
  humanBestofThreeScore = 0;
  computerBestofThreeScore = 0;
  humanScore += 1;
  console.log('You won the best of three matchup!')
  console.log('Your Score: ' + humanScore + ' | Computer Score' + computerScore);
  }
  if (computerBestofThreeScore === 2){
    humanBestofThreeScore = 0;
    computerBestofThreeScore = 0;
    computerScore += 1;
    console.log('Bot won the best of three matchup!')
    console.log('Your Score: ' + humanScore + ' | Computer Score: ' + computerScore);
  }
}

function play (humanPlay){
  var computerPlay = Math.random();
  if (computerPlay < 0.34){
    computerPlay = 'rock';
  } else if (computerPlay <= .67){
    computerPlay = 'scissors';
  } else{
    computerPlay = 'paper';
  }
  console.log("You played " + humanPlay + ".");
  console.log("The bot played " + computerPlay + ".");
  //Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
if(humanPlay === computerPlay){
  console.log("You tried. :|");
} else if (humanPlay === 'paper' && computerPlay === 'rock' || humanPlay === 'rock' && computerPlay === 'scissors' || humanPlay === 'scissors' && computerPlay === 'paper'){
  humanBestofThreeScore += 1;
  console.log("You Win! :)");
} else {
  computerBestofThreeScore += 1;
  console.log("You Lose! :(");

}
console.log("You have " + humanScore + " points.");
console.log("Bot has " + computerScore + " points." )
checkBestofThree();
}
play ('rock');
play ('scissors');
play ('rock');
play ('rock');
play ('paper');
play ('paper');
play ('scissors');
play ('scissors');

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )
  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )

  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"

// END OF FUNCTION (Place the closing curly brace here!)

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
