function outerfunc() {
    let x=5;
    let y=6;
    function innerfunc(){
        console.log(x);
    }


    innerfunc();
}

// question
let greet ='hello'; // global scope
function changeGreet(){
    let greet='salam';
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();