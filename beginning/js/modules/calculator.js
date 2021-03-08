// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (result) => {
    alert(`The result is ${result}`);
}


// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const add = (x, y) => {
    let result = x + y;
    return calculate(result);
};

// SUBTRACT FUNCTION
const minus = (x, y) => {
    let result = x - y;
    return `${calculate(result)}`;
};
// MULTIPLY FUNCTION
const mult = (x, y) => {
    let result = x * y;
    return `${calculate(result)}`;
};

// DIVIDE FUNCTION
const div = (x, y) => {
    let result = x / y;
    return `${calculate(result)}`;
};

// EXPORT THE FOUR PUBLIC FUNCTIONS

export { add, minus, mult, div};