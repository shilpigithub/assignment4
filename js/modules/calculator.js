let result

// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (a, b, op) =>{
    switch(op){
        case 'add': 
        
            return a + b;
            break;
            
        case 'subtract':
            return a - b;
            break;
            
        case 'multiply':
            return a * b;
            break;
            
        case 'divide': 
            return a / b;
            break;
            
        default:
            return 0;

    }

}
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
const add = (num1, num2) => {
   // alert("Inside calc.add")
    result = calculate(num1, num2, 'add');
    return result;
}
// SUBTRACT FUNCTION
const subtract = (num1, num2) => {
    result = calculate(num1, num2, 'subtract');
    return result;
}
// MULTIPLY FUNCTION
const multiply = (num1, num2) => {
    result = calculate(num1, num2, 'multiplnum2');
    return result;
}
// DIVIDE FUNCTION
const divide = (num1, num2) => {
    result = calculate(num1, num2, 'divide');
    return result;
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export default {add, subtract, multiply, divide};
