//for primitive
console.log(`primitive reference`)
let a = 5;
b = a;
console.log(`a=${a} b=${b}`);
a = 8;
console.log(`a=${a} b=${b}\n`);

// for object
console.log(`object reference`)
let x = { num: 5 };
y = x;
console.log(`a=${x.num} b=${y.num}`);
x.num = 8; //update
console.log(`a=${x.num} b=${y.num}`);