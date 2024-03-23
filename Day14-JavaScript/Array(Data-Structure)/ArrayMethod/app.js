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

// indexOf method:returns index of something  and includes:search for a value
let color = ['red','yellow','blue'];

console.log(color.indexOf('red')); //0
console.log(color.includes('red')); //true
console.log(color.indexOf('blue')); //2
console.log(color.includes('green')); //false

// concat method:merge 2 Arrays
let first =['a','b','c','d'];
let second =['e','f','g','h'];
console.log(first.concat(second));
console.log(second.concat(first));

// reverse method:reverse an array
let array1=['a','b',1,2];
console.log(array1.reverse());

//slice method:copies portion of an array
let color1 =['red','green','yellow','black','cyan'];
console.log(color1.slice(-1));
console.log(color1.slice());
console.log(color1.slice(2,3));

//splice method:change original in array
let demo=['a','b','c','d','e','f','g'];
console.log(demo.splice(2,2));
console.log(demo.splice(1,3));
console.log(demo.splice(2,0,'x'));

//sort method: sorts an array
let alphabet =['c','e','g','d','b','i','a','A'];
console.log(alphabet.sort());
let number=[5,2,0,5,8,2,6,9,7,3,0,4,5,8];
console.log(number.sort());