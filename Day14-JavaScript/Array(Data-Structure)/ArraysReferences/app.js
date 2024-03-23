let arr = ['a','b','c'];
let arrCopy =arr;
console.log(arrCopy); //['a','b','c']

arrCopy.push('d');
console.log(arr); //['a','b','c','d']
console.log(arr==arrCopy); //true`