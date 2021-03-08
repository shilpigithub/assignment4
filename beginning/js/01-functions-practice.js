//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

// function halfNumber(a) {
//     return a / 2;
// }
// let a = 5 ;
// console.log(`Half of ${a} is ${halfNumber(a)}`);

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// function squareNumber(a) {
//     return (a * a);

// }
// let a = 3;
// console.log(`The result of squaring the number ${a} is ${squareNumber(a)}` );


//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

// function percentOf(a, b) {
//     return (a / b) * 100 ;
// }
// let a = 2;
// let b = 4;

// console.log(`${a} is ${percentOf(a, b)}% of ${b}`);

//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

// function findModulus(a, b) {
//     return a % b ;
// }
// let a = 10;
// let b = 4;

// console.log( `${findModulus(a, b)} is the modulus of ${a} and ${b}` );


//STEP 5
// Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

let num = Number(prompt("Enter how many number you want to enter between 1 and 10"));
let s1 = " calculate(";

for( let i = 1 ; i <= num ; i++) {

   s1 += parseFloat(prompt(`Enter number ${i}` ));

   if( i < num) {
       s1 += ",";
   }

}

s1 += ");"


document.write(s1);

let total = s1;

console.log(`The sum is ${total}`);

function calculate(numbers){
    let total = 0;
    for(let i = 0; i <arguments.length ; i++) {
        total += arguments[i];
    }

    return total;
}
