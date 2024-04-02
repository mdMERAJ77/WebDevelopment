let sum = 50; //global scope
function calsum(a, b) {
    let sum = a + b; //function scope
    console.log(sum);
}
calsum(1, 2);
console.log(sum);