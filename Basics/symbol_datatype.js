// symbol datatype.js

// Creating a symbol
// const sym1 = Symbol('description');
// const sym2 = Symbol('description'); 
// console.log(sym1 === sym2); // false

// const mySecret = Symbol("hidden");
const mySecret = Symbol.for("hidden");
const user = {
    name: "Alice",
    [mySecret]: "Top secret data" // Must use square brackets
};

// Standard loops won't see it
// console.log(Object.keys(user)); // ["name"] second directly  visible nahi hoga
// for (let key in user) 
//     console.log(key); // "name"

// // Direct access is still possible if you have the symbol
console.log(user[Symbol.keyFor(mySecret)]); // "Top secret data"
// const globalSym1 = Symbol.for("app.id");
// const globalSym2 = Symbol.for("app.id");

// console.log(globalSym1 === globalSym2); // true 
// console.log(Symbol.keyFor(globalSym1)); // "app.id"
