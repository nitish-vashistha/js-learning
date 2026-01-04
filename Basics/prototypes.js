// new keyword 
// new keyword creates an empty object {}
// it sets the value of this to point to that empty object
// it links the empty object to prototype
// it returns the object from the function automatically

function detail (name, age) {
    this.name = name;
    this.age = age;
}
detail.prototype.printDetail = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
detail.prototype.inceaseAge = function() {
    this.age++;
}
let temp = new detail('nitish', 24);

// temp.printDetail();
// temp.inceaseAge();
// temp.printDetail();





// prototype in js
// every function in js has a property called prototype
// prototype is an object
// prototype is used to add properties and methods to a function
// prototype is used to implement inheritance in js



const User = {
    name: "nitish",
    email: "nitishvashistha00@gmail.com"
}

const Teacher = {
    makeVideo: false,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// console.log(TASupport.isAvailable);

Teacher.__proto__ = User

// console.log(Teacher.email);

Object.setPrototypeOf(TeachingSupport, Teacher)

// console.log(TASupport.email);

console.log( TeachingSupport.email);


let anotherUsername = "nitish vashistha   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Nitish".trueLength()
"Cold Cofee".trueLength()