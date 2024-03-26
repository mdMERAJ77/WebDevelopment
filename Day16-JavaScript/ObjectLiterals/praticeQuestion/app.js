const max = prompt('Enter the you want maximum number for guessing game');
const random_number = Math.floor(Math.random() * max) + 1;

const guess = prompt('enter your number');
while (true) {
    if (guess == 'quit') {
        console.log('you quit the game');
        break;
    }
    else if (guess == random_number) {
        console.log('congrats');
        break;
    }
    else {
        guess = prompt('please try again');
    }
}