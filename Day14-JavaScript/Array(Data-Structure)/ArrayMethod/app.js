let Cars=['audi','bmw','xuv','maruti'];
Cars.push('toyota');
console.log(Cars);
Cars.pop();
console.log(Cars);
Cars.unshift('toyota');
console.log(Cars);
Cars.shift();
console.log(Cars);


// Practice Questions
let arr =['january','july','march','august'];
console.log(arr);
arr.shift();
arr.unshift('june');
console.log(arr);

// indexOf:returns index of something  and includes:search for a value
let color = ['red','yellow','blue'];

console.log(color.indexOf('red')); //0
console.log(color.includes('red')); //true
console.log(color.indexOf('blue')); //2
console.log(color.includes('green')); //false

// concat:merge 2 Arrays
let first =['a','b','c','d'];
let second =['e','f','g','h'];
console.log(first.concat(second));
console.log(second.concat(first));

// reverse:reverse an array
let array1=['a','b',1,2];
console.log(array1.reverse());