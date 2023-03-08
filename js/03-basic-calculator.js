// IMPORT THE MODULE
import calc from './modules/calculator.js'
// COLLECT FIRST NUMBER FROM USER
let num1

// COLLECT SECOND NUMBER FROM USER
let num2
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let  op    

// CHECK TO SEE WHAT OPERATION THEY'RE USING


//alert (`you chose ${op} operation`)
// CALL THE APPROPRIATE FUNCTION
do{
    num1 = Number(prompt("Enter first number"))
    num2 = Number(prompt("Enter second number"))
    op = prompt("Enter operation: add/subtract/multiply/divide").toLowerCase()
    switch (op) {
        case 'add':
            alert(`${num1} + ${num2} : ${calc.add(num1, num2)}`);
            break;
        case 'subtract':
            alert(`${num1} - ${num2} : ${calc.subtract(num1, num2)}`);
            break;
        case 'multiply':
            alert(`${num1} * ${num2} : ${calc.multiply(num1, num2)}`);
            break;
        case 'divide':
            alert(`${num1} / ${num2} : ${calc.divide(num1, num2)}`);
            break;
        default:
            alert('Enter a correct operation. Try again.');
    }
}while(op !== 'add' && op !== 'subtract' && op !== 'multiply' && op !== 'divide' )
