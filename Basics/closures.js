let name = "nitish";

function outerFunction() {
    let outerVariable = "I am from outer function";
    return function () {
       console.log(outerVariable);
    }
}


let child = outerFunction();
child(); // Output: I am from outer function
