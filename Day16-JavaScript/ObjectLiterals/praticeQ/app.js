//Generate a random number between 1 to 100 number
//console.log(Math.floor(Math.random()*100)+1);

//console.log(Math.floor(Math.random()*5)+20);

//console.log(Math.floor(Math.random()*10));

//Guessing Game
const max = prompt('Enter the number between 1 to 10');
const random_number = Math.floor(Math.random() * max) + 1;
let guess =prompt('guess the number');

while(true){
    if(guess=='quit'){
        console.log('you quit the game!!!');
        break;
    }
    else if(guess==random_number){
        console.log('You are right congrats...');
    }
    else{
        guess=prompt('please tra again...');
    }
}