const randomNumber = (parseInt(Math.random() *100+1));

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const userSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult")
const lowOrHi =document.querySelector(".lowOrHi")
const startOver =document.querySelector(".resultParas")


let prevGuess=[];
let numGuess= 1;

let playGame = true;
if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
   const guess= parseInt(userInput.value)
   validateGuess(guess)
   console.log(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert("please enter a valid number");
  }
  else if(guess < 1){
    alert("please enter a number more than 1");
  }
  else if(guess > 100){
    alert("please enter a number less than 100");
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    }
    else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(){
  if(guess === randomNumber){
    displayMessage(`your guessed it right`);
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is too low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(){
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML =`${10-numGuess}`

}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame(){
  //
}