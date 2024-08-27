//singleton
//object.create


//object literals

const mySym = Symbol("kay1")


const JsUser = {
    name: "Ahmad",
    "full name" : "Ahmad Hamesh",
    // mySym : "myKey1", //interview que want to use like symbol but treat like a string
    [mySym]: "myKay1", //this is correct mehod to use symbols output [Symbol(kay1)]: 'myKay1'
    age: 28,
    location: "Uttarpradesh",
    email: "ahmad@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //you can also access like this
// console.log(JsUser["full name"]) //for this only you can use sqaure notation you cant access likh JsUser.full name
// console.log(JsUser.mySym) //it not using like a symbol but its using like string
// console.log(typeof JsUser.mySym) //its a string 
// console.log(typeof JsUser[mySym])

JsUser.email = "ahmad@chatgpt.com" //you can overwrite the value change the value
// Object.freeze(JsUser) //after using freeze you cant change the value 
JsUser.email = "ahma@microsoft.com" //so its value is not changed
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);   
}
console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())




