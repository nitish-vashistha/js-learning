// const Multiply = a => b => c => a * b * c;

// let result = Multiply(2)(3)(4); 
// console.log(result);





// Generic curry utility
function curry(multiply) {
  return function curried(...args) {
    console.log(args);
    
    if (args.length >= multiply.length) {
        
      return multiply(...args);
    }
    return (...next) => curried(...args, ...next);
  };
}
// Business function
function multiply(a, b, c) {
  return a * b * c;
}

// Create curried version
const curriedMultiply = curry(multiply);

// Execute and print results
console.log("curriedMultiply(2)(3)(4) =>", curriedMultiply(2)(3)(4));
// console.log("curriedMultiply(2,3)(4)  =>", curriedMultiply(2, 3)(4));
// console.log("curriedMultiply(2)(3,4)  =>", curriedMultiply(2)(3, 4));
