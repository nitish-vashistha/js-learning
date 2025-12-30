// A higher-order function is a function that does at least one of the following:
// Accepts another function as an argument, or
// Returns a function as its result

// Function as Input
function execute(operation, inputa, b) {
  return operation(inputa, b);
}

function add(x, y) {
  return x + y;
}

console.log(execute(add, 5, 3));


// Function as Output
function multiplier(factor) {
  return function (value) {
    return value * factor;
  };
}

const double = multiplier(2);
console.log(double(5));