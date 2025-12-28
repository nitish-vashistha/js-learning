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



    // Arrow functions & lexical this


    // call, apply, bind
