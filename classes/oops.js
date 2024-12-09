const user = {
    username: "nitish",
    loginCount: 0,
    signedIn: true,

    getUserDetails: function() {
        // console.log("got user detail form database")
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User( username, loginCount, isLoggedIn ) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // it returns deafult implicitly not required to write return
    // return this;
}



// this is consstructor
// if we create new object then it will call constructor
// if we don't create new object then it will return global object
const user1 = new User('nitish', 1, true); 
const user2 = new User('aditya', 2, false); 
// console.log( user1.constructor);



// arrow function don't have their own this
const test = () => {
    console.log("hello world");
    console.log(this);
    
}

function test2() {
    console.log("hello world");
    console.log(this);
}

test2();