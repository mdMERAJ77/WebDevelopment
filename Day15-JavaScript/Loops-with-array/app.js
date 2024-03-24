let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    //console.log(i, fruits[i]);
}

// loops with nested array
let heroes = [['iron-man', 'spider-man', 'thor'], ['super-man', 'wonder', 'flash']];
for (let i = 0; i < heroes.length; i++) {
    //console.log(`list #${i}`);
    for (let j = 0; j < heroes[i].length; j++) {
        //console.log(heroes[i][j]);
    }
}

// students arrays
let student = [['meraj', 100], ['sakib', 95], ['hamza', 99], ['sarik', 95]];
for (let i = 0; i < student.length; i++) {
    console.log(`info of student #${i + 1}`);
    for (let j = 0; j < student[i].length; j++) {
        console.log(student[i][j]);
    }
}