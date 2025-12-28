// "use strict";
// this Keyword


// Global context

    // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)
    console.log(this);
    

// Function context

    // In a regular function, 'this' refers to the global object (or undefined in strict mode)
    //Non-strict mode (browser) → this === window
    // Strict mode → this === undefined

    function showThis() {
        console.log(this);
    }
    showThis();

    // 
    const service = {
        name: "AuthService",
        log() {
            console.log(this.name);
        }
    };

    service.log();

    // Method context
    // In a method, 'this' refers to the object that owns the method
    const user = {
        name: "Alice",
        greet() {
            console.log(`Hello, ${this.name}`);
        }
    };
    user.greet();

    // Arrow functions & lexical this
    // Arrow functions do not have their own 'this'; they inherit it from the enclosing context
    const obj = {
        value: 42,
        getValue: function() {
            const arrowFunc = () => {
                console.log(this.value);
            };
            arrowFunc();
        } 
    }
    obj.getValue();

    // call, apply, bind
    // You can explicitly set 'this' using call, apply, or bind

    function introduce(greeting) {
        console.log(`${greeting}, I am ${this.name}`);
    }   
