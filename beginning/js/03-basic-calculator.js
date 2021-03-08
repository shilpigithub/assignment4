// IMPORT THE MODULE
import {add, minus, mult, div} from "./modules/calculator.js";

let a;
let b; 
let c;
let choice;

do{
    
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
    a = Number(prompt("Enter first number"));
    b = Number(prompt("Enter second number"));
    c = String(prompt("Enter the operation you want (+ - * /)"));

    if((c !== '+') && (c !== '-') && (c !== '*') && (c !== '/')) {
        alert ("Operator is not one of + - * /");        
    }else {
        // CHECK TO SEE WHAT OPERATION THEY'RE USING
        // CALL THE APPROPRIATE FUNCTION

        switch( c ) {
            case '+': add(a, b);
                      break;
            case '-': minus(a, b);
                      break;
            case '*': mult(a, b);
                      break;
            case '/' : div(a, b);
                      break;
        
        }
    }
    choice = prompt ("Do you want to rerun: y/n ");

} while (choice === 'y');

// The Basic Calculator
// In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions and modules. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:
//     1. Create a module that abstracts away the main calculation logic of your application. This module will have a private function called calculate and expose four different functions (add, subtract, multiply, and divide). The shell of this module with some basic instruction has already been outlined for you.
//     2. In the main script, prompt the user for a number and store that in a variable. Convert that to a number.
//     3. Then, prompt the user for a second number and store that in a variable. Convert that to a number.
//     4. Finally, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
//     5. Use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation by calling the appropriate function from the module.
//     6. Display the result of the calculation within an alert.
//     7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.