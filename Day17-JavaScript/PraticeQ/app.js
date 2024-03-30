function printPoem() {
    console.log('twinkle twinkle little star');
    console.log('how i wonder what you are');
}
//printPoem();

// create a function to roll a dice&always display the value of the dice(1 to 6).
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
//rollDice();

// Create a Function that gives us the average of 3 numbers
function calculateAverage(a,b,c){
   let avg=(a+b+c)/3;
    console.log(avg);
}
//calculateAverage(2,2,2);

//Create a function that prints the multiplication table of a number
function printTable(number){
    for(let i=1;i<=10;i++){
        console.log(i*number);
    }
}
printTable(5);