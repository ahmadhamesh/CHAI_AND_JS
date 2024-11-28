// Object Literal => collect array property and method
const user = {
    username: 'hamesh',
    loginCount: 8,
    singedIn: true,

    getUserDetails: function () {
        // console.log('Got user details from database');   
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

console.log(this);

//constructor function using new
// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn =  isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

// const userOne = User('hamesh', 12, true)
// const userTwo = User('chai aur code',11,false )
// console.log(userOne);

const userOne = new User('hamesh', 12, true)
const userTwo = new User('chai aur code',11,false )
// console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo); //[Function: User]

//if you use new keyword an empty object will created its called instence
//this will create a new object
//constructor function called bcoz of new keyword inside function
// this keyword will inject
//at last you will get inside the function


// method instanceof
