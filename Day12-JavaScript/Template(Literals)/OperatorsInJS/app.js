// Arithmetic Operator
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Unary Operator
console.log(a++);   //10
console.log(a);     //11
console.log(++a);   //12
console.log(a);      //12

//Assignment 
a=b;
console.log(a); //5
a+=a;
console.log(a); //10

// Comparison Operator
let age = 18;
console.log(age > 18);
console.log(age < 18);
console.log(age >= 18);

let x = 5;
console.log(x == x) //true
console.log(x = !x); //false

// note compare value not type
let n =5;
let str ='5';
console.log(n == str); // true

// not compare type and value
let m=5;
let str1 ='5';
console.log(n===str); //false