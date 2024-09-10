function playGame(userChoice) {
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber >= 0 && randomNumber < 1) {
    computerChoice = 'Bat';
  } else if (randomNumber >= 1 && randomNumber < 2) {
    computerChoice = 'Ball';
  } else {
    computerChoice = 'Stump';
  }

  let resultMsg;

  if (userChoice === 'Bat') {
    if (computerChoice === 'Ball') {
      resultMsg = 'User Won';
    } else if (computerChoice === 'Bat') {
      resultMsg = 'It\'s a tie';
    } else {
      resultMsg = 'Computer has won';
    }
  } else if (userChoice === 'Ball') {
    if (computerChoice === 'Bat') {
      resultMsg = 'Computer has won';
    } else if (computerChoice === 'Ball') {
      resultMsg = 'It\'s a tie';
    } else {
      resultMsg = 'User Won';
    }
  } else if (userChoice === 'Stump') {
    if (computerChoice === 'Bat') {
      resultMsg = 'User Won';
    } else if (computerChoice === 'Ball') {
      resultMsg = 'Computer has won';
    } else {
      resultMsg = 'It\'s a tie';
    }
  }

  alert(`You chose ${userChoice}. Computer chose ${computerChoice}, and ${resultMsg}.`);
}